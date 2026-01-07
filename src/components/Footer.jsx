import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const heartVariants = {
    unliked: { scale: 1 },
    liked: { scale: [1, 1.3, 1], transition: { duration: 0.3 } },
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/umapandiyanlifecoach/', 'aria-label': 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61580088721411', 'aria-label': 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@UmaPandiyanHolisticTherapist', 'aria-label': 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/umapandiyanlifecoach/', 'aria-label': 'Instagram' },
  ];

  return (
    <footer className="gradient-bg text-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.img
                src="https://i.postimg.cc/RFZTXg00/Professional-Lettermark-Logo-with-U.png"
                alt="Uma Pandiyan Logo"
                className="w-10 h-10 object-contain rounded-full"
                whileHover={{ scale: 1.1 }}
              />
              <span className="text-xl font-heading">Uma Pandiyan</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Empowering your journey to holistic wellness through personalized therapy and mindful healing practices.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <motion.div variants={heartVariants} animate={isLiked ? 'liked' : 'unliked'} onClick={() => setIsLiked(!isLiked)} className="cursor-pointer">
                <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'text-red-500 fill-current' : ''}`} />
              </motion.div>
              <span className="text-sm">Healing with compassion and expertise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-heading mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors">
                About
              </Link>
              {/* Added New Program Link Here */}
              <Link to="/daily-miracle-practice" className="block text-white/80 hover:text-white transition-colors">
                Daily Miracle Practice
              </Link>
              <Link to="/testimonials" className="block text-white/80 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/terms" className="block text-white/80 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-heading mb-4 block">Get in Touch</span>
            <div className="space-y-3">
              <a href="mailto:umapandiyanlifecoach@gmail.com" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">umapandiyanlifecoach@gmail.com</span>
              </a>
              <a href="https://wa.me/qr/N3NUDHCGZFV3H1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8870243437</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social['aria-label']} className="text-white/80 hover:text-white transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">© 2025 Uma Pandiyan Holistic Therapy. All rights reserved. | Designed with care for your wellness journey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
