import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './nav.css'; // Assuming you have styles for the navbar

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo" style={{ transform: `rotate(${scrollPosition * 0.25}deg)` }}></h1>

      <div className="links">
        <div
          className={`link ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => setActiveTab(0)}
        >
          Home
        </div>
        <div
          className={`link ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          About
        </div>
        <div
          className={`link ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => setActiveTab(2)}
        >
          Contact
        </div>
        <div className="underline" style={{ left: `${activeTab * 33.33}%` }} />
      </div>
      <div className="social-icons">
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Navbar;
