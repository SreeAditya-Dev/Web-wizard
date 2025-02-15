// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Quiz from './Quiz'; // Import the Card component
import About  from './About';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root instance
const root = createRoot(rootElement);

// Render your app inside the root
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<App />} />
        {/* Route for App Page */}
        <Route path="/Quiz" element={<Quiz />} />
        {/* Route for Card Page */}
        <Route path="/About" element={<About />} />

      </Routes>
    </Router>
  </React.StrictMode>
);