import React from "react";


const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather form data and submit
    const formData = {
      // Retrieve form field values
    };
    onSubmit(formData);
  };

  return (
    <form className="p-6 bg-white rounded-lg  w-full ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
          type="email"
          id="email"
          placeholder="Enter your email..."
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
        />
      </div>
      <button
        className="w-full px-4 py-2 mt-4 text-white bg-[#268b8b] rounded-md hover:bg-[#1d6c6c]"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
