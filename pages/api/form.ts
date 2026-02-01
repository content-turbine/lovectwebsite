import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  await axios
    .post(
      `https://api.hsforms.com/submissions/v3/integration/secure/submit/${process.env.PORTAL_ID}/${process.env.FORM_GUID}?hapikey=${process.env.HUBSPOT_API_KEY}`,
      request.body
    )
    .then((res) => {
      return response.status(200).json({ success: true });
    })
    .catch((error) => {
      if (error.response.status === 400) {
        return response.status(500).json({
          success: false,
          message: "Please enter a valid email address",
        });
      } else {
        return response
          .status(500)
          .json({ success: false, message: error.response.data.message });
      }
    });
};
