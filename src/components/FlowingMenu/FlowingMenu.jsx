import React from 'react';

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden bg-[#0E0F11]">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [edge, setEdge] = React.useState('top');

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const closestEdge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    setEdge(closestEdge);
    setIsHovered(true);
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const closestEdge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    setEdge(closestEdge);
    setIsHovered(false);
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-[#060010] uppercase font-bold text-[4vh] leading-[1.2] px-4">
        {text}
      </span>
      <div
        className="w-[150px] h-[80px] mx-8 rounded-[30px] bg-cover bg-center flex-shrink-0"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div 
      className="flex-1 relative overflow-hidden text-center border-t border-white/10 first:border-t-0" 
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-bold text-white text-[4vh] transition-colors duration-300 hover:text-[#9CFE4F]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ fontFamily: '"Source Sans 3", sans-serif' }}
      >
        {text}
      </a>
      
      {/* Marquee Overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white transition-transform duration-600 ease-out ${
          isHovered 
            ? 'translate-y-0' 
            : edge === 'top' 
              ? '-translate-y-full' 
              : 'translate-y-full'
        }`}
        ref={marqueeRef}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div 
          className={`h-full w-[200%] flex transition-transform duration-600 ease-out ${
            isHovered ? 'translate-y-0' : edge === 'top' ? 'translate-y-full' : '-translate-y-full'
          }`}
          ref={marqueeInnerRef}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="flex items-center relative h-full w-[200%] animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo Component
export default function FlowingMenuDemo() {
  const demoItems = [
    { 
      link: '#development', 
      text: 'Development', 
      image: '/public/images/digital-agency/team/team1.jpg'
    },
    { 
      link: '#design', 
      text: 'UI/UX Design', 
      image: '/public/images/digital-agency/team/team2.jpg'
    },
    { 
      link: '#graphics', 
      text: 'Graphics', 
      image: ' /public/images/digital-agency/team/team3.jpg'
    },
    { 
      link: '#marketing', 
      text: 'Marketing', 
      image: '/public/images/digital-agency/team/team4.jpg'
    }
  ];

  return (
    <div className="w-full h-screen bg-[#0E0F11]">
      <FlowingMenu items={demoItems} />
    </div>
  );
}