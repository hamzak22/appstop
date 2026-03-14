"use client"

import Link from 'next/link';
import { getServicePath, servicesData } from '@/data/Services.js';

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
          {service.homeDescription ?? service.description}
        </p>
      </div>

      <ul className={`space-y-1 text-sm leading-7 font-primary sm:text-[15px] ${palette.list}`}>
        {service.homePoints.map(point => (
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
      {servicesData.map((service) =>
        service.homeFloatImage ? (
          <DesktopFloat
            key={`float-${service.id}`}
            src={service.homeFloatImage.src}
            alt={service.homeFloatImage.alt}
            style={service.homeFloatImage.desktopStyle}
          />
        ) : null
      )}

      {/* Cards — no images inside */}
      {servicesData.map((service) => {
        const isDark = service.homeTheme === 'dark';
        return (
          <Link
            href={getServicePath(service.slug)}
            key={service.id}
            className="absolute block overflow-visible px-10 py-9 transition-[scale,box-shadow] duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_32px_72px_rgba(18,18,18,0.16)]"
            style={{ borderRadius: '34px', ...service.homeCardStyle }}
          >
            {service.homeAccentGlow && (
              <div
                className="pointer-events-none absolute bottom-0 right-10 h-28 w-44 rounded-full blur-3xl"
                style={{ backgroundColor: service.homeAccentGlow }}
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
    {servicesData.map((service) => {
      const isDark = service.homeTheme === 'dark';
      const mobileFloat = service.homeFloatImage?.mobile;

      return (
        <div key={service.id} className="flex flex-col">
          {/* Image BEFORE card */}
          {mobileFloat?.before && service.homeFloatImage && (
            <MobileFloat
              src={service.homeFloatImage.src}
              alt={service.homeFloatImage.alt}
              alignClass={mobileFloat.align}
              imgClass={mobileFloat.imgClass}
            />
          )}

          <Link
            href={getServicePath(service.slug)}
            className={`relative block overflow-hidden px-6 py-7 sm:px-8 sm:py-8 transition-[scale,box-shadow] duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_32px_72px_rgba(18,18,18,0.16)] ${service.mobileCardOffset ?? ''}`}
            style={{ borderRadius: '30px', ...service.homeCardStyle }}
          >
            {service.homeAccentGlow && (
              <div
                className="pointer-events-none absolute bottom-0 right-6 h-28 w-40 rounded-full blur-3xl"
                style={{ backgroundColor: service.homeAccentGlow }}
                aria-hidden="true"
              />
            )}
            <ServiceCardContent service={service} dark={isDark} />
          </Link>

          {/* Image AFTER card */}
          {!mobileFloat?.before && mobileFloat && service.homeFloatImage && (
            <MobileFloat
              src={service.homeFloatImage.src}
              alt={service.homeFloatImage.alt}
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