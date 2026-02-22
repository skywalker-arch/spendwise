import React, { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default function Categories() {
  const [categories, setCategories] = useState(() =>
    getFromLocalStorage("categories", ["Food", "Transport", "Utilities"])
  );

  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    saveToLocalStorage("categories", categories);
  }, [categories]);

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const deleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Categories</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add a new category"
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category}>
              <td className="border border-gray-300 px-4 py-2 flex justify-between items-center">
                <span>{category}</span>
                <button
                  onClick={() => deleteCategory(category)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}