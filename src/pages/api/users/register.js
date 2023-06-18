import bcrypt from "bcrypt";
import User from "../../../modals/user-model"; // Assuming you have a User model defined
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      // Extract the user details from the request body
      const { username, email, password } = req.body;

      // Check if the email is already registered
      const existingUser = await User.exists({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ username, email, password: hashedPassword });

      // Save the user to the database
      const savedUser = await newUser.save();

      // Return a success response
      return res.status(200).json({ message: "Registration successful",response: savedUser });
    } catch (error) {
      console.error("Error during registration:", error);
      return res.status(500).json({ message: "Registration failed" });
    }
  }

  // Return a 404 for non-POST requests
  return res.status(404).json({ message: "Not found" });
}
