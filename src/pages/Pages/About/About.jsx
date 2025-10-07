import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '@/components/FlowingMenu/FlowingMenu';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import CounterSection from '@/components//CounterSection/CounterSection';
import PageBanner from '@/components/PageBanner/PageBanner';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    id: 1,
    name: 'Miss. Alex Mika',
    position: 'CEO & Founder',
    image: '/images/pages/team/team1.jpg', 
  },
  {
    id: 2,
    name: 'Miss. Alex Mika',
    position: 'CEO & Founder',
    image: '/images/pages/team/team2.jpg',
  },
  {
    id: 3,
    name: 'Miss. Alex Mika',
    position: 'CEO & Founder',
    image: '/images/pages/team/team3.jpg',
  },
  {
    id: 4,
    name: 'Miss. Alex Mika',
    position: 'CEO & Founder',
    image: '/images/pages/team/team4.jpg',
  },
  {
    id: 5,
    name: 'Miss. Alex Mika',
    position: 'CEO & Founder',
    image: '/images/pages/team/team5.jpg',
  },
];
const demoItems = [
  { link: '#', text: 'Development', image: '/public/images/digital-agency/team/team1.jpg',  },
  { link: '#', text: 'UI/UX Design', image: '/public/images/digital-agency/team/team2.jpg' },
  { link: '#', text: 'Graphics', image: '/public/images/digital-agency/team/team3.jpg' },
  { link: '#', text: 'Marketing', image: '/public/images/digital-agency/team/team4.jpg' , }
];
// مكون عضو الفريق
const TeamMember = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#EBFFDC] via-[#EBFFDC] to-transparent p-8 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <h4 className="text-[#1A1A1A] font-['Source_Sans_3'] font-bold text-xl mb-2">
          {member.name}
        </h4>
        <span className="text-[#1A1A1A] font-['Source_Sans_3'] font-bold text-lg block mb-5">
          {member.position}
        </span>
        <ul className="flex justify-center gap-2">
          <li>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#9CFE4F] transition-colors duration-300">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#9CFE4F] transition-colors duration-300">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#9CFE4F] transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#9CFE4F] transition-colors duration-300">
              <FaPinterestP />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.utils.toArray('.pf_fadeup').forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
            },
          }
        );
      });

     
      gsap.utils.toArray('.pf_zoomIn').forEach((element) => {
        gsap.fromTo(
          element,
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
      
    
    <div ref={sectionRef}>
      {/* Features Section */}
      <section className="bg-[#18191B] pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-12 pf_fadeup">
                <span className="inline-block border border-[#9CFE4F] py-2 px-4 rounded-full text-white text-sm font-medium leading-none tracking-wider uppercase">
                  How We Are
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-[52px] leading-tight text-white font-bold font-['Source_Sans_3'] mt-4">
                  We are leading Innovative
                  <br />
                  marketing agency.
                </h2>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="text-box mb-10 pf_fadeup">
                <p className="text-[#9E9FA0] text-lg leading-loose">
                  Leading Innovation{' '}
                  <span className="text-[#9CFE4F] font-semibold">marketing agency</span>{' '}
                  We are a leading innovative marketing agency, specializing in creative solutions
                  that drive business growth, enhance brand visibility.
                </p>
              </div>
            </div>
          </div>

          

          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="mb-10 pf_fadeup group">
                <div className="icon mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-transparent border-2 border-[#9CFE4F]/30 transition-colors duration-300 group-hover:bg-[#9CFE4F]">
                    <i className="fas fa-search text-2xl text-[#9CFE4F] transition-colors duration-300 group-hover:text-black"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-xl text-white font-bold mb-2 font-['Source_Sans_3']">
                    Research
                  </h4>
                  <p className="text-[#9E9FA0] text-base leading-relaxed">
                    We are a leading innovative marketing agency, specializing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="mb-10 pf_fadeup group">
                <div className="icon mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-transparent border-2 border-[#9CFE4F]/30 transition-colors duration-300 group-hover:bg-[#9CFE4F]">
                    <i className="fas fa-clipboard-list text-2xl text-[#9CFE4F] transition-colors duration-300 group-hover:text-black"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-xl text-white font-bold mb-2 font-['Source_Sans_3']">
                    Planning
                  </h4>
                  <p className="text-[#9E9FA0] text-base leading-relaxed">
                    We are a leading innovative marketing agency, specializing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="mb-10 pf_fadeup group">
                <div className="icon mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-transparent border-2 border-[#9CFE4F]/30 transition-colors duration-300 group-hover:bg-[#9CFE4F]">
                    <i className="fas fa-code text-2xl text-[#9CFE4F] transition-colors duration-300 group-hover:text-black"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-xl text-white font-bold mb-2 font-['Source_Sans_3']">
                    Development
                  </h4>
                  <p className="text-[#9E9FA0] text-base leading-relaxed">
                    We are a leading innovative marketing agency, specializing
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="mb-10 pf_fadeup group">
                <div className="icon mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-transparent border-2 border-[#9CFE4F]/30 transition-colors duration-300 group-hover:bg-[#9CFE4F]">
                    <i className="fas fa-rocket text-2xl text-[#9CFE4F] transition-colors duration-300 group-hover:text-black"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="text-xl text-white font-bold mb-2 font-['Source_Sans_3']">
                    Deployment
                  </h4>
                  <p className="text-[#9E9FA0] text-base leading-relaxed">
                    We are a leading innovative marketing agency, specializing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <CounterSection />



          <div style={{ height: 'auto', position: 'relative' }} className="mb-0">
  <FlowingMenu items={demoItems} />
</div>
      {/* Team Section */}
      <section className="bg-[#0E0F11] pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mb-14 pf_zoomIn">
                <span className="inline-block border border-[#9CFE4F] rounded-full px-4 py-2.5 text-white capitalize mb-5 text-sm leading-none">
                  Our Team
                </span>
                <h2 className="text-white font-['Source_Sans_3'] font-bold text-4xl md:text-5xl lg:text-[52px] leading-tight">
                  Success Stories From Around The Globe
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl pf_fadeup">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}