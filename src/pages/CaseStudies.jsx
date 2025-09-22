import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Star } from 'lucide-react';

const CaseStudies = () => {
  // Placeholder data - will be replaced with actual case studies
  const caseStudies = [
    {
      id: 1,
      title: "Overcoming Anxiety Through Holistic Healing",
      category: "Anxiety & Stress",
      duration: "3 months",
      outcome: "90% reduction in anxiety symptoms",
      description: "Case study details will be provided by you, showcasing the client's journey from initial consultation through their transformation."
    },
    {
      id: 2,
      title: "Finding Balance After Life Transition",
      category: "Life Transitions",
      duration: "4 months",
      outcome: "Complete emotional stability achieved",
      description: "Detailed case study content about helping a client navigate major life changes will be featured here."
    },
    {
      id: 3,
      title: "Healing Trauma Through Integrated Therapy",
      category: "Trauma Recovery",
      duration: "6 months",
      outcome: "Full recovery and renewed confidence",
      description: "Comprehensive case study showing the healing journey from trauma to empowerment will be shared here."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - UmaPandian Holistic Therapy | Real Success Stories</title>
        <meta name="description" content="Discover real transformation stories from UmaPandian's holistic therapy practice. See how personalized healing approaches have changed lives." />
      </Helmet>

      <div className="min-h-screen py-20 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences and transformations from clients who have embarked on their holistic healing journey.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: TrendingUp, number: "9+", label: "Years of Experience" },
              { icon: Heart, number: "Happy", label: "Faces" },
              { icon: Star, number: "4.6", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 gold-gradient-bg rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-[#49225B] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F5EBFA] rounded-3xl p-8 md:p-12 shadow-xl hover-lift"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-accent-gold text-white rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      <span className="text-gray-600">Duration: {study.duration}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#49225B] mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      {study.description}
                    </p>
                  </div>
                  
                  <div className="bg-white/50 rounded-2xl p-6 text-center">
                    <h4 className="text-lg font-heading font-semibold text-[#49225B] mb-4">Outcome</h4>
                    <div className="text-2xl font-heading font-bold text-[#6E3482] mb-2">{study.outcome}</div>
                    <p className="text-sm text-gray-600">
                      <em>Detailed results and client testimonial will be provided here</em>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;