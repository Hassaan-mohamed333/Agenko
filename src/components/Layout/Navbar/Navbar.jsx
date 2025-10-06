import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faAngleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Switch from '../Toggle-switches/Toggle-switches';
import ThemeButton from '../../ThemeButton/ThemeButton';

library.add(faAngleDown, faArrowRight, faFacebookF, faTwitter, faLinkedinIn, faYoutube);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    setIsDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (menuKey) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const isActiveRoute = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.includes(href);
  };

  const menuItems = [
    {
      label: 'Home',
      key: 'home',
      href: '/',
      hasChildren: true,
      children: [
        { label: 'Creative Agency', href: '/' },
        { label: 'Digital Agency', href: '/home' },
        { label: 'Marketing Agency', href: '/marketing-agency' }
      ]
    },
    {
      label: 'Pages',
      key: 'pages',
      href: '#',
      hasChildren: true,
      children: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Services', href: '/services' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      label: 'Portfolio',
      key: 'portfolio',
      href: '/portfolio',
      hasChildren: false
    },
    {
      label: 'Blog',
      key: 'blog',
      href: '/blog',
      hasChildren: false
    },
    {
      label: 'Contact',
      key: 'contact',
      href: '/contact',
      hasChildren: false
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] py-4 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0E0F11] border-b border-gray-800 shadow-lg py-3' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className={`max-w-[160px] border text-center p-1 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'border-gray-700 bg-[#0E0F11]' 
              : 'border-gray-700 bg-color-primary'
          }`}>
            <Link to="/" className="block">
              <img src="/images/logo-main.png" alt="Brand Logo" className="h-10 w-auto mx-auto" />
            </Link>
          </div>

          <nav className={`hidden lg:flex items-center border rounded-full p-1 ml-8 transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#0E0F11] border-gray-700' 
              : 'bg-white dark:bg-[#0E0F11] border-[var(--border-color)]'
          }`}>
            <ul className="flex items-center">
              {menuItems.map((item) => (
                <li key={item.key} className="relative group">
                  <Link 
                    to={item.href}
                    className={`flex items-center px-5 py-3 font-semibold text-sm capitalize rounded-full transition-all duration-300 hover:dark:text-[var(--primary-color)] hover:text-[var(--primary-color)] ${
                      isScrolled 
                        ? `text-white hover:bg-gray-800 ${isActiveRoute(item.href) ? '!text-[var(--primary-color)]' : ''}` 
                        : `text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#18191B] ${isActiveRoute(item.href) ? '!text-[var(--primary-color)] dark:!text-[var(--primary-color)]' : ''}`
                    }`}
                  >
                    {item.label}
                    {item.hasChildren && (
                      <span className="ml-2">
                        <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
                      </span>
                    )}
                  </Link>
                  {item.hasChildren && (
                    <ul className={`absolute left-0 top-full mt-2 w-64 border rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-50  ${
                      isScrolled 
                        ? 'bg-[#0E0F11] border-gray-700' 
                        : 'bg-white dark:bg-[#0E0F11] border-gray-300 dark:border-gray-700'
                    }`}>
                      {item.children.map((child, index) => (
                        <li key={index}>
                          <Link 
                            to={child.href}
                            className={`flex items-center px-4 py-2 hover:text-[var(--primary-color)] transition-all duration-300 rounded ${
                              isScrolled ? 'text-white' : 'text-black dark:text-white'
                            } ${isActiveRoute(child.href) ? '!text-[var(--primary-color)]' : ''}`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end flex-grow">
            <div className="hidden md:block">
              <ThemeButton text="LETS TALK" href="/contact" />
            </div>

            <div className="ml-4 flex items-center">
              <div className="scale-150 transform origin-center">
                <Switch isChecked={isDarkMode} onChange={toggleDarkMode} />
              </div>
            </div>

            <button onClick={toggleMobileMenu} className={`lg:hidden ml-5 p-3 border rounded transition-all duration-300 ${
              mobileMenuOpen 
                ? 'border-[var(--primary-color)]' 
                : isScrolled 
                  ? 'border-gray-600' 
                  : 'border-gray-400 dark:border-gray-500'
            }`}>
              <span className={`block w-8 h-0.5 transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'rotate-45 translate-y-2 bg-white' 
                  : isScrolled 
                    ? 'bg-gray-300' 
                    : 'bg-gray-800 dark:bg-gray-300'
              }`}></span>
              <span className={`block w-8 h-0.5 mt-1 transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'opacity-0' 
                  : isScrolled 
                    ? 'bg-gray-300' 
                    : 'bg-gray-800 dark:bg-gray-300'
              }`}></span>
              <span className={`block w-8 h-0.5 mt-1 transition-all duration-300 ${
                mobileMenuOpen 
                  ? '-rotate-45 -translate-y-2 bg-white' 
                  : isScrolled 
                    ? 'bg-gray-300' 
                    : 'bg-gray-800 dark:bg-gray-300'
              }`}></span>
            </button>
          </div>
        </div>

        <div className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-white dark:bg-[#0E0F11] transform transition-transform duration-500 z-50 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-5">
            <div className="text-center mb-5">
              <Link to="/" className="inline-block" onClick={() => setMobileMenuOpen(false)}>
                <img src="/images/logo-main.png" alt="Brand Logo" className="h-10 w-auto" />
              </Link>
            </div>

            <nav className="mt-8">
              <ul className="space-y-0">
                {menuItems.map((item, index) => (
                  <li key={item.key} className={`border-b border-gray-300 dark:border-gray-700 ${index === menuItems.length - 1 ? 'border-b-0' : ''}`}>
                    <div className="relative">
                      {item.hasChildren ? (
                        <div className="flex items-center justify-between py-3">
                          <span className="text-black dark:text-white text-base font-medium">
                            {item.label}
                          </span>
                          <button 
                            onClick={() => toggleDropdown(item.key)} 
                            className="p-2 rounded"
                          >
                            <FontAwesomeIcon 
                              icon={faAngleDown} 
                              className={`transition-transform duration-300 text-sm ${openDropdowns[item.key] ? 'rotate-180' : ''}`} 
                            />
                          </button>
                        </div>
                      ) : (
                        <Link 
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-3 text-black dark:text-white text-base font-medium"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                    {item.hasChildren && (
                      <ul className={`ml-3 space-y-1 overflow-hidden transition-all duration-300 ${openDropdowns[item.key] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link 
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 px-3 text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)] transition-colors duration-300 rounded ${
                                isActiveRoute(child.href) ? '!text-[var(--primary-color)]' : ''
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6">
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[var(--primary-color)] text-black font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition-all duration-300 text-sm"
              >
                <span className="flex items-center justify-center">
                  <span>LETS TALK</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                </span>
              </Link>
            </div>

            <div className="mt-8">
              <h5 className="text-black dark:text-white font-medium mb-4 text-sm">Follow Us</h5>
              <ul className="flex space-x-2">
                {['facebook', 'twitter', 'linkedin', 'youtube'].map((social) => (
                  <li key={social}>
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-9 h-9 border border-gray-300 dark:border-gray-700 rounded-full text-black dark:text-white hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all duration-300"
                    >
                      <FontAwesomeIcon 
                        icon={['fab', social]} 
                        className="text-xs" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
        )}
      </div>
    </header>
  );
}