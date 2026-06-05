import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                    >
                        <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-500">
                            <X size={18} />
                        </button>
                        
                        <div className="mb-6 border-b border-gray-100 pb-4">
                            <h2 className="text-2xl font-black text-dark mb-1">Privacy Policy</h2>
                            <p className="text-primary text-sm font-bold tracking-widest uppercase">MNK Visual House</p>
                        </div>

                        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                            <p>At MNK Visual House, we value your privacy and are committed to protecting your personal information. Any information shared with us through our website, social media platforms, or direct communication will be kept secure and used only for business and communication purposes.</p>

                            <div>
                                <h3 className="text-dark font-bold mb-2">Information We May Collect</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Project details or requirements</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">How We Use Your Information</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Respond to inquiries</li>
                                    <li>Provide our services</li>
                                    <li>Communicate project updates</li>
                                    <li>Improve client experience</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">Data Protection</h3>
                                <p>We do not sell, share, or misuse your personal information with third parties unless required by law.</p>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">Third-Party Services</h3>
                                <p>Our website or platforms may contain links to third-party services. We are not responsible for their privacy practices or content.</p>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">Updates to This Policy</h3>
                                <p>MNK Visual House may update this Privacy Policy when necessary. Any changes will be reflected on this page.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PrivacyModal;
