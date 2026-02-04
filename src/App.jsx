import React from 'react';

// styles:
import './App.css';

// components:
import Portfolio from './view/portfolio'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// context:
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <ToastContainer />
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
