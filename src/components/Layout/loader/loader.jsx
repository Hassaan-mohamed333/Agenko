import React from 'react';

const Loader = () => {
  return (
    <>
      <style>{`
        @keyframes rotate-loading {
          0% {
            // transform: rotate(0deg);
          }
          100% {
            // transform: rotate(360deg);
          }
        }
        
        .animate-rotate-loading {
          animation: rotate-loading 1.5s linear infinite;
        }
      `}</style>
      
      <div className="fixed inset-0 -z-50 flex items-center justify-center bg-black ">
        <div className="relative m-10 h-[100px] w-[100px] rounded-full">
          <div className="absolute inset-0 rounded-full border border-transparent border-r-gray-400 border-b-gray-400 animate-rotate-loading transition-all duration-500 ease-in-out"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[66px]">
            <img src="/images/loader.png" alt="Loading" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;