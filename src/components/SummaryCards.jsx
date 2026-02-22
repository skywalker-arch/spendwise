export default function SummaryCards({ income, expenses, balance}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      
      <div className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-sm text-gray-600">Total Income</h2>
        <p className="text-2xl font-bold">${income}</p>
      </div>

      <div className="bg-red-100 p-6 rounded-lg">
        <h2 className="text-sm text-gray-600">Total Expenses</h2>
        <p className="text-2xl font-bold">${expenses}</p>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-sm text-gray-600">Remaining Balance</h2>
        <p className="text-2xl font-bold">${balance}</p>
      </div>

    </div>
  );
}