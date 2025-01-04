import React from 'react';

const Governance = () => {
  return (
    <div className="min-h-screen bg-boxdark text-white">
      {/* Header */}
      <header className="p-6 text-center bg-boxdark border-b border-strokedark">
        <h1 className="text-4xl font-bold">Gov Page</h1>
        <p className="mt-2 text-lg text-meta-3">Welcome to the Gov Page!</p>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center py-10 px-4">
        <div className="max-w-lg w-full p-6 bg-boxdark rounded-md shadow-lg border border-strokedark">
          <h2 className="text-2xl font-semibold mb-4">Agent Listings</h2>
          <ul className="space-y-4">
            <li className="bg-gray-800 p-4 rounded-md shadow-sm hover:bg-gray-700 transition">
              <span className="font-medium">Agent 1</span>
            </li>
            <li className="bg-gray-800 p-4 rounded-md shadow-sm hover:bg-gray-700 transition">
              <span className="font-medium">Agent 2</span>
            </li>
            <li className="bg-gray-800 p-4 rounded-md shadow-sm hover:bg-gray-700 transition">
              <span className="font-medium">Agent 3</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};


export default Governance;
