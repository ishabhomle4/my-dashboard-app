"use client"
import React, { useState } from 'react';
import Dashboard from '@/pages/components/Dashboard';

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-4`}>
      <header className="bg-white dark:bg-gray-800 shadow p-4 mb-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <button 
          className="bg-blue-500 text-white p-2 rounded"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default Page;
