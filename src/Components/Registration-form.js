import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Gather form data and submit
    const formData = {
      username,
      email,
      password,
    };

    // Submitting data to API
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        const data = await response.json();
        console.log(data.message);
        toast.success("Registration Successful");
      } else {
        if (response.status === 400) {
          // Registration validation error
          const errorData = await response.json();
          console.log(errorData.message);
          // Display specific validation errors to the user
          toast.error(errorData.message);
        } else {
          // Registration failed due to a server-side error
          console.error("Server Error during registration");
          toast.error("Registration failed. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration Failed");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-800" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
          type="text"
          id="name"
          placeholder="Enter your name..."
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
          type="email"
          id="email"
          placeholder="Enter your email..."
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-800" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
          type="password"
          id="password"
          placeholder="Enter your password..."
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className="w-full px-4 py-2 mt-4 text-white bg-[#268b8b] rounded-md hover:bg-[#1d6c6c]"
        type="submit"
        onClick={handleSubmit}
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
