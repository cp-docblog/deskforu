import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Desk<span className="text-yellow-500">4</span>U
            </h3>
            <p className="text-gray-300 mb-4">
              Premium coworking spaces designed for productivity, collaboration, and growth.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Hot Desks</li>
              <li>Private Offices</li>
              <li>Meeting Rooms</li>
              <li>Virtual Offices</li>
              <li>Event Spaces</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span className="text-gray-300">
                  123 Business Street<br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">info@desk4u.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span className="text-gray-300">
                  Mon-Fri: 6am-10pm<br />
                  Sat-Sun: 8am-8pm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Desk4U. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;