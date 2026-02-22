import React, { useState, useEffect } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

export default function Expenses() {
  const [expenses, setExpenses] = useState(() =>
    getFromLocalStorage("expenses", [])
  );

  const [newExpense, setNewExpense] = useState({
    description: "",
    category: "",
    amount: "",
  });

  useEffect(() => {
    saveToLocalStorage("expenses", expenses);
  }, [expenses]);

  const addExpense = () => {
    if (
      newExpense.description.trim() &&
      newExpense.category.trim() &&
      newExpense.amount > 0
    ) {
      setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
      setNewExpense({ description: "", category: "", amount: "" });
    }
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Expenses</h1>
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          value={newExpense.description}
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
          placeholder="Description"
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="text"
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
          placeholder="Category"
          className="border p-2 rounded w-full md:w-1/4"
        />
        <input
          type="number"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
          placeholder="Amount"
          className="border p-2 rounded w-full md:w-1/4"
        />
        <button
          onClick={addExpense}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
        >
          Add
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {expense.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {expense.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${expense.amount}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td
                className="border border-gray-300 px-4 py-2 font-bold"
                colSpan="2"
              >
                Total
              </td>
              <td className="border border-gray-300 px-4 py-2 font-bold">
                ${totalExpenses}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}