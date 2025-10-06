import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, HeartHandshake, Zap, Sunrise, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>UmaPandiyan - Holistic Therapist | Life Coach.</title>
        <meta
          name="description"
          content="Experience transformative holistic therapy with Uma Pandiyan. Personalized healing sessions combining ancient wisdom with modern techniques for your complete wellness journey."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-body">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-lightest opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                No more Procrastination, only Transformation.
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To empower individuals to overcome emotional, physical, and spiritual blocks — and to guide them
                toward a fulfilled, purpose-driven life.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#B8860B] text-white hover:bg-white hover:text-[#B8860B] border border-[#B8860B] px-8 py-3 text-lg pulse-glow shadow-lg transition-colors duration-300">
                    Book Your Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-8 py-3 text-border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-8 py-3 text-lg"
                  >
                    Learn More About Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 gold-gradient-bg rounded-full blur-3xl opacity-30 floating-animation"></div>

                <video
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl hover-lift"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://imagekit.io/player/embed/rxkzfoqlj/VN20251006_220121.mp4?updatedAt=1759768396065"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-4"> My Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: UserCheck, title: 'One-on-One Life Coaching', description: '(Online/Offline)' },
              { icon: HeartHandshake, title: 'Emotional Healing & Energy Work' },
              { icon: Zap, title: 'Personal Breakthrough Sessions' },
              { icon: Sunrise, title: 'Spiritual Mentoring' },
              { icon: Sparkles, title: 'Relationship healing and coaching', description: 'Based on personal needs' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br from-[#F5EBFA] to-white hover-lift ${
                  index === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 gold-gradient-bg rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#49225B] mb-3">{feature.title}</h3>
                {feature.description && <p className="text-gray-600">{feature.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-[#E7DBEF] to-[#F5EBFA]"
          >
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-[#49225B] italic">
              "What people think is a problem is the simply hidden opportunity to raise!"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a more balanced, peaceful, and fulfilling life. Book your personalized
              holistic therapy session today.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-[#49225B] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
