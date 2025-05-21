"use client"
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle URL submission here
    console.log("Submitted URL:", url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            URL
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Enter a URL to get started
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       placeholder-gray-500 dark:placeholder-gray-400
                       transition-all duration-200"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 
                     text-white font-medium rounded-lg
                     transition-all duration-200 transform hover:scale-[1.02]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-offset-gray-800"
          >
            Shorten URL
          </button>
        </form>
      </div>
    </div>
  );
}
