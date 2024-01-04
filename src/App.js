import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes,Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App mx-auto p-4">
         <Navbar></Navbar>
         <Home></Home>
    </div>
  );
}

export default App;
