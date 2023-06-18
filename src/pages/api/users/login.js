import bcrypt from "bcrypt";
import User from "../../../modals/user-model"; // Assuming you have a User model defined
import dbConnect from "../../../utils/dbConnect";
import jwt from "jsonwebtoken";


export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Extract the user credentials from the request body
      const { email, password } = req.body;
        
      // Check if the email exists in the database
      await dbConnect();
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Not A Registered Email" });
      }

      // Compare the provided password with the hashed password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // TODO: Implement session management or token generation here
      const token = generateToken(user._id);
      res.setHeader("Set-Cookie", `token=${token};max-age=86400;path=/`);
      // For simplicity, we'll send a success response for now
      res.status(200).json({
        message: "Successfully Logged In",
        success: true,
        token,
      });
    } catch (error) {
        console.error("Error During Login:", error);
        res.status(401).json({ error: "Authentication failed" });
    }
  }

  // Return a 404 for non-POST requests
  return res.status(404).json({ message: "Not found" });
}

function generateToken(userId) {
  try {
    return jwt.sign({ userId }, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Failed to generate token");
  }
}