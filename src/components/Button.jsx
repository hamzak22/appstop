"use client"
import { FiArrowRight } from 'react-icons/fi';

const Button = ({ 
  children, 
  onClick, 
  icon, 
  className = '', 
  style = {},
  iconPosition = 'left',
  href
}) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`relative flex gap-2 md:gap-3 items-center px-4 py-2.5 md:px-5 md:py-3 rounded-[7px] transition-transform hover:scale-105 inline-flex z-0 ${className}`}
      style={{ background: 'transparent', border: 'none', textDecoration: 'none', ...style }}
    >
      {/* Animated gradient border background */}
      <span className="absolute inset-[-1.5px] rounded-[8px] bg-linear-to-r from-white via-gray-400 to-white -z-10" style={{
        backgroundSize: '200% 100%',
        animation: 'shine 5s linear infinite'
      }}></span>
      
      {/* Inner red gradient background */}
      <span className="absolute inset-0 rounded-[7px] -z-10" style={{ backgroundImage: "linear-gradient(179deg, rgb(153, 32, 32) 38.369%, rgb(255, 53, 53) 131.85%)" }}></span>
      
      {iconPosition === 'left' && icon && (
          <span className="relative z-10">{icon}</span>
      )}
      
      <span className="font-medium text-lg md:text-xl text-white tracking-[-0.48px] leading-normal relative z-10 font-primary">
        {children}
      </span>

      {iconPosition === 'right' && icon && (
          <span className="relative z-10 text-white">{icon}</span>
      )}
    </Component>
  );
};

export default Button;
