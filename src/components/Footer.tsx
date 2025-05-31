const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    courses: [
      'Python Mastery',
      'Java Development',
      'C/C++ Systems',
      'SQL & Databases',
      'AutoCAD & SolidWorks'
    ],
    company: [
      'About Us',
      'Our Mission',
      'Careers',
      'Blog',
      'News'
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
    { name: 'GitHub', icon: '💻', href: '#' },
  ];

  return (
    <footer id="contact" className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TV</span>
              </div>
              <span className="text-white text-2xl font-bold">ThinkVerge</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering engineering students with live, interactive learning experiences. Master future-ready skills and build your career with industry experts.
            </p>
            <p className="text-thinkverge-blue font-semibold mb-4">
              Learn Live. Think Ahead.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 hover:bg-white/20 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div className="animate-fade-in animate-delay-300">
            <h3 className="text-white font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              {footerSections.courses.map((course, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-thinkverge-blue transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-thinkverge-blue rounded-full"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="animate-fade-in animate-delay-500">
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-thinkverge-blue transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-thinkverge-purple rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="animate-fade-in animate-delay-700">
            
            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">📧 thinkvergelearning@gmail.com</p>
              <p className="text-gray-300 text-sm">📞 +91 76958 00855</p>
              <p className="text-gray-300 text-sm">🕒 24/7 Student Support</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-8 animate-fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest course updates, tech trends, and learning tips delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-thinkverge-blue backdrop-blur-lg"
              />
              <button className="bg-gradient-to-r from-thinkverge-blue to-thinkverge-purple text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ThinkVerge. All rights reserved. Empowering the next generation of engineers.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-thinkverge-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-thinkverge-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-thinkverge-blue transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
