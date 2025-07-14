import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code, Rocket } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full blur-3xl animate-liquid"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-liquid delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-float delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-l from-pink-400/15 to-purple-400/15 rounded-full blur-2xl animate-magnetic delay-2000"></div>
        
        {/* Floating particles */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`
              }}
            />
          ))}
        </div>
        
        {/* Interactive cursor effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500 animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="h-6 w-6 text-teal-500 mr-2 animate-pulse hover-magnetic" />
                <p className="gradient-text font-medium text-lg animate-text-reveal">Hello, I'm</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in-left hover-magnetic">
                <span className="gradient-text">
                Karella Pavani Vinay Kumar
                </span>
              </h1>
              <div className="text-xl md:text-2xl h-16 mb-6 flex items-center justify-center lg:justify-start">
                <Code className="h-6 w-6 text-blue-500 mr-2 animate-bounce hover-magnetic" />
                <div className="gradient-text font-semibold">
                  <TypeAnimation
                    sequence={[
                      'Computer Science Student',
                      1000,
                      'Backend Developer',
                      1000,
                      'Web Developer',
                      1000,
                      'Problem Solver',
                      1000,
                      'Tech Enthusiast',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed pl-6 animate-slide-in-right hover-lift">
                "Computer Science student with practical experience in building scalable web applications and secure backend APIs. Committed to delivering impactful, efficient, and user-focused software solutions."
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn-primary cursor-pointer group animate-bounce-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-wiggle transition-transform duration-300" />
                  Contact Me
                </Link>
                <a
                  href="/Karella%20Pavani%20Vinay%20Kumar.pdf"
                  download="Karella_Pavani_Vinay_Kumar_Resume.pdf"
                  className="btn-outline inline-flex items-center group animate-bounce-in"
                  style={{ animationDelay: '0.7s' }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce transition-transform duration-300" />
                  Download CV
                </a>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://github.com/vinaykarella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass-effect rounded-full hover-glow animate-scale-in hover-magnetic interactive-element"
                  style={{ animationDelay: '0.9s' }}
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pavani-vinay-kumar-karella-730a3628b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass-effect rounded-full hover-glow animate-scale-in hover-magnetic interactive-element"
                  style={{ animationDelay: '1.1s' }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="mailto:vinaykarella12104@gmail.com"
                  className="group p-4 glass-effect rounded-full hover-glow animate-scale-in hover-magnetic interactive-element"
                  style={{ animationDelay: '1.3s' }}
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Enhanced animated rings */}
              <div className="absolute -inset-6 rounded-full animate-ping opacity-20">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-teal-400 to-blue-400 blur-sm"></div>
              </div>
              <div className="absolute -inset-4 rounded-full animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-sm"></div>
              </div>
              <div className="absolute -inset-2 rounded-full animate-liquid opacity-40">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 blur-sm"></div>
              </div>
              <div className="absolute inset-0 rounded-full pulse-glow"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl hover-lift group hover-magnetic">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 p-2 rounded-full">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-blue-500/20 to-purple-600/30 z-10 group-hover:opacity-30 transition-all duration-700"></div>
                
                    {/* Photo */}
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Karella Pavani Vinay Kumar"
                      className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-1000"
                    />
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full animate-bounce delay-1000 flex items-center justify-center shadow-lg hover-magnetic interactive-element">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-bounce delay-2000 flex items-center justify-center shadow-lg hover-magnetic interactive-element">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-pulse delay-500 flex items-center justify-center shadow-lg hover-magnetic interactive-element">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="absolute top-1/2 right-0 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-magnetic delay-1500 flex items-center justify-center shadow-lg hover-magnetic interactive-element">
                  <span className="text-white text-xs">⚡</span>
                </div>
              </div>
              
              {/* Enhanced floating tech icons */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass-effect p-4 rounded-xl shadow-xl floating-element hover-glow hover-magnetic interactive-element">
                <span className="text-3xl">💻</span>
              </div>
              <div className="absolute top-1/4 -right-12 glass-effect p-4 rounded-xl shadow-xl floating-element hover-glow hover-magnetic interactive-element" style={{ animationDelay: '1s' }}>
                <span className="text-3xl">🚀</span>
              </div>
              <div className="absolute bottom-1/4 -left-12 glass-effect p-4 rounded-xl shadow-xl floating-element hover-glow hover-magnetic interactive-element" style={{ animationDelay: '2s' }}>
                <span className="text-3xl">⚡</span>
              </div>
              <div className="absolute top-1/2 right-0 glass-effect p-3 rounded-lg shadow-lg floating-element hover-glow hover-magnetic interactive-element" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🎯</span>
              </div>
              <div className="absolute bottom-1/2 left-0 glass-effect p-3 rounded-lg shadow-lg floating-element hover-glow hover-magnetic interactive-element" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow group">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer hover:scale-110 group-hover:animate-heartbeat"
        >
          <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-text-reveal">Scroll Down</span>
          <div className="p-2 glass-effect rounded-full hover-magnetic">
            <ChevronDown className="h-6 w-6" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;