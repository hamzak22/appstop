import React from 'react';
import '../App.css';
import logo from '../assets/logo.svg';
import LogoLoop from '../reactbits/LogoLoop/LogoLoop.jsx';
import FlowingMenu from '../reactbits/FlowingMenu/FlowingMenu.jsx';
import Masonry from '../reactbits/Masonry.jsx';
import MagicBento from '../reactbits/MagicBento.jsx';
import TextLoop from '../reactbits/TextLoop/TextLoop.jsx';
import ClientReviews from '../reactbits/ClientReviews.jsx';
import Comparison from '../reactbits/Comparison.jsx';
import FAQ from '../reactbits/FAQ.jsx';
import ContactForm from '../reactbits/ContactForm.jsx';
import Button from '../components/Button.jsx';
import { FaReact } from 'react-icons/fa6';
import {
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiVite
} from 'react-icons/si';
import PortfolioSection from '../reactbits/PortfolioScroll.jsx';

// Figma design assets
const imgVector = "https://www.figma.com/api/mcp/asset/9c1b1105-69a8-4498-a6b6-fbf9bd0be4b1";
const imgMaterialSymbolsCall = "https://www.figma.com/api/mcp/asset/3152bf59-f60a-45eb-8b4d-04554f0f446b";

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
    label: '∞'
  },
  {
    color: '#0a0a0a',
    title: 'Lifetime Support',
    description: 'With our lifetime support, you\'re never alone. We\'ll be there for you at every stage with necessary guidance and assistance whenever you need it.',
    label: '◆'
  },
  {
    color: '#0a0a0a',
    title: 'Personalised Plans',
    description: 'Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment.',
    label: '$'
  },
  {
    color: '#0a0a0a',
    title: 'Custom Design Solutions',
    description: 'Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget.',
    label: '◯'
  },
  {
    color: '#0a0a0a',
    title: '24/7 Customer Support',
    description: 'Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.',
    label: '★'
  }
];

const Home = () => {
  return (
    <>
      <div className="bg-[#050505] relative w-full min-h-[112vh] overflow-hidden pb-30">
        {/* Background gradient vector */}
        <div className="absolute h-150 left-41 top-[617.69px] w-[1930.891px]">
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

      {/* Industries Section */}
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
      </div>

      <div>
        <PortfolioSection/>
      </div>

      {/* Our Recent Work Section */}
      <div className='relative min-h-fit w-full bg-[#b52d2d] px-6 md:px-20 lg:px-40 py-40 pb-60'>
        {/* Text Loop - Above Masonry */}
        <TextLoop
          items={['Figma', 'Social Media', 'Framer', 'Branding', 'Dashboard', 'Logos', 'Webflow', 'Slide Decks', 'Mobile Apps']}
          speed={60}
          direction="left"
          separator="•"
          textClassName="text-white text-base font-medium tracking-wide"
          separatorClassName="text-white mx-2"
          className="mb-8"
        />

        <Masonry
          items={[
            {
              id: "1",
              img: "https://picsum.photos/id/1015/600/900",
              url: "#",
              height: 400,
            },
            {
              id: "2",
              img: "https://picsum.photos/id/1011/600/750",
              url: "#",
              height: 250,
            },
            {
              id: "3",
              img: "https://picsum.photos/id/1020/600/800",
              url: "#",
              height: 500,
            },
            {
              id: "4",
              img: "https://picsum.photos/id/1025/600/700",
              url: "#",
              height: 350,
            },
            {
              id: "5",
              img: "https://picsum.photos/id/1035/600/850",
              url: "#",
              height: 450,
            },
            {
              id: "6",
              img: "https://picsum.photos/id/1040/600/600",
              url: "#",
              height: 300,
            },
          ]}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />

        {/* Text Loop - Below Masonry */}
        <TextLoop
          items={['UI/UX', 'App Design', 'Web Design', 'Prototyping', 'Wireframes', 'User Research', 'Design Systems', 'Illustrations']}
          speed={60}
          direction="right"
          separator="•"
          textClassName="text-white text-base font-medium tracking-wide"
          separatorClassName="text-white mx-2"
          className="mt-8"
        />
      </div>

      {/* Magic Bento Section */}
      <div className='relative w-full bg-black px-6 md:px-20 lg:px-40 py-20 -mt-20 rounded-t-[50px]'>
        <div className='flex flex-col items-center mb-12'>
          <h2 className='text-center text-4xl md:text-5xl font-bold text-white font-primary leading-tight'>
            We Design for the Future to
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
