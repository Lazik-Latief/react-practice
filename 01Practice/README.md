## React Practice Project

This is a small React practice project to experiment with state, events, inputs, and JSX/React.createElement.

## Now practiced PROPS 
How data is transfered from parent to child ..
Made a components/Cards.jsx (structure of card) and gave values through App.jsx file
----
## In this update
I implemented a reusable Card component that receives data and behavior from the parent component (App.jsx) using props.
Each card displays a title and contains a styled button created using Tailwind CSS. The button does not handle logic itself; instead, it triggers a function passed from the parent component. This helps maintain a clean separation between UI (child) and logic (parent).
To make each card unique, I passed different values (like card names) along with the click handler. When a button is clicked, the parent component identifies which card was clicked and updates the UI accordingly.
## Concepts Used
Reusable components
Props for data and function passing
Child → Parent communication using functions as props
useState for dynamic UI updates
Tailwind CSS for button styling and hover effects
## Learning Outcome
This helped me understand how React components communicate, how to reuse the same component with different data, and how real-world React applications manage logic and UI separately.
---
## Features
Counter with Add, Delete, and Reset functionality (limits applied)
Input to submit and display a name
Live greeting input display
Example of using React.createElement without JSX
Styled with simple Tailwind CSS classes
Hands-on practice for handling state, events, and dynamic UI
---
screenshot: <img width="905" height="324" alt="image" src="https://github.com/user-attachments/assets/b079d76b-4c1a-4360-afc8-f40bc48e3a81" />


