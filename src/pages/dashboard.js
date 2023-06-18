// pages/index.js

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-[#268b8b] py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-semibold">Expense Tracker</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center text-[#268b8b] mb-4">
          Welcome to Your Expense Tracker
        </h2>

        {/* Your content and components go here */}
        <div className="flex justify-evenly mt-24 mb-6">
          <Link href="/add-expense" passHref>
            <button className="bg-[#268b8b] text-white py-3 px-6 rounded-md font-medium hover:bg-[#1a6b6b] transition duration-300">
              Add Expense
            </button>
          </Link>
       

      
          <Link href="/view-expense" passHref>
            <button className="bg-[#268b8b] text-white py-3 px-6 rounded-md font-medium hover:bg-[#1a6b6b] transition duration-300">
              View Expenses
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-[#268b8b] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">
            © 2023 Expense Tracker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
