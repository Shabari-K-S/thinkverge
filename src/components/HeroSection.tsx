import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'The Future of Learning';
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText.length]);

  const features = [
    { icon: '🎯', label: 'Focused Learning' },
    { icon: '🚀', label: 'Fast Progress' },
    { icon: '💡', label: 'Smart Insights' },
    { icon: '🌟', label: 'Expert Guidance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Live sessions available
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white/90">
                    {typedText}
                    {currentIndex < fullText.length && (
                      <span className="inline-block w-1 h-16 bg-gradient-to-b from-purple-400 to-blue-400 ml-1 animate-pulse"></span>
                    )}
                  </span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
                    Starts Here
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Experience next-generation education through 
                  <span className="text-purple-300 font-medium"> immersive live courses</span> designed 
                  by industry pioneers. Transform your career with hands-on learning.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-2">
                      Begin Your Journey
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  
                  <button className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch Preview
                    </span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">15K+</div>
                    <div className="text-sm text-gray-400">Active Learners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">4.9★</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">98%</div>
                    <div className="text-sm text-gray-400">Completion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Modern Visual */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">ThinkVerge Pro</h3>
                      <p className="text-gray-400 text-sm">Live Learning Platform</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="text-white text-sm font-medium">{feature.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Course Progress</span>
                    <span className="text-purple-300">73%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-3/4 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Next session in 12 minutes</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 border-2 border-purple-400/30 rounded-lg rotate-12 animate-spin" style={{animationDuration: '8s'}}></div>
              <div className="absolute bottom-1/4 -right-4 w-6 h-6 border-2 border-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default HeroSection;