import React from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from '../reactbits/Nav';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const location = useLocation();

  return (
    <PillNav
      logo={logo}
      logoAlt="Appstop Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Services', href: '/services' }
      ]}
      activeHref={location.pathname}
      className="custom-nav mt-4"
      ease="power2.easeOut"
      baseColor="#ffffff"
      pillColor="#D52020"
      hoveredPillTextColor="#D52020"
      pillTextColor="#ffffff"
      theme="light"
      initialLoadAnimation={false}
    />
  );
};

export default Navbar;
