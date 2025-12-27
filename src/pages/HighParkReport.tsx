import React from 'react';
import { ArrowLeft, Clock, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './HighParkReport.css';
import highParkReportPdf from '../assets/HighPark_Report.pdf';

const HighParkReport: React.FC = () => {
  return (
    <div className="report-page">
      {/* Back Navigation */}
      <nav style={{ padding: '1.5rem 2rem', backgroundColor: 'white' }}>
        <Link to="/" className="report-back-link">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="report-hero">
        <div className="report-hero-content">
          <h1 className="report-title">Equitable Access to High Park</h1>
          <p className="report-subtitle">
            Engineering a accessible and preservative pathway connecting Keele Street to the High Park Nature Centre.
          </p>
          <div className="report-meta">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} /> Nov. 23, 2025
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} /> 15 min read
            </span>
            <a
              href={highParkReportPdf}
              download
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>
      </header>

      <div className="report-container">
        {/* Main Content */}
        <main className="report-content">

          <section id="executive-summary" className="report-section">
            <h2 className="section-title">Executive Summary</h2>
            <div className="report-alert">
              This digital report is an extracted summary of the original engineering documentation. For the full technical tables, calculations, and appendices, please download the PDF using the link above.
            </div>
            <p>
              This report presents a design project to create an accessible pathway connecting the Keele Street entrance of High Park to the High Park Nature Centre. The goal is to provide a safe, year-round route for individuals with mobility challenges and families with strollers to travel while preserving the Black Oak Savanna ecosystem and enhancing the park's amenities. The need for this project arises from an accessibility gap identified by the High Park Nature Centre, the client. The project scope excludes improving other park trails and entrances, will not interfere with the intersection with Spring Road, and supports year-round accessibility.
            </p>
            <p>
              The service environment experiences temperatures -25 °C to +35 °C, with moderate monthly precipitation. The ground consists of uneven asphalt and compacted soil with slopes from 4° to 7°. The area supports diverse vegetation and wildlife and experiences regular pedestrian and cycling traffic with moderate noise and vibration from users and maintenance vehicles. The park also provides a cellular network and GPS connectivity.
            </p>
            <p>
              To develop a design that meets the client's requirements, the interests of key stakeholders must also be considered. The Parks, Forestry and Recreation requires a durable, safe, and compliant design that integrates with the existing park. Another stakeholder, the Ontario Ministry of Citizenship and Multiculturalism, may require archaeological assessments that could restrict construction areas. Furthermore, the TRCA must ensure the design protects natural systems, stormwater flow, and erosion control. Finally, Indigenous Peoples expect the design to preserve the cultural significance of High Park and the Black Oak Savanna. The design should ensure safe year-round access. It should also provide high slip resistance with a wet DCOF above 0.65 for stability in wet conditions, and maintain a running slope under 7% to improve accessibility. Waste receptacles will be positioned at 30m intervals to encourage proper disposal.
            </p>
            <p>
              52 full solutions were generated through brainstorming, morph charts, and brainwriting, and then narrowed to 3 feasible ideas through multivoting. The <em>Elevated Platform</em> features a raised ramp with handrails, a slip-resistant rubber surface, bins, and signage. The <em>Solar-Heated Conveyor Belt</em> features a bidirectional, slightly elevated conveyor belt system to provide a level-assisted mobility route with solar-heated high-grip belts, handrails, and bins. Lastly, the <em>Rope and Pulley System</em> includes a rope assist to support the user while walking along challenging areas of the path, high-contrast edge bands, a levelled concrete pathway, and an electrically heated mat powered by a generator to prevent snow buildup.
            </p>
            <p>
              Using the Pugh Chart, the team selected the <em>Solar-Heated Conveyor Belt</em> as the most effective solution for the client's requirements, as it addressed all proposed design objectives and outperformed the other alternative concepts in accessibility, safety, and year-round usability.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HighParkReport;
