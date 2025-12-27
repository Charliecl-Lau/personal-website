import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User, Code, Mail, BookOpen } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="nav-container">
      {/* Navigation Header with Toggle Button */}
      <div className="nav-header">
        <button className="menu-icon-btn" aria-label="Menu" onClick={toggleMenu}>
          <Menu size={28} />
        </button>
      </div>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close-btn" aria-label="Close Menu" onClick={closeMenu}>
          <X size={28} />
        </button>

        <nav className="menu-nav-links">
          <a href="#" className="nav-link-item" onClick={closeMenu}>
            <Home className="nav-icon" size={32} strokeWidth={2} />
            <span>Home</span>
          </a>
          <a href="#about-me" className="nav-link-item" onClick={closeMenu}>
            <User className="nav-icon" size={32} strokeWidth={2} />
            <span>About Me</span>
          </a>
          <a href="#projects" className="nav-link-item" onClick={closeMenu}>
            <Code className="nav-icon" size={32} strokeWidth={2} />
            <span>Projects</span>
          </a>
          <a href="#contact" className="nav-link-item" onClick={closeMenu}>
            <Mail className="nav-icon" size={32} strokeWidth={2} />
            <span>Contact</span>
          </a>
          <Link to="/blog" className="nav-link-item" onClick={closeMenu}>
            <BookOpen className="nav-icon" size={32} strokeWidth={2} />
            <span>Blog</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
