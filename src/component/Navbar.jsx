import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './nav.css'; // Assuming you have styles for the navbar

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">AP</h1>
      <div className="links">
        <div
          className={`link ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Home
        </div>
        <div
          className={`link ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          About
        </div>
        <div
          className={`link ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
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