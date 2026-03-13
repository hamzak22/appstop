"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaCheckCircle, FaUsers, FaProjectDiagram, FaTrophy, FaHandshake, FaBullseye, FaHeart } from 'react-icons/fa';
import Button from '../../components/Button.jsx';
import ContactForm from '../../reactbits/ContactForm.jsx';
import ClientReviews from '../../reactbits/ClientReviews.jsx';

const imgVector = '/images/bg-gradient.png';

const stats = [
  { id: 1, number: '150+', label: 'Projects Completed', icon: <FaProjectDiagram className="w-6 h-6" /> },
  { id: 2, number: '50+', label: 'Happy Clients', icon: <FaUsers className="w-6 h-6" /> },
  { id: 3, number: '15+', label: 'Awards Won', icon: <FaTrophy className="w-6 h-6" /> },
  { id: 4, number: '99%', label: 'Client Retention', icon: <FaCheckCircle className="w-6 h-6" /> },
];

const processes = [
  { id: 1, step: '01', title: 'Discovery & Strategy', description: 'We start by understanding your goals, target audience, and market landscape to build a solid foundation.' },
  { id: 2, step: '02', title: 'UI/UX Design', description: 'Our designers craft intuitive, wireframes, and prototypes, ensuring a seamless user experience.' },
  { id: 3, step: '03', title: 'Development', description: 'We bring designs to life using modern technologies, building scalable and secure applications.' },
  { id: 4, step: '04', title: 'Testing & Deployment', description: 'Rigorous QA testing ensures a bug-free experience before we launch your product to the world.' },
];

const values = [
  { id: 1, icon: <FaBullseye className="w-8 h-8 text-primary-red" />, title: 'Mission-Driven', description: 'To empower businesses with innovative digital solutions that drive growth and enhance lives.' },
  { id: 2, icon: <FaHeart className="w-8 h-8 text-primary-red" />, title: 'Passionate Work', description: 'We pour our hearts into every project, treating your business as if it were our own.' },
  { id: 3, icon: <FaHandshake className="w-8 h-8 text-primary-red" />, title: 'Partnership', description: 'We believe in long-term relationships over short-term transactions, collaborating for mutual success.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] font-primary">
      {/* Header Section */}
      <div className="bg-[#050505] relative w-full h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute h-150 left-41 top-[70%] w-[1930.891px] -translate-y-1/2">
          <div className="absolute inset-[-56.61%_-16.33%]">
            <img alt="" className="block max-w-none size-full opacity-80" src={imgVector} />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col gap-8 items-center w-full max-w-[90vw] px-4 pointer-events-none"
        >
          <p className="font-semibold text-[20px] text-center text-white tracking-normal leading-normal font-primary">
            About Us
          </p>
          
          <h1 className="font-bold text-5xl md:text-[72px] text-center text-white tracking-[-1.44px] leading-tight w-full whitespace-pre-wrap font-primary">
            <span>Crafting Digital </span>
            <span className="font-semibold italic font-playfair">Excellence</span>
            <br />
            <span>Since Day </span>
            <span className="font-medium italic font-playfair">One</span>
          </h1>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="w-full relative z-20 rounded-t-[50px] -mt-10 bg-[#F4F4F5] px-6 md:px-12 lg:px-20 pt-20 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-red-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 text-primary-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold font-primary text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="w-full bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-red font-medium tracking-wider uppercase text-sm mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Bring Ideas to Life</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg hover:text-gray-900 transition-colors">A proven methodology ensuring transparency, quality, and on-time delivery from the first meeting to post-launch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0"></div>

            {processes.map((process, i) => (
              <motion.div 
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-red text-white flex items-center justify-center text-xl font-bold mb-6 border-4 border-white shadow-sm">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Difference / Mission / Values Section */}
      <div className="w-full bg-[#090909] py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 max-w-3xl">
            <span className="text-primary-red font-medium tracking-wider uppercase text-sm mb-4 block">Why We're Different</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built on Passion, Driven by Results</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just build apps; we build businesses. Our team is dedicated to merging stunning aesthetics with robust engineering, ensuring your product isn't just beautiful, but highly functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {values.map((val, i) => (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] p-10 rounded-[32px] border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-primary-red/10 transition-colors">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-16">
        <ClientReviews />
      </div>

      {/* CTA / Contact Section */}
      <div className="bg-[#F4F4F5]">
        <ContactForm />
      </div>

    </div>
  );
};

export default About;
