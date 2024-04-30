import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <ul>
        <li onClick={handleHome}>Home</li>
        <li onClick={handleAbout}>About</li>
        <li onClick={handleContact}>Contact</li>
        <li onClick={handleDashboard}>Dashboard</li>
      </ul>
    </div>
  );
};

export default Navbar;
