import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoShorts.ai</h3>
            <p className="text-sm text-gray-400">
              AutoShorts.ai automatically creates, schedules, and posts Faceless videos for you, on auto-pilot. Each video is unique and customized to your topic.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="hover:text-purple-400">Pricing</Link></li>
              <li><Link to="/affiliates" className="hover:text-purple-400">Affiliates</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-purple-400">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-purple-400">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
              <li><Link to="/api-disclosure" className="hover:text-purple-400">Google API Disclosure</Link></li>
              <li><Link to="/articles" className="hover:text-purple-400">Articles</Link></li>
              <li><Link to="/custom-prompt" className="hover:text-purple-400">Custom Prompt Tool</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-purple-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-purple-400"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white hover:text-purple-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">© 2024 AutoShorts.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;