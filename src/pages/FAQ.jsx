import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Placeholder FAQs - will be replaced with actual questions
  const faqs = [
    {
      question: "What is holistic therapy and how does it work?",
      answer: "Your detailed explanation about holistic therapy, its principles, and how it addresses the mind, body, and spirit connection will be provided here."
    },
    {
      question: "how can you help me handle my relationship issues?",
      answer: "Your detailed explanation about holistic therapy, its principles, and how it addresses the mind, body, and spirit connection will be provided here."
    },
    {
      question: "How can i overcome stressful situations?",
      answer: "Your detailed explanation about holistic therapy, its principles, and how it addresses the mind, body, and spirit connection will be provided here."
    },
    {
      question: "What Should i do to increase my source of Income?",
      answer: "Your detailed explanation about holistic therapy, its principles, and how it addresses the mind, body, and spirit connection will be provided here."
    },
    {
      question: "How long does each therapy session last?",
      answer: "Information about session duration, what to expect during a session, and the typical structure of your therapy appointments will be detailed here."
    },
    {
      question: "How many sessions will I need to see results?",
      answer: "Your professional guidance on treatment duration, factors that influence progress, and realistic expectations for healing timelines will be shared here."
    },
    {
      question: "What should I expect during my first session?",
      answer: "A comprehensive overview of the initial consultation process, intake procedures, and what new clients can expect will be outlined here."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Details about your online session availability, technology requirements, and how virtual sessions compare to in-person meetings will be provided."
    },
    {
      question: "How do you ensure client confidentiality?",
      answer: "Your commitment to privacy, confidentiality policies, and how you protect client information will be detailed here."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - UmaPandian Holistic Therapy | Common Questions Answered</title>
        <meta name="description" content="Find answers to frequently asked questions about UmaPandian's holistic therapy services, session details, and what to expect from your healing journey." />
      </Helmet>

      <div className="min-h-screen py-20 font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 gold-gradient-bg rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about holistic therapy, sessions, and your healing journey.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F5EBFA] transition-colors"
                >
                  <h3 className="text-lg font-heading font-semibold text-[#49225B] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems[index] ? (
                      <ChevronUp className="w-6 h-6 text-accent-gold" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-accent-gold" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems[index] ? 'auto' : 0,
                    opacity: openItems[index] ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed italic">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-br from-[#F5EBFA] to-[#E7DBEF] rounded-3xl p-12"
          >
            <h2 className="text-3xl font-heading font-bold text-[#49225B] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              I'm here to help! Feel free to reach out with any specific questions about holistic therapy 
              or how I can support your wellness journey.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => {
                  // Navigate to contact page
                  window.location.href = '/contact';
                }}
                className="bg-[#49225B] hover:bg-[#6E3482] text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQ;