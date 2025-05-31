
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🎥',
      title: 'Live Interactive Sessions',
      description: 'Learn in real-time with expert instructors. Ask questions, get instant feedback, and collaborate with peers in live coding environments.',
      benefits: ['Real-time Q&A', 'Live Code Reviews', 'Peer Collaboration', 'Instant Feedback']
    },
    {
      icon: '🛠️',
      title: 'Hands-on Projects',
      description: 'Build real-world applications that matter. Create portfolio-worthy projects that demonstrate your skills to future employers.',
      benefits: ['Portfolio Building', 'Industry Projects', 'Code Reviews', 'Career Ready']
    },
    {
      icon: '🎯',
      title: 'Industry-Focused Curriculum',
      description: 'Learn what companies actually use. Our curriculum is designed by industry professionals and updated regularly with current trends.',
      benefits: ['Current Tech Stack', 'Industry Standards', 'Expert Instructors', 'Job Market Ready']
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">ThinkVerge</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of engineering education with our innovative approach to online learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="glass-card p-8 h-full hover-lift group relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-thinkverge-blue/5 to-thinkverge-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-thinkverge-blue transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-center">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-4 text-center">Key Benefits:</h4>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex} 
                        className="flex items-center justify-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${benefitIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-thinkverge-blue/10 to-thinkverge-purple/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-thinkverge-purple/10 to-thinkverge-orange/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center animate-fade-in-up animate-delay-700">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join <span className="gradient-text">10,000+</span> Engineering Students
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Who are already building their future with ThinkVerge. Don't just learn theory - build real applications that solve real problems.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-gradient-to-r from-thinkverge-blue/20 to-thinkverge-purple/20 rounded-lg p-4 border border-thinkverge-blue/30">
                <div className="text-2xl font-bold gradient-text">1,247</div>
                <div className="text-gray-400 text-sm">Students Online Now</div>
              </div>
              <div className="bg-gradient-to-r from-thinkverge-purple/20 to-thinkverge-orange/20 rounded-lg p-4 border border-thinkverge-purple/30">
                <div className="text-2xl font-bold gradient-text">87%</div>
                <div className="text-gray-400 text-sm">Got Job Within 6 Months</div>
              </div>
              <div className="bg-gradient-to-r from-thinkverge-orange/20 to-thinkverge-red/20 rounded-lg p-4 border border-thinkverge-orange/30">
                <div className="text-2xl font-bold gradient-text">4.9/5</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
