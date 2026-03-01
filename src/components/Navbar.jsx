import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 pointer-events-auto">
      <Link to="/" className="flex items-center">
        {/* You can adjust logo size and styling as needed */}
        <img src={logo} alt="appstop" className="h-10 w-auto" />
      </Link>
      
      {/* Placeholder for navigation links */}
      <div className="hidden md:flex gap-8">
        <Link to="/" className="text-white hover:text-red-400 font-primary font-medium transition-colors">Home</Link>
        <Link to="/projects" className="text-white hover:text-red-400 font-primary font-medium transition-colors">Projects</Link>
        <a href="#services" className="text-white hover:text-red-400 font-primary font-medium transition-colors">Services</a>
        <a href="#contact" className="text-white hover:text-red-400 font-primary font-medium transition-colors">Contact</a>
      </div>

      <button className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full font-primary hover:bg-white/20 transition-colors">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
