"use client";
import LogoLoop from '../reactbits/LogoLoop/LogoLoop.jsx';
import MagicBento from '../reactbits/MagicBento.jsx';
import ClientReviews from '../reactbits/ClientReviews.jsx';
import Comparison from '../reactbits/Comparison.jsx';
import FAQ from '../reactbits/FAQ.jsx';
import ContactForm from '../reactbits/ContactForm.jsx';
import Button from '../components/Button.jsx';
import ServicesShowcase from '../components/ServicesShowcase.jsx';
import { FaReact } from 'react-icons/fa6';
import {
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiVite
} from 'react-icons/si';
import PortfolioSection from '../reactbits/PortfolioScroll.jsx';
import AboutAppStop from '../components/AboutAppStop.jsx';

const imgMaterialSymbolsCall  = '/images/call_icon.png';
const imgVector = '/images/bg-gradient.png';
const space3d = '/images/space-3d.png';
const star3d = '/images/star-3d.png';
const rocket1 = '/images/rocket1.png';
const rocket2 = '/images/rocket2.png';
const iconInfinity = '/images/bento-icons/infinity.png';
const iconLifetime = '/images/bento-icons/lifetime.png';
const iconDollar = '/images/bento-icons/dollar.png';
const iconClock = '/images/bento-icons/clock.png';
const iconStar = '/images/bento-icons/star.png';


// Figma design assets
// const imgVector = "https://www.figma.com/api/mcp/asset/9c1b1105-69a8-4498-a6b6-fbf9bd0be4b1";
// const imgMaterialSymbolsCall = "https://www.figma.com/api/mcp/asset/3152bf59-f60a-45eb-8b4d-04554f0f446b";

const techLogos = [
  { title: 'React', node: <FaReact className="text-white/80" /> },
  { title: 'Vite', node: <SiVite className="text-white/80" /> },
  { title: 'JavaScript', node: <SiJavascript className="text-white/80" /> },
  { title: 'Node.js', node: <SiNodedotjs className="text-white/80" /> },
  { title: 'Tailwind CSS', node: <SiTailwindcss className="text-white/80" /> }
];

const sellingPointsData = [
  {
    color: '#0a0a0a',
    title: 'Unlimited Revisions',
    description: 'We\'re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.',
    label: '∞',
    icon: iconInfinity
  },
  {
    color: '#0a0a0a',
    title: 'Lifetime Support',
    description: 'With our lifetime support, you\'re never alone. We\'ll be there for you at every stage with necessary guidance and assistance whenever you need it.',
    label: '◆',
    icon: iconLifetime
  },
  {
    color: '#0a0a0a',
    title: 'Personalised Plans',
    description: 'Get top-quality service without breaking the bank. ',
    label: '$',
    icon: iconDollar
  },
  {
    color: '#0a0a0a',
    title: 'Custom Design Solutions',
    description: 'Our easy payment options are completely flexible.',
    label: '◯',
    icon: iconClock
  },
  {
    color: '#0a0a0a',
    title: '24/7 Customer Support',
    description: 'Benefit from the expertise of our carefully chosen customer support team',
    label: '★',
    icon: iconStar
  }
];

const Home = () => {
  return (
    <>
      <div className="bg-[#050505] relative w-full min-h-[80vh] lg:min-h-[112vh] flex flex-col justify-end lg:block overflow-hidden pt-40 lg:pt-0 pb-4 lg:pb-30">
        {/* 3D Elements */}
        <img src={space3d} alt="Space 3d element" className="absolute top-[2%] lg:top-[5%] -right-16 lg:right-0 w-48 lg:w-[400px] z-10 pointer-events-none object-contain animate-float opacity-60 lg:opacity-100" />
        <img src={star3d} alt="Star 3d element" className="absolute bottom-20 lg:bottom-auto lg:top-[45%] -left-6 lg:left-0 w-28 lg:w-[300px] z-10 pointer-events-none object-contain animate-float opacity-60 lg:opacity-100" style={{ animationDelay: '1s' }} />

        {/* Background gradient vector - Mobile */}
        <div className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-0 w-[1000px] h-[80%] pointer-events-none z-0">
          <img alt="" className="w-full h-full object-cover max-w-none opacity-80 mix-blend-screen" src={imgVector} />
        </div>
        {/* Background gradient vector - Desktop */}
        <div className="hidden lg:block absolute h-150 left-41 top-[400px] w-[1930.891px] pointer-events-none z-0">
          <div className="absolute inset-[-56.61%_-16.33%]">
            <img alt="" className="block max-w-none size-full mix-blend-screen" src={imgVector} />
          </div>
        </div>

        {/* Main content */}
        <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:mt-15 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col gap-6 lg:gap-12 items-center w-full lg:w-214.5 max-w-[90vw] z-20 mx-auto px-4 lg:px-0">
          {/* Text content */}
          <div className="flex flex-col gap-5 lg:gap-12.25 items-center w-full lg:mt-0 mt-8">
            <p className="font-semibold text-xs lg:text-[20px] text-center text-white tracking-wider lg:tracking-normal leading-normal font-primary uppercase lg:normal-case">
              Leading App Development Agency
            </p>
            
            <h1 className="font-bold text-[36px] lg:text-[72px] text-center text-white tracking-tight lg:tracking-[-1.44px] leading-[1.1] lg:leading-tight w-full whitespace-pre-wrap font-primary">
              <span>We </span>
              <span className="font-semibold italic font-playfair">Develop</span>
              <span> Apps That Drive </span>
              <span className="font-medium italic font-playfair">Results</span>
            </h1>

            {/* Pill badge */}
            <div className="bg-white/5 border border-red-400 rounded-full px-6 lg:px-32 py-2 flex items-center justify-center">
              <p className="font-semibold text-[11px] lg:text-base text-center text-white tracking-normal leading-normal font-primary m-0">
                Developing Apps Across 8+ Countries
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-2 lg:mt-0">
            <Button 
              href="#contact"
              icon={<img alt="" className="size-4 lg:size-6 relative z-10" src={imgMaterialSymbolsCall} />}
            >
              Book a Call
            </Button>
          </div>

          <div className="w-screen pt-10 lg:pt-6 flex justify-center pb-2 lg:pb-0 lg:mb-40">
            <div className="w-full lg:w-[60%] lg:hidden">
              <LogoLoop
                logos={techLogos}
                width="100%"
                logoHeight={30}
                gap={30}
                speed={60}
                fadeOut
                fadeOutColor="transparent"
                style={{ '--logoloop-fadeSize': 'clamp(40px,18%,220px)' }}
                ariaLabel="Tech stack logos"
              />
            </div>
            <div className="w-full lg:w-[60%] hidden lg:block">
              <LogoLoop
                logos={techLogos}
                width="100%"
                logoHeight={40}
                gap={50}
                speed={60}
                fadeOut
                fadeOutColor="transparent"
                style={{ '--logoloop-fadeSize': 'clamp(40px,18%,220px)' }}
                ariaLabel="Tech stack logos"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About AppStop Section */}
      <AboutAppStop />

      {/* Industries Section
      <div className='relative w-full bg-white px-40 pt-20 rounded-t-[100px] -mt-24'>
        <div className='flex justify-center mb-6'>
          <div className='bg-primary-red/10 rounded-full px-4 py-1.5 border border-primary-red'>
            <p className='text-center text-sm font-semibold text-primary-red'>Industry Projects</p>
          </div>
        </div>
        <h2 className='text-center text-5xl font-bold mb-1 font-primary'>Proven Success In</h2>
        <h2 className='text-center text-5xl font-semibold text-primary-red italic font-playfair'>Every Industry</h2>
        <div className='h-[500px] mt-20'>
          <FlowingMenu
            items={[
              { link: '#', text: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300' },
              { link: '#', text: 'Finance', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300' },
              { link: '#', text: 'E-Commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300' },
              { link: '#', text: 'Education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300' },
              { link: '#', text: 'Entertainment', image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=300' },
            ]}
            textColor="#111"
            bgColor="#fff"
            marqueeBgColor="#D52020"
            marqueeTextColor="#fff"
            borderColor="#ddd"
          />
        </div>
      </div> */}

      <div>
        <PortfolioSection/>
      </div>

      <ServicesShowcase />

      {/* Magic Bento Section */}
      <div className='relative w-full bg-black px-6 md:px-20 lg:px-40 py-20 mt-0 rounded-t-[50px]'>
        <img src={rocket2} alt="Space 3d element" className="absolute  top-[13%] md:top-[5%] right-0 w-[130px] md:w-[400px] z-10 pointer-events-none object-contain animate-float" />
        <img src={rocket1} alt="Star 3d element" className="absolute top-[90%] md:top-[45%] left-0 w-[120px] md:w-[300px] z-10 pointer-events-none object-contain animate-float" style={{ animationDelay: '1s' }} />
        <div className='flex flex-col items-center mb-12'>
          <h2 className='text-center text-4xl md:text-5xl font-bold text-white font-primary leading-tight'>
            We Develop for the Future to
          </h2>
          <h2 className='text-center text-4xl md:text-5xl font-semibold text-white italic font-playfair'>
            Drive Today's Success
          </h2>
        </div>
        
        <div className='flex justify-center'>
          <MagicBento 
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="213, 32, 32"
            disableAnimations={false}
            cardData={sellingPointsData}
          />
        </div>
      </div>

      {/* Comparison Section */}
      <Comparison />

      {/* Client Reviews Section */}
      <ClientReviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
};

export default Home;
