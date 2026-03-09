import React from 'react';
import Button from './Button.jsx';
import space3d from '../../public/images/div-bg.png';

const AboutAppStop = () => {
  const stats = [
    {
      number: '20+',
      label: 'Successful Projects',
      description: 'We delivered 200+ projects that exceeded client expectations and delivered results.',
      isRed: true
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Client satisfaction is at the heart of everything we do. 100% of clients are happy.',
      isRed: false
    },
    {
      number: '02+',
      label: 'Years of Digital Experience',
      description: 'With years of digital experience, we\'ve helped brands grow through impactful design.',
      isRed: false
    },
    {
      number: '11+',
      label: 'Dedicated Team Member',
      description: 'Our dedicated team members are professionals, reliable, and driven to deliver excellence.',
      isRed: false
    }
  ];

  return (
    <div className="relative w-full bg-black px-6 md:px-20 lg:px-40 py-40">
      {/* Header Section */}
      <div className="mb-12 flex justify-between items-center md:gap-10 lg:gap-20 mb-10">
        <p className="text-white/50 text-sm font-semibold mb-4 font-primary">• About AppStop</p>
        <p className="text-white/90 text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl font-primary">
          Delivering <span className="font-semibold">impactful</span> results on every project, with a sharp focus on both <span className="font-semibold">design excellence</span> and <span className="font-semibold">functional</span> performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch my-20">
        {/* Left Side - Image Container with Content Inside */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden flex flex-col h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${space3d})` }}
        >
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>

          {/* Image Area */}
          <div className="flex-1 flex items-center justify-center relative z-10">
            {/* Image content area */}
          </div>

          {/* Content Inside Box - Bottom Aligned */}
          <div className="relative z-20 p-8 flex flex-col gap-6 items-start">
            <p className='font-semibold text-xl text-white/50'>App Stop</p>
            <h3 className="font-bold text-4xl text-white font-primary leading-tight">
              From Idea to Impact: Crafting Mobile Apps That Drive Results
            </h3>
            {/* <Button href="#contact">
              Book an Appointment
            </Button> */}
          </div>
        </div>

        {/* Right Side - Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between min-h-[280px] ${
                stat.isRed
                  ? 'bg-primary-red'
                  : 'bg-[#1a1a1a] border border-white/10'
              }`}
            >
              <div>
                <h3 className={`font-bold text-5xl md:text-6xl font-primary mb-3 ${
                  stat.isRed ? 'text-white' : 'text-white'
                }`}>
                  {stat.number}
                </h3>
                <p className={`font-semibold text-base font-primary ${
                  stat.isRed ? 'text-white' : 'text-white'
                }`}>
                  {stat.label}
                </p>
              </div>
              <p className={`text-sm leading-relaxed ${
                stat.isRed ? 'text-white/90' : 'text-white/60'
              }`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAppStop;
