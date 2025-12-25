import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Users } from 'lucide-react';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="btn btn-primary">Back Home</Link>
        </div>
      </div>
    );
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav
        className="sticky top-0 left-0 right-0 p-4 z-50 backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(245, 243, 237, 0.9)',
          borderBottom: '1px solid var(--color-card-border)'
        }}
      >
        <div className="container">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center font-semibold transition-colors"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20" style={{ backgroundColor: '#E5E7EB' }}>
        {project.heroImage && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="container relative z-10">
          <span
            className="font-bold tracking-wider uppercase mb-2 block text-sm"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p
            className="text-xl max-w-3xl leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {project.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Article Content */}
          <article className="max-w-none">
            {/* Project Sections */}
            {project.sections?.map((section, index) => (
              <section key={index} className="mb-16">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {section.heading}
                </h2>

                <div className="space-y-6">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-lg leading-relaxed"
                      style={{
                        color: 'var(--color-text-primary)',
                        maxWidth: '70ch'
                      }}
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--color-accent-primary)">$1</strong>')
                      }}
                    />
                  ))}
                </div>

                {/* Section Images */}
                {section.images && section.images.length > 0 && (
                  <div className={`mt-8 grid gap-4 ${section.images.length > 1 ? 'md:grid-cols-2' : ''}`}>
                    {section.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="rounded-xl overflow-hidden"
                        style={{
                          border: '1px solid var(--color-card-border)',
                          backgroundColor: '#E5E7EB'
                        }}
                      >
                        <img
                          src={image}
                          alt={`${section.heading} - Image ${imgIndex + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Results Section */}
            {project.results && project.results.length > 0 && (
              <section className="mb-16">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Results & Impact
                </h2>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-start text-lg leading-relaxed"
                    >
                      <span
                        className="mr-3 mt-1 flex-shrink-0"
                        style={{ color: 'var(--color-accent-primary)' }}
                      >
                        ✓
                      </span>
                      <span style={{ color: 'var(--color-text-primary)' }}>
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="mb-16">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden"
                      style={{
                        border: '1px solid var(--color-card-border)',
                        backgroundColor: '#E5E7EB'
                      }}
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Next Project Navigation */}
            <div
              className="mt-16 p-8 rounded-2xl"
              style={{
                backgroundColor: '#F5F3ED',
                border: '1px solid var(--color-card-border)'
              }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Next Project
              </p>
              <Link
                to={`/projects/${nextProject.id}`}
                className="group"
              >
                <h3
                  className="text-2xl font-bold mb-2 transition-colors"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {nextProject.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  {nextProject.description}
                </p>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            {project.details && (
              <div
                className="p-6 rounded-xl mb-6"
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  border: '2px solid var(--color-card-border)'
                }}
              >
                <h3 className="font-bold text-xl mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--color-accent-primary)' }}
                    />
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        Year
                      </p>
                      <p style={{ color: 'var(--color-text-primary)' }}>
                        {project.details.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <User
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--color-accent-primary)' }}
                    />
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        Role
                      </p>
                      <p style={{ color: 'var(--color-text-primary)' }}>
                        {project.details.role}
                      </p>
                    </div>
                  </div>

                  {project.details.duration && (
                    <div className="flex items-start">
                      <Clock
                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--color-accent-primary)' }}
                      />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          Duration
                        </p>
                        <p style={{ color: 'var(--color-text-primary)' }}>
                          {project.details.duration}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.details.team && (
                    <div className="flex items-start">
                      <Users
                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--color-accent-primary)' }}
                      />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          Team
                        </p>
                        <p style={{ color: 'var(--color-text-primary)' }}>
                          {project.details.team}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {project.details?.techStack && project.details.techStack.length > 0 && (
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  border: '2px solid var(--color-card-border)'
                }}
              >
                <h3 className="font-bold text-xl mb-4">Technology</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: 'var(--color-accent-primary)',
                        color: 'white'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
