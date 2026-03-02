import React, { useState } from 'react';
import FlowingMenu from '../reactbits/FlowingMenu/FlowingMenu.jsx';
import ContactForm from '../reactbits/ContactForm.jsx';

const imgVector = "https://www.figma.com/api/mcp/asset/9c1b1105-69a8-4498-a6b6-fbf9bd0be4b1";

const industries = [
  'Explore All',
  'Automotive',
  'Beauty & Cosmetics',
  'Business Consulting',
  'Construction',
  'EdTech',
  'Entertainment',
  'Fashion & Apparel',
  'Fintech'
];

const projectsData = [
  {
    id: 1,
    title: 'Trackory - Smart Shipment Intelligence',
    description: 'Trackory was created to solve visibility gaps in shipment tracking and delivery coordination. Research with 28 logistics professionals revealed...',
    category: 'SaaS',
    industry: 'Business Consulting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 2,
    title: 'Materio - Unified Supply Dashboard',
    description: 'Materio was created to help businesses streamline supplier and inventory management. Surveys of 32 inventory managers revealed 64% struggle...',
    category: 'SaaS',
    industry: 'Business Consulting',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 3,
    title: 'AutoMate - Vehicle Diagnostics',
    description: 'A comprehensive platform for real-time vehicle health monitoring and maintenance scheduling.',
    category: 'Mobile App',
    industry: 'Automotive',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
  },
  {
    id: 4,
    title: 'GlowUp - Virtual Try-On',
    description: 'Augmented reality app allowing users to try on cosmetics virtually before purchasing.',
    category: 'Web App',
    industry: 'Beauty & Cosmetics',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Explore All');

  const filteredProjects = activeTab === 'Explore All' 
    ? projectsData 
    : projectsData.filter(project => project.industry === activeTab);

  return (
    <>
      <div className="bg-[#050505] relative w-full h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center">
        {/* Background gradient vector */}
        <div className="absolute h-150 left-41 top-[30%] w-[1930.891px] -translate-y-1/2">
          <div className="absolute inset-[-56.61%_-16.33%]">
            <img alt="" className="block max-w-none size-full opacity-50" src={imgVector} />
          </div>
        </div>

        {/* Header content */}
        <div className="relative z-10 flex flex-col gap-8 items-center w-full max-w-[90vw] px-4 pointer-events-none">
          <p className="font-semibold text-[20px] text-center text-white tracking-normal leading-normal font-primary">
            Our Portfolio
          </p>
          
          <h1 className="font-bold text-5xl md:text-[72px] text-center text-white tracking-[-1.44px] leading-tight w-full whitespace-pre-wrap font-primary">
            <span>Apps That </span>
            <span className="font-semibold italic font-playfair">Speak</span>
            <br />
            <span>Results that </span>
            <span className="font-medium italic font-playfair">Matter</span>
          </h1>
        </div>
      </div>

      <div className="bg-white w-full py-20 px-6 md:px-12 lg:px-20 relative z-20 rounded-t-[50px] -mt-10">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-16 overflow-x-auto no-scrollbar py-4">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveTab(industry)}
              className={`px-6 py-3 rounded-lg font-primary text-[15px] font-medium transition-all whitespace-nowrap ${
                activeTab === industry
                  ? 'bg-primary-red text-white shadow-md'
                  : 'bg-[#F4F4F5] text-gray-700 hover:bg-gray-200'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col gap-6 group cursor-pointer">
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3 px-2">
                <h3 className="font-primary font-bold text-2xl text-[#111]">{project.title}</h3>
                <p className="font-primary text-gray-600 leading-relaxed text-[16px]">
                  {project.description}
                </p>
                <div className="self-start mt-2 bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full font-primary text-sm font-medium">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="w-full py-20 flex justify-center items-center">
            <p className="font-primary text-gray-500 text-lg">More projects coming soon.</p>
          </div>
        )}
      </div>

      <ContactForm/>
    </>
  );
};

export default Projects;
