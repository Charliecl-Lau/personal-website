import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const AllProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="all-projects-page-container">
      <div style={{ padding: '2rem 2rem 0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <button
          onClick={handleBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            color: 'var(--text-primary, #333)',
            padding: '1rem 0',
            fontFamily: 'inherit'
          }}
          aria-label="Back to projects"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default AllProjectsPage;
