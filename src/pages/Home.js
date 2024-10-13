import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import UniqueVideosSection from '../components/UniqueVideosSection';
import SectionArrow from '../components/SectionArrow';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionArrow/>
    <UniqueVideosSection/>
    <SectionArrow/>
      <HowItWorks />
      <SectionArrow />
      <PricingSection />
      <SectionArrow />
      <FAQSection />
    </div>
  );
};

export default Home;