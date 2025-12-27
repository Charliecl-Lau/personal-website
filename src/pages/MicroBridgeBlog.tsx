import React from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './MicroBridgeBlog.css';

const MicroBridgeBlog: React.FC = () => {
  return (
    <div className="report-page">
      {/* Back Navigation */}
      <nav style={{ padding: '1.5rem 2rem', backgroundColor: 'white' }}>
        <Link to="/blog" className="report-back-link">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </nav>

      {/* Hero Header */}
      <header className="report-hero">
        <div className="report-hero-content">
          <h1 className="report-title">The "Vibe Coding" Trap: How My Startup Failed, and Why I Don't Regret It</h1>
          <p className="report-subtitle">
            A reflection on the challenges of AI-assisted development and the importance of technical architecture.
          </p>
          <div className="report-meta">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} /> Dec. 26, 2025
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} /> 10 min read
            </span>
          </div>
        </div>
      </header>

      <div className="report-container">
        {/* Main Content */}
        <main className="report-content">
          <section className="report-section">
            <p>
              They say the best startup ideas come from personal pain points. My idea came from scrolling through social media and watching a generation vent.
            </p>
            <p>
              In North America, the "entry-level" job market is broken. We’ve all seen the memes: "Entry Level Position: Requires 5 years of experience." It’s a paradox that leaves students stranded. On the other side of the spectrum, I noticed a surge in student-led startups. Thanks to the AI boom, it’s easier than ever to start a company, but funding remains the great filter. These founders have the vision, but they don't have the cash to hire top-tier talent.
            </p>
            <p>
              That was the genesis of <strong>MicroBridge</strong>.
            </p>
            <p>
              My vision was simple: Connect ambitious students looking for experience with cash-strapped startups looking for help. By focusing on micro-internships and project-based work, we could solve the "experience gap" for students and the "talent gap" for founders simultaneously.
            </p>
          </section>

          <section className="report-section">
            <h2 className="section-title">The Strategic Pivot: Why Asia?</h2>
            <p>
              My co-founder and I, both raised in Hong Kong, spotted a trap early on. Trying to launch a professional networking site in North America would mean fighting a losing war against LinkedIn. In the West, everyone’s profile is already established; the switching cost is too high.
            </p>
            <p>
              But Asia? The culture there is different. The LinkedIn dominance isn't as absolute in the student sector, and the specific "job market crash" discourse was evolving differently there. We saw an opening to capture the Hong Kong market before the giants pivoted.
            </p>
            <p>
              We had the vision. We had the market strategy. What we didn’t have was a solid technical plan.
            </p>
          </section>

          <section className="report-section">
            <h2 className="section-title">The Illusion of Speed: Enter "Vibe Coding"</h2>
            <p>
              My co-founder had no coding experience, so the technical load fell on me. I turned to Cursor and the concept of "vibe coding"—relying on AI to generate the code based on the "vibe" or outcome I wanted, without necessarily understanding the syntax underneath.
            </p>
            <p>
              At first, it felt like magic. I grabbed a free template for the landing page to save time. It looked professional immediately. But this was the first crack in the foundation. Because I hadn't built it, I didn't control it.
            </p>
            <p>
              I started assigning small, non-technical tasks to my partner so I could focus on the "heavy lifting." But the lifting was becoming impossibly heavy.
            </p>
          </section>

          <section className="report-section">
            <h2 className="section-title">The Technical Spiral</h2>
            <p>
              The trouble started with authentication. The template had a login page, but I had no idea how to make it function. I learned I needed a database and decided on MySQL. I spent a distinct, frustrating day just studying how to install it from the official site. I succeeded in installing it—but I had no idea how to connect it to my codebase.
            </p>
            <p>
              I shelved the problem (a fatal mistake) and pivoted to building the dashboard. Again, I grabbed a free template.
            </p>
            <p>
              Now I had two different templates mashed together. I started stacking my own code on top of them, creating a Frankenstein’s monster of software. I was getting errors I couldn’t remove because they were buried deep in template files I didn’t understand.
            </p>
            <p>
              Despite the shaky foundation, I kept adding features:
            </p>
            <ul>
              <li><strong>Gamification:</strong> I wanted a leveling system to keep users engaged.</li>
              <li><strong>AI Matching:</strong> I integrated a Golang algorithm to improve job recommendations.</li>
              <li><strong>Workflow AI:</strong> I even adopted the open-source BMad Method to break my tasks into "stories" for LLMs to process.</li>
            </ul>
            <p>
              I was using advanced tools to build a castle on quicksand.
            </p>
          </section>

          <section className="report-section">
            <h2 className="section-title">The Crash</h2>
            <p>
              The end didn't come with a bang, but with a realization. The website was riddled with duplicated features, unresolvable errors, and massive technical debt. I had relied so heavily on free templates and AI generation that I had completely lost control of the project. I didn't know where the template ended and my code began.
            </p>
            <p>
              I realized I didn’t have a plan anymore. I was just reacting to errors. The project had crashed, not just technically, but managerially. I decided to step back and let MicroBridge go.
            </p>
          </section>

          <section className="report-section">
            <h2 className="section-title">The Post-Mortem: What I Learned</h2>
            <p>
              MicroBridge was an unsuccessful attempt, but I don’t regret starting it. The tuition I paid for this lesson was time, and the return on investment was experience.
            </p>
            <p>
              Here is what I walked away with:
            </p>
            <ol>
              <li>
                <strong>"Vibe Coding" is not Engineering:</strong> AI is a powerful accelerator, but it is not a replacement for architecture. You cannot vibe your way through database connectivity or system design. If you don't understand the code the AI is writing, you don't own your product.
              </li>
              <li>
                <strong>Plan Before You Build:</strong> My biggest failure wasn't code; it was structure. I started building features (gamification, AI sorting) before I had a working skeleton. In the future, I need to visualize the end product, map out the data structure, and set internal deadlines before writing a single line of code.
              </li>
              <li>
                <strong>The Managerial Mindset:</strong> I learned the hard way what a manager actually does. It isn't just assigning tasks; it’s about cohesion. I need to learn how to collaborate better—not just with human partners, but with AI agents. Treating AI as a "magic wand" leads to chaos; treating it as a "junior developer" requires you to be a competent senior manager.
              </li>
            </ol>
            <p>
              MicroBridge didn't bridge the gap for students, but it bridged the gap for me—from a dreamer with an idea to a builder who knows better for next time.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MicroBridgeBlog;
