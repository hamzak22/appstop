import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    niche: "UI/UX Design",
    description: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: ["https://res.cloudinary.com/dls57pxvo/image/upload/v1773062952/app2_if4ugp.jpg", "https://res.cloudinary.com/dls57pxvo/image/upload/v1773062952/app1_dxdgyr.jpg"],
  },
  {
    niche: "Web Development",
    description: "Frontend Engineering, E-commerce, Performance Optimization, React Apps, Backend Architecture, and API Integration.",
    images: ["https://res.cloudinary.com/dls57pxvo/image/upload/v1773063325/app3_oitcbv.jpg", "https://res.cloudinary.com/dls57pxvo/image/upload/v1773063798/app4_rvzyd8.jpg"],
  },
];

const PortfolioSection = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const leftContainerRef = useRef(null);
  const textItemRefs = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Set initial states:
      // - First item: visible, in position
      // - All others: invisible, positioned BELOW (ready to slide up)
      textItemRefs.current.forEach((el, index) => {
        if (!el) return;
        if (index === 0) {
          gsap.set(el, { opacity: 1, yPercent: 0 });
        } else {
          gsap.set(el, { opacity: 0, yPercent: 100 }); // 100% below (hidden)
        }
      });

      // Hide left container initially
      gsap.set(leftContainerRef.current, { autoAlpha: 0 });

      // Show the fixed left container when entering section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 40%",
        end: "top top",
        onEnter: () => gsap.set(leftContainerRef.current, { autoAlpha: 1 }),
        onLeaveBack: () => gsap.set(leftContainerRef.current, { autoAlpha: 0 }),
      });

      // Switch from fixed to absolute when reaching end of section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        onEnter: () => {
          // Switch to absolute positioning, anchored to bottom of section
          gsap.set(leftContainerRef.current, {
            position: 'absolute',
            top: 'auto',
            bottom: '100px', // Distance from bottom of section
          });
        },
        onLeaveBack: () => {
          // Switch back to fixed
          gsap.set(leftContainerRef.current, {
            position: 'fixed',
            top: 0,
            bottom: 'auto',
          });
        },
      });

      // Create scroll triggers for transitions between panels
      projects.forEach((_, index) => {
        const currentEl = textItemRefs.current[index];
        const nextEl = textItemRefs.current[index + 1];
        const panel = document.querySelector(`.right-panel-${index}`);
        
        if (!panel || !currentEl) return;

        // Only create transition if there's a next element
        if (index < projects.length - 1 && nextEl) {
          ScrollTrigger.create({
            trigger: panel,
            start: "bottom 70%",
            end: "bottom 50%",
            scrub: 0.3,
            onUpdate: (self) => {
              const progress = self.progress;
              // Current text: slides UP and fades OUT
              gsap.set(currentEl, {
                opacity: 1 - progress,
                yPercent: -100 * progress, // Moves up to -100% (above, hidden)
              });
              // Next text: slides UP from below and fades IN
              gsap.set(nextEl, {
                opacity: progress,
                yPercent: 100 * (1 - progress), // From 100% (below) to 0% (in position)
              });
            },
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white w-full mt-20">
      {/* Section Header */}
      <div className="w-full px-6 md:px-20 py-20 md:py-32">
        <div className="mb-4">
          <span className="text-primary-red border border-primary-red rounded-full px-4 py-1 text-sm font-medium inline-block">
            What We Do
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight font-primary">
          We Design{' '}
          <span className="font-playfair italic">Brands</span>
          {' '}That{' '}
          <span className="font-playfair italic">Speak</span>
          {' '}To Audiences
        </h1>
      </div>

      {/* Scroll Section */}
      <div ref={sectionRef} className="relative w-full">
        
        {/* ── LEFT: FIXED text container (doesn't scroll) ── */}
        <div 
          ref={leftContainerRef}
          className="hidden md:flex fixed left-20 top-0 w-1/2 h-screen items-center px-6 md:px-20 overflow-hidden z-10 pointer-events-none"
        >
          {/* This container holds all text items stacked on top of each other */}
          <div className="relative w-full h-64">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (textItemRefs.current[index] = el)}
                className="absolute inset-0 flex flex-col justify-center will-change-transform pointer-events-auto"
              >
                <div className="w-16 h-px bg-purple-600/50 mb-6"></div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-primary">
                  {project.niche.split(' ').map((word, i, arr) => (
                    <span key={i} className={i === arr.length - 1 ? 'font-playfair italic' : ''}>
                      {word}{i !== arr.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-400 max-w-md mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                <button className="text-primary-red flex items-center gap-2 hover:text-red-400 transition-colors font-medium text-lg group w-fit">
                  See More{' '}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: scrolling image panels ── */}
        <div className="w-full md:w-1/2 md:ml-auto mr-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`right-panel-${index} flex flex-col gap-6 px-6 md:px-12 py-20 items-center justify-center min-h-screen`}
            >
              {/* Mobile: show heading inline */}
              <div className="block md:hidden w-full mb-6">
                <h2 className="text-4xl font-bold mb-4 leading-tight font-primary">
                  {project.niche.split(' ').map((word, i, arr) => (
                    <span key={i} className={i === arr.length - 1 ? 'font-playfair italic' : ''}>
                      {word}{i !== arr.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4">{project.description}</p>
                <button className="text-purple-500 flex items-center gap-2 font-medium group">
                  See More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
              </div>

              {/* Image pair */}
              <div className="flex flex-row gap-6 w-full items-start justify-center">
                {project.images.map((src, imgIdx) => (
                  <div
                    key={imgIdx}
                    className={`w-1/2 rounded-3xl overflow-hidden shadow-2xl bg-zinc-800 ${imgIdx % 2 !== 0 ? 'mt-20' : ''}`}
                    style={{ aspectRatio: '3/4' }}
                  >
                    <img
                      src={src}
                      alt={`${project.niche} Project ${imgIdx + 1}`}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="w-full flex justify-center py-16">
          <button 
            className="relative flex gap-3 items-center px-8 py-4 rounded-[7px] transition-transform hover:scale-105"
            style={{ background: 'transparent', border: 'none' }}
          >
            {/* Animated gradient border background */}
            <span className="absolute inset-[-1.5px] rounded-[8px] bg-gradient-to-r from-white via-gray-400 to-white" style={{
              backgroundSize: '200% 100%',
              animation: 'shine 5s linear infinite'
            }}></span>
            
            {/* Inner red gradient background */}
            <span className="absolute inset-0 rounded-[7px]" style={{ backgroundImage: "linear-gradient(179deg, rgb(153, 32, 32) 38.369%, rgb(255, 53, 53) 131.85%)" }}></span>
          
            <span className="font-medium text-xl text-white tracking-[-0.48px] leading-normal relative z-10 font-primary">
              View All Projects
            </span>
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default PortfolioSection;
