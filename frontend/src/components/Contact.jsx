import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Phone, Mail } from 'lucide-react';
import axios from 'axios';

const contactDetails = [
    {
        icon: <Phone size={20} />,
        label: 'Phone',
        value: '+91 8660453221',
        href: 'tel:+918660453221',
    },
    {
        icon: <Mail size={20} />,
        label: 'Email',
        value: 'hellomnkvisualhouse@gmail.com',
        href: 'mailto:hellomnkvisualhouse@gmail.com',
    },
    {
        icon: <i className="fab fa-instagram text-xl" />,
        label: 'Instagram',
        value: '@mnk.visualhouse',
        href: 'https://www.instagram.com/mnk.visualhouse/',
        external: true,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', message: ''
    });
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            if (response.data.success) {
                setStatus('success');
                setMessage(response.data.message);
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
                setMessage(response.data.message);
            }
        } catch (error) {
            setStatus('error');
            setMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    const inputClass = 'w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-dark placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-200';

    return (
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase mb-4 block">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-dark">
                        Let's Create Something <span className="text-gradient">Remarkable.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left Info */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <p className="text-gray-500 leading-relaxed">
                            Ready to bring your brand vision to life? Reach out and let's create visuals that make a lasting impact.
                        </p>

                        {contactDetails.map((info, i) => (
                            <motion.a
                                key={i}
                                href={info.href}
                                target={info.external ? '_blank' : undefined}
                                rel="noreferrer"
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-primary shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">{info.label}</p>
                                    <p className="text-dark font-bold text-sm">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Service</label>
                                <select name="service" value={formData.service} onChange={handleChange} className={`${inputClass} appearance-none`}>
                                    <option value="">Select a service</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Reels Production">Reels Production</option>
                                    <option value="Social Media Visuals">Social Media Visuals</option>
                                    <option value="Meta Ads">Meta Ads</option>
                                    <option value="Google Ads & Campaigns">Google Ads & Campaigns</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest">Your Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project..." required className={`${inputClass} resize-none`} />
                            </div>

                            <div className="md:col-span-2 flex flex-col items-center gap-4">
                                <button type="submit" disabled={status === 'loading'} className={`btn-primary w-full justify-center py-4 ${status === 'loading' ? 'opacity-70' : ''}`}>
                                    {status === 'loading' ? <><Loader2 className="animate-spin" size={20} /> Processing...</> : <><Send size={20} /> Send Message</>}
                                </button>
                                {status === 'success' && <div className="text-green-500 font-bold flex gap-2 items-center"><CheckCircle size={18} /> {message}</div>}
                                {status === 'error' && <div className="text-red-500 font-bold flex gap-2 items-center"><AlertCircle size={18} /> {message}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
