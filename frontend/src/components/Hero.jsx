import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, PenTool, Film, Monitor, Megaphone, Globe } from 'lucide-react';

const slides = [
    {
        title: "Graphic Design",
        icon: <PenTool size={32} className="text-purple-500" />,
        stat: "120+ Brands Designed",
        growth: "+45% Engagement",
        bg: "bg-purple-50",
    },
    {
        title: "Reels Production",
        icon: <Film size={32} className="text-pink-500" />,
        stat: "2M+ Views Generated",
        growth: "+150% Reach",
        bg: "bg-pink-50",
    },
    {
        title: "Social Media Visuals",
        icon: <Monitor size={32} className="text-blue-500" />,
        stat: "500+ Posts Created",
        growth: "Consistent Growth",
        bg: "bg-blue-50",
    },
    {
        title: "Meta & Google Ads",
        icon: <Megaphone size={32} className="text-indigo-500" />,
        stat: "300% Avg ROI",
        growth: "High Conversion",
        bg: "bg-indigo-50",
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#F8F9FE] min-h-screen flex items-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

            {/* Decorative dots */}
            <div className="absolute top-32 left-10 w-24 h-24 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] [background-size:16px_16px] opacity-40" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                
                {/* Left Content */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block"
                    >
                        VISUAL PRODUCTION THAT DRIVES GROWTH
                    </motion.span>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-dark leading-[1.1] mb-6"
                    >
                        MNK <span className="text-gradient">VISUAL</span> HOUSE
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg"
                    >
                        Visual production for brands that want more than ordinary. Data-driven creative solutions that help brands grow, connect, and convert online. ✨
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#services" className="btn-primary">
                            Our Services <ArrowRight size={20} />
                        </a>
                        <a href="#portfolio" className="btn-secondary">
                            See Our Work <ArrowRight size={20} />
                        </a>
                    </motion.div>

                    {/* Trusted by */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-pink-200" />
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-200" />
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-xs font-bold text-dark">
                                +
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">
                            <span className="font-bold text-dark">Trusted by 50+ clients</span><br />
                            from startups to growing brands.
                        </p>
                    </motion.div>
                </div>

                {/* Right Animated Monitor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Monitor Frame */}
                    <div className="relative w-full max-w-[550px] aspect-[16/10] bg-white rounded-t-2xl border-[8px] border-gray-800 shadow-premium flex flex-col overflow-hidden">
                        
                        {/* Monitor Content Area */}
                        <div className="flex-1 relative bg-gray-50 p-6 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute inset-4 rounded-xl ${slides[currentSlide].bg} border border-white flex flex-col items-center justify-center text-center p-6 shadow-sm`}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                                        {slides[currentSlide].icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-2">
                                        {slides[currentSlide].title}
                                    </h3>
                                    
                                    <div className="flex gap-4 mt-4 w-full">
                                        <div className="flex-1 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Metric</p>
                                            <p className="font-bold text-sm text-dark">{slides[currentSlide].stat}</p>
                                        </div>
                                        <div className="flex-1 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Growth</p>
                                            <p className="font-bold text-sm text-green-500">{slides[currentSlide].growth}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Mock chart graph SVG */}
                                    <svg className="w-full h-16 mt-6" viewBox="0 0 200 50" preserveAspectRatio="none">
                                        <motion.path
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1 }}
                                            d="M 0,40 Q 20,20 40,30 T 80,10 T 120,25 T 160,5 T 200,15"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="4"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#E91E8C" />
                                                <stop offset="100%" stopColor="#7B2FF7" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Monitor Bottom Bezel */}
                        <div className="h-6 bg-gray-900 w-full flex items-center justify-center relative">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                            <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                        </div>
                    </div>
                    
                    {/* Monitor Stand */}
                    <div className="absolute -bottom-6 w-32 h-6 bg-gray-300 rounded-b-xl" style={{ perspective: '100px' }}>
                        <div className="w-full h-full bg-gray-800" style={{ transform: 'rotateX(20deg)' }} />
                    </div>
                    <div className="absolute -bottom-8 w-48 h-2 bg-gray-900 rounded-full" />
                    
                    {/* Floating elements around monitor */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-premium border border-gray-100 flex items-center gap-2 z-20"
                    >
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 font-bold text-xs">✓</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold">Total Reach</p>
                            <p className="text-sm font-black text-dark">248K</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-2 -left-6 bg-white p-3 rounded-xl shadow-premium border border-gray-100 flex items-center gap-2 z-20"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <i className="fab fa-facebook-f text-xs" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold">Engagement</p>
                            <p className="text-sm font-black text-dark">+320%</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
