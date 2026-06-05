import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Film, Star } from 'lucide-react';

const About = () => {
    const services = [
        'Graphic Design', 'Motion Graphics', 'Video Editing',
        'Branding', 'Social Media Content', 'Ad Creatives', 'Visual Production'
    ];

    return (
        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Left - Content */}
                <div>
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        ABOUT US
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-6">
                        About <span className="text-gradient">MNK Visual House</span>
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                        <p>
                            MNK Visual House is a creative visual production company that helps brands grow through design, motion, video, and digital content.
                        </p>
                        <p>
                            We create modern visuals that help businesses look professional, attract attention, and connect with people online. From social media creatives and reels to branding and promotional videos, we focus on creating content that leaves a strong impression.
                        </p>
                        <p>
                            At MNK, we believe every brand has a story — and our job is to present it in the most creative and impactful way possible.
                        </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mb-8">
                        <p className="text-dark font-medium italic">
                            "Our goal is simple: To turn ideas into visuals people remember."
                        </p>
                    </div>
                </div>

                {/* Right - Cards & Tags */}
                <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.15em] mb-5">
                        Our Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {services.map((service, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600 hover:text-primary hover:border-pink-200 transition-colors"
                            >
                                {service}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: <Palette className="text-purple-500" />, title: 'Design', desc: 'Brand-first thinking' },
                            { icon: <Zap className="text-pink-500" />, title: 'Motion', desc: 'Captivating animations' },
                            { icon: <Film className="text-blue-500" />, title: 'Video', desc: 'Cinematic stories' },
                            { icon: <Star className="text-indigo-500" />, title: 'Impact', desc: 'Visuals that convert' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-5 rounded-2xl shadow-lg border border-gray-50"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                                    {item.icon}
                                </div>
                                <h4 className="text-dark font-bold mb-1 text-sm">{item.title}</h4>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
