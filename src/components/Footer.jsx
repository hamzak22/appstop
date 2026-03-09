import React from 'react';

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
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
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
