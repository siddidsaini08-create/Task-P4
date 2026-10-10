import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sectionLinks = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
  { label: 'Subscribe', id: 'subscribe' }
];

export default function Navbar() {
  const location = useLocation();

  const showSectionLinks = location.pathname === '/';

  const handleSearch = (event) => {
    // Search is part of the P4 navigation design. Its full behaviour is
    // intentionally left for the later task that implements Search.
    event.preventDefault();
  };

  const handlePost = () => {
    // Post is displayed as required by the task brief; posting is a future task.
    window.alert('The Post feature will be implemented in a future task.');
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="DEV@Deakin home">
          <span className="brand-mark">DEV</span><span className="brand-at">@</span><span className="brand-name">Deakin</span>
        </Link>

        {showSectionLinks && (
          <div className="nav-section-links" aria-label="Portfolio sections">
            {sectionLinks.map((item) => (
              <a href={`/#${item.id}`} key={item.id}>{item.label}</a>
            ))}
          </div>
        )}

        {!showSectionLinks && (
          <Link className="nav-back-home" to="/">Back to home</Link>
        )}

        <div className="nav-actions">
          <form className="nav-search" role="search" onSubmit={handleSearch}>
            <input type="search" placeholder="Search" aria-label="Search (coming in a future task)" />
            <button type="submit" aria-label="Search" title="Search will be implemented in a future task">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
            </button>
          </form>
          <button className="nav-post" type="button" onClick={handlePost}>Post</button>
          <Link className={`nav-login ${location.pathname === '/login' ? 'is-current' : ''}`} to="/login">Log in</Link>
          <Link className={`nav-register ${location.pathname === '/register' ? 'is-current' : ''}`} to="/register">Create account</Link>
        </div>
      </nav>
    </header>
  );
}
