import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Film, Image, Megaphone } from 'lucide-react';

const expertise = [
    {
        icon: <Layers size={28} className="text-purple-600" />,
        title: 'Brand Visual Identity',
        desc: 'Logo design, brand guidelines, color systems, and visual language that makes your brand instantly recognizable and unforgettable.',
        bg: 'bg-purple-50',
    },
    {
        icon: <Zap size={28} className="text-pink-600" />,
        title: 'Motion Graphics',
        desc: 'Engaging animated content that brings your brand story to life with fluid motion across all digital platforms.',
        bg: 'bg-pink-50',
    },
    {
        icon: <Film size={28} className="text-blue-600" />,
        title: 'Video Production',
        desc: 'From concept to final cut — professional cinematic video content that captures attention and drives real results.',
        bg: 'bg-blue-50',
    },
    {
        icon: <Image size={28} className="text-indigo-600" />,
        title: 'Content Creation',
        desc: 'High-quality social media visuals, reels, and digital content crafted for maximum engagement and brand consistency.',
        bg: 'bg-indigo-50',
    },
    {
        icon: <Megaphone size={28} className="text-teal-600" />,
        title: 'Creative Campaign Visuals',
        desc: 'Ad creatives and campaign visuals designed to stop the scroll, convert viewers into customers, and amplify your brand.',
        bg: 'bg-teal-50',
    },
];

const WhatWeCreate = () => {
    return (
        <section id="what-we-create" className="py-20 px-6 md:px-12 lg:px-24 bg-[#F8F9FE] relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        WHAT WE CREATE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark">
                        Visuals That Make Brands <span className="text-gradient">Unforgettable.</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] border border-gray-100 ${
                                index === 4 ? 'md:mx-auto lg:mx-0' : ''
                            }`}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeCreate;
