import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplashCursor from '../../SplashCursor/SplashCursor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Home.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import BlogSection from '../BlogSection/BlogSection';  
import ThemeButton from '../../ThemeButton/ThemeButton';
import Loader from '/src/components/Layout/loader/loader';

import team1Img from '../../../assets/images/team1.jpg';
import team2Img from '../../../assets/images/team2.jpg';
import team3Img from '../../../assets/images/team3.jpg';
import team4Img from '../../../assets/images/team4.jpg';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      rating: 5,
      text: "Binorly Agency completely transformed our online presence! Their exceptional website development expertise to beyond expectations, creating a visually stunning and user-friendly website. The team's attention to detail and commitment to!",
      name: "Ms. Alex Mika",
      position: "CEO & Founder"
    },
    {
      rating: 5,
      text: "Amazing experience working with this team! They delivered beyond our expectations and the results speak for themselves. Highly recommended for anyone looking for top-quality work!",
      name: "John Smith",
      position: "Marketing Director"
    },
    {
      rating: 5,
      text: "Professional, creative, and reliable. They understood our vision perfectly and brought it to life with remarkable precision. The best agency we've worked with!",
      name: "Sarah Johnson",
      position: "Product Manager"
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  const teamImages = [team1Img, team2Img, team3Img, team4Img];
  const positions = ['Developer', 'Web Designer', 'Video Editor', 'Marketer'];
  const names = [
    'Mr. David Liam',
    'Jessica Sherlock Dina',
    'Mr. Adam Smith Roy',
    'Miss Alex Mika',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        delay: 100,
        easing: "ease-in-out",
      });
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* <SplashCursor /> */}
      
    {/* Hero Section */}
<section id="hero" className="relative min-h-screen bg-[var(--agenko-background-dark)]  pt-[240px] md:pt-[260px] lg:pt-[280px] pb-[200px] transition-colors duration-300 overflow-hidden">
  {/* Background Blur Effects */}
  <div className="absolute -top-[30%] -left-[25%] z-0">
    <span className="block w-[360px] h-[360px] md:w-[500px] md:h-[500px] lg:w-[760px] lg:h-[760px] rounded-full bg-[var(--agenko-primary-green)]/60 blur-[200px]" />
  </div>
  <div className="absolute -top-[30%] -right-[15%] z-0">
    <span className="block w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[660px] lg:h-[660px] rounded-full bg-[var(--agenko-accent-purple)] blur-[150px]" />
  </div>
  <div className="absolute -bottom-[70%] left-1/2 -translate-x-1/2 z-0">
    <span className="block w-[760px] h-[760px] rounded-full bg-[var(--agenko-primary-green)]/60 blur-[200px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="relative mb-[80px] md:mb-[130px]">
        <div className="mb-0">
          <h1 
            className="text-[60px] md:text-[80px] lg:text-[140px] xl:text-[200px] leading-none font-bold text-[var(--agenko-heading-light)] transition-colors font-['Source_Sans_3']"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            CREATIVE
          </h1>
          <div className="absolute -right-4 top-1 hidden lg:block">
            <img
              src="/images/element2.png"
              alt="element"
              className="w-24 h-24 lg:w-32 lg:h-32 opacity-60 animate-spin-slow"
            />
          </div>
        </div>

        <div className="relative flex justify-end items-center mb-12">
          <h2 
            className="text-[60px] md:text-[80px] lg:text-[140px] xl:text-[200px] leading-none font-bold text-[var(--agenko-heading-light)] transition-colors font-['Source_Sans_3']"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            AGENCY
          </h2>
        </div>

        <div className="max-w-xl lg:max-w-md">
          <p 
            className="text-base lg:text-lg leading-relaxed text-[var(--agenko-text-muted)]" 
            data-aos="fade-up"
          >
            We are a{' '}
            <span className="text-[var(--agenko-primary-green)] font-semibold">
              Creative Agency
            </span>{' '}
            <span className="text-[var(--agenko-text-light)]">
              with over 25 years of experience
            </span>
            , specializing in delivering cutting-edge digital solutions, including web design.
          </p>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <ThemeButton text="Learn More" href="about.html" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Video Section */}
<section className="relative -mt-[200px] z-10">
  <div className="container mx-auto px-4 lg:max-w-[1314px]">
    <div className="w-full" data-aos="fade-up">
      <div className="relative">
        <img 
          src="/images/hero-img1.jpg" 
          alt="Hero Image"
          className="rounded-[15px] w-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <a 
            href="https://www.youtube.com/watch?v=PJK2253cVgc" 
            className="video-popup w-[90px] h-[90px] rounded-full border border-[var(--agenko-border-dark)]/20 bg-[var(--agenko-text-light)]/10 backdrop-blur-[5px] flex items-center justify-center text-[var(--agenko-text-light)] text-2xl transition-all duration-300 hover:scale-110 hover:bg-[var(--agenko-primary-green)] hover:text-[var(--agenko-heading-dark)]"
          >
            <i className="fas fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="relative -mt-[00px] z-10">
        <div className="container mx-auto px-4 lg:max-w-[1314px]">
          <div className="w-full" data-aos="fade-up">
            <div className="relative">
              <img 
                src="/images/hero-img1.jpg" 
                alt="Hero Image"
                className="rounded-[15px] w-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <a 
                  href="https://www.youtube.com/watch?v=PJK2253cVgc" 
                  className="video-popup w-[90px] h-[90px] rounded-full border border-white/20 bg-white/10 backdrop-blur-[5px] flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-white dark:bg-[var(--primary-black-color)] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end mb-12">
            <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
              <div className="mb-8">
                <span className="inline-block border border-[var(--primary-color)] text-[var(--white-color)] dark:text-[var(--white-color)] px-4 py-2 rounded-full mb-3">Our Service</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight" data-aos="fade-up" data-aos-offset="250">
                  Innovative Services That
                  <br />
                  Elevate Your Brand
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-6/12 text-left lg:text-right">
              <p className="text-gray-600 dark:text-gray-400 max-w-md ml-auto" data-aos="fade-up">
                We are a <span className="text-[var(--primary-color)]">digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8" data-aos="fade-up" data-aos-delay="0" data-aos-offset="250">
              <div className="p-8 bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] transition-all duration-300 ease-out">
                <div className="mb-4 text-[var(--primary-color)] text-4xl">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Website Development</h4>
                <p className="text-gray-400 mb-4">
                  We build responsive, user-friendly websites tailored to your brand, ensuring seamless functionality and engaging design.
                </p>
                <a href="service-details.html" className="hover:text-[var(--primary-color)] text-white transition-all duration-300 ease-out hover:underline font-medium">Learn More</a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8" data-aos="fade-up" data-aos-delay="400" data-aos-offset="250">
              <div className="p-8 bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] transition-all mt-14 md:mt-12">
                <div className="mb-4 text-[var(--primary-color)] text-4xl">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Digital Marketing</h4>
                <p className="text-gray-400 mb-4">
                  Boost your brand with expert digital marketing: SEO, social media, content creation, paid ads, and data-driven strategies.
                </p>
                <a href="service-details.html" className="hover:text-[var(--primary-color)] text-white transition-all duration-300 ease-out hover:underline font-medium">Learn More</a>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8" data-aos="fade-up" data-aos-delay="800">
              <div className="p-8 bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] transition-all duration-300 ease-out mt-24 md:mt-14 lg:mt-26">
                <div className="mb-4 text-[var(--primary-color)] text-4xl">
                  <i className="fas fa-palette"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Creative Branding</h4>
                <p className="text-gray-400 mb-4">
                  We design distinctive branding and visual identities that connect with your audience, boosting brand recognition.
                </p>
                <a href="service-details.html" className="hover:text-[var(--primary-color)] text-white transition-all duration-300 hover:underline font-medium">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-white dark:bg-[var(--primary-black-color)] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block border border-[var(--primary-color)] text-[var(--white-color)] dark:text-[var(--white-color)] px-4 py-2 rounded-full mb-3" data-aos="fade-up">Complete Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Creative Projects We've
              <br />
              Delivered To Client
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-7/12 px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
              <div className="mb-16 group bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] p-4 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src="/images/project1.jpg"
                    alt="Project"
                    className="w-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Website
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Landing Page
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      UI/UX
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3 hover:text-[var(--primary-color)] transition-colors">
                    <a href="project-details.html">Banking & Financial Mobile Apps</a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We develop secure, user-friendly banking apps, streamlining financial services.
                  </p>
                </div>
              </div>

              <div className="mb-16 group bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] p-4 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src="/images/project3.jpg"
                    alt="Project"
                    className="w-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Website
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Landing Page
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      UI/UX
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3 hover:text-[var(--primary-color)] transition-colors">
                    <a href="project-details.html">Software Agency Website Header</a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building innovative software solutions to drive your business forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 px-4">
              <div className="mb-16 group bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] p-4 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src="/images/project2.jpg"
                    alt="Project"
                    className="w-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Website
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Landing Page
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      UI/UX
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3 hover:text-[var(--primary-color)] transition-colors">
                    <a href="project-details.html">Knead That Dough Brand Identity</a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Crafting a fresh, vibrant brand identity for Knead That Dough.
                  </p>
                </div>
              </div>

              <div className="mb-16 group bg-[var(--gray-dark)] dark:bg-[var(--card)] border-[var(--border-color)] p-4 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src="/images/project2.jpg"
                    alt="Project"
                    className="w-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Website
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      Landing Page
                    </a>
                    <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-[var(--gray-dark)] text-black dark:text-white rounded-full text-sm hover:bg-[var(--primary-color)] hover:text-black transition-colors">
                      UI/UX
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3 hover:text-[var(--primary-color)] transition-colors">
                    <a href="project-details.html">Crypto Tap Wallet Mobile Apps</a>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Secure, fast, and user-friendly crypto wallet for seamless.
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <ThemeButton text="View All" href="about.html" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white dark:bg-[var(--primary-black-color)] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block border border-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] px-4 py-2 rounded-full mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Working Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              The Process Behind the
              <br />
              Magic Step by Step
            </h2>
          </div>
          <div className="relative z-10">
            <div className="hidden lg:block absolute top-6 z-[-1] left-0 right-0 w-full h-px bg-[var(--border-color)]"></div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8 text-center">
                <div className="inline-block bg-[var(--primary-color)] text-[var(--heading-color)] rounded-full px-4 py-2 mb-4 font-medium">Step 01</div>
                <div className="p-6 bg-[var(--gray-dark)] border border-[var(--border-color)] rounded-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="text-3xl text-[var(--primary-color)] mb-3">
                    <i className="fas fa-search"></i>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Research</h5>
                  <p className="text-gray-400">In-depth research to uncover insights and drive informed decisions.</p>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8 text-center">
                <div className="inline-block bg-[var(--primary-color)] text-[var(--heading-color)] rounded-full px-4 py-2 mb-4 font-medium">Step 02</div>
                <div className="p-6 bg-[var(--gray-dark)] border border-[var(--border-color)] rounded-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="text-3xl text-[var(--primary-color)] mb-3">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Concept Design</h5>
                  <p className="text-gray-400">Creative concept designs that transform ideas into impactful solutions.</p>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8 text-center">
                <div className="inline-block bg-[var(--primary-color)] text-[var(--heading-color)] rounded-full px-4 py-2 mb-4 font-medium">Step 03</div>
                <div className="p-6 bg-[var(--gray-dark)] border border-[var(--border-color)] rounded-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                  <div className="text-3xl text-[var(--primary-color)] mb-3">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Implementation</h5>
                  <p className="text-gray-400">Efficient implementation of tailored strategies to achieve your goals.</p>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8 text-center">
                <div className="inline-block bg-[var(--primary-color)] text-[var(--heading-color)] rounded-full px-4 py-2 mb-4 font-medium">Step 04</div>
                <div className="p-6 bg-[var(--gray-dark)] border border-[var(--border-color)] rounded-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                  <div className="text-3xl text-[var(--primary-color)] mb-3">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Testing</h5>
                  <p className="text-gray-400">Rigorous testing to ensure flawless functionality and optimal user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section relative py-32 bg-[var(--white-black)] dark:bg-[var(--brand-black)] transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-6/12 px-4 mb-12 lg:mb-0">
              <div className="text-center lg:text-left">
                <span className="inline-block border border-[var(--primary-color)] text-[var(--brand-black)] dark:text-[var(--white-color)] px-4 py-2 rounded-full mb-3">
                  Company
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
                  Trusted Our Company
                </h2>
                <p className="text-[var(--brand-black)] dark:text-[var(--text-color)] text-lg">
                  We are a{" "}
                  <span className="text-[var(--primary-color)]">
                    Digital Creative agency
                  </span>{" "}
                  with 25 years of experience, specializing in delivering cutting-edge
                </p>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="grid grid-cols-3 gap-0 bg-[var(--brand-black)]">
                <div className="client-item border border-[#313131] p-8 text-center hover:border-primary transition-colors bg-[var(--brand-black)]">
                  <img
                    src="/src/assets/images/client1.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="client-item border border-[#313131] p-8 text-center hover:border-primary transition-colors">
                  <img
                    src="/src/assets/images/client2.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="client-item border border-[#313131] p-8 text-center hover:border-primary transition-colors">
                  <img
                    src="/src/assets/images/client3.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="client-item border border-[#313131] p-8 text-center hover:border-primary transition-colors">
                  <img
                    src="/src/assets/images/client4.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="client-item border border-[#313131] p-8 text-center hover:border-primary transition-colors">
                  <img
                    src="/src/assets/images/client5.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="client-item border border-[#313131] p-8 text-center hover:border-primary transition-colors">
                  <img
                    src="/src/assets/images/client6.png"alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-white dark:bg-[var(--primary-black-color)] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0">
              <div className="mb-6">
                <span className="inline-block text-sm font-semibold border border-[var(--primary-color)] text-[var(--brand-black)] dark:text-[var(--white-black)] px-4 py-2 rounded-full uppercase tracking-wider mb-3">Our Team</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
                  Meet Our Talented
                  <br />
                  Skillful Team
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-5/12 text-left lg:text-right">
              <ThemeButton text="View Teams" href="about.html" />
            </div>
          </div>
          <div className="flex flex-wrap">
            {teamImages.map((img, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="overflow-hidden bg-[var(--gray-dark)]">
                  <div className="relative">
                    <img src={img} alt={`Team member ${idx + 1}`} className="w-full" />
                    <div className="absolute top-3 right-3 bg-[var(--white-color)] rounded-full p-2">
                      <a href="team-details.html" className="text-[var(--brand-black)] w-5 h-5 flex items-center justify-center rounded">
                        <i className="far fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="block text-sm text-[var(--text-color)] mb-2">
                      {positions[idx]}
                    </span>
                    <h5 className="text-lg font-bold text-white">{names[idx]}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--primary-black-color)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <span className="inline-block text-sm font-semibold border border-[var(--primary-color)] text-[var(--white-color)] dark:text-[var(--white-color)] px-4 py-2 rounded-full uppercase tracking-wider mb-3">
                Our Award
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Striving for Excellence Awards & Recognition
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-[var(--text-color)] text-lg lg:text-right">
                We are a <span className="text-white font-semibold">digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-lg mb-8">
                <img 
                  src="/images/award1.jpg" 
                  alt="Award Image"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-5">
                <div className="flex flex-wrap justify-between items-center bg-[var(--gray-dark)] hover:bg-[#1a1b1d] p-6 lg:px-10 transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="w-full md:w-[30%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Microsoft Platform
                    </h5>
                  </div>
                  <div className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 font-semibold">
                      Website 2024 - 1st Winner
                    </h5>
                  </div>
                  <div className="w-full md:w-[20%] text-center md:text-right">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Mar 2024
                    </h5>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center bg-[var(--gray-dark)] hover:bg-[#1a1b1d] p-6 lg:px-10 transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="w-full md:w-[30%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      LinkedIn Platform
                    </h5>
                  </div>
                  <div className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 font-semibold">
                      Mobile App Winner
                    </h5>
                  </div>
                  <div className="w-full md:w-[20%] text-center md:text-right">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Apr 2024
                    </h5>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center bg-[var(--gray-dark)] hover:bg-[#1a1b1d] p-6 lg:px-10 transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="w-full md:w-[30%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Adobe Platform
                    </h5>
                  </div>
                  <div className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 font-semibold">
                      Digital Vanguard - 1st Winner
                    </h5>
                  </div>
                  <div className="w-full md:w-[20%] text-center md:text-right">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      May 2024
                    </h5>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center bg-[var(--gray-dark)] hover:bg-[#1a1b1d] p-6 lg:px-10 transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="w-full md:w-[30%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Fiverr Platform
                    </h5>
                  </div>
                  <div className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 font-semibold">
                      Winner Innova excel Award
                    </h5>
                  </div>
                  <div className="w-full md:w-[20%] text-center md:text-right">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Jul 2024
                    </h5>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center bg-[var(--gray-dark)] hover:bg-[#1a1b1d] p-6 lg:px-10 transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="w-full md:w-[30%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Upwork Platform
                    </h5>
                  </div>
                  <div className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 font-semibold">
                      Top Rated Winner Award
                    </h5>
                  </div>
                  <div className="w-full md:w-[20%] text-center md:text-right">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Aug 2024
                    </h5>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center bg-[var(--gray-dark)] hover:bg-[#1a1b1d] p-6 lg:px-10 transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <div className="w-full md:w-[30%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Upwork Platform
                    </h5>
                  </div>
                  <div className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                    <h5 className="text-lg text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 font-semibold">
                      Top Rated Winner Award
                    </h5>
                  </div>
                  <div className="w-full md:w-[20%] text-center md:text-right">
                    <h5 className="text-lg text-[var(--text-color)] group-hover:text-white transition-colors duration-300">
                      Aug 2024
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 dark:bg-[var(--gray-dark)] bg-[var(--white-color)] dark:text-[var(--white-color)] text-[var(--gray-dark)] overflow-hidden">
        <div className="absolute -bottom-5/12 -left-1/5 w-32 h-32 rounded-full bg-[var(--primary-color)] opacity-10 blur-3xl">
          <span className="w-96 h-96"></span>
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[var(--primary-color)] opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold border border-[var(--primary-color)] text-[var(--white-color)] dark:text-[var(--white-color)] px-4 py-2 rounded-full uppercase tracking-wider mb-3k">
              Testimonial
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Success Stories From Around the Globe
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/testimonial.jpg" 
                  alt="Testimonial"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-8 relative">
              <div className="absolute top-0 left-0 text-[80px] lg:text-[100px] font-bold text-white opacity-5 pointer-events-none select-none leading-none">
                TESTIMONIAL
              </div>

              <div className="relative z-10">
                <Slider ref={sliderRef} {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index}>
                      <div className="px-4">
                        <div className="flex gap-2 mb-10">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="w-6 h-6 fill-[var(--primary-color)]" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>

                        <p className="text-xl lg:text-3xl font-bold text-white italic leading-relaxed mb-8">
                          "{testimonial.text}"
                        </p>

                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <h5 className="text-lg text-[var(--text-color)]">
                            {testimonial.position}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className="flex gap-4 mt-12">
                  <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--primary-color)] border border-white/20 flex items-center justify-center text-white transition-all duration-300 group"
                    aria-label="Previous testimonial"
                  >
                    <i className="fas fa-arrow-left group-hover:scale-110 transition-transform"></i>
                  </button>
                  <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--primary-color)] border border-white/20 flex items-center justify-center text-white transition-all duration-300 group"
                    aria-label="Next testimonial"
                  >
                    <i className="fas fa-arrow-right group-hover:scale-110 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
    </>
  );
}