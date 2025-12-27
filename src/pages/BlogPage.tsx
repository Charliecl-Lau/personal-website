
import React from 'react';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../components/Projects/Projects.css'; // Reusing some project styles for consistency
import './BlogPage.css';

import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page-container">
      <Navigation />

      <main className="blog-main-content">
        <header className="blog-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="header-text">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-subtitle">Thoughts, reflections, and technical deep dives.</p>
          </div>
        </header>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              onClick={() => navigate(post.slug)}
            >
              <div className="blog-card-content">
                <div className="blog-card-header">
                  <h2 className="blog-post-title">{post.title}</h2>
                  <div className="blog-meta">
                    <span className="blog-date"><Calendar size={14} className="inline-icon" style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />{post.date}</span>
                    <span className="blog-dot">·</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-link-wrapper">
                  <span className="read-more">Read Article <ArrowRight size={16} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
