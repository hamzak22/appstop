import React from 'react';
import '../App.css';
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
import  imgMaterialSymbolsCall  from '../../public/images/call_icon.png';
import imgVector from '../../public/images/bg-gradient.png';
import space3d from '../../public/images/space-3d.png';
import star3d from '../../public/images/star-3d.png';
import rocket1 from '../../public/images/rocket1.png';
import rocket2 from '../../public/images/rocket2.png';
import iconInfinity from '../../public/images/bento-icons/infinity.png';
import iconLifetime from '../../public/images/bento-icons/lifetime.png';
import iconDollar from '../../public/images/bento-icons/dollar.png';
import iconClock from '../../public/images/bento-icons/clock.png';
import iconStar from '../../public/images/bento-icons/star.png';


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
      <div className="bg-[#050505] relative w-full min-h-[112vh] overflow-hidden pb-30">
        {/* 3D Elements */}
        <img src={space3d} alt="Space 3d element" className="absolute top-[5%] right-0 w-[400px] z-10 pointer-events-none object-contain animate-float" />
        <img src={star3d} alt="Star 3d element" className="absolute top-[45%] left-0 w-[300px] z-10 pointer-events-none object-contain animate-float" style={{ animationDelay: '1s' }} />

        {/* Background gradient vector */}
        <div className="absolute h-150 left-41 top-[400px] w-[1930.891px]">
          <div className="absolute inset-[-56.61%_-16.33%]">
            <img alt="" className="block max-w-none size-full" src={imgVector} />
          </div>
        </div>

        {/* Logo (Temporary place, should probably be in Navbar later)
        <div className="absolute left-1/2 top-30.5 -translate-x-1/2 z-10">
          <img src={logo} alt="appstop" className="h-auto w-auto" />
        </div> */}

        {/* Main content */}
        <div className="absolute left-1/2 top-1/2 mt-15 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12 items-center w-214.5 max-w-[90vw]">
          {/* Text content */}
          <div className="flex flex-col gap-12.25 items-center w-full">
            <p className="font-semibold text-[20px] text-center text-white tracking-normal leading-normal font-primary">
              Leading App Development Agency
            </p>
            
            <h1 className="font-bold text-[72px] text-center text-white tracking-[-1.44px] leading-tight w-full whitespace-pre-wrap font-primary">
              <span>We </span>
              <span className="font-semibold italic font-playfair">Develop</span>
              <span> Apps That Drive </span>
              <span className="font-medium italic font-playfair">Results</span>
            </h1>

            {/* Pill badge */}
            <div className="bg-white/5 border border-red-400 rounded-full px-32 py-2">
              <p className="font-semibold text-base text-center text-white tracking-normal leading-normal font-primary">
                Developing Apps Across 8+ Countries
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            href="#contact"
            icon={<img alt="" className="size-6 relative z-10" src={imgMaterialSymbolsCall} />}
          >
            Book a Call
          </Button>

          <div className="w-screen pt-6 flex justify-center mb-40">
            <LogoLoop
              logos={techLogos}
              width="60%"
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
        <img src={rocket2} alt="Space 3d element" className="absolute top-[5%] right-0 w-[400px] z-10 pointer-events-none object-contain animate-float" />
        <img src={rocket1} alt="Star 3d element" className="absolute top-[45%] left-0 w-[300px] z-10 pointer-events-none object-contain animate-float" style={{ animationDelay: '1s' }} />
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
