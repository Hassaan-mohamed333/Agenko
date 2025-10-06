import React from 'react';
import LogoLoop from '../LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import CounterSection from '../pages/CounterSection/CounterSection';

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
        <span className="text-blue-600 dark:text-black relative z-2 ml-1">  Marketing.</span>
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
                        <svg className='right-[-1px] top-[-1px] absolute ' width="835" height="172" viewBox="0 0 835 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42 92V41.5C42 18.5802 23.4198 0 0.5 0H834.5V171.999C834.5 149.907 816.591 132 794.5 132H82C59.9086 132 42 114.091 42 92Z" fill="#0E0F11"></path>
                                </svg>
                        <div className="text-box  max-w-2xl mx-auto  right-[-1px] top-[-1px] absolute bg-[var(--agenko-background-dark)] ">
                            <p className="text-[var(--agenko-text-muted)] text-lg ">
                                A <span className="text-[var(--agenko-primary-green)]">digital marketing agency</span> focused delivering innovative strategies to accelerate business growth, enhance brand visibility, and increase customer engagement, using data-driven approaches.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Section */}
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor:"var(--agenko-background-dark)" }} className="flex items-center">
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
                            { title: "Intelligent Architecture", desc: "Offering a wide range of business services, including consulting, strategy development, and operational support to drive efficiency." },
                            { title: "Branding Service", desc: "Offering a wide range of business services, including consulting, strategy development, and operational support to drive efficiency." }
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
            <section className="agk-project bg-[var(--agenko-background-dark)] py-20">
                <div className="container mx-auto px-4">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="section-title mb-55">
                                <span className="sub-title text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] px-4 py-2 rounded-full">
                                    Complete work
                                </span>
                                <h2 className="text-[var(--agenko-heading-light)] text-3xl lg:text-4xl font-bold mt-4">
                                    We are leading Innovative marketing agency.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agk-button float-lg-end mb-60">
                                <a href="projects.html" className="theme-btn style-one bg-[var(--agenko-primary-green)] text-[var(--agenko-background-dark)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--agenko-primary-green)]/90 transition-colors">
                                    LEARN MORE
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {[1,2].map((item) => (
                                <div key={item} className="agenko-project-item style-three mb-50">
                                    <div className="thumbnail relative overflow-hidden rounded-lg mb-4">
                                        <img 
                                            src={`/images/marketing-agency/project/project${item}.jpg`} 
                                            alt="Project Image" 
                                            className="w-full hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="text-[var(--agenko-heading-light)] text-xl font-bold mb-2 hover:text-[var(--agenko-primary-green)] transition-colors">
                                            <a href="project-details.html">Project Title {item}</a>
                                        </h4>
                                        <p className="text-[var(--agenko-text-muted)]">Project description goes here...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {[3,4].map((item) => (
                                <div key={item} className="agenko-project-item style-three mt-50">
                                    <div className="thumbnail relative overflow-hidden rounded-lg mb-4">
                                        <img 
                                            src={`/images/marketing-agency/project/project${item}.jpg`} 
                                            alt="Project Image" 
                                            className="w-full hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="text-[var(--agenko-heading-light)] text-xl font-bold mb-2 hover:text-[var(--agenko-primary-green)] transition-colors">
                                            <a href="project-details.html">Project Title {item}</a>
                                        </h4>
                                        <p className="text-[var(--agenko-text-muted)]">Project description goes here...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="agk-features bg-[var(--agenko-background-dark)] py-20">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-45">
                                <span className="sub-title text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] px-4 py-2 rounded-full">
                                    How We Are
                                </span>
                                <h2 className="text-[var(--agenko-heading-light)] text-3xl lg:text-4xl font-bold mt-4">
                                    We are leading Innovative marketing agency.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-box mb-40">
                                <p className="text-[var(--agenko-text-muted)]">
                                    Leading Innovation <span className="text-[var(--agenko-primary-green)]">marketing agency</span> We are a leading innovative marketing agency, specializing in creative solutions that drive business growth, enhance brand visibility.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {['Research', 'Planning', 'Development', 'Deployment'].map((feature, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                                <div className="agenko-iconic-box style-seven mb-40 p-6 bg-[var(--agenko-surface-dark)] rounded-lg border border-[var(--agenko-border-dark)]">
                                    <div className="icon text-[var(--agenko-primary-green)] text-2xl mb-3">
                                        <i className="flaticon-social-media-marketing"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="text-[var(--agenko-heading-light)] text-lg font-bold mb-2">{feature}</h4>
                                        <p className="text-[var(--agenko-text-muted)] text-sm">
                                            We are a leading innovative marketing agency, specializing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="agenko-testimonial bg-[var(--agenko-background-dark)] py-20">
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
            </section>

            {/* CTA Section */}
            <section className="agk-cta bg-[var(--agenko-background-dark)]">
                <div className="agenko-cta-wrappber py-20">
                    <div className="container mx-auto px-4">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title mb-30">
                                    <h2 className="text-[var(--agenko-heading-light)] text-3xl lg:text-4xl font-bold">
                                        Ground-up to product design Sector.
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="agenko-button float-lg-end mb-40">
                                    <a href="contact.html" className="theme-btn style-one bg-[var(--agenko-primary-green)] text-[var(--agenko-background-dark)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--agenko-primary-green)]/90 transition-colors">
                                        Contact With Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="agenko-blog bg-[var(--agenko-background-dark)] py-20">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-50">
                                <span className="sub-title text-[var(--agenko-primary-green)] border border-[var(--agenko-primary-green)] px-4 py-2 rounded-full">
                                    Latest Blogs
                                </span>
                                <h2 className="text-[var(--agenko-heading-light)] text-3xl lg:text-4xl font-bold mt-4">
                                    Expert Insights and News Stay Ahead with Us
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-box mb-40">
                                <p className="text-[var(--agenko-text-muted)]">
                                    Explore expert insights, industry trends, and the latest digital news to keep your business informed and ahead of the competition
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1,2].map((item) => (
                            <div key={item} className="col-lg-6">
                                <div className="agenko-blog-item style-three mb-40 bg-[var(--agenko-surface-dark)] rounded-lg overflow-hidden">
                                    <div className="post-thumbnail">
                                        <img 
                                            src={`/images/marketing-agency/blog/blog${item}.jpg`} 
                                            alt="Blog Image" 
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className="post-content-wrap p-6">
                                        <div className="post-content">
                                            <div className="post-meta flex gap-4 text-[var(--agenko-text-muted)] text-sm mb-3">
                                                <span><a href="#" className="hover:text-[var(--agenko-primary-green)]">Web Design</a></span>
                                                <span><a href="#" className="hover:text-[var(--agenko-primary-green)]">02 Oct, 2025</a></span>
                                            </div>
                                            <h4 className="title text-[var(--agenko-heading-light)] text-xl font-bold mb-3 hover:text-[var(--agenko-primary-green)] transition-colors">
                                                <a href="blog-details.html">Blog Post Title {item}</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}