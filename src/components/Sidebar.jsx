import React from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaListAlt, FaFileInvoiceDollar, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-8 text-center">SpendWise</h2>
      <nav>
        <ul className="space-y-6">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-3 hover:text-gray-300"
            >
              <FaHome className="text-lg" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="flex items-center space-x-3 hover:text-gray-300"
            >
              <FaChartPie className="text-lg" />
              <span>Categories</span>
            </Link>
            <p className="text-sm text-gray-400 ml-8 mt-1">
              View spending by category.
            </p>
          </li>
          <li>
            <Link
              to="/expenses"
              className="flex items-center space-x-3 hover:text-gray-300"
            >
              <FaListAlt className="text-lg" />
              <span>Expenses</span>
            </Link>
            <p className="text-sm text-gray-400 ml-8 mt-1">
              Track and manage your expenses.
            </p>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex items-center space-x-3 hover:text-gray-300"
            >
              <FaFileInvoiceDollar className="text-lg" />
              <span>Reports</span>
            </Link>
            <p className="text-sm text-gray-400 ml-8 mt-1">
              Generate detailed financial reports.
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}