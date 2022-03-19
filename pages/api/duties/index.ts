import { NextApiRequest, NextApiResponse } from "next";
import { Duty } from "../../../utils/models/Duty";
import { connectToDB } from "../../../utils/connectionToDB";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Function for success and error responses
  const successRes = (data: any) => res.status(200).json({ success: true, data });
  const failRes = (error: any) => res.status(400).json({ success: false, error });
  
  const { db } = await connectToDB(); // connect to database

  // Response for GET requests
  if (req.method === "GET") {
    try {
      const duties = await Duty.find({});
      successRes(duties);
    } 
    catch (error) {
      failRes(error)
    };
  } 
  // Response for POST requests
  else if (req.method = "POST") {
    try {
      const { type, expansion, name, abbreviation } = req.body;
      const newDuty = new Duty({
        type: type,
        expansion: expansion,
        name: name,
        abbreviation: abbreviation
      });
      const saveDuty = await newDuty.save();
      successRes(newDuty);
    }
    catch (error) {
      failRes(error)
    };
  }
  // Response for unhandled requests
  else {
    failRes(new Error("No Response for This Request"));
  }
};

export default handler;