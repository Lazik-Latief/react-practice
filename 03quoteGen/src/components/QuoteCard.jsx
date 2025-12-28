// ==============================
// QuoteCard.jsx
// Displays the current quote in a styled card
// ==============================

import React from "react";

// Props:
// quote -> current quote text
const QuoteCard = ({ quote }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mb-6 shadow-inner">
      <p className="text-lg text-slate-200 italic">“{quote}”</p>
    </div>
  );
};

export default QuoteCard;
