export default function Transactions({ expenses }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Recent Transactions</h2>

      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-t">
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td className="text-red-500">
                -${expense.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}