import React from 'react';
import ContactForm from '../reactbits/ContactForm.jsx';
import Button from '../components/Button.jsx';
import { FiArrowRight } from 'react-icons/fi';
import { 
  FaRegLightbulb, 
  FaChessKnight, 
  FaPenNib, 
  FaProjectDiagram, 
  FaTachometerAlt, 
  FaRegClipboard 
} from 'react-icons/fa';

import imgVector from '../../public/images/bg-gradient.png';

const servicesData = [
  {
    id: 1,
    title: 'UI UX Design',
    description: 'When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.',
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    features: [
      'UI/UX Design',
      'Visual UI Design',
      'User Research',
      'Usability Testing',
      'Wireframe & Prototyping',
      'Interaction Design',
    ],
    tools: [
      'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
      'https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg',
      'https://cdn.worldvectorlogo.com/logos/sketch-2.svg',
      'https://cdn.worldvectorlogo.com/logos/framer-1.svg',
    ]
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'We build responsive, fast, and scalable web applications tailored to your business goals. From landing pages to complex corporate platforms.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    features: [
      'Frontend Development',
      'Backend Development',
      'E-commerce Solutions',
      'CMS Integration',
      'Web Performance',
      'API Development',
    ],
    tools: [
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
    ]
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Transform your ideas into powerful mobile experiences. We design and develop native and cross-platform apps for iOS and Android.',
    bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'App UI/UX Design',
      'App Store Optimization',
      'App Maintenance',
    ],
    tools: [
      'https://cdn.worldvectorlogo.com/logos/swift-15.svg',
      'https://cdn.worldvectorlogo.com/logos/kotlin-1.svg',
      'https://cdn.worldvectorlogo.com/logos/flutter.svg',
      'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
    ]
  }
];

const whyChooseUsData = [
  {
    id: 1,
    icon: <FaRegLightbulb className="w-8 h-8 text-white" />,
    title: 'User-Centric Approach',
    description: 'We prioritize the needs and behaviors of your users to ensure intuitive designs that deliver exceptional experiences.'
  },
  {
    id: 2,
    icon: <FaChessKnight className="w-8 h-8 text-white" />,
    title: 'Lifetime Support',
    description: 'We offer continuous assistance, updates, and optimizations to keep your design performing at its best forever.'
  },
  {
    id: 3,
    icon: <FaPenNib className="w-8 h-8 text-white" />,
    title: 'Cross-Industry Expertise',
    description: 'Our team has experience across various industries so we can deliver personalized solutions that meet the unique needs of every sector.'
  },
  {
    id: 4,
    icon: <FaProjectDiagram className="w-8 h-8 text-white" />,
    title: 'SEO & Mobile Optimization',
    description: 'We ensure your designs are optimized for search engines and mobile devices to drive traffic and improve user engagement.'
  },
  {
    id: 5,
    icon: <FaTachometerAlt className="w-8 h-8 text-white" />,
    title: 'Fast Turnaround Times',
    description: 'Get high-quality designs delivered promptly without sacrificing creativity or functionality to help you meet deadlines efficiently.'
  },
  {
    id: 6,
    icon: <FaRegClipboard className="w-8 h-8 text-white" />,
    title: 'Transparent Process',
    description: 'We maintain clear communication throughout the project and make sure that you\'re always informed and involved in key decisions.'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] font-primary">
      {/* Header Section */}
      <div className="bg-[#050505] relative w-full h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center">
        {/* Background gradient vector */}
        <div className="absolute h-150 left-41 top-[70%] w-[1930.891px] -translate-y-1/2">
          <div className="absolute inset-[-56.61%_-16.33%]">
            <img alt="" className="block max-w-none size-full opacity-80" src={imgVector} />
          </div>
        </div>

        {/* Header content */}
        <div className="relative z-10 flex flex-col gap-8 items-center w-full max-w-[90vw] px-4 pointer-events-none">
          <p className="font-semibold text-[20px] text-center text-white tracking-normal leading-normal font-primary">
            Our Services
          </p>
          
          <h1 className="font-bold text-5xl md:text-[72px] text-center text-white tracking-[-1.44px] leading-tight w-full whitespace-pre-wrap font-primary">
            <span>Solutions That </span>
            <span className="font-semibold italic font-playfair">Scale</span>
            <br />
            <span>Design that </span>
            <span className="font-medium italic font-playfair">Inspires</span>
          </h1>
        </div>
      </div>

      {/* Services Content Section */}
      <div className="w-full py-20 px-6 md:px-12 lg:px-20 relative z-20 rounded-t-[50px] -mt-10 bg-[#F4F4F5] flex flex-col items-center gap-16">
        
        {servicesData.map((service, index) => (
          <div 
            key={service.id} 
            className="w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col"
          >
            {/* Top Banner Area */}
            <div className="w-full h-[240px] md:h-[320px] lg:h-[400px] overflow-hidden bg-gray-100">
              <img 
                src={service.bannerImage} 
                alt={`${service.title} banner`} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg mb-10 max-w-3xl leading-relaxed">
                {service.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12 w-full">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center py-3 border-b border-gray-200 group cursor-pointer transition-colors"
                  >
                    <span className="text-gray-900 font-medium text-[16px] md:text-[18px]">
                      {feature}
                    </span>
                    {/* Only show arrow on hover to keep it clean */}
                    <div className="w-5 h-5 opacity-0 group-hover:opacity-100 text-gray-400 group-hover:text-primary-red transition-all flex items-center justify-center -translate-x-2 group-hover:translate-x-0">
                       <FiArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools Icons */}
              <div className="flex items-center gap-3 mt-4">
                {service.tools.map((iconUrl, idx) => (
                  <div 
                    key={idx} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm"
                  >
                    <img src={iconUrl} alt="tool icon" className="w-[60%] h-[60%] object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full bg-[#090909] py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 border border-[#1E4D3E] rounded-full text-[#38B27E] text-sm font-medium mb-6">
            Design Excellence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight font-primary">
            Responsive <span className="italic font-playfair font-normal">UI/UX Design</span><br />
            Services for <span className="italic font-playfair font-normal">Successful Brands</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-16">
          {whyChooseUsData.map((item) => (
            <div 
              key={item.id}
              className="rounded-[2rem] p-[1px] transition-all duration-200 ease-in overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(333deg, #c4c4c400 55%, #ececec33 70%, #dc2626)',
                boxShadow: '0 16px 24px rgba(220, 38, 38, 0.1)'
              }}
            >
              <div 
                className="bg-[#0f0f0f] bg-[linear-gradient(347deg,rgba(220,38,38,0.2),rgba(10,10,10,0.4))] w-full h-full p-8 md:p-10 rounded-[2rem] shadow-[inset_0px_8px_10px_rgba(255,255,255,0.09)] flex flex-col gap-6 relative overflow-hidden group hover:border-primary-red/70 transition-all duration-300 border border-transparent"
              >
                {/* Subtle Red glow on hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          href="#contact"
          iconPosition="right" 
          icon={<FiArrowRight className="text-white text-xl relative z-10" />}
        >
          Start Project
        </Button>

      </div>

      <ContactForm />
    </div>
  );
};

export default Services;
