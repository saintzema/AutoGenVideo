// src/components/HowItWorksSection.js
import React from "react";
import { motion } from "framer-motion";
import HowItWorks from "../assets/HowItWorks1.png";
import HowItWorks2 from "../assets/HowItWorks2.png";
import HowItWorks3 from "../assets/HowItWorks3v2.png";

// src/components/HowItWorks.js

const StepCard = ({ title, content, image, step }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: step * 0.2 }}
    className="relative transition-transform duration-300 ease-in-out transform hover:scale-105"
  >
    <div className="bg-indigo-900 text-white rounded-lg p-4 shadow-lg mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src={image} alt={title} className="w-full h-auto mb-4 rounded" />
      <p className="text-sm text-gray-600">{content}</p>
    </div>
    <div className="absolute top-0 left-0 -ml-6 -mt-6 bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
      {step}
    </div>
  </motion.div>
);

const Arrow = ({ rotate }) => (
  <motion.svg
    width="100"
    height="50"
    viewBox="0 0 100 50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className={`text-indigo-300 ${rotate ? "transform rotate-180" : ""}`}
  >
    <path
      d="M0 25 Q 50 0, 100 25"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="5,5"
    />
    <path
      d="M90 25 L 100 25 L 95 20 M 100 25 L 95 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </motion.svg>
);

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-100 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-900 mb-2"
        >
          HOW DOES IT WORK?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-indigo-700 mb-16"
        >
          FACELESS CHANNELS ON AUTO-PILOT
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <StepCard
            title="CREATE A SERIES"
            content="Choose a topic for your faceless video series. Select from our preset list or create a custom prompt. Our AI will begin crafting your first unique video immediately."
            image={HowItWorks}
            step={1}
          />
          <Arrow />
          <StepCard
            title="PREVIEW AND CUSTOMIZE"
            content="Review your AI-generated video before it's posted. Edit the script, title, or background music as needed. Each video is uniquely created for your series."
            image={HowItWorks2}
            step={2}
          />
          <StepCard
            title="AUTOMATE AND MANAGE"
            content="Streamline your posting. Edit your posting schedule, connect your channels, and let AutoShorts.ai handle the rest."
            image={HowItWorks3}
            step={3}
          />
          <Arrow rotate />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
