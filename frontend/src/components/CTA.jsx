import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F8F9FE] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
                    
                    {/* Paper plane — starts left-edge mid-height, gentle upward slope to top-right */}
                    <motion.div
                        style={{ position: 'absolute', top: '48%', left: '0px', zIndex: 20 }}
                        animate={{
                            x: [0, 90, 200, 350, 510],
                            y: [0, -28, -65, -120, -218],
                            opacity: [0, 1, 1, 1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: 'easeInOut',
                            times: [0, 0.08, 0.4, 0.85, 1],
                        }}
                    >
                        {/* Paper Airplane — rotated ~-19° to match the flat yellow-line slope */}
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: 'rotate(-19deg)', display: 'block' }}
                        >
                            <path
                                d="M2 3L22 12L2 21V14L16 12L2 10V3Z"
                                fill="#7C3AED"
                                stroke="#5B21B6"
                                strokeWidth="0.5"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/* Dashed trail — flat-ish angle matching ~-19° slope */}
                        <svg
                            style={{
                                position: 'absolute',
                                top: '10px',
                                left: '-90px',
                                width: '94px',
                                height: '38px',
                                pointerEvents: 'none',
                            }}
                            viewBox="0 0 94 38"
                            fill="none"
                        >
                            <path
                                d="M94 8 Q 70 14 46 22 Q 23 29 0 34"
                                stroke="#7C3AED"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray="5 7"
                                fill="none"
                            />
                        </svg>
                    </motion.div>

                    {/* Characters SVG */}
                    <div className="relative z-10 mt-auto w-full">
                        <svg width="100%" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '440px', margin: '0 auto', display: 'block' }}>
                            {/* Woman body — larger & fuller */}
                            <path d="M30 320 C 30 255, 55 195, 95 195 C 135 195, 158 255, 158 320 Z" fill="#E91E8C" />
                            {/* Woman Head */}
                            <circle cx="95" cy="162" r="33" fill="#FFCDB2" />
                            {/* Woman Hair */}
                            <path d="M62 162 C 62 128, 128 128, 128 162 L 128 195 L 62 195 Z" fill="#1A1A2E" />
                            
                            {/* Man body — larger & fuller */}
                            <path d="M242 320 C 242 230, 282 175, 325 175 C 368 175, 400 230, 400 320 Z" fill="#FBB03B" />
                            {/* Man Head */}
                            <circle cx="325" cy="132" r="38" fill="#FFCDB2" />
                            {/* Man Hair */}
                            <path d="M287 132 C 287 90, 363 90, 363 132 Z" fill="#1A1A2E" />
                            {/* Man Smile */}
                            <path d="M308 152 Q 325 172 342 152" stroke="#1A1A2E" strokeWidth="6" strokeLinecap="round" fill="none" />

                            {/* Middle Kid */}
                            <path d="M148 320 C 148 272, 178 238, 210 238 C 242 238, 268 272, 268 320 Z" fill="#7B2FF7" />
                            {/* Kid Head */}
                            <circle cx="210" cy="208" r="28" fill="#FFCDB2" />
                            {/* Kid Hair */}
                            <path d="M182 208 C 182 176, 238 176, 238 208 Z" fill="#1A1A2E" />

                            {/* Woman Arm high fiving */}
                            <path d="M128 210 Q 178 168 218 92" stroke="#E91E8C" strokeWidth="22" strokeLinecap="round" />
                            {/* Woman Hand */}
                            <circle cx="218" cy="92" r="14" fill="#FFCDB2" />
                            
                            {/* Man Arm high fiving */}
                            <path d="M295 195 Q 252 155 218 92" stroke="#FBB03B" strokeWidth="22" strokeLinecap="round" />
                            {/* Man Hand */}
                            <circle cx="218" cy="92" r="14" fill="#FFCDB2" />

                            {/* High Five Impact Lines — subtle cream/gold */}
                            <motion.path 
                                animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                                d="M218 62 L 218 42 M 242 74 L 264 62 M 194 74 L 172 62" 
                                stroke="#F5E6C8" strokeWidth="4" strokeLinecap="round" 
                            />
                        </svg>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;
