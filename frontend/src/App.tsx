// Importing React library
import React from 'react';
// Importing logo image
import logo from './logo.svg';
// Importing CSS file for styling
import './App.css';
// Importing Header component
import Header from './Header';
// Importing BowlerList component
import BowlerList from './Bowler/BowlerList';

// Defining the main App component
function App() {
  return (
    // Root div with class "App" for styling
    <div className="App">
      {/* Rendering the Header component with a custom title */}
      <Header title="Is your name Strike? Cause you're a perfect 10." />
      {/* Rendering the BowlerList component */}
      <BowlerList />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
