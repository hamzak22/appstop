"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);

  const data = [
    {
      title: "1. AI-Powered Design",
      desc: "Our algorithms analyze user behavior to create layouts that convert 40% better than traditional methods.",
      img: "https://images.unsplash.com/photo-1675557009875-436f09789452?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "2. Rapid Deployment",
      desc: "Go from concept to production in weeks, not months, with our streamlined CI/CD cloud infrastructure.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "3. Scalable Architecture",
      desc: "Build for the future with modular systems that grow alongside your user base without breaking a sweat.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&auto=format&fit=crop"
    },
    {
      title: "4. 24/7 Expert Support",
      desc: "Real humans, real expertise. We provide round-the-clock monitoring to ensure your business never sleeps.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&h=400&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${data.length * 100}%`,
      pin: true,
      scrub: 0,
      onUpdate: (self) => {
        const newIndex = Math.min(
          Math.floor(self.progress * data.length),
          data.length - 1
        );
        setActiveIndex(newIndex);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // Animate on index change
  useEffect(() => {
    if (prevIndexRef.current !== activeIndex) {
      const direction = activeIndex > prevIndexRef.current ? 1 : -1;
      
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 * direction, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );

      // Animate description with slight delay
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 * direction },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power3.out" }
      );

      // Animate image with scale and fade
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1, rotate: direction * 2 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "power3.out" }
      );

      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex]);

  const activeItem = data[activeIndex];

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Background number indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span 
          key={activeIndex}
          className="text-[20rem] md:text-[30rem] font-bold text-slate-200/50 select-none animate-numberPop"
        >
          {activeIndex + 1}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
          <div className='bg-primary-red/10 inline-flex w-fit rounded-full px-4 py-1.5 border border-primary-red'>
          <p className='text-center text-sm font-semibold text-primary-red'>Why Choose Us</p>
        </div>
            <h3
              ref={titleRef}
              className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              {activeItem.title}
            </h3>
            <p
              ref={descRef}
              className="text-lg text-slate-600"
            >
              {activeItem.desc}
            </p>
            <button className="px-8 py-3 bg-primary-red text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Learn More
            </button>

            {/* Progress indicators */}
            <div className="flex gap-3 pt-4">
              {data.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-12 bg-primary-red"
                      : index < activeIndex
                      ? "w-6 bg-red-400"
                      : "w-6 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10 pointer-events-none" />
            <img
              ref={imageRef}
              src={activeItem.img}
              alt={activeItem.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;