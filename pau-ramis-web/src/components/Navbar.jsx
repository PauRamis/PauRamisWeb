import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const links = [
    { to: '/', label: 'Inici' },
    { to: '/curriculum', label: 'Currículum' },
    { to: '/contactes', label: 'Contactes' }
  ];

  return (
    <nav className="navbar">
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className="controls">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Canviar tema"
          title="Canviar tema"
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
