import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform?usp=header";

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const NavLink = ({ to, children, onClick }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`text-sm font-medium transition-colors hover:text-accent-gold ${
          isActive ? 'text-[#49225B] border-b-2 border-accent-gold' : 'text-gray-600'
        }`}
      >
        {children}
      </Link>
    );
  };

  const MobileNavLink = ({ to, children, onClick }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`block px-3 py-2 text-base font-medium transition-colors ${
          isActive ? 'text-[#49225B] bg-[#F5EBFA]' : 'text-gray-600 hover:text-[#49225B] hover:bg-[#F5EBFA]'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="https://i.postimg.cc/RFZTXg00/Professional-Lettermark-Logo-with-U.png"   // place your uploaded logo here
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-xl font-heading text-gradient">Uma Pandiyan</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
            ))}
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#49225B] hover:bg-[#6E3482] text-white">
                Book Session
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#49225B] focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <MobileNavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                  {item.name}
                </MobileNavLink>
              ))}
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="block px-3 py-2" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#49225B] hover:bg-[#6E3482] text-white">
                  Book Session
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;