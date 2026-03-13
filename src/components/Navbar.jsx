"use client"
import { usePathname } from 'next/navigation';
import PillNav from '../reactbits/Nav';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <PillNav
      logo="/images/call_icon.png"
      logoAlt="Appstop Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Services', href: '/services' }
      ]}
      activeHref={pathname}
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
