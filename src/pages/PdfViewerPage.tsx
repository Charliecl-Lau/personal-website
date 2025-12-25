import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import resumePdf from '../assets/Charlie_Lau_Resume.pdf';
import highParkReportPdf from '../assets/HighPark_Report.pdf';
import './PdfViewer.css';

// Mapping of document IDs to actual PDF files
// Currently defaulting all to resume for demonstration as other PDFs are not yet provided
const pdfMap: Record<string, string> = {
  'resume': resumePdf,
  'default': resumePdf,
  'equitable-access-to-high-park-report': highParkReportPdf,
};

const PdfViewerPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get('title') || 'Document';

  // Retrieve doc ID from URL params and look up in map
  const docId = searchParams.get('doc');
  const pdfUrl = (docId && pdfMap[docId]) ? pdfMap[docId] : resumePdf;

  return (
    <div className="pdf-viewer-page">
      <header className="pdf-viewer-header">
        <button
          onClick={() => navigate(-1)}
          className="pdf-back-btn"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
        <h1 className="pdf-title">
          {title}
        </h1>
      </header>

      <main className="pdf-container">
        <div className="pdf-wrapper">
          <iframe
            src={pdfUrl}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="PDF Viewer"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PdfViewerPage;
