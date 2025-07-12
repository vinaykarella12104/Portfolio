import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-teal-500">K</span>arella<span className="text-teal-500"> P</span>avani<span className="text-teal-500"> V</span>inay <span className="text-teal-500"> K</span>umar
            </h2>
            <p className="text-slate-400 mt-1">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/vinaykarella"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavani-vinay-kumar-karella-730a3628b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vinaykarella12104@gmail.com"
              className="text-slate-300 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Karella Pavani Vinay Kumar. All rights reserved.
          </p>
          
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Karella Pavani Vinay Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;