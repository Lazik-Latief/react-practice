import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-9">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Simple Notes App
        </h1>
        {/* Content */}
        <p className="text-center text-gray-700">
          This is a simple notes application built with React.
        </p>    
      </div>
    </div>
  );
}

export default App;