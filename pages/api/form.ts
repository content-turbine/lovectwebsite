import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// Schema for form field
const FormFieldSchema = z.object({
  name: z.string().max(50),
  value: z.string().max(1000),
});

// Schema for form submission
const FormSubmissionSchema = z.object({
  fields: z.array(FormFieldSchema).min(1).max(20),
  legalConsentOptions: z.object({
    consent: z.object({
      consentToProcess: z.boolean(),
      text: z.string().max(500),
    }),
  }).optional(),
});

// Validate email in fields
const validateEmailField = (fields: Array<{ name: string; value: string }>) => {
  const emailField = fields.find(f => f.name === 'email');
  if (emailField) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailField.value);
  }
  return true; // If no email field, don't fail validation
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return response.status(405).json({ success: false, message: "Method not allowed" });
  }

  // Validate request body
  const parseResult = FormSubmissionSchema.safeParse(request.body);
  
  if (!parseResult.success) {
    return response.status(400).json({
      success: false,
      message: "Invalid form data",
    });
  }

  // Validate email format if present
  if (!validateEmailField(parseResult.data.fields)) {
    return response.status(400).json({
      success: false,
      message: "Please enter a valid email address",
    });
  }

  await axios
    .post(
      `https://api.hsforms.com/submissions/v3/integration/secure/submit/${process.env.PORTAL_ID}/${process.env.FORM_GUID}?hapikey=${process.env.HUBSPOT_API_KEY}`,
      parseResult.data
    )
    .then((res) => {
      return response.status(200).json({ success: true });
    })
    .catch((error) => {
      // Log error server-side only
      console.error("HubSpot Form API error:", error?.response?.data || error.message);
      
      if (error.response?.status === 400) {
        return response.status(400).json({
          success: false,
          message: "Please enter a valid email address",
        });
      } else {
        // Return generic error message to client
        return response.status(500).json({
          success: false,
          message: "Unable to process your request. Please try again later.",
        });
      }
    });
};
