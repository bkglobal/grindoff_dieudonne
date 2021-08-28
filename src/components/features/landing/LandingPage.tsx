import React from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import Intro from './common/Intro';
import HowItWorks from './common/HowItWorks';
import Testimonials from './common/Testimonials';
import TrendingGrinds from './common/TrendingGrinds';
import WhyChooseGrindoff from './common/WhyChooseGrindoff';
import FeaturedProvidersSection from './common/FeaturedProviders';
import { PageNavigation } from 'src/components/molecules/Navigation';
import GetStarted from './common/GetStarted';
import MobileApp from './common/MobileApp';
import Footer from '../footer/Footer';

const LandingPage = () => {
  return (
    <>
      <PageNavigation />
      <Intro />
      <TrendingGrinds />
      <WhyChooseGrindoff />
      <HowItWorks />
      <FeaturedProvidersSection />
      <Testimonials />
      <GetStarted />
      <MobileApp />
      <Footer />
    </>
  );
};

export default LandingPage;
