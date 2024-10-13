// src/components/PricingSection.js
import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features, isPopular }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)' }}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-indigo-900 mb-2">{title}</h3>
    <div className="text-4xl font-bold text-indigo-900 mb-4">
      ${price}
      {price !== '0' && <span className="text-lg font-normal text-gray-600">/month</span>}
    </div>
    <ul className="flex-grow mb-6">
      {features.map((feature, index) => (
        <li key={index} className={`flex items-center mb-2 ${feature.disabled ? 'text-gray-400' : ''}`}>
          {feature.disabled ? (
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300"
      onClick={() => handleTryNow(title)}
    >
      TRY NOW!
    </motion.button>
  </motion.div>
);

const handleTryNow = (plan) => {
  // Redirect to sign-up/payment page with selected plan
  console.log(`Selected plan: ${plan}`);
  // You would typically use React Router here, e.g.:
  // history.push(`/signup?plan=${plan}`);
};

const PricingSection = () => {
  const pricingPlans = [
    {
      title: 'FREE',
      price: '0',
      features: [
        { text: 'Creates 1 Video' },
        { text: '1 Series' },
        { text: 'Edit & Preview Videos' },
        { text: 'Auto-Post To Channel', disabled: true },
        { text: 'HD Video Resolution', disabled: true },
        { text: 'Background Music', disabled: true },
        { text: 'Voice Cloning', disabled: true },
        { text: 'No Watermark', disabled: true },
      ],
    },
    {
      title: 'STARTER',
      price: '19',
      features: [
        { text: 'Posts 3 Times A Week' },
        { text: '1 Series' },
        { text: 'Edit & Preview Videos' },
        { text: 'Auto-Post To Channel' },
        { text: 'HD Video Resolution' },
        { text: 'Background Music' },
        { text: 'Voice Cloning' },
        { text: 'No Watermark' },
      ],
    },
    {
      title: 'DAILY',
      price: '39',
      features: [
        { text: 'Posts Once A Day' },
        { text: '1 Series' },
        { text: 'Edit & Preview Videos' },
        { text: 'Auto-Post To Channel' },
        { text: 'HD Video Resolution' },
        { text: 'Background Music' },
        { text: 'Voice Cloning' },
        { text: 'No Watermark' },
      ],
    },
    {
      title: 'HARDCORE',
      price: '69',
      features: [
        { text: 'Posts Twice A Day' },
        { text: '1 Series' },
        { text: 'Edit & Preview Videos' },
        { text: 'Auto-Post To Channel' },
        { text: 'HD Video Resolution' },
        { text: 'Background Music' },
        { text: 'Voice Cloning' },
        { text: 'No Watermark' },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-100 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-900 mb-2"
        >
          PRICING
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-indigo-700 mb-12"
        >
          PAY FOR WHAT YOU NEED
        </motion.p>
        <div className="bg-indigo-600 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;