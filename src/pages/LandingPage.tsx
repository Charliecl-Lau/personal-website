import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import Narrative from '../components/Narrative';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-container">
      <Navigation />
      <Landing />
      <Narrative />
      <Projects limit={3} />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
