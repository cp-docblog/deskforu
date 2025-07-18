import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              Desk<span className="text-yellow-500">4</span>U
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/pricing" className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link to="/booking" className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-black" />
                <span className="text-sm text-black">{user.name}</span>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-yellow-500 hover:text-yellow-600 text-sm">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-black hover:text-yellow-500 p-1"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="text-black hover:text-yellow-500 px-3 py-2 text-sm">
                  Login
                </Link>
                <Link to="/register" className="bg-black text-white px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-yellow-500 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-black hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-black hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-black hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/booking" className="bg-yellow-500 text-black block px-3 py-2 rounded-md text-base font-medium">
              Book Now
            </Link>
            
            {user ? (
              <div className="border-t pt-2">
                <div className="flex items-center px-3 py-2">
                  <User className="w-5 h-5 text-black mr-2" />
                  <span className="text-black">{user.name}</span>
                </div>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-yellow-500 block px-3 py-2">
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-black hover:text-yellow-500 block w-full text-left px-3 py-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="border-t pt-2">
                <Link to="/login" className="text-black hover:text-yellow-500 block px-3 py-2">
                  Login
                </Link>
                <Link to="/register" className="text-black hover:text-yellow-500 block px-3 py-2">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;