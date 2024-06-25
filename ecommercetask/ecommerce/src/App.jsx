import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Carditem from './components/Carditem';
import Navbar2 from "./components/Navbar2"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar2/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Carditem" element={<Carditem />} />
      </Routes>
    </Router>
  );
}

export default App;
