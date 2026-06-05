import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Brand Identity Design',
        category: 'Branding',
        bg: 'bg-purple-100',
        text: 'text-purple-800',
    },
    {
        title: 'Reels Production',
        category: 'Video',
        bg: 'bg-pink-100',
        text: 'text-pink-800',
    },
    {
        title: 'Social Campaign',
        category: 'Social Media',
        bg: 'bg-blue-100',
        text: 'text-blue-800',
    },
    {
        title: 'Motion Graphics',
        category: 'Motion',
        bg: 'bg-indigo-100',
        text: 'text-indigo-800',
    },
    {
        title: 'Meta Ad Creatives',
        category: 'Meta Ads',
        bg: 'bg-teal-100',
        text: 'text-teal-800',
    },
    {
        title: 'Visual Branding',
        category: 'Branding',
        bg: 'bg-purple-100',
        text: 'text-purple-800',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        CASE STUDIES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
                        Our <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        From social media content and motion graphics to promotional videos and branding visuals, every project is created with creativity, strategy, and attention to detail.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-3xl overflow-hidden cursor-pointer h-64 bg-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-50 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit ${project.bg} ${project.text}`}>
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="w-24 h-1 bg-gradient-pink-purple mx-auto mb-8 rounded-full" />
                    <p className="text-gray-600 font-bold text-lg mb-1">✨ Design with purpose.</p>
                    <p className="text-gray-600 font-bold text-lg">🚀 Visuals with impact.</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
