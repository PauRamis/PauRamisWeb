import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contactes from './pages/Contactes';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Cambiar tema y guardarlo
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Aplicar clase al body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inici</Link></li>
          <li><Link to="/curriculum">Currículum</Link></li>
          <li><Link to="/contactes">Contactes</Link></li>
        </ul>
        <div className="controls">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contactes" element={<Contactes />} />
      </Routes>
    </Router>
  );
}

export default App;
