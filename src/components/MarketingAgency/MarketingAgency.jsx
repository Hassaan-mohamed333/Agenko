import React from 'react';
import LogoLoop from '../LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import CounterSection from '../CounterSection/CounterSection';
import { Link } from 'react-router-dom';
import ThemeButton from '@/components/ThemeButton/ThemeButton';
import SingleTestimonialSection from '../../components/testimonial/testimonial';


export default function MarketingAgency() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];

    const imageLogos = [
        { src: "/images/marketing-agency/company/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/images/marketing-agency/company/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/marketing-agency/company/company3.png", alt: "Company 3", href: "https://company3.com" },
        { src: "/images/marketing-agency/company/company4.png", alt: "Company 4", href: "https://company4.com" },
        { src: "/images/marketing-agency/company/company5.png", alt: "Company 5", href: "https://company5.com" },
        { src: "/images/marketing-agency/company/company6.png", alt: "Company 6", href: "https://company6.com" },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="agk-hero bg-[var(--agenko-background-dark)] pt-40 pb-20">
                <div className="hero-wrapper-three">
                    <div className="container mx-auto px-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-content mb-16 fade-up">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                                        Agency For Growth Through Innovative 
                                        <span className="text-blue-600 dark:text-black relative z-2 ml-1"> Marketing.</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-image-box text-center mx-15 relative">
                        <img 
                            src="/images/marketing-agency/hero/hero-img1.jpg" 
                            alt="Hero Image" 
                            className="mx-auto rounded-lg"
                        />
                        <svg className='right-[-1px] top-[-1px]  absolute' width="835" height="172" viewBox="0 0 835 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 92V41.5C42 18.5802 23.4198 0 0.5 0H834.5V171.999C834.5 149.907 816.591 132 794.5 132H82C59.9086 132 42 114.091 42 92Z" fill="#0E0F11"></path>
                        </svg>
                        <svg className='right-[-1px] top-[-1px] dark:hidden absolute' width="835" height="172" viewBox="0 0 835 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 92V41.5C42 18.5802 23.4198 0 0.5 0H834.5V171.999C834.5 149.907 816.591 132 794.5 132H82C59.9086 132 42 114.091 42 92Z" fill="#ffff"></path>
                        </svg>
                        <div className="text-box max-w-2xl mx-auto right-[-1px] top-[-1px] absolute bg-[var(--agenko-background-dark)]">
                            <p className="text-[var(--agenko-text-muted)] text-lg">
                                A <span className="text-[var(--agenko-primary-green)]">digital marketing agency</span> focused delivering innovative strategies to accelerate business growth, enhance brand visibility, and increase customer engagement, using data-driven approaches.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Section */}
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: "var(--agenko-background-dark)" }} className="flex items-center">
                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>

            {/* Image Logos Section */}
            <div style={{ height: '150px', position: 'relative', overflow: 'hidden', backgroundColor: "var(--agenko-background-dark)" }} className="flex items-center">
                <LogoLoop
                    logos={imageLogos.map(logo => ({
                        node: <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain" />,
                        title: logo.alt,
                        href: logo.href
                    }))}
                    speed={100}
                    direction="right"
                    logoHeight={48}
                    gap={60}
                    pauseOnHover
                    fadeOut
                    ariaLabel="Company partners"
                />
            </div>

            {/* About Section */}
            <CounterSection />

            {/* Services Section */}
            <section className="agk-services bg-[var(--agenko-background-dark)] py-20">
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title mb-50">
                                <span className="sub-heading text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] px-4 py-2 rounded-full">
                                    Our Service
                                </span>
                                <h2 className="text-[var(--agenko-heading-light)] text-3xl lg:text-4xl font-bold mt-4">
                                    We are Digital Agency With 25+ Years Experience
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-box mb-50">
                                <p className="text-[var(--agenko-text-muted)]">
                                    We are a <span className="text-[var(--agenko-primary-green)]">Digital Agency</span> with over 25 years of experience, specializing in delivering cutting-edge digital solutions, including web design, marketing, and branding, to help businesses achieve sustainable growth and success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: "Business Service", desc: "Offering a wide range of business services, including consulting, strategy development, and operational support to drive efficiency." },
                            { title: "Intelligent Architecture", desc: "Designing scalable and intelligent digital architectures that adapt to your business needs and future growth." },
                            { title: "Branding Service", desc: "Creating powerful brand identities that resonate with your audience and drive meaningful connections." }
                        ].map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="agenko-iconic-box style-six mb-40 p-6 bg-[var(--agenko-surface-dark)] rounded-lg border border-[var(--agenko-border-dark)]">
                                    <div className="icon text-[var(--agenko-primary-green)] text-3xl mb-4">
                                        <i className="flaticon-network"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="text-[var(--agenko-heading-light)] text-xl font-bold mb-3">{service.title}</h4>
                                        <p className="text-[var(--agenko-text-muted)] mb-4">{service.desc}</p>
                                        <div className="agk-button">
                                            <a href="services.html" className="theme-btn style-two text-[var(--agenko-primary-green)] hover:underline">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Section */}
            {/*======  Start Project Section  ======*/}
<section className="agk-project pt-20 pb-24 bg-[var(--agenko-background-dark)]">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between mb-12">
            <div className="w-full lg:w-6/12 mb-6 lg:mb-0">
                {/*=== Section Title ===*/}
                <div className="section-title mb-12 fade-up">
                    <span className="sub-title text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] px-4 py-2 rounded-full text-sm font-medium">
                        Complete work
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--agenko-heading-light)] mt-4 leading-tight">
                        We are leading Innovative
                        marketing agency.
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-6/12">
                {/*=== Agk Button ===*/}
                <div className="agk-button float-lg-end mb-14 fade-up">
                    <Link 
                        to="/projects" 
                        className="theme-btn style-one bg-[var(--agenko-primary-green)] text-[var(--agenko-background-dark)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--agenko-primary-green)]/90 transition-colors inline-block"
                    >
                        <span className="text-flip">
                            <span className="text">LEARN MORE</span>
                            <span className="text">LEARN MORE</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-6/12 px-4">
                {/*=== Agk Project Item ===*/}
                <div className="agenko-project-item style-three mb-12 fade-up">
                    <div className="thumbnail relative overflow-hidden rounded-lg group">
                        <img 
                            src="/images/marketing-agency/project/project1.jpg" 
                            alt="Project Image" 
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="hover-content absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="project-categories flex gap-2">
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Website
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Landing Page
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    UI/UX
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="content mt-4">
                        <h4 className="text-xl font-bold text-[var(--agenko-heading-light)] hover:text-[var(--agenko-primary-green)] transition-colors">
                            <Link to="/project-details">Daily Schedule Mobile Apps</Link>
                        </h4>
                        <p className="text-[var(--agenko-text-muted)] mt-2">
                            A daily schedule app designed to help users efficiently plan, organize, activities.
                        </p>
                    </div>
                </div>
                
                {/*=== Agk Project Item ===*/}
                <div className="agenko-project-item style-three mb-12 fade-up">
                    <div className="thumbnail relative overflow-hidden rounded-lg group">
                        <img 
                            src="/images/marketing-agency/project/project2.jpg" 
                            alt="Project Image" 
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="hover-content absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="project-categories flex gap-2">
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Website
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Landing Page
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    UI/UX
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="content mt-4">
                        <h4 className="text-xl font-bold text-[var(--agenko-heading-light)] hover:text-[var(--agenko-primary-green)] transition-colors">
                            <Link to="/project-details">Rawr Studio Website</Link>
                        </h4>
                        <p className="text-[var(--agenko-text-muted)] mt-2">
                            Rawr Studio is a creative agency specializing in bold, innovative designs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                {/*=== Agk Project Item ===*/}
                <div className="agenko-project-item style-three mt-12 lg:mt-0 fade-up">
                    <div className="thumbnail relative overflow-hidden rounded-lg group">
                        <img 
                            src="/images/marketing-agency/project/project3.jpg" 
                            alt="Project Image" 
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="hover-content absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="project-categories flex gap-2">
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Website
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Landing Page
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    UI/UX
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="content mt-4">
                        <h4 className="text-xl font-bold text-[var(--agenko-heading-light)] hover:text-[var(--agenko-primary-green)] transition-colors">
                            <Link to="/project-details">Nexus Production Landing Page</Link>
                        </h4>
                        <p className="text-[var(--agenko-text-muted)] mt-2">
                            A production company delivering innovative solutions for film, video, and media.
                        </p>
                    </div>
                </div>
                
                {/*=== Agk Project Item ===*/}
                <div className="agenko-project-item style-three mt-12 fade-up">
                    <div className="thumbnail relative overflow-hidden rounded-lg group">
                        <img 
                            src="/images/marketing-agency/project/project4.jpg" 
                            alt="Project Image" 
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="hover-content absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="project-categories flex gap-2">
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Website
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    Landing Page
                                </a>
                                <a href="#" className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm hover:bg-[var(--agenko-primary-green)] transition-colors">
                                    UI/UX
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="content mt-4">
                        <h4 className="text-xl font-bold text-[var(--agenko-heading-light)] hover:text-[var(--agenko-primary-green)] transition-colors">
                            <Link to="/project-details">Financial Claim Dashboard</Link>
                        </h4>
                        <p className="text-[var(--agenko-text-muted)] mt-2">
                            A dashboard designed for tracking, managing, and streamlining financial claims.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*======  End Project Section  ======*/}

            {/* Features Section */}
      

            {/* Testimonial Section */}
            {/* <section className="agenko-testimonial bg-[var(--agenko-background-dark)] py-20">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-45">
                                <span className="sub-title text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] px-4 py-2 rounded-full">
                                    Client Feedback
                                </span>
                                <h2 className="text-[var(--agenko-heading-light)] text-3xl lg:text-4xl font-bold mt-4">
                                    Hear from Our Satisfied Clients Feedback
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-box mb-45">
                                <p className="text-[var(--agenko-text-muted)]">
                                    Discover how our clients achieved success with Binorly Agency's expert <span className="text-[var(--agenko-primary-green)]">web design and development</span>, delivering outstanding digital solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="agenko-image-box agenko-rotate-image mb-50">
                                <div className="agenko-image">
                                    <img 
                                        src="/images/marketing-agency/testimonial/testimonial1.jpg" 
                                        alt="Testimonial" 
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-slider mb-50">
                                <div className="agenko-testimonial-item style-three p-6 bg-[var(--agenko-surface-dark)] rounded-lg">
                                    <div className="testimonial-content">
                                        <ul className="ratings flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i} className="text-[var(--agenko-primary-green)]">
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-[var(--agenko-text-muted)] mb-4">
                                            Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website.
                                        </p>
                                        <div className="author-item">
                                            <div className="author-info">
                                                <h4 className="text-[var(--agenko-heading-light)] font-bold">Mr. David Liam</h4>
                                                <span className="position text-[var(--agenko-text-muted)]">CEO & Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <SingleTestimonialSection />

            {/* CTA Section */}
          <section className="agk-cta bg-[var(--agenko-background-dark)] relative overflow-hidden">
  {/* خلفيات ديكورية */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-10 w-72 h-72 bg-[var(--agenko-primary-green)] rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--agenko-primary-green)] rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>
  
  <div className="agenko-cta-wrapper py-20 lg:py-24 relative z-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* النص */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <div className="section-title mb-8 lg:mb-0">
            <span className="inline-block px-4 py-2 text-sm font-medium text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] rounded-full bg-[var(--agenko-primary-green)]/10 mb-4 transition-all duration-300 hover:bg-[var(--agenko-primary-green)]/20 hover:scale-105">
              🚀 Let's Build Together
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--agenko-heading-light)] leading-tight">
              From <span className="text-[var(--agenko-primary-green)]">Ground-up</span> to<br />
              Product Design Excellence
            </h2>
            <p className="text-lg text-[var(--agenko-text-muted)] mt-4 max-w-2xl">
              Transform your vision into reality with our end-to-end product design solutions. 
              We craft digital experiences that drive results.
            </p>
          </div>
        </div>

        {/* الزر والإجراء */}
        <div className="lg:w-1/2 lg:flex lg:justify-end" data-aos="fade-left" data-aos-delay="200">
          <div className="text-center lg:text-right">
            <div className="agenko-button mb-6 lg:mb-8">
             <ThemeButton text="Learn More" href="about.html" />
            </div>
            
            {/* معلومات إضافية */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end text-sm text-[var(--agenko-text-muted)]">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--agenko-primary-green)] rounded-full animate-pulse"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--agenko-primary-green)] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--agenko-primary-green)] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

            {/* Blog Section */}
      
        </>
    );
}