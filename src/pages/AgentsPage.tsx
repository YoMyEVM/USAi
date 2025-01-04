// src/pages/AgentsPage.tsx

import React from 'react';

const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 text-center">
        <h1 className="text-3xl font-bold">Agents Page</h1>
        <p className="mt-2 text-lg">Welcome to the Agents Page!</p>
      </header>
      
      <main className="flex justify-center items-center h-[calc(100vh-100px)]">
        <div className="max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Agent Listings</h2>
          <ul className="mt-4 space-y-4">
            <li className="bg-gray-700 p-4 rounded-md">Agent 1</li>
            <li className="bg-gray-700 p-4 rounded-md">Agent 2</li>
            <li className="bg-gray-700 p-4 rounded-md">Agent 3</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AgentsPage;
