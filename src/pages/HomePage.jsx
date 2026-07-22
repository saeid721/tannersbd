import React from 'react';
import HeroSection        from '../features/home/HeroSection/HeroSection';
import AboutSection       from '../features/home/AboutSection/AboutSection';
import FacilitiesPreview  from '../features/home/FacilitiesPreview/FacilitiesPreview';
import PresidentSection   from '../features/home/PresidentSection/PresidentSection';
import ExecutiveCommittee from '../features/home/ExecutiveCommittee/ExecutiveCommittee';
import CTABanner          from '../features/home/CTABanner/CTABanner';

const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <FacilitiesPreview />
    <PresidentSection />
    <ExecutiveCommittee />
    <CTABanner />
  </>
);

export default HomePage;
