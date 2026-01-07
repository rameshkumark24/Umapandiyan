import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight, Star, Heart } from 'lucide-react';

const DailyMiraclePractice = () => {
  // 1. UPDATED LINK: Your specific Google Form
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform"; 

  // 2. TRIAL REVIEWS: The 6 specific images you provided
  const trialReviews = [
    "https://i.ibb.co/whj9njDw/Whats-App-Image-2026-01-07-at-8-32-16-PM.jpg",
    "https://i.ibb.co/mCcs2Qgq/Whats-App-Image-2026-01-06-at-9-50-43-PM.jpg",
    "https://i.ibb.co/XkNw8Mvr/Whats-App-Image-2026-01-06-at-9-50-44-PM-2.jpg",
    "https://i.ibb.co/9mCCZwzD/Whats-App-Image-2026-01-06-at-9-50-44-PM-1.jpg",
    "https://i.ibb.co/LdFJqyB6/Whats-App-Image-2026-01-06-at-9-50-44-PM.jpg",
    "https://i.ibb.co/b5MXvmsY/Whats-App-Image-2026-01-06-at-9-50-59-PM.jpg"
  ];

  const handleRegister = () => {
    window.open(googleFormLink, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Daily Miracle Practice - UmaPandian | Monthly Healing Group</title>
        <meta name="description" content="Join the Daily Miracle Practice. A monthly evening coaching program to shift your mindset and manifest success. Mon-Fri sessions." />
      </Helmet>

      <div className="min-h-screen font-body bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#F9EBF8] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-[#B8860B] text-white text-sm font-bold tracking-wide mb-6 shadow-md">
                NEW PROGRAM LAUNCH
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-[#49225B] mb-6 leading-tight">
                Daily Miracle Practice
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Consistency creates miracles. Join our exclusive evening community to release stress, reset your vibration, and manifest abundance every single day.
              </p>
              
              <button 
                onClick={handleRegister}
                className="px-10 py-4 bg-[#49225B] text-white rounded-full font-bold text-lg hover:bg-[#6a3283] transition-all hover-lift flex items-center gap-3 mx-auto shadow-xl ring-4 ring-purple-100"
              >
                Join the Next Batch <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* --- DETAILS & PRICING CARD --- */}
        <section className="py-12 bg-white -mt-10 relative z-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
            >
              {/* Left Side: Features */}
              <div className="p-8 md:p-12 md:w-2/3">
                <h3 className="text-2xl font-bold text-[#49225B] mb-6 flex items-center gap-2">
                   <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" /> Program Highlights
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-3 rounded-xl text-[#49225B]">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Mon - Fri</h4>
                      <p className="text-sm text-gray-600">Daily Consistency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-3 rounded-xl text-[#49225B]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Evening Sessions</h4>
                      <p className="text-sm text-gray-600">End your day positively</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">What we cover daily:</h4>
                  <ul className="space-y-3">
                    {[
                      'Deep Gratitude Practices', 
                      'Negative Energy Cleansing', 
                      'Money & Success Manifestation', 
                      'Group Healing Energy'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> 
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Pricing */}
              <div className="bg-[#49225B] text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                
                <div className="relative z-10 w-full">
                  <p className="text-purple-200 font-medium mb-1 uppercase tracking-wider text-sm">Monthly Subscription</p>
                  <div className="flex items-center justify-center text-5xl font-bold mb-2">
                    <span className="text-3xl mr-1">₹</span>
                    <span>5000</span>
                  </div>
                  <p className="text-sm text-purple-200 mb-8 border-b border-purple-800 pb-4 inline-block">
                    Per Month / Per Person
                  </p>
                  
                  <button 
                    onClick={handleRegister}
                    className="w-full py-4 px-6 bg-[#B8860B] text-white font-bold rounded-xl hover:bg-[#a0740a] transition-all shadow-lg hover:scale-105"
                  >
                    Register Now
                  </button>
                  <p className="text-xs text-purple-300 mt-6 flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 fill-current" /> Limited seats for personal care
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- TRIAL REVIEWS SECTION --- */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Results from the Trial Batch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See what happened when people committed to the practice. Real feedback from our recent sessions.
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trialReviews.map((imgSrc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  // UPDATED: Changed background to light purple, similar to Testimonials section
                  className="bg-[#F9EBF8] p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="rounded-2xl overflow-hidden h-[600px] w-full relative bg-white">
                    <img 
                      src={imgSrc} 
                      alt={`Daily Miracle Practice Review ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
               <p className="text-xl font-medium text-[#49225B] mb-6">Ready to create your own miracle?</p>
               <button 
                  onClick={handleRegister}
                  className="inline-flex items-center text-[#B8860B] font-bold text-lg hover:underline underline-offset-4"
                >
                  Click here to fill the form <ArrowRight className="w-5 h-5 ml-2" />
                </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DailyMiraclePractice;
