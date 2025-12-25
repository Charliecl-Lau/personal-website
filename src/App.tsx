import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectDetail from './pages/ProjectDetail';
import PdfViewerPage from './pages/PdfViewerPage';
import HighParkReport from './pages/HighParkReport';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/view-pdf" element={<PdfViewerPage />} />
        <Route path="/projects/equitable-access-to-high-park" element={<HighParkReport />} />
      </Routes>
    </Router>
  );
}

export default App;
