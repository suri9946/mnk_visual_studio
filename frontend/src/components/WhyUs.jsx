import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    { stat: '50+', label: 'Happy Clients', desc: 'Growing businesses trust us.' },
    { stat: '120+', label: 'Projects Delivered', desc: 'Successful campaigns across industries.' },
    { stat: '300%', label: 'Average ROI Growth', desc: 'We turn strategies into real results.' },
    { stat: '5+', label: 'Years of Experience', desc: 'Delivering performance that lasts.' },
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F8F9FE] relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute left-0 top-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-pink-300" />
                <div className="absolute bottom-40 left-10 w-6 h-6 rounded-full border-2 border-purple-300" />
                <div className="absolute top-1/2 left-20 w-3 h-3 rounded-full bg-blue-300" />
                <div className="absolute top-10 left-1/3 w-8 h-8 rounded-full border-2 border-pink-200" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                
                {/* Left - Flying Rocket Animation */}
                <div className="w-full lg:w-1/2 relative h-[400px] flex items-end justify-center">
                    
                    {/* Clouds */}
                    <motion.div 
                        animate={{ x: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 w-full"
                    >
                        <div className="w-64 h-32 bg-purple-200 rounded-full blur-2xl absolute bottom-0 left-10 opacity-60" />
                        <div className="w-48 h-24 bg-pink-200 rounded-full blur-2xl absolute bottom-10 right-20 opacity-50" />
                        <div className="w-56 h-28 bg-blue-200 rounded-full blur-2xl absolute bottom-5 left-1/2 opacity-50" />
                        
                        {/* Solid cloud shapes */}
                        <div className="absolute bottom-0 left-1/4 w-32 h-16 bg-white rounded-full shadow-sm" />
                        <div className="absolute bottom-4 left-1/3 w-24 h-24 bg-white rounded-full shadow-sm" />
                        <div className="absolute bottom-0 right-1/4 w-40 h-20 bg-white rounded-full shadow-sm" />
                    </motion.div>

                    {/* Bar Chart base */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-3 z-10">
                        <div className="w-12 h-24 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-lg shadow-lg" />
                        <div className="w-12 h-32 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg shadow-lg" />
                        <div className="w-12 h-40 bg-gradient-to-t from-pink-500 to-pink-400 rounded-t-lg shadow-lg" />
                    </div>

                    {/* Rocket SVG */}
                    <motion.div
                        animate={{ 
                            y: [-15, 15, -15],
                            x: [-5, 5, -5],
                            rotate: [43, 47, 43]
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="absolute bottom-40 left-1/2 -translate-x-[40%] z-20"
                    >
                        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Rocket Body */}
                            <path d="M50 10 C 65 25, 70 50, 65 70 C 50 75, 35 70, 35 70 C 30 50, 35 25, 50 10 Z" fill="#ffffff" stroke="#1A1A2E" strokeWidth="3" />
                            {/* Window */}
                            <circle cx="50" cy="40" r="10" fill="#7B2FF7" stroke="#1A1A2E" strokeWidth="3" />
                            <circle cx="50" cy="40" r="4" fill="#ffffff" opacity="0.5" />
                            {/* Left Fin */}
                            <path d="M35 55 L 20 75 L 35 70 Z" fill="#E91E8C" stroke="#1A1A2E" strokeWidth="3" />
                            {/* Right Fin */}
                            <path d="M65 55 L 80 75 L 65 70 Z" fill="#E91E8C" stroke="#1A1A2E" strokeWidth="3" />
                            {/* Engine */}
                            <path d="M42 70 L 45 80 L 55 80 L 58 70 Z" fill="#F5F5FA" stroke="#1A1A2E" strokeWidth="3" />
                        </svg>

                        {/* Exhaust flame */}
                        <motion.div 
                            animate={{ scaleY: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[80px] left-[55px] -translate-x-1/2 w-8 h-16 origin-top z-10"
                        >
                            <svg viewBox="0 0 40 80" fill="none">
                                <path d="M10 0 C 10 0, 0 30, 20 80 C 40 30, 30 0, 30 0 Z" fill="#FF9D00" />
                                <path d="M15 0 C 15 0, 10 20, 20 50 C 30 20, 25 0, 25 0 Z" fill="#FFD700" />
                            </svg>
                        </motion.div>
                        
                        {/* Exhaust particles */}
                        <motion.div animate={{ y: [0, 40], opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="absolute top-[100px] left-[50px] w-2 h-2 rounded-full bg-gray-300" />
                        <motion.div animate={{ y: [0, 50], opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }} className="absolute top-[100px] left-[60px] w-3 h-3 rounded-full bg-gray-200" />
                        <motion.div animate={{ y: [0, 30], opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }} className="absolute top-[90px] left-[45px] w-2 h-2 rounded-full bg-gray-400" />
                    </motion.div>
                </div>

                {/* Right - Content */}
                <div className="w-full lg:w-1/2">
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        WHY CHOOSE US?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-4">
                        More Than Production.<br/>
                        We're Your <span className="text-gradient border-b-4 border-pink-200 inline-block">Creative Partner.</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {reasons.map((reason, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Icons replaced by colorful stats in light theme */}
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <span className="text-primary font-bold">{i + 1}</span>
                                </div>
                                <h3 className="text-2xl font-black text-dark mb-1">{reason.stat}</h3>
                                <p className="text-sm font-bold text-dark mb-2">{reason.label}</p>
                                <p className="text-gray-500 text-xs">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
