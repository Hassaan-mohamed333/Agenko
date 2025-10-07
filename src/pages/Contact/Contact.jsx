import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PageBanner from '@/components/PageBanner/PageBanner';
import { Link } from 'react-router-dom';


export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            subject: Yup.string().required('Subject is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values) => {
            setIsSubmitting(true);
            setSubmitStatus(null);
            
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', values);
                setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                formik.resetForm();
                setIsSubmitting(false);

                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            }, 1500);
        }
    });

    const getInputClassName = (fieldName) => {
        const baseClass = "w-full bg-[#1A1B1D] border rounded-xl px-6 py-4 text-white placeholder-white/70 font-bold text-lg focus:outline-none focus:ring-2 transition-all";
        const hasError = formik.errors[fieldName] && formik.touched[fieldName];
        const borderClass = hasError ? 'border-red-500' : 'border-white/15';
        const ringClass = hasError ? 'focus:ring-red-500' : 'focus:ring-[#9CFE4F]';
        return `${baseClass} ${borderClass} ${ringClass}`;
    };

    return (
          <>
           <PageBanner />

       
        <section className="py-20 px-4 bg-[#0E0F11] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Contact Info - Left Side */}
                    <div className="lg:col-span-5">
                        <div className="relative bg-[#0E0F11] border border-[#313131] rounded-3xl p-8 md:p-12 lg:mr-8">
                            {/* Background World Map */}
                              <div className="absolute top-0 right-0 z-0 opacity-100  h-full pointer-events-none">
                <img src="/images/pages/shape/world.png" alt="" className="w-full h-full object-cover" />
              </div>

                            <div className="space-y-6 relative z-10">
                                {/* Phone */}
                                <div className="pb-6 border-b-0">
                                    <a
                                        href="tel:+15551234567"
                                        className="text-4xl md:text-5xl font-bold text-[#9CFE4F] hover:opacity-80 transition-opacity"
                                        style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                    >
                                        +1 (555) 123-4567
                                    </a>
                                </div>

                                {/* Address */}
                                <div className="pb-6 border-b border-[#313131]">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-[#9CFE4F] mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-white text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: '"Source Sans 3", sans-serif' }}>
                                                Address
                                            </h3>
                                            <p className="text-[#9E9FA0] text-base leading-relaxed">6801 Hollywood Blvd, Los Angeles, CA 90028</p>
                                            <p className="text-[#9E9FA0] text-base leading-relaxed mt-1">6801 Hollywood Blvd, Los Angeles, CA 90028</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="pb-6 border-b border-[#313131]">
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-[#9CFE4F] mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-white text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: '"Source Sans 3", sans-serif' }}>
                                                Email
                                            </h3>
                                            <a href="mailto:Info@agenko45.com" className="text-[#9E9FA0] hover:text-[#9CFE4F] transition-colors block text-base">
                                                Info@agenko45.Com
                                            </a>
                                            <a href="mailto:Info@agenko45.com" className="text-[#9E9FA0] hover:text-[#9CFE4F] transition-colors block text-base mt-1">
                                                Info@agenko45.Com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 bg-[#9CFE4F] rounded-full"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-white text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: '"Source Sans 3", sans-serif' }}>
                                                Follow
                                            </h3>
                                            <div className="flex gap-3">
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 flex items-center justify-center bg-[#1A1B1D] hover:bg-[#9CFE4F] text-white hover:text-[#0E0F11] rounded-lg transition-all duration-300"
                                                    aria-label="Facebook"
                                                >
                                                    <Facebook className="w-5 h-5" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 flex items-center justify-center bg-[#1A1B1D] hover:bg-[#9CFE4F] text-white hover:text-[#0E0F11] rounded-lg transition-all duration-300"
                                                    aria-label="Instagram"
                                                >
                                                    <Instagram className="w-5 h-5" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 flex items-center justify-center bg-[#1A1B1D] hover:bg-[#9CFE4F] text-white hover:text-[#0E0F11] rounded-lg transition-all duration-300"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 flex items-center justify-center bg-[#1A1B1D] hover:bg-[#9CFE4F] text-white hover:text-[#0E0F11] rounded-lg transition-all duration-300"
                                                    aria-label="Twitter"
                                                >
                                                    <Twitter className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-7">
                        <div className="space-y-6">
                            {/* Section Title */}
                            <div className="mb-8">
                                <span className="inline-block text-[#9CFE4F] text-sm md:text-base font-bold uppercase tracking-wider mb-3">
                                    Get In Touch
                                </span>
                                <h2
                                    className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                                    style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                >
                                    Get started and grow your business now.
                                </h2>
                                <p className="text-[#9E9FA0] text-base md:text-lg">
                                    Start today to unlock opportunities and drive your business toward success.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Name"
                                            className={getInputClassName('name')}
                                            style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                        />
                                        {formik.errors.name && formik.touched.name && (
                                            <div className="text-red-400 text-sm mt-1 ml-2">{formik.errors.name}</div>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Email"
                                            className={getInputClassName('email')}
                                            style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <div className="text-red-400 text-sm mt-1 ml-2">{formik.errors.email}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Subject"
                                        className={getInputClassName('subject')}
                                        style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                    />
                                    {formik.errors.subject && formik.touched.subject && (
                                        <div className="text-red-400 text-sm mt-1 ml-2">{formik.errors.subject}</div>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Message"
                                        rows="5"
                                        className={`${getInputClassName('message')} resize-none`}
                                        style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                    ></textarea>
                                    {formik.errors.message && formik.touched.message && (
                                        <div className="text-red-400 text-sm mt-1 ml-2">{formik.errors.message}</div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#9CFE4F] hover:bg-[#8DE43D] text-[#0E0F11] font-bold text-lg md:text-xl rounded-xl px-8 py-5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ fontFamily: '"Source Sans 3", sans-serif' }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>

                                {/* Status Message */}
                                {submitStatus && (
                                    <div className={`py-3 px-4 rounded-lg text-center font-medium ${submitStatus.type === 'success'
                                            ? 'text-[#9CFE4F] bg-[#9CFE4F]/10'
                                            : 'text-red-400 bg-red-400/10'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="agenko-map">
  {/*=== Map Box ===*/}
  <div className="map-box" data-aos="fade-up" data-aos-duration={1300}>
    <iframe 
      className="w-full h-96 md:h-[450px] lg:h-[550px] border-0" 
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21485.720898662676!2d31.580006682115418!3d31.09519629711705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdickens!5e0!3m2!1sen!2sus!4v1759535671100!5m2!1sen!2sus" 
      width={600} 
      height={450} 
      style={{border: 0}} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade" 
      title="Location Map" 
    />
  </div>
</section>

            </>
    );
}