import React, { useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";

export default function Reports() {
  const [expenses] = useState(() =>
    getFromLocalStorage("expenses", [])
  );

  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + Number(expense.amount);
    return totals;
  }, {});

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Reports</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryTotals).map(([category, total]) => (
            <tr key={category}>
              <td className="border border-gray-300 px-4 py-2">{category}</td>
              <td className="border border-gray-300 px-4 py-2">${total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}