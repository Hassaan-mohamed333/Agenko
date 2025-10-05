import React from "react"
import { Link } from "react-router-dom"
import FuzzyText from "../../Ui/fuzzy-text"; 


export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0E0F11] flex flex-col items-center justify-center p-8">
      
      
      <FuzzyText
        fontSize="clamp(2rem, 8vw, 8rem)" 
        fontWeight={900}                  
        fontFamily="inherit"              
        color="#fff"                      
        enableHover={true}                
        baseIntensity={0.18}              
        hoverIntensity={0.5}              
      >
        404
      </FuzzyText>

      
      <FuzzyText
        fontSize="clamp(1.5rem, 5vw, 4rem)"
        fontWeight={900}
        fontFamily="inherit"
        color="#fff"
        enableHover={true}
        baseIntensity={0.18}
        hoverIntensity={0.5}
        className="mt-4"
      >
        notfound
      </FuzzyText>

      <Link 
        to="/" 
        className="mt-8 px-8 py-3 bg-[#9CFE4F] text-[#0E0F11] font-bold rounded-lg text-lg"
      >
        العودة للرئيسية
      </Link>
    </div>
  )
}