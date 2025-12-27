import React, { useState } from "react";
import "./App.css";
import Card from "./components/Cards";

function App() {
  /* ===============================
     STATE VARIABLES
     =============================== */

  const [count, setCount] = useState(0);
  const [tempName, setTempName] = useState("");
  const [finalName, setFinalName] = useState("");
  const [name, setName] = useState("");

  /* ===============================
     HANDLER FUNCTIONS
     =============================== */

  function handleInput(e) {
    setTempName(e.target.value);
  }

  function handleSubmit() {
    setFinalName(tempName);
    setTempName("");
  }

  function addNumber() {
    if (count >= 10) {
      alert("Count cannot be more than 10");
      return;
    }
    setCount(count + 1);
  }

  function deleteNumber() {
    setCount(count - 1);
  }

  function resetNumber() {
    setCount(0);
  }

  function nameH(event) {
    setName(event.target.value);
  }
  const [message, setMessage] = useState("");

  const handleClick = (cardName) => {
    setMessage(`${cardName} ka Button click hua abb!`);
  };

  const handleClick2 = () => {
    setMessage("Button 2 was clicked from card!");
  };
  /* ===============================
     JSX UI
     =============================== */

  return (
    <>
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="w-full max-w-md bg-pink-110 rounded-xl shadow-lg p-6 space-y-9">
          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            React Practice
          </h1>

          {/* Counter info */}
          <p className="text-center text-gray-600">
            You clicked <span className="font-bold">{count}</span> times
          </p>

          {/* Name input */}
          <input
            type="text"
            placeholder="Enter name"
            value={tempName}
            onChange={handleInput}
            className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {finalName && (
            <p className="text-center text-black-600 font-medium">
              Your name is: {finalName}
            </p>
          )}

          {/* Counter display */}
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-700">
              Count: {count}
            </h2>
          </div>

          {/* Counter buttons */}
          <div className="flex gap-3">
            <button
              disabled={count >= 10}
              onClick={addNumber}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              Add
            </button>

            <button
              onClick={deleteNumber}
              className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>

            <button
              onClick={resetNumber}
              className="flex-1 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
            >
              Reset
            </button>
          </div>

          {/* Second input example */}
          <input
            type="text"
            placeholder="Say hello"
            onChange={nameH}
            className="w-full text-black border rounded-lg px-3 py-2"
          />

          <p className="text-center text-gray-700">
            Hello: <span className="font-semibold">{name}</span>
          </p>

          {/* ===============================
           React.createElement DEMO
           =============================== */}

          {React.createElement(
            "div",
            { className: "mt-6 p-4 bg-gray-50 rounded-lg text-center" },

            React.createElement(
              "h1",
              { className: "text-s  text-gray-800" },
              "React.createElement Demo"
            ),

            React.createElement(
              "p",
              { className: "text-sm text-gray-600 mt-2" },
              "This section is created without JSX"
            ),

            React.createElement(
              "button",
              {
                className:
                  "mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",
                onClick: () => alert("Button Clicked!"),
              },
              "Click Me"
            )
          )}
        </div>
      </div>

      {/* Cards Component */}
      <p className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-indigo-700">
        {message}
      </p>

      <div className="flex gap-6">
        {/* Card 1 */}

        <Card
          title="iPhone 15"
          description="Latest Apple phone"
          price="₹79,999"
          onButtonClick={() => handleClick("iPhone 15")}
          bgColor="bg-blue-500"
        />

        {/* Card 2 */}
        <Card
          title="iPhone 15 Pro"
          description="Latest Apple phone"
          price="₹99,999"
          onButtonClick={() => handleClick("iPhone 15 Pro")}
          // onButtonClick={handleClick2}
          bgColor="bg-pink-500"
        />

        {/* <p>{message}</p> */}

        {/* Card 3 */}
        <Card
          title="iPhone 15 Max"
          description="Latest Apple phone"
          price="₹1,22,999"
          bgColor="bg-yellow-500"
          onButtonClick={() => handleClick("iPhone 15 Max")}
        />

        {/* Card 4 */}
        <Card
          title="Samsung 24 Ultra"
          description="Latest Samsung phone"
          price="₹1,24,999"
          bgColor="bg-gray-500"
          onButtonClick={() => handleClick("Samsung 24 Ultra")}
        />

        {/* Card 5 */}
        <Card
          title="Samsung s22 Ultra"
          description="Latest Samsung phone"
          price="₹78,999"
          bgColor="bg-green-500"
          onButtonClick={() => handleClick("Samsung s22 Ultra")}
        />
        {/* Card 6 */}
        <Card
          title="Samsung A34"
          description="Latest Samsung phone"
          price="₹24,999"
          bgColor="bg-pink-500"
          onButtonClick={() => handleClick(" Samsung A34")}
        />
      </div>
    </>
  );
}

export default App;
