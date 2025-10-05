import React from 'react';

export default function PageBanner({ 
  title = "Contact",
  description = "Agenko empowers businesses with innovative strategies & creative agency solutions",
  breadcrumbs = [
    { label: "Home", href: "/", active: false }, // إضافة active: false للـ Home
    { label: "Contact", active: true }
  ],
  showIcon = true,
  showCircle = true,
  iconImage = "/src/assets/images/pages/shape//star1.png",
  circleImage = "/src/assets/images/pages/shape/circle-shape1.png",
  className = ""
}) {
  return (
    
    <section className={`p-auto m-auto justify-center relative overflow-hidden z-0 bg-var(--body-bg) dark:bg-[var(--background)] py-48 lg:py-48 md:py-32 ${className}`}>
      
    
      {showCircle && (
        <>
          <div className="absolute top-[-45%] left-[-5%] z-[-1]">
            <span className="block w-[979px] h-[979px] rounded-full border border-white/20" />
          </div>
          <div className="absolute top-[-120%] right-0 z-[-1]">
            <span className="block w-[765px] h-[765px] rounded-full border border-white/20" />
          </div>
        </>
      )}
        
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-9/12">
            <div className="page-content">
              {/*  */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white text-[var(--brand-text)] mb-10 lg:mb-10">
                {title}
              </h1>
              
              <div className="flex flex-col xl:flex-row items-center">
                
                {/* Text Box (يظهر فقط إذا كانت showIcon = true) */}
                {showIcon && (
                  <div className="w-full xl:w-8/12 flex items-center mb-6 xl:mb-0">
                    <div className="flex items-center">
                      {/* Icon */}
                      <div className="w-20 mr-8 flex-shrink-0">
                        <img 
                          alt="Shape Icon" 
                          src={iconImage} // استخدام المتغير iconImage
                          className="animate-spin bg-black rounded-full p-2 w-16 h-16 lg:w-20 lg:h-20" 
                        />
                      </div>
                      {/* Description */}
                      <div className="text">
                        <p className="dark:text-white text-[var(--brand-text)] text-lg">
                          {description} 
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Breadcrumb */}
                <div className="w-full xl:w-auto">
                  <ul className="flex justify-center xl:center space-x-4 text-center bg-white/5 backdrop-blur-sm border border-[var(--primary-color)] rounded-full px-6 py-3">
                    {breadcrumbs.map((item, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && (
                          <li className="text-var(--primary-color) before:content-['|'] before:mx-2 before:text-white"></li>
                        )}

                        {/* العنصر النشط (Active) */}
                        {item.active ? (
                          <li className="text-var(--primary-color)">
                            {item.label}
                          </li>
                        ) : (
                          // العنصر غير النشط (Not Active)
                          <li>
                            <a href={item.href} className="text-var(--card) dark:text-white text-[var(--brand-text)] transition-colors hover:text-primary-color">
                              {item.label}
                            </a>
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Circle Image (يمكنك التحكم في ظهوره عبر showCircle) */}
          <div className="w-full lg:w-3/12 mt-8 lg:mt-0">
            <div className="flex justify-center lg:justify-end">
              <img 
                alt="circle shape" 
                src={circleImage} // استخدام المتغير circleImage
                className="animate-spin w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full p-2" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}