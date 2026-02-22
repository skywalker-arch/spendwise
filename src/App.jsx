import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import Transactions from "./components/Transactions";
import CategoryChart from "./components/CategoryChart";
import Categories from "./pages/Categories";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "2025-01-01",
      description: "Fruits",
      category: "Food",
      amount: 120,
    },
    {
      id: 2,
      date: "2025-01-02",
      description: "Bus fare",
      category: "Transport",
      amount: 80,
    },
    {
      id: 3,
      date: "2025-01-03",
      description: "Internet",
      category: "Utilities",
      amount: 150,
    },
  ]);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalIncome = 5000;
  const balance = totalIncome - totalExpenses;

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 ml-64">
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-gray-100 min-h-screen">
                  <div className="max-w-6xl mx-auto px-6">
                    <SummaryCards
                      income={totalIncome}
                      expenses={totalExpenses}
                      balance={balance}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Transactions expenses={expenses} />
                      <CategoryChart expenses={expenses} />
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}