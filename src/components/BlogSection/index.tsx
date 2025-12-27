import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import './BlogSection.css';

const BlogSection = () => {
  const navigate = useNavigate();
  // Show only the latest 2 posts on the landing page
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <header className="blog-section-header">
          <div>
            <h2 className="blog-section-title">Latest Thoughts</h2>
            <div className="title-underline"></div>
          </div>
          <button
            className="view-all-btn"
            onClick={() => navigate('/blog')}
          >
            All Posts <ArrowRight size={16} />
          </button>
        </header>

        <div className="blog-grid">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="blog-preview-card"
              onClick={() => navigate(post.slug)}
            >
              <div className="blog-preview-content">
                <div className="blog-preview-meta">
                  <span className="blog-date">
                    <Calendar size={14} className="inline-icon" />
                    {post.date}
                  </span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-preview-title">{post.title}</h3>
                <p className="blog-preview-excerpt">{post.excerpt}</p>
                <div className="read-more-wrapper">
                  <span className="read-more-link">Read Article <ArrowRight size={16} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
