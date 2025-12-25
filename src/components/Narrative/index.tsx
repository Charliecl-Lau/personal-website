import { Download } from 'lucide-react';
import './Narrative.css';
import narrativeProfile from '../../assets/narrative_profile.jpg'; // Import the image
import resumePdf from '../../assets/Charlie_Lau_Resume.pdf'; // Import the resume

const Narrative = () => {
  return (
    <div className="narrative-section" id="about-me">

      {/* Profile Header */}
      <div className="profile-header">
        <h1 className="section-title">About Me</h1>
        <div className="title-decoration"></div>

        <div className="avatar-container group">
          <div
            className="narrative-avatar"
            role="img"
            aria-label="Portrait of a smiling professional developer outdoors"
            style={{
              backgroundImage: `url(${narrativeProfile})`
            }}
          />
        </div>

        <p className="narrative-subtitle">Hello! I'm Charlie. I learn. I build. I create.</p>
      </div>

      {/* Narrative Body */}
      <div className="narrative-body">
        <p>
          I am a builder at heart, bridging the gap between physical materials and digital solutions. As a <span className="text-emphasis">Materials Engineering student at the University of Toronto</span>, I apply rigorous engineering principles to solve complex problems—whether I'm analyzing liquid payload systems for the <span className="text-emphasis">UTAT Drone Designer team</span> or architecting full-stack web applications.
        </p>
        <p>
          My experience spans from technical engineering to project management. I've led diverse initiatives, including designing <span className="text-emphasis">accessible route solutions for High Park</span>. I believe the best solutions are those that make the world more navigable for everyone.
        </p>
        <p>
          When I’m not pushing code or testing material properties, you’ll find me on the slopes as a certified Snowboard Instructor or exploring local trails.
        </p>
      </div>

      {/* Resume Button */}
      <div className="resume-section">
        <a href={resumePdf} download="Charlie_Resume.pdf" className="resume-btn group">
          <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Narrative;
