import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-transparent dark:from-slate-800/20 dark:to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-teal-500 dark:text-teal-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              Karella Pavani Vinay Kumar
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 h-12 mb-6">
              <TypeAnimation
                sequence={[
                  'Computer Science Student',
                  1000,
                  'Backend Developer',
                  1000,
                  'Web Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              "Computer Science student with practical experience in building scalable web applications and secure backend APIs. Committed to delivering impactful, efficient, and user-focused software solutions."


            </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                  className="btn-primary cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
              <a
                href="/Karella%20Pavani%20Vinay%20Kumar.pdf"
                download="Vinay_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

              <div className="flex justify-center lg:justify-start mt-8 space-x-4">
              <a
                href="https://github.com/vinaykarella"
                target="_blank"
                rel="noopener noreferrer"
                  className="p-3 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-full"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavani-vinay-kumar-karella-730a3628b"
                target="_blank"
                rel="noopener noreferrer"
                  className="p-3 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:vinaykarella12104@gmail.com"
                  className="p-3 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-full"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          </div>
          
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-4 border-teal-200 dark:border-teal-800 animate-ping opacity-20"></div>
              <div className="absolute inset-2 rounded-full border-2 border-teal-300 dark:border-teal-700 animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl transform hover:scale-105 transition-all duration-500">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-600/20 z-10"></div>
                
                {/* Placeholder for photo - replace with your actual photo */}
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Karella Pavani Vinay Kumar"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-500"></div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/4 -right-8 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg animate-float delay-1000">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg animate-float delay-2000">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-slate-400 dark:text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer hover:scale-110"
        >
          <ChevronDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
