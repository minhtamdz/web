
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-slate-400 text-sm border-t border-slate-100 mt-auto">
      <p>&copy; {new Date().getFullYear()} Internal App Distribution. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
        <span>&bull;</span>
        <a href="#" className="hover:text-slate-600 transition-colors">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;
