import React from 'react';
import HeroSection        from '../features/home/HeroSection/HeroSection';
import AnnouncementBar       from '../features/home/AnnouncementBar/AnnouncementBar';
import AboutSection       from '../features/home/AboutSection/AboutSection';
import FacilitiesPreview  from '../features/home/FacilitiesPreview/FacilitiesPreview';
import PresidentSection   from '../features/home/PresidentSection/PresidentSection';
import NewsSection   from '../features/home/NewsSection/NewsSection';
import ExecutiveCommittee from '../features/home/Gallery/Gallery';
// import CTABanner          from '../features/home/CTABanner/CTABanner';

const HomePage = () => (
  <>
    <HeroSection />
    <AnnouncementBar />
    <AboutSection />
    <FacilitiesPreview />
    <PresidentSection />
    <NewsSection/>
    <ExecutiveCommittee />
    {/* <CTABanner /> */}
  </>
);

export default HomePage;
