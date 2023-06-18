import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../Components/Modal";
import LoginForm from "../Components/Login-form";
import RegistrationForm from "../Components/Registration-form";

const LandingPage = () => {
  const url =
    "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";
  const router = useRouter();

  const handleStartTracking = () => {
    setShowLoginModal(true);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleRegistration = () => {
    setShowRegistrationModal(true);
  };

  const handleLoginSubmit = (formData) => {
    // Logic to handle login submission
    console.log("Login form submitted:", formData);
  };

  const handleRegistrationSubmit = (formData) => {
    // Logic to handle registration submission
    console.log("Registration form submitted:", formData);
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-screen"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto p-4 bg-[#447878] bg-opacity-80 h-screen flex flex-col items-center justify-center shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to Expense Tracker!
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Track your expenses with ease.
        </p>
        <button
          className="px-6 py-3 text-white bg-[#268b8b] rounded-md max-w-md hover:bg-[#1d6c6c]"
          onClick={handleStartTracking}
        >
          Let's Start Tracking
        </button>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm onSubmit={handleLoginSubmit} />
          <div className="mt-4 text-center">
            <p className="text-gray-500">New user?</p>
            <button
              className="px-4 py-2 mt-2 text-white bg-[#268b8b] rounded-md hover:bg-[#1d6c6c]"
              onClick={() => {
                setShowLoginModal(false);
                setShowRegistrationModal(true);
              }}
            >
              Register
            </button>
          </div>
        </Modal>
      )}

      {/* Registration Modal */}
      {showRegistrationModal && (
        <Modal onClose={() => setShowRegistrationModal(false)}>
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
          <div className="mt-4 text-center">
            <p className="text-gray-500">Already have an account?</p>
            <button
              className="px-4 py-2 mt-2 text-white bg-[#268b8b] rounded-md hover:bg-[#1d6c6c]"
              onClick={() => {
                setShowRegistrationModal(false);
                setShowLoginModal(true);
              }}
            >
              Login
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LandingPage;
