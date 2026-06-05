import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/918660453221"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
            style={{
                background: '#25D366',
                boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
            }}
        >
            <i className="fab fa-whatsapp text-2xl text-white" />
        </motion.a>
    );
};

export default WhatsAppButton;
