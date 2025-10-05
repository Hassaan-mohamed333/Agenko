import React from 'react';

const BlogSection = () => {
  return (
    <section className="py-20 bg-[var(--body-bg)]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-wrap items-center mb-12">
          <div className="w-full lg:w-7/12 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <span className="inline-block text-sm font-semibold border border-[var(--primary-color)] text-[var(--brand-black)] dark:text-[var(--white-color)] px-4 py-2 rounded-full uppercase tracking-wider mb-3k">
                Latest Articles
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[var(--brand-black)] dark:text-[var(--white-color)] leading-tight">
                Stay Updated with Our Recent Articles
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="text-center lg:text-right">
              <a 
                href="blog-grid.html" 
                className="inline-block bg-[var(--primary-color)] text-[var(--heading-color)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--heading-color)] hover:text-[var(--primary-color)] transition-all duration-300 border-2 border-transparent hover:border-[var(--primary-color)]"
              >
                View All Blogs
              </a>
            </div>
          </div>
        </div>

        {/* Blog Items Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Blog Item 1 */}
          <div className="bg-[var(--gray-dark)] rounded-xl p-5 flex flex-col md:flex-row items-start gap-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/src/assets/images/blog1.jpg" 
                  alt="Blog Image"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex-grow">
              <div className="mb-4">
                <a 
                  href="#" 
                  className="inline-block px-5 py-2 text-sm border border-[var(--border-color)] rounded-full text-[var(--text-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300"
                >
                  Website
                </a>
              </div>

              <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                <a 
                  href="blog-details.html"
                  className="hover:text-[var(--primary-color)] transition-colors duration-300"
                >
                  MKT Gency for your online business Plane.
                </a>
              </h4>

              <p className="text-[var(--text-color)] mb-3 leading-relaxed">
                Strategic marketing agency boosting to your online business success.
              </p>

              <div className="text-sm text-[var(--text-color)]">
                <i className="far fa-calendar-alt mr-2"></i>
                15 Apr, 2024
              </div>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="bg-[var(--gray-dark)] rounded-xl p-5 flex flex-col md:flex-row items-start gap-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/src/assets/images/blog2.jpg" 
                  alt="Blog Image"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex-grow">
              <div className="mb-4">
                <a 
                  href="#" 
                  className="inline-block px-5 py-2 text-sm border border-[var(--border-color)] rounded-full text-[var(--text-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300"
                >
                  Website
                </a>
              </div>

              <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                <a 
                  href="blog-details.html"
                  className="hover:text-[var(--primary-color)] transition-colors duration-300"
                >
                  Meeting Collaboration for your business.
                </a>
              </h4>

              <p className="text-[var(--text-color)] mb-3 leading-relaxed">
                Strategic marketing agency boosting to your online business success.
              </p>

              <div className="text-sm text-[var(--text-color)]">
                <i className="far fa-calendar-alt mr-2"></i>
                15 Apr, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;