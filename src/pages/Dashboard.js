import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-purple-600 mb-4">Dashboard</h1>
      <p>Welcome to your dashboard. Here you can manage your video series and track your content performance.</p>
      {/* Add dashboard content here */}
    </motion.div>
  );
};

export default Dashboard;