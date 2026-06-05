import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Film, Monitor, Megaphone, Globe } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: <PenTool size={28} className="text-purple-600" />,
        title: 'Graphic Design',
        description: 'Stunning visuals that communicate your brand identity with clarity, creativity, and purpose across every medium.',
        bg: 'bg-purple-50',
    },
    {
        id: 2,
        icon: <Film size={28} className="text-pink-600" />,
        title: 'Reels Production',
        description: 'High-impact short-form video content crafted to stop the scroll, grow your audience, and drive engagement.',
        bg: 'bg-pink-50',
    },
    {
        id: 3,
        icon: <Monitor size={28} className="text-blue-600" />,
        title: 'Social Media Visuals',
        description: 'Consistent, on-brand creative content designed for all your social platforms to build a powerful digital presence.',
        bg: 'bg-blue-50',
    },
    {
        id: 4,
        icon: <Megaphone size={28} className="text-indigo-600" />,
        title: 'Meta Ads',
        description: 'Creative ad visuals for Facebook and Instagram that are designed to attract, engage, and convert your target audience.',
        bg: 'bg-indigo-50',
    },
    {
        id: 5,
        icon: <Globe size={28} className="text-teal-600" />,
        title: 'Google Ads & Campaigns',
        description: 'Compelling ad creatives and campaign visuals designed to maximise your online reach and brand visibility.',
        bg: 'bg-teal-50',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        WHAT WE DO
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
                        Smart Production. <span className="relative">Real Impact.
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col items-center border border-gray-100"
                        >
                            <div className={`w-20 h-20 rounded-full ${service.bg} flex items-center justify-center mb-6`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
