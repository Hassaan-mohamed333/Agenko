import React from 'react';
import style from './Footer.module.css';  // استيراد الـ CSS Module

export default function Footer() {
  return (
    <footer className="agenko-footer bg-[var(--gray-dark)] pt-32 relative overflow-hidden">
      {/* أشكال الديكور */}
      <div className="shape shape-one absolute left-0 bottom-24 z-0">
        <span>
          <img
            src="@/src/assets/images/element1.png"
            alt="Shape"
            className={style.rotate360}  // تطبيق حركة الدوران على الصورة
          />
        </span>
      </div>
      <div className="shape shape-two absolute right-0 bottom-36 z-[0]">
        <span>
          <img
            src="@/src/assets/images/element2.png"
            alt="Shape"
            className={style.rotate360}  
          />
        </span>
      </div>
      <div className="shape shape-blur_one absolute -top-40 -left-40 z-[-1]">
        <span className="block w-64 h-64 bg-[var(--primary-color)]/50 blur-[80px] rounded-full"></span>
      </div>
      <div className="shape shape-blur_two absolute -bottom-40 -right-40 z-[-1]">
        <span className="block w-64 h-64 bg-purple-300/60 blur-[80px] rounded-full"></span>
      </div>

      {/* Widgets (الأدوات) في الفوتر */}
      <div className="footer-widget-area pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* About Widget */}
            <div className="w-full lg:w-4/12 md:w-6/12 sm:w-6/12 px-4 mb-10">
              <div className="footer-widget footer-about-widget">
                <div className="footer-content">
                  <div className="footer-logo mb-5 p-1 inline-block rounded-full border border-[var(--border-color)] bg-[var(--primary-black-color)]">
                    <a href="index.html">
                      <img
                        src="/src/assets/images/logo-main.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-5">
                    Agenko creative digital agency delivering innovate web Development
                    marketing.
                  </p>
                  <form>
                    <div className="form-group relative max-w-sm">
                      <input
                        type="email"
                        className="form_control w-full bg-white text-[var(--heading-color)] rounded-full py-2 px-12"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                      <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--heading-color)]">
                        <i className="far fa-envelope"></i>
                      </label>
                      <button
                        type="submit"
                        className="theme-btn style-two absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 rounded-full bg-[var(--primary-color)] text-[var(--heading-color)] font-semibold"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Contact Info Widget */}
            <div className="w-full lg:w-3/12 md:w-6/12 px-4 mb-10">
              <div className="footer-widget footer-contact-info-widget">
                <div className="footer-content mb-6">
                  <h4 className="text-white font-bold mb-2">Main Address</h4>
                  <p className="text-gray-400">6801 Hollywood Blvd, Los Angeles, CA 90028</p>
                </div>
                <div className="footer-content mb-6">
                  <h4 className="text-white font-bold mb-2">Sub-Address</h4>
                  <p className="text-gray-400">200 Santa Monica Pier, Santa Monica, CA 90401</p>
                </div>
              </div>
            </div>
            {/* Navigation and Contact Widgets */}
            <div className="w-full lg:w-5/12 md:w-12/12 px-4 mb-10">
              <div className="flex flex-wrap">
                {/* Navigation Widget */}
                <div className="w-full md:w-5/12 mb-10 md:mb-0">
                  <div className="footer-widget footer-nav-widget">
                    <div className="footer-content mb-6">
                      <h4 className="text-white font-bold mb-4">Our Link</h4>
                      <ul className="footer-nav space-y-2">
                        <li>
                          <a href="about.html" className="text-gray-400 hover:text-[var(--primary-color)]">About us</a>
                        </li>
                        <li>
                          <a href="services.html" className="text-gray-400 hover:text-[var(--primary-color)]">Services</a>
                        </li>
                        <li>
                          <a href="projects.html" className="text-gray-400 hover:text-[var(--primary-color)]">Our Project</a>
                        </li>
                        <li>
                          <a href="faqs.html" className="text-gray-400 hover:text-[var(--primary-color)]">FAQ</a>
                        </li>
                        <li>
                          <a href="contact.html" className="text-gray-400 hover:text-[var(--primary-color)]">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Contact Widget */}
                <div className="w-full md:w-7/12">
                  <div className="footer-widget footer-contact-widget">
                    <div className="footer-content">
                      <h4 className="text-white font-bold mb-4">Contact</h4>
                      <div className="agenko-iconic-box style-three mb-6 flex items-start gap-3">
                        <div className="icon text-[var(--primary-color)] text-xl">
                          <i className="far fa-envelope"></i>
                        </div>
                        <div className="content">
                          <h6 className="text-white font-semibold mb-1">Email</h6>
                          <p>
                            <a href="mailto:info@agenko.com" className="text-gray-400 hover:text-[var(--primary-color)]">
                              info@agenko.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="agenko-iconic-box style-three flex items-start gap-3">
                        <div className="icon text-[var(--primary-color)] text-xl">
                          <i className="far fa-phone-alt"></i>
                        </div>
                        <div className="content">
                          <h6 className="text-white font-semibold mb-1">Phone</h6>
                          <p>
                            <a href="tel:+555-7659-9854" className="text-gray-400 hover:text-[var(--primary-color)]">
                              +555-7659-9854
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="border-t border-[var(--border-color)] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-6/12 text-center md:text-left mb-4 md:mb-0">
              <p className="text-white">
                © 2025 <span className="text-[var(--primary-color)]">Agenko</span> - All Rights Reserved.
              </p>
            </div>
            <div className="w-full md:w-6/12 text-center md:text-right">
              <ul className="flex justify-center md:justify-end gap-6">
                <li>
                  <a href="#" className="text-white hover:text-[var(--primary-color)]">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[var(--primary-color)]">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[var(--primary-color)]">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
