import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForm from '../../../reactbits/ContactForm.jsx';
import { getServiceBySlug, getServicePath, servicesData } from '@/data/Services.js';

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | AppStop',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} | AppStop`,
    description: service.description
  };
}

const ServiceDetailPage = async ({ params }) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const overview = service.detail?.overview ?? service.description;
  const subtitle = service.detail?.subtitle ?? service.description;
  const outcomes = service.detail?.outcomes ?? service.features;
  const process = service.detail?.process ?? [];

  return (
    <div className="min-h-screen bg-[#050505]">
      <section className="relative overflow-hidden px-6 pb-20 pt-44 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute -right-40 -top-32 h-104 w-104 rounded-full bg-primary-red/25 blur-[130px]"></div>
        <div className="mx-auto max-w-6xl">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-white/40"
          >
            Back To Services
          </Link>

          <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl font-primary">
            {service.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg font-primary">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {servicesData.map((item) => {
              const isActive = item.slug === service.slug;

              return (
                <Link
                  key={item.slug}
                  href={getServicePath(item.slug)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-primary-red bg-primary-red text-white'
                      : 'border-white/20 text-white/75 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rounded-t-[50px] bg-[#F4F4F5] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm">
            <img
              src={service.bannerImage}
              alt={service.bannerAlt ?? `${service.title} banner`}
              className="h-full min-h-65 w-full object-cover"
            />
          </div>

          <div className="rounded-4xl border border-gray-200 bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-red">Overview</p>
            <p className="mt-4 text-base leading-8 text-gray-700">{overview}</p>

            <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-primary-red">Primary Features</p>
            <ul className="mt-4 space-y-2 text-gray-800">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-primary-red"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-4xl border border-gray-200 bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-red">Expected Outcomes</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              {outcomes.map((item) => (
                <li key={item} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-gray-200 bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-red">Typical Process</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              {process.map((step, index) => (
                <li key={step} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-xs font-semibold text-primary-red">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary-red">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.tools.map((iconUrl, index) => (
                <div
                  key={`${service.slug}-tool-${index}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white"
                >
                  <img src={iconUrl} alt={`${service.title} tool icon`} className="h-5 w-5 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ServiceDetailPage;
