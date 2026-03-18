import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../data/profile';
import zagLogo from '../logo-images/ZAG-logo.jpg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link" onClick={closeMenu}>
          <img src={zagLogo} alt="ZAG logo" className="brand-logo" />
          Zane Graper
        </NavLink>
      </div>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links${menuOpen ? ' mobile-open' : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="resume-link"
            onClick={closeMenu}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
