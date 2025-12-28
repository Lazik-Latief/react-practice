## Quote Generator App

## Introduction
A simple React + Vite + Tailwind app that displays quotes based on categories like Happy, Sad, Love, Work, Money. Click a button to get a random quote from that category. The app is interactive, responsive, and easy to extend with more categories or quotes.

## Things Used
React – for building UI components and handling state
Vite – fast development environment
Tailwind CSS – for styling buttons, cards, and layout
JavaScript – for logic like random quote selection

## How It Works Internally
All quotes are stored in a JavaScript object in quotes.js categorized by topic.
Buttons are generated dynamically from the category names.
When a button is clicked:
The app chooses a random quote from that category
Updates the state to display the quote
The QuoteCard component shows the current quote in a styled card.
Tailwind CSS is used for styling the buttons, card, and layout.

## Flow

User clicks category button
       ↓
CategoryButtons component sends category to App.jsx
       ↓
App.jsx selects a random quote from that category
       ↓
State updates → QuoteCard re-renders
       ↓
Quote displayed on screen
---
Screenshot:
<img width="661" height="337" alt="image" src="https://github.com/user-attachments/assets/e961bc40-d07c-46a7-8cfb-1580abc0010d" />

## How It Was Created
Initialize project with Vite + React + Tailwind
Create quotes.js for storing quotes
Build QuoteCard for showing quotes
Build CategoryButtons for buttons and click handling
Use App.jsx to manage state and connect components
Style everything with Tailwind for clean, responsive UI

## Conclusion
This project teaches:
React state and props
Component separation
Event handling and randomization logic
Tailwind CSS for modern UI
How to structure a simple but scalable React app
Anyone can add new categories or quotes by editing quotes.js — making it fun, interactive, and extendable.
