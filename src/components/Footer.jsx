"use client"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 py-12 px-6 md:px-20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-white font-primary font-bold text-2xl">App Stop</h3>
          <p className="text-gray-400 font-primary text-sm">
            Leading App Development Agency
          </p>
        </div>
        
        <div className="flex gap-6">
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
          <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
        </div>
      </div>
      
      <div className="mt-12 text-center border-t border-white/10 pt-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} App Stop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
