import React, { useEffect, useState } from 'react'
import ThemeButton from '../ThemeButton/ThemeButton';
export default function CounterSection() {
    const [projectCount, setProjectCount] = useState(0)
    const [awardCount, setAwardCount] = useState(0)
    const [yearsCount, setYearsCount] = useState(0)

    useEffect(() => {
        const animateCounter = (target, setter, duration = 2000) => {
            let start = 0
            const increment = target / (duration / 16)
            const timer = setInterval(() => {
                start += increment
                if (start >= target) {
                    setter(target)
                    clearInterval(timer)
                } else {
                    setter(Math.floor(start))
                }
            }, 16)
        }

        setTimeout(() => {
            animateCounter(240, setProjectCount, 2000)
            animateCounter(23, setAwardCount, 1800)
            animateCounter(24, setYearsCount, 1500)
        }, 300)
    }, [])

    return (
        <section className="py-32  bg-[var(--brand-white)] dark:bg-black">
         
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <div className="mb-12">
                            <div className="mb-8">
                                <span className="inline-block border border-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] px-4 py-2 rounded-full mb-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                    About us
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-[var(--black-color)] dark:text-[var(--white-color)] leading-tight mb-8">
                                    Strategic growth powered by Agenko Agency!
                                </h2>
                            </div>
                            
                            <p className="text-[var(--black-color)] dark:text-[var(--white-color)] text-lg leading-relaxed mb-8">
                                At Agenko Agency, we specialize in delivering strategic growth solutions tailored to elevate your business to new heights. By combining innovative strategies, data-driven insights, and creative expertise, we help companies unlock their full potential.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Our dedicated team works closely with clients to understand their unique goals, crafting customized plans that drive measurable results.
                            </p>
                            
                            <div className="mb-8">
                               <ThemeButton text="Learn More" href="about.html" />
                            </div>
                            
                            <ul className="flex flex-wrap gap-8 border-t border-gray-800 pt-8">
                                <li className="flex-1 min-w-[200px]">
                                    <div className="space-y-3">
                                        <h2 className="text-5xl font-bold text-black dark:text-white">
                                            {projectCount}+
                                        </h2>
                                        <p className="text-gray-400">Projects success rate 99%</p>
                                    </div>
                                </li>
                                <li className="flex-1 min-w-[200px] pl-8 border-l border-gray-800">
                                    <div className="space-y-3">
                                        <h2 className="text-5xl  font-bold text-black dark:text-white">
                                            {awardCount}+
                                        </h2>
                                        <p className="text-gray-400">Award for digital innovation</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-5">
                        <div className="relative max-w-md ml-auto">
                            <img
                                src="/images/digital-agency/about/about1.jpg"
                                alt="About Agenko Agency"
                                className="w-full rounded-3xl"
                            />
                            
                            <div className="absolute lg:-left-12 left-4 top-1/3 bg-[var(--agenko-primary-green)] text-black rounded-xl px-6 py-5 text-center max-w-[160px] shadow-lg">
                                <h2 className="text-4xl font-bold mb-2">
                                    {yearsCount}+
                                </h2>
                                <p className="text-sm font-medium leading-snug">Years On The Market</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}