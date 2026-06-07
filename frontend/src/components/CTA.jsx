import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F8F9FE] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-10 right-10 w-6 h-6 rounded-full border-2 border-purple-200" />
                <div className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-pink-200" />
                <div className="absolute top-1/2 left-20 w-3 h-3 rounded-full bg-blue-200" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                
                {/* Left - Content */}
                <div className="w-full lg:w-1/2">
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        READY TO GROW?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-4">
                        Let's Build Something<br/>
                        Amazing <span className="text-gradient">Together.</span>
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-md">
                        Tell us your goals — we'll handle the strategy, execution, and growth.
                    </p>
                    <a href="#contact" className="btn-primary inline-flex">
                        Let's Talk <ArrowUpRight size={18} />
                    </a>
                </div>

                {/* Right - High Fiving Characters Animation */}
                <div className="w-full lg:w-1/2 relative h-[400px] flex items-end justify-center">
                    
                    {/* Paper plane animation */}
                    <motion.div
                        animate={{ 
                            x: [0, 60, 120], 
                            y: [0, -40, -80],
                            opacity: [1, 1, 0]
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: "easeOut" 
                        }}
                        className="absolute top-20 left-1/4 z-20"
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#7B2FF7">
                            <path d="M2 12L22 2L12 22L11 13L2 12Z" />
                        </svg>
                        {/* Kite tail — explicit-sized SVG avoids overflow-hidden clipping from section.
                             Plane bottom vertex (12,22) in 24x24 viewBox at 40x40 = screen (20px, 37px).
                             SVG at top:37 left:7 → path start (13,0) = screen (7+13=20, 37+0=37) ✅
                             All path points inside 26×70 bounds → no overflow → no clipping. */}
                        <svg
                            style={{
                                position: 'absolute',
                                top: '37px',
                                left: '7px',
                                width: '26px',
                                height: '70px',
                                pointerEvents: 'none',
                            }}
                            viewBox="0 0 26 70"
                            fill="none"
                        >
                            <path
                                d="M13 0 Q 0 17 13 34 Q 26 51 11 68"
                                stroke="#3B0764"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </motion.div>

                    {/* Characters SVG */}
                    <div className="relative z-10 mt-auto w-full">
                        <svg width="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '400px', margin: '0 auto', display: 'block' }}>
                            {/* Woman */}
                            <path d="M50 300 C 50 250, 70 200, 100 200 C 130 200, 150 250, 150 300 Z" fill="#E91E8C" />
                            {/* Woman Head */}
                            <circle cx="100" cy="170" r="30" fill="#FFCDB2" />
                            {/* Woman Hair */}
                            <path d="M70 170 C 70 140, 130 140, 130 170 L 130 200 L 70 200 Z" fill="#1A1A2E" />
                            
                            {/* Man */}
                            <path d="M250 300 C 250 220, 290 180, 330 180 C 370 180, 390 220, 390 300 Z" fill="#FBB03B" />
                            {/* Man Head */}
                            <circle cx="330" cy="140" r="35" fill="#FFCDB2" />
                            {/* Man Hair/Beard */}
                            <path d="M295 140 C 295 100, 365 100, 365 140 Z" fill="#1A1A2E" />
                            <path d="M310 160 Q 330 180 350 160" stroke="#1A1A2E" strokeWidth="6" strokeLinecap="round" />

                            {/* Middle Kid */}
                            <path d="M150 300 C 150 260, 180 230, 210 230 C 240 230, 260 260, 260 300 Z" fill="#7B2FF7" />
                            {/* Kid Head */}
                            <circle cx="210" cy="200" r="25" fill="#FFCDB2" />
                            {/* Kid Hair */}
                            <path d="M185 200 C 185 170, 235 170, 235 200 Z" fill="#1A1A2E" />

                            {/* Woman Arm high fiving */}
                            <path d="M130 220 Q 180 180 220 100" stroke="#E91E8C" strokeWidth="20" strokeLinecap="round" />
                            {/* Woman Hand */}
                            <circle cx="220" cy="100" r="12" fill="#FFCDB2" />
                            
                            {/* Man Arm high fiving */}
                            <path d="M300 200 Q 250 160 220 100" stroke="#FBB03B" strokeWidth="20" strokeLinecap="round" />
                            {/* Man Hand */}
                            <circle cx="220" cy="100" r="12" fill="#FFCDB2" />

                            {/* High Five Impact Lines */}
                            <motion.path 
                                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                d="M220 70 L 220 50 M 240 80 L 260 70 M 190 80 L 170 70" 
                                stroke="#FF9D00" strokeWidth="4" strokeLinecap="round" 
                            />
                        </svg>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;
