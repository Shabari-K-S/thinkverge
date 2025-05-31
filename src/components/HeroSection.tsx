
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'The Edge of New Thinking';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const codeLines = [
    '$ npm start',
    '> Starting ThinkVerge learning platform...',
    '> Loading courses: Python, Java, C++, SQL...',
    '> Connecting to live sessions...',
    '> ✓ Ready to learn!',
    '> Students online: 1,247',
    '> Next session: Python AI/ML in 15 min'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">
                {typedText.split(' ').map((word, index) => (
                  <span key={index}>
                    {word === 'Edge' || word === 'Thinking' ? (
                      <span className="gradient-text">{word}</span>
                    ) : (
                      word
                    )}
                    {index < typedText.split(' ').length - 1 && ' '}
                  </span>
                ))}
              </span>
              {typedText.length < fullText.length && <span className="typing-cursor"></span>}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg animate-fade-in-up animate-delay-300">
              Master cutting-edge engineering skills through <span className="text-thinkverge-blue font-semibold">live interactive courses</span> taught by industry experts. Learn, build, and think ahead.
            </p>
            
            <p className="text-lg text-gray-400 animate-fade-in-up animate-delay-500">
              <span className="text-thinkverge-orange font-semibold">Learn Live. Think Ahead.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-700">
              <button className="bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple text-white px-8 py-4 rounded-lg font-semibold text-lg pulse-glow hover:scale-105 transition-transform">
                Start Learning Today
              </button>
              <button className="glass text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift border border-white/20">
                Watch Demo
              </button>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8 pt-8 animate-fade-in-up animate-delay-700">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="relative animate-float">
            <div className="glass-card p-6 max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">terminal</span>
              </div>
              <div className="space-y-2">
                {codeLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`code-preview animate-fade-in opacity-0`}
                    style={{ animationDelay: `${index * 0.5 + 1}s`, animationFillMode: 'forwards' }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-thinkverge-purple to-thinkverge-orange rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-thinkverge-blue to-thinkverge-red rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
