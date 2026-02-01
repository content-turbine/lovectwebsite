import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// Schema for newsletter subscription
const ContactSchema = z.object({
  properties: z.array(
    z.object({
      property: z.string().max(50),
      value: z.string().max(255),
    })
  ).min(1).max(10),
});

// Validate email format
const isValidEmail = (properties: Array<{ property: string; value: string }>) => {
  const emailProp = properties.find(p => p.property === 'email');
  if (emailProp) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailProp.value);
  }
  return false;
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return response.status(405).json({ success: false, message: "Method not allowed" });
  }

  // Validate request body
  const parseResult = ContactSchema.safeParse(request.body);
  
  if (!parseResult.success) {
    return response.status(400).json({
      success: false,
      message: "Invalid request format",
    });
  }

  // Validate email
  if (!isValidEmail(parseResult.data.properties)) {
    return response.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
  }

  await axios
    .post(
      `https://api.hubapi.com/contacts/v1/contact?hapikey=${process.env.HUBSPOT_API_KEY}`,
      parseResult.data
    )
    .then((res) => {
      return response.status(200).json({ success: true });
    })
    .catch((error) => {
      // Log error server-side only
      console.error("HubSpot API error:", error?.response?.data || error.message);
      
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
