import React from 'react';
import { motion } from 'framer-motion';

const BookingHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
      Book Your Session
    </h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
      Take the first step towards your holistic healing journey. Choose your preferred session and schedule.
    </p>
  </motion.div>
);

export default BookingHeader;