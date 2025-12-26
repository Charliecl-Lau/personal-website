import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Eye, ArrowRight } from 'lucide-react';
import './Projects.css';
import roverImage from '../../assets/HighPark.png';
import websiteImage from '../../assets/personalwebsite.jpg';

type Category = 'All' | 'Coding' | 'Engineering';

interface ProjectLink {
  icon: typeof Code; // Using one icon type as representative for the type definition
  text: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  category: 'Coding' | 'Engineering';
  image: string;
  description: string;
  techStack: string[];
  techColor: 'primary' | 'amber';
  links: ProjectLink[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    category: "Coding",
    image: websiteImage,
    description: "A modern, interactive portfolio website built with React and Vite, featuring a warm aesthetic and a narrative-driven project showcase.",
    techStack: ["Html", "CSS", "TypeScript", "Firebase"],
    techColor: "primary",
    links: [
      { icon: Code, text: "Source", url: "https://github.com/Charliecl-Lau/personal-website"},
      { icon: Eye, text: "Report", url: "#" },
      //{ icon: FileText, text: "Reflection", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Equitable Access to High Park",
    category: "Engineering",
    image: roverImage,
    description: "Designed an accessible pathway to High Park Nature Centre, featuring a solar-heated conveyor belt for year-round access and ecosystem preservation.",
    techStack: ["Engineering Design", "Sustainability", "Data Analysis"],
    techColor: "amber",
    links: [
      { icon: Eye, text: "Report", url: "#" },
      //{ icon: FileText, text: "Reflection", url: "#" }
    ]
  },
  {
    id: 3,
    title: "MircoBridge StartUp",
    category: "Coding",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEXo7_DucxdUMY7Zxt21NDfspd7ilXml3DQoYAqAJbvKG1If3kvUfjrWTYLKWTfqPJfUmyu1jfzsNeGgUrYkdeEmDS5EWgYhfpRB__hEJ7T4P9pe2sMuZwQH-XAeTOzaaWV5HPUQIDjJeKDkNtu23lDrIzVByAtmnjOQ6zfIoGrmoiVFGTaVpwzwK4vvFUtQB9_hiD4OUEGPC-Q85jq0rOtQXGdRh4n6uTzPL-eJIf18fe2xz_WSyXCtquPVoX0wvT9ZafPztem4o",
    description: "A full-stack mircointernship platform connecting students with Startup companies for internships.",
    techStack: ["Node.js", "React", "GoLang", "PostgreSQL"],
    techColor: "primary",
    links: [
      { icon: Code, text: "Source", url: "https://github.com/Charliecl-Lau/MicroBridge-v2" },
      { icon: Eye, text: "Report", url: "#" },
      //{ icon: FileText, text: "Reflection", url: "#" }
    ]
  }

];

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects = projectsData.filter(project =>
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <div className="projects-section" id="projects">
      <main className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <div>
            <h1 className="projects-title">Recent Projects</h1>
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
                            if (link.text === "Report" || link.text === "Reflection") {
                              const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                              navigate(`/projects/${slug}`);
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
        <div className="view-all-container">
          <button
            className="filter-btn inactive"
            onClick={() => {
              setActiveFilter('All');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Projects;
