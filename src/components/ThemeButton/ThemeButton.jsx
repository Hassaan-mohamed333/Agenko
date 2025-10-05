import React from 'react';

const ThemeButton = ({ 
  text = "Learn More", 
  href = "#", 
  icon = "fas fa-arrow-right",
  onClick,
  className = ""
}) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center bg-[var(--agenko-primary-green)] py-[10px] px-[30px] rounded-[30px] text-[var(--agenko-heading-dark)] font-semibold relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--agenko-primary-green)]/30 group ${className}`}
    >
      <span className="relative transition-all duration-[0.8s] ease-[cubic-bezier(0.15,0.85,0.31,1)] group-hover:-translate-y-[150%]">
        <span className="transition-all duration-[0.8s] ease-[cubic-bezier(0.15,0.85,0.31,1)] group-hover:opacity-0">
          {text}
        </span>
        <span className="inline-block absolute w-full top-1/2 left-1/2 -translate-x-1/2 translate-y-[80%] opacity-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.15,0.85,0.31,1)] group-hover:translate-y-[100%] group-hover:opacity-100">
          {text}
        </span>
      </span>
      {icon && (
        <span className="ml-[10px] transition-all duration-300 group-hover:rotate-[-45deg]">
          <i className={icon}></i>
        </span>
      )}
    </a>
  );
};

export default ThemeButton;