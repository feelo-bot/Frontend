import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chatting from './pages/Chatting';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatting" element={<Chatting/ >} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

