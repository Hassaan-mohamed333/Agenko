import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    adaptiveHeight: true
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Mr. David Liam",
      position: "CEO & Founder",
      text: "Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website. The team's attention to detail and commitment to!",
      image: "/assets/images/marketing-agency/testimonial/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Ms. Sarah Johnson",
      position: "Marketing Director",
      text: "Outstanding service and incredible results! The team delivered beyond our expectations with their creative approach and technical expertise.",
      image: "/assets/images/marketing-agency/testimonial/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Mr. Alex Chen",
      position: "Product Manager",
      text: "Professional, innovative, and reliable. They understood our vision perfectly and executed it flawlessly. Highly recommended!",
      image: "/assets/images/marketing-agency/testimonial/testimonial3.jpg"
    }
  ];

  // Render star ratings
  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      <li key={index} className="inline-block">
        <FaStar className="text-[var(--agentko-primary-green)] text-lg" />
      </li>
    ));
  };

  return (
    <section className="agenko-testimonial py-32 bg-[var(--agentko-background-dark)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
            {/*=== Section Title ===*/}
            <div className="section-title mb-12">
              <span className="sub-title inline-block border border-[var(--agentko-primary-green)] text-[var(--agentko-primary-green)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                Client Feedback
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--agentko-heading-light)] leading-tight">
                Hear from Our Satisfied 
                <br />
                Clients Feedback
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            {/*=== Text Box ===*/}
            <div className="text-box mb-10">
              <p className="text-[var(--agentko-text-muted)] text-lg leading-relaxed">
                Discover how our clients achieved success with Binorly Agency's expert 
                <span className="text-[var(--agentko-primary-green)] font-semibold"> web design and development</span>, 
                delivering outstanding digital solutions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 mb-12 lg:mb-0">
            {/*=== Agk Image Box ===*/}
            <div className="agenko-image-box agenko-rotate-image mb-12">
              <div className="agenko-image transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={testimonials[0].image} 
                  alt="Testimonial" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-6/12">
            {/*=== Testimonial Slider ===*/}
            <div className="testimonial-slider mb-12">
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="agenko-testimonial-item style-three px-4">
                    <div className="testimonial-content bg-[var(--agentko-surface-dark)] border border-[var(--agentko-border-dark)] rounded-2xl p-8 lg:p-10 hover:border-[var(--agentko-primary-green)] transition-all duration-300">
                      <ul className="ratings flex gap-1 mb-6">
                        {renderStars()}
                      </ul>
                      <p className="text-[var(--agentko-text-muted)] text-lg leading-relaxed mb-8">
                        "{testimonial.text}"
                      </p>
                      <div className="author-item">
                        <div className="author-info">
                          <h4 className="text-xl font-bold text-[var(--agentko-heading-light)] mb-2">
                            {testimonial.name}
                          </h4>
                          <span className="position text-[var(--agentko-text-muted)] text-base">
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;