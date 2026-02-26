import './App.css'
import logo from './assets/logo.svg';
import LogoLoop from './reactbits/LogoLoop/LogoLoop.jsx';
import { FaReact } from 'react-icons/fa6';
import {
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiVite
} from 'react-icons/si';

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

function App() {
  return (
    <div className="bg-[#050505] relative w-screen h-screen overflow-hidden">
      {/* Background gradient vector */}
      <div className="absolute h-150 left-41 top-[617.69px] w-[1930.891px]">
        <div className="absolute inset-[-56.61%_-16.33%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 top-23.5 -translate-x-1/2 z-10">
        <img src={logo} alt="appstop" className="h-auto w-auto" />
      </div>

      {/* Main content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12 items-center w-214.5 max-w-[90vw]">
        {/* Text content */}
        <div className="flex flex-col gap-12.25 items-center w-full">
          <p className="font-semibold text-[20px] text-center text-white tracking-normal leading-normal font-primary" >
            Leading App Development Agency
          </p>
          
          <h1 className="font-bold text-[72px] text-center text-white tracking-[-1.44px] leading-tight w-full whitespace-pre-wrap font-primary" >
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
        <button 
          className="relative flex gap-3 items-center px-5 py-3 rounded-[7px] transition-transform hover:scale-105"
          style={{ background: 'transparent', border: 'none' }}
        >
          {/* Animated gradient border background */}
          <span className="absolute inset-[-1.5px] rounded-[8px] bg-linear-to-r from-white via-gray-400 to-white -z-10" style={{
            backgroundSize: '200% 100%',
            animation: 'shine 5s linear infinite'
          }}></span>
          
          {/* Inner red gradient background */}
          <span className="absolute inset-0 rounded-[7px] -z-10" style={{ backgroundImage: "linear-gradient(179deg, rgb(153, 32, 32) 38.369%, rgb(255, 53, 53) 131.85%)" }}></span>
          
          <img alt="" className="size-6 relative z-10" src={imgMaterialSymbolsCall} />
          <span className="font-medium text-xl text-white tracking-[-0.48px] leading-normal relative z-10 font-primary">
            Book a Call
          </span>
        </button>

        <div className="w-screen pt-6 flex justify-center">
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
  )
}

export default App
