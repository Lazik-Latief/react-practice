import { useState } from "react";
import CategoryButtons from "./components/CategoryButtons";
import QuoteCard from "./components/QuoteCard";
import quotesData from "./data/quotes"; // import from new file

function App() {
  const [currentQuote, setCurrentQuote] = useState(
    "Click a category to get a quote"
  );

  // Function to handle button clicks
  const handleCategoryClick = (category) => {
    const categoryQuotes = quotesData[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    setCurrentQuote(categoryQuotes[randomIndex]);
  };

  // Dynamically get categories
  const categories = Object.keys(quotesData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-slate-900 rounded-2xl shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Quote Generator</h1>

        {/* Quote Display */}
        <QuoteCard quote={currentQuote} />

        {/* Buttons */}
        <CategoryButtons
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </div>
  );
}

export default App;
