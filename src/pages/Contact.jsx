import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Instagram, Youtube, Facebook, Phone } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick responses for support",
      href: "https://wa.me/qr/N3NUDHCGZFV3H1",
      target: "_blank"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed inquiries & appointments",
      href: "mailto:umapandiyan.lifecoach@gmail.com",
      target: "_self"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking",
      href: "https://www.linkedin.com/in/umapandiyanlifecoach/",
      target: "_blank"
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Community and updates",
      href: "https://www.facebook.com/profile.php?id=61580088721411",
      target: "_blank"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Daily wellness & inspiration",
      href: "https://www.instagram.com/umapandiyanlifecoach/",
      target: "_blank"
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Guided sessions & content",
      href: "https://www.youtube.com/@UmaPandiyanHolisticTherapist",
      target: "_blank"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Uma Pandiyan - Holistic Therapist | Get in Touch</title>
        <meta name="description" content="Connect with Uma Pandiyan for holistic therapy sessions. Multiple ways to reach out including WhatsApp, email, and social media channels." />
      </Helmet>

      <div className="min-h-screen py-20 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to begin your holistic healing journey? I'm here to support you every step of the way. 
              Choose your preferred way to get in touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.target}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift cursor-pointer block"
              >
                <div className="w-16 h-16 mx-auto mb-6 gold-gradient-bg rounded-full flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#49225B] text-center mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
