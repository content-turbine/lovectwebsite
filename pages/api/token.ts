import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { z } from "zod";

// Schema for captcha verification
const CaptchaSchema = z.object({
  captcha: z.string().min(1).max(2000),
  email: z.string().email().optional(),
});

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, 350);
  });

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  // Only allow POST requests
  if (method !== "POST") {
    return res.status(404).json({ message: "Not found" });
  }

  // Validate request body
  const parseResult = CaptchaSchema.safeParse(body);
  
  if (!parseResult.success) {
    return res.status(422).json({
      message: "Invalid request. Please provide a valid captcha code.",
    });
  }

  const { captcha } = parseResult.data;

  try {
    // Ping the google recaptcha verify API to verify the captcha code you received
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${encodeURIComponent(captcha)}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json() as { success: boolean };

    if (captchaValidation.success) {
      await sleep();
      return res.status(200).send("OK");
    }

    return res.status(422).json({
      message: "Invalid captcha code. Please try again.",
    });
  } catch (error) {
    // Log error server-side only
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ message: "Unable to verify captcha. Please try again." });
  }
}
