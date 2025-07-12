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
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-teal-500 dark:text-teal-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              Karella Pavani Vinay Kumar
            </h1>
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
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
              <a
                href="/Karella%20Pavani%20Vinay%20Kumar.pdf"
                download="Vinay_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <a
                href="https://github.com/vinaykarella"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavani-vinay-kumar-karella-730a3628b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:vinaykarella12104@gmail.com"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
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
          className="text-slate-400 dark:text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
