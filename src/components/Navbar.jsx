import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="flex-none text-xl font-bold">
            SpendWise
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Dashboard</a>
            <a href="#" className="hover:text-gray-200">Add Expense</a>
            <a href="#" className="hover:text-gray-200">Reports</a>
            <a href="#" className="hover:text-gray-200">Settings</a>
            <a href="#" className="hover:text-gray-200">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}