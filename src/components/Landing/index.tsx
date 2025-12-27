import { Github, Linkedin, ChevronsDown } from 'lucide-react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-section">
      {/* Main Content */}
      <div className="hero-content">
        <div className="avatar-wrapper">
          <div className="avatar-frame">
            <img
              alt="Avatar"
              className="avatar-img"
              src="/avatar.jpg"
            />
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm Charlie.
        </h1>

        <p className="hero-subtitle">
          I'm an engineering student at University of Toronto.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Charliecl-Lau"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/charliecl-lau"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="cta-wrapper">
          <a href="mailto:charliecl.lau@gmail.com" className="cta-button">
            <span>Contact Me</span>
          </a>
          <a href="#about-me" className="scroll-hint-text">Scroll Down</a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-wrapper">
        <a href="#about-me" aria-label="Scroll to About Me">
          <ChevronsDown className="scroll-icon" size={36} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};

export default Landing;
