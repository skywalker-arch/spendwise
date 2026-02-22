import { useState } from "react";

export default function AddExpense({ onAddExpense }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "Food",
    amount: "",
    type: 'expense',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.description || !formData.amount) return;

    onAddExpense({
      id: Date.now(),
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: Number(formData.amount),
    });

    setFormData({
      date: "",
      description: "",
      category: "Food",
      amount: "",
    });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="md:col-span-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}