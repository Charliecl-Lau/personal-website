import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';
import './Projects.css';
import { projectsData } from '../../data/projectsList';
import type { Category } from '../../data/projectsList';

interface ProjectsProps {
  limit?: number;
}

const Projects = ({ limit }: ProjectsProps) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  // Determine which projects to consider based on limit
  const baseProjects = limit ? projectsData.slice(0, limit) : projectsData;

  const filteredProjects = baseProjects.filter(project =>
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <div className="projects-section" id="projects">
      <main className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <div>
            <h1 className="projects-title">
              {limit ? 'Recent Projects' : 'All Projects'}
            </h1>
            <div className="title-underline"></div>
          </div>
          <nav aria-label="Project Filter" className="filter-nav">
            <button
              className={`filter-btn ${activeFilter === 'All' ? 'active' : 'inactive'}`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            <button
              className={`filter-btn ${activeFilter === 'Coding' ? 'active' : 'inactive'}`}
              onClick={() => setActiveFilter('Coding')}
            >
              Coding
            </button>
            <button
              className={`filter-btn ${activeFilter === 'Engineering' ? 'active' : 'inactive'}`}
              onClick={() => setActiveFilter('Engineering')}
            >
              Engineering
            </button>
          </nav>
        </header>

        {/* Projects List */}
        <div className="projects-list">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card group ${project.category === 'Engineering' || project.category === 'Coding' ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if (project.category === 'Engineering') {
                  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  navigate(`/projects/${slug}`);
                } else if (project.category === 'Coding') {
                  const sourceLink = project.links.find(link => link.text === 'Source');
                  const url = sourceLink ? sourceLink.url : '#';
                  const targetUrl = url === '#' ? 'https://github.com' : url;
                  window.open(targetUrl, '_blank');
                }
              }}
            >
              <div className="card-image-wrapper">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className="card-overlay" />
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span className="category-badge">{project.category}</span>
                </div>
                <p className="card-description">
                  {project.description}
                </p>

                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className={`tech-tag ${project.techColor}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  <div className="actions-group">
                    {project.links.map((link, index) => {
                      const Icon = link.icon;
                      // Determine if the link is external (Code icon) or internal (Eye/FileText)
                      const isExternal = link.icon === Code;

                      if (isExternal) {
                        return (
                          <a
                            key={index}
                            href={link.url === '#' ? 'https://github.com' : link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon size={20} />
                            <span className="action-text">{link.text}</span>
                          </a>
                        );
                      }

                      return (
                        <button
                          key={index}
                          className="action-link"
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            fontFamily: 'inherit',
                            cursor: 'pointer'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (link.text === "Report" || link.text === "Reflection" || link.text === "Blog") {
                              if (link.url !== "#") {
                                navigate(link.url);
                              } else {
                                const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                navigate(`/projects/${slug}`);
                              }
                            } else {
                              const docId = `${project.title}-${link.text}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                              navigate(`/view-pdf?title=${encodeURIComponent(link.text)}&doc=${docId}`);
                            }
                          }}
                        >
                          <Icon size={20} />
                          <span className="action-text">{link.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        {limit && (
          <div className="view-all-container">
            <button
              className="filter-btn inactive"
              onClick={() => {
                window.scrollTo(0, 0); // Ensure top scroll on navigation
                navigate('/all-projects');
              }}
            >
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;
