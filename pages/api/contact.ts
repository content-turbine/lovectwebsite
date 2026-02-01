import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  await axios
    .post(
      `https://api.hubapi.com/contacts/v1/contact?hapikey=${process.env.HUBSPOT_API_KEY}`,
      request.body
    )
    .then((res) => {
      console.log(res);
      return response.status(200).json({ success: true });
    })
    .catch((error) => {
      console.log(error);
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
