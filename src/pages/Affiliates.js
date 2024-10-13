import React from 'react';
import { motion } from 'framer-motion';

const Affiliates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Affiliates Program</h1>
      <p>Join our affiliates program and earn commissions by promoting AutoShorts.ai!</p>
      {/* Add affiliates program content here */}
    </motion.div>
  );
};

export default Affiliates;