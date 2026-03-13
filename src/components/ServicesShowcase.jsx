"use client"

import Link from 'next/link';

const services = [
  {
    id: '01',
    slug: '/services/mobile-app-development',
    title: 'Mobile App Development',
    description:
      'We build native and cross-platform mobile apps engineered for performance, scalability, and seamless user experiences — from first prototype to global launch.',
    points: [
      'iOS & Android development',
      'Cross-platform (React Native & Flutter)',
      'API integration & backend architecture',
      'App Store optimization & deployment',
      'Post-launch support & iteration'
    ],
    image: 'https://res.cloudinary.com/dls57pxvo/image/upload/v1773177092/vita_vji4yh.jpg',
    imageAlt: 'Mobile app development project preview',
    desktopCardStyle: {
      top: '0px',
      left: '16px',
      width: '72%',
      background: '#ff4355',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.55)',
      boxShadow: '0 22px 55px rgba(18, 18, 18, 0.08)',
      transform: 'rotate(-1.4deg)'
    },
    // Absolute position relative to the canvas wrapper — rendered OUTSIDE card
    desktopFloatStyle: {
      position: 'absolute',
      top: '18px',
      right: '20px',
      width: 'clamp(210px, 21vw, 262px)',
      transform: 'rotate(-11deg)',
    },
    mobileCardOffset: 'md:mr-16',
    // Mobile: floated image appears AFTER the card, pushed to the right
    mobileFloat: { align: 'justify-end', imgClass: '-rotate-6 mr-5', before: false }
  },
  {
    id: '02',
    slug: '/services/ui-ux-design',
    title: 'UI/UX Design',
    description:
      'We craft intuitive, research-driven interfaces that turn complex workflows into effortless interactions — so every tap, swipe, and scroll feels intentional.',
    points: [
      'User research & persona mapping',
      'Wireframing & interactive prototyping',
      'Visual UI design & design systems',
      'Usability testing & validation',
      'Responsive & adaptive layouts'
    ],
    desktopCardStyle: {
      top: '340px',
      left: '195px',
      width: '64%',
      background: '#f8f8f6',
      color: '#2f2f2f',
      border: '1px solid rgba(41,41,41,0.22)',
      boxShadow: '0 22px 55px rgba(18, 18, 18, 0.08)',
      transform: 'rotate(0.8deg)'
    },
    mobileCardOffset: 'md:ml-16 md:-mt-8',
    accentGlow: 'rgba(255, 138, 153, 0.28)'
  },
  {
    id: '03',
    slug: '/services/ux-consultation',
    title: 'UX Consultation',
    description:
      'We audit existing products, identify friction points, and deliver actionable strategies that measurably improve retention, engagement, and conversion.',
    points: [
      'UX audits & heuristic reviews',
      'Information architecture optimization',
      'Conversion-focused recommendations',
      'Accessibility & compliance guidance',
      'Stakeholder workshops & road-mapping'
    ],
    image: 'https://res.cloudinary.com/dls57pxvo/image/upload/v1773177092/nfl_q8r4qp.jpg',
    imageAlt: 'UX consultation project preview',
    desktopCardStyle: {
      top: '690px',
      left: '330px',
      width: '66%',
      background: '#ff4355',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 28px 70px rgba(255, 67, 85, 0.28)',
      transform: 'rotate(-1deg)'
    },
    // Absolute position relative to the canvas wrapper — rendered OUTSIDE card, left side
    desktopFloatStyle: {
      position: 'absolute',
      top: '688px',
      left: '16px',
      width: 'clamp(192px, 20vw, 248px)',
      transform: 'rotate(8deg)',
    },
    mobileCardOffset: 'md:ml-28 md:-mt-8',
    // Mobile: floated image appears BEFORE the card, pushed to the left
    mobileFloat: { align: 'justify-start', imgClass: 'rotate-6 ml-5', before: true }
  }
];

const textStyles = {
  light: {
    description: 'text-[#404040]/85',
    list: 'text-[#373737]/82'
  },
  dark: {
    description: 'text-white/88',
    list: 'text-white/88'
  }
};

// Desktop: absolutely positioned in the canvas, sits behind cards
const DesktopFloat = ({ src, alt, style }) => (
  <div className="pointer-events-none" style={style} aria-hidden="true">
    <div className="w-full rounded-3xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(16,16,16,0.22)]">
      <div className="overflow-hidden rounded-[1.15rem] bg-[#ececec]" style={{ aspectRatio: '1.55 / 1' }}>
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  </div>
);

// Mobile: sibling element rendered before/after its card
const MobileFloat = ({ src, alt, alignClass, imgClass }) => (
  <div className={`flex ${alignClass} pointer-events-none`} aria-hidden="true">
    <div
      className={`rounded-2xl border border-black/10 bg-white p-2 shadow-[0_12px_36px_rgba(0,0,0,0.14)] ${imgClass ?? ''}`}
      style={{ width: '11rem', flexShrink: 0 }}
    >
      <div className="overflow-hidden rounded-xl bg-[#ececec]" style={{ aspectRatio: '1.55 / 1' }}>
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  </div>
);

const ServiceCardContent = ({ service, dark }) => {
  const palette = dark ? textStyles.dark : textStyles.light;

  return (
    <div className="relative z-10 grid gap-7 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.82fr)] md:items-end md:gap-10">
      <div style={{ maxWidth: '27rem' }}>
        <h3 className="text-[2rem] font-medium leading-none tracking-[-0.055em] text-current sm:text-[2.6rem] lg:text-[3.25rem] font-primary">
          <span className="mr-3 inline-block">{service.id}</span>
          <span>{service.title}</span>
        </h3>

        <p className={`mt-7 max-w-[24rem] text-base leading-8 font-primary ${palette.description}`}>
          {service.description}
        </p>
      </div>

      <ul className={`space-y-1 text-sm leading-7 font-primary sm:text-[15px] ${palette.list}`}>
        {service.points.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const DesktopCanvas = () => (
  <div className="hidden xl:block">
    <div className="relative mx-auto mt-16 w-full" style={{ maxWidth: '1180px', minHeight: '1060px' }}>
      {/* Float images first → cards render on top in natural DOM stacking order */}
      {services.map(service =>
        service.image ? (
          <DesktopFloat
            key={`float-${service.id}`}
            src={service.image}
            alt={service.imageAlt}
            style={service.desktopFloatStyle}
          />
        ) : null
      )}

      {/* Cards — no images inside */}
      {services.map(service => {
        const isDark = service.id === '01' || service.id === '03';
        return (
          <Link
            href={service.slug}
            key={service.id}
            className="absolute block overflow-visible px-10 py-9 transition-[scale,box-shadow] duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_32px_72px_rgba(18,18,18,0.16)]"
            style={{ borderRadius: '34px', ...service.desktopCardStyle }}
          >
            {service.accentGlow && (
              <div
                className="pointer-events-none absolute bottom-0 right-10 h-28 w-44 rounded-full blur-3xl"
                style={{ backgroundColor: service.accentGlow }}
                aria-hidden="true"
              />
            )}
            <ServiceCardContent service={service} dark={isDark} />
          </Link>
        );
      })}
    </div>
  </div>
);

const MobileStack = () => (
  <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-12 xl:hidden">
    {services.map(service => {
      const isDark = service.id === '01' || service.id === '03';
      const { mobileFloat } = service;

      return (
        <div key={service.id} className="flex flex-col">
          {/* Image BEFORE card */}
          {mobileFloat?.before && service.image && (
            <MobileFloat
              src={service.image}
              alt={service.imageAlt}
              alignClass={mobileFloat.align}
              imgClass={mobileFloat.imgClass}
            />
          )}

          <Link
            href={service.slug}
            className={`relative block overflow-hidden px-6 py-7 sm:px-8 sm:py-8 transition-[scale,box-shadow] duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_32px_72px_rgba(18,18,18,0.16)] ${service.mobileCardOffset ?? ''}`}
            style={{ borderRadius: '30px', ...service.desktopCardStyle }}
          >
            {service.accentGlow && (
              <div
                className="pointer-events-none absolute bottom-0 right-6 h-28 w-40 rounded-full blur-3xl"
                style={{ backgroundColor: service.accentGlow }}
                aria-hidden="true"
              />
            )}
            <ServiceCardContent service={service} dark={isDark} />
          </Link>

          {/* Image AFTER card */}
          {!mobileFloat?.before && mobileFloat && service.image && (
            <MobileFloat
              src={service.image}
              alt={service.imageAlt}
              alignClass={mobileFloat.align}
              imgClass={mobileFloat.imgClass}
            />
          )}
        </div>
      );
    })}
  </div>
);

const ServicesShowcase = () => (
  <section className="overflow-x-clip bg-white px-6 py-20 md:px-12 md:py-40 lg:px-20 xl:px-24">
    <div className="mx-auto w-full" style={{ maxWidth: '1280px' }}>
      <h2 className="text-center text-[2.8rem] font-bold leading-none tracking-tight text-[#2f2f2f] sm:text-[4rem] lg:text-[4.75rem] font-primary">
        What We <span className="italic font-playfair">Build</span>
      </h2>
      <DesktopCanvas />
      <MobileStack />
    </div>
  </section>
);

export default ServicesShowcase;