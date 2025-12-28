// ==============================
// CategoryButtons.jsx
// Renders category buttons and handles clicks
// ==============================

import React from "react";

// Props:
// categories -> array of category names
// onCategoryClick -> function from parent to handle click
const CategoryButtons = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-105 transform transition"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
