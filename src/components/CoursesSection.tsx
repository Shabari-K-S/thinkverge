
import React from 'react';

const CoursesSection = () => {
  const courses = [
    {
      icon: '🐍',
      title: 'Python from Scratch',
      description: 'Learn Python from basics to advanced concepts. Master python and build real projects.',
      duration: '10 weeks',
      level: 'Zero to Advanced',
      features: ['Live Coding Sessions', 'OOPs', 'Advance Python'],
    },
    {
      icon: '☕',
      title: 'Complete Java Journey',
      description: 'Start with Java basics and progress to building enterprise console application.',
      duration: '10 weeks',
      level: 'Zero to Pro',
      features: ['OOPs', 'Live Coding Sessions', 'Advance Java'],
    },
    {
      icon: '⚡',
      title: 'C/C++ Complete Guide',
      description: 'Begin with fundamentals and advance to system design and performance optimization.',
      duration: '10 weeks',
      level: 'Beginner to Expert',
      features: ['System Programming', 'Memory Management', 'Performance'],
    },
    {
      icon: '🗃️',
      title: 'SQL Fundamentals to Pro',
      description: 'Start with basic queries and progress to advanced database management.',
      duration: '10 weeks',
      level: 'Zero to Advanced',
      features: ['Database Design', 'Query Optimization'],
    },
    {
      icon: '📐',
      title: 'CAD Complete Course',
      description: 'Learn AutoCAD & SolidWorks from basics to professional-level product development.',
      duration: '10 weeks',
      level: 'Beginner to Expert',
      features: ['2D/3D Design', 'Engineering Drawings', 'Product Development'],
    },
    ];

  return (
    <section id="courses" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Master </span>
            <span className="gradient-text">Future-Ready</span>
            <span className="text-white"> Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts through live, interactive sessions. Build real-world projects and advance your engineering career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`gradient-border animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card p-6 h-full hover-lift group">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-thinkverge-blue/20 to-thinkverge-purple/20 border border-thinkverge-blue/30">
                    <span className="text-thinkverge-blue text-sm font-semibold">🔴 Live Sessions</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{course.description}</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white font-semibold">{course.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-700">
          <button className="glass text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift border border-white/20">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
