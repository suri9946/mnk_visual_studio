import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
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
                            <h2 className="text-2xl font-black text-dark mb-1">Terms of Service</h2>
                            <p className="text-primary text-sm font-bold tracking-widest uppercase">MNK Visual House</p>
                        </div>

                        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                            <p>Welcome to MNK Visual House. By using our services, you agree to the following terms and conditions.</p>

                            <div>
                                <h3 className="text-dark font-bold mb-2">1. Services</h3>
                                <p>MNK Visual House provides creative and visual production services including design, motion graphics, video production, branding, and digital content creation.</p>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">2. Project Requirements</h3>
                                <p>Clients are responsible for providing accurate project details, references, and required materials before the project begins.</p>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">3. Payments</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Advance payment may be required before starting a project.</li>
                                    <li>Final files will be delivered after full payment is completed.</li>
                                    <li>Payments made are non-refundable once work has started.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">4. Revisions</h3>
                                <p>Reasonable revisions are included depending on the project scope. Additional revisions beyond the agreed limit may involve extra charges.</p>
                            </div>

                            <div>
                                <h3 className="text-dark font-bold mb-2">5. Intellectual Property</h3>
                                <p>Final approved deliverables become the client's property after full payment. MNK Visual House reserves the right to showcase completed work in its portfolio and promotional materials unless agreed otherwise.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TermsModal;
