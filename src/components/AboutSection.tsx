
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-white">About </span>
            <span className="gradient-text">ThinkVerge</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We're revolutionizing engineering education by bringing live, interactive learning experiences directly to students worldwide. 
            Our mission is to bridge the gap between academic theory and industry practice.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left animate-fade-in-up">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To empower the next generation of engineers with cutting-edge skills through live, interactive online education. 
                We believe learning should be engaging, practical, and immediately applicable to real-world challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple rounded-full"></div>
                  <span className="text-white">Live, real-time instruction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-thinkverge-purple to-thinkverge-orange rounded-full"></div>
                  <span className="text-white">Industry-focused curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-thinkverge-orange to-thinkverge-red rounded-full"></div>
                  <span className="text-white">Hands-on project experience</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 animate-fade-in-up animate-delay-300">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Live Learning?</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-thinkverge-blue/20 to-thinkverge-purple/20 rounded-lg p-4 border border-thinkverge-blue/30">
                  <h5 className="font-semibold text-white mb-2">Immediate Feedback</h5>
                  <p className="text-gray-300 text-sm">Get instant answers to your questions and real-time code reviews</p>
                </div>
                <div className="bg-gradient-to-r from-thinkverge-purple/20 to-thinkverge-orange/20 rounded-lg p-4 border border-thinkverge-purple/30">
                  <h5 className="font-semibold text-white mb-2">Peer Collaboration</h5>
                  <p className="text-gray-300 text-sm">Learn alongside other engineering students from around the world</p>
                </div>
                <div className="bg-gradient-to-r from-thinkverge-orange/20 to-thinkverge-red/20 rounded-lg p-4 border border-thinkverge-orange/30">
                  <h5 className="font-semibold text-white mb-2">Industry Relevance</h5>
                  <p className="text-gray-300 text-sm">Stay current with the latest tools and practices used in the industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
