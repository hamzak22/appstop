import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../reactbits/ContactForm.jsx';

const serviceDetails = {
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform Apps',
    description:
      'We build native and cross-platform mobile apps engineered for performance, scalability, and seamless user experiences — from first prototype to global launch.',
    bannerImage:
      'https://res.cloudinary.com/dls57pxvo/image/upload/v1773177092/vita_vji4yh.jpg',
    features: [
      'iOS & Android development',
      'Cross-platform (React Native & Flutter)',
      'API integration & backend architecture',
      'App Store optimization & deployment',
      'Post-launch support & iteration',
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Research-Driven Interfaces',
    description:
      'We craft intuitive, research-driven interfaces that turn complex workflows into effortless interactions — so every tap, swipe, and scroll feels intentional.',
    bannerImage:
      'https://res.cloudinary.com/dls57pxvo/image/upload/v1773177638/UIUX_cywdsd.jpg',
    features: [
      'User research & persona mapping',
      'Wireframing & interactive prototyping',
      'Visual UI design & design systems',
      'Usability testing & validation',
      'Responsive & adaptive layouts',
    ],
  },
  'ux-consultation': {
    title: 'UX Consultation',
    subtitle: 'Actionable UX Strategy',
    description:
      'We audit existing products, identify friction points, and deliver actionable strategies that measurably improve retention, engagement, and conversion.',
    bannerImage:
      'https://res.cloudinary.com/dls57pxvo/image/upload/v1773177638/UIUX_cywdsd.jpg',
    features: [
      'UX audits & heuristic reviews',
      'Information architecture optimization',
      'Conversion-focused recommendations',
      'Accessibility & compliance guidance',
      'Stakeholder workshops & road-mapping',
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 font-primary">
        <h1 className="text-4xl font-medium tracking-tight text-[#2f2f2f]">Service not found</h1>
        <Link to="/services" className="text-lg text-[#ff4355] underline underline-offset-4">
          View all services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F4F5] font-primary">
      {/* Hero */}
      <div className="relative flex h-[55vh] min-h-[420px] items-end overflow-hidden bg-[#050505]">
        <img
          src={service.bannerImage}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 md:px-12">
          <Link
            to="/#services"
            className="mb-5 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            &larr; Back to services
          </Link>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-3 text-lg text-white/70 sm:text-xl">{service.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2f2f2f] sm:text-3xl">
              Overview
            </h2>
            <p className="mt-5 text-base leading-8 text-[#404040]/90 sm:text-lg">
              {service.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2f2f2f] sm:text-3xl">
              What&rsquo;s Included
            </h2>
            <ul className="mt-5 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-base leading-7 text-[#404040]/90 sm:text-lg"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff4355]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactForm />
    </div>
  );
};

export default ServiceDetail;
