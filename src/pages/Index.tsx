
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
