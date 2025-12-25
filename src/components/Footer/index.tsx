import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-content">
        <h2 className="footer-headline">
          Let's build something <br className="break-mobile" />together.
        </h2>

        <div className="social-links-row">
          {/* GitHub */}
          <a href="https://github.com/Charlie060924" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
            <span className="tooltip-text">Check my code</span>
            <Github size={28} strokeWidth={1.5} />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/charliecl-lau" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
            <span className="tooltip-text">Connect professionally</span>
            <Linkedin size={28} strokeWidth={1.5} />
          </a>

          {/* Email */}
          <a href="mailto:charliecl.lau@gmail.com" className="social-btn" aria-label="Email">
            <span className="tooltip-text">Say hello</span>
            <Mail size={28} strokeWidth={1.5} />
          </a>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-meta">
          <p>© 2025 Charlie.</p>
          <p>Designed & Built from scratch.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
