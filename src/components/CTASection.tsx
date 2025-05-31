
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-thinkverge-blue/20 to-thinkverge-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-thinkverge-purple/20 to-thinkverge-orange/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-thinkverge-orange/20 to-thinkverge-red/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Ready to Transform Your </span>
            <span className="gradient-text">Future</span>
            <span className="text-white">?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of engineering students who are already building their careers with 
            <span className="text-thinkverge-blue font-semibold"> live, interactive learning</span>. 
            Your journey to becoming a skilled engineer starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
            <button className="bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple text-white px-10 py-5 rounded-xl font-bold text-xl pulse-glow hover:scale-105 transition-transform shadow-2xl">
              Start Your Journey Today
            </button>
            <button className="glass text-white px-10 py-5 rounded-xl font-bold text-xl hover-lift border border-white/30 backdrop-blur-lg">
              Schedule a Free Consultation
            </button>
          </div>

          {/* Benefits Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in-up animate-delay-500">
            <div className="glass-card p-6 text-center hover-lift">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Start Immediately</h3>
              <p className="text-gray-300">Begin learning within 24 hours of enrollment</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Mentorship</h3>
              <p className="text-gray-300">Get guidance from industry professionals</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Career Support</h3>
              <p className="text-gray-300">Job placement assistance and portfolio review</p>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-12 animate-fade-in-up animate-delay-700">
            <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-thinkverge-orange/30">
              <div className="w-3 h-3 bg-thinkverge-orange rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Limited Time: Next batch starts in 7 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
