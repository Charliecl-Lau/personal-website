import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectDetail from './pages/ProjectDetail';
import PdfViewerPage from './pages/PdfViewerPage';
import HighParkReport from './pages/HighParkReport';
import MicroBridgeBlog from './pages/MicroBridgeBlog';
import AllProjectsPage from './pages/AllProjectsPage'; // Add import

import BlogPage from './pages/BlogPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/view-pdf" element={<PdfViewerPage />} />
        <Route path="/projects/equitable-access-to-high-park" element={<HighParkReport />} />
        <Route path="/projects/microbridge-startup" element={<MicroBridgeBlog />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
