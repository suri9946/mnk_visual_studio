import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = ({ onPrivacyClick, onTermsClick }) => {
    return (
        <footer className="bg-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-5">
                        <span className="text-3xl font-black text-white">MNK</span>
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.25em]">VISUAL HOUSE</span>
                    </div>
                    <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                        Visual production for brands that want more than ordinary. Creative Minds. Powerful Visuals. ✨
                    </p>
                    
                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/mnk.visualhouse/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://youtube.com/@mnkvisualhouse?si=2KeWpDXaQaCyjWm4" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                            <i className="fab fa-youtube" />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Services</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-300">
                        <li><a href="#services" className="hover:text-primary transition-colors">Graphic Design</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Reels Production</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Social Media Visuals</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Meta Ads</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Google Ads</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Company</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-300">
                        <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#portfolio" className="hover:text-primary transition-colors">Case Studies</a></li>
                        <li><button onClick={onPrivacyClick} className="hover:text-primary transition-colors">Privacy Policy</button></li>
                        <li><button onClick={onTermsClick} className="hover:text-primary transition-colors">Terms of Service</button></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Contact</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-300">
                        <li>
                            <a href="tel:+918660453221" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Phone size={16} /> +91 8660453221
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hellomnkvisualhouse@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors break-all">
                                <Mail size={16} /> hellomnkvisualhouse@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <p>© 2025 MNK Visual House. All rights reserved.</p>
                <p>Creative Minds. Powerful Visuals. ✨</p>
            </div>
        </footer>
    );
};

export default Footer;
