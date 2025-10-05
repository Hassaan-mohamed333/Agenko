import React from 'react';

const ThemeButton = ({ text, href = "#", className = "" }) => {
  return (
    <a 
      href={href} 
      className={`inline-flex items-center justify-center bg-[var(--primary-color)] px-8 py-3 rounded-full text-[var(--heading-color)] font-semibold relative overflow-hidden transition-all  estimate-button group ${className}`}
    >
    <span className="relative overflow-hidden block">
  <span className="block transition-transform duration-400 group-hover:-translate-y-full">
    {text}
  </span>
  <span className="absolute top-0 left-0 w-full text-white transform translate-y-full transition-all duration-400 group-hover:translate-y-0 whitespace-nowrap">
    {text}
  </span>
</span>

    </a>
  );
};

export default ThemeButton;