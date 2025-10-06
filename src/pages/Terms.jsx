import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Shield, XCircle, AlertTriangle } from "lucide-react";


const Terms = () => {
const termsData = [
{
icon: FileText,
title: "Service Agreement",
content: [
"The Service Provider agrees to provide holistic therapy sessions, counseling, regular meetings, and life coaching to support the Client’s personal and professional growth. Services will be delivered through in-person or online sessions, as mutually agreed.",
"The Service Provider will provide effective, professional, and supportive services to the best of their ability. Sessions will be tailored to the Client’s needs and goals. Confidentiality will be strictly maintained, except where disclosure is legally required.",
"The Client understands that results may vary depending on personal commitment, circumstances, and external factors. The Client agrees that the Service Provider cannot guarantee specific outcomes, but will make every effort to deliver effective guidance and support. The Client is solely responsible for implementing and applying the insights gained during sessions.",
"Fees must be paid in advance or as agreed. Sessions must be scheduled in advance and any rescheduling should be communicated at least 24 hours before the appointment. Missed sessions without prior notice are non-refundable.",
"The Client acknowledges that holistic therapy and life coaching are not substitutes for medical, psychiatric, or financial advice. The Client agrees that no future claims or disputes shall be raised against the Service Provider regarding the results of the services. The Client accepts full responsibility for their choices, decisions, and actions."
]
},
{
icon: Shield,
title: "Privacy and Confidentiality",
content: [
"All information shared by the Client during sessions will remain strictly confidential, except where disclosure is required by law.",
"Client records and session notes will be securely stored and accessed only by the Service Provider for professional purposes.",
"While reasonable measures are taken to secure online communications, absolute security of digital data cannot be guaranteed.",
"By using these services, the Client consents to these privacy terms and agrees to communicate openly within the agreed boundaries."
]
},
{
icon: XCircle,
title: "Cancellation Policy",
content: [
"Cancellations or rescheduling requests must be made at least 24 hours before the scheduled session.",
"Missed sessions without prior notice will not be eligible for a refund.",
"Refunds will only be considered in exceptional circumstances at the sole discretion of the Service Provider.",
"The Service Provider reserves the right to reschedule or cancel a session if necessary, with prior notice to the Client."
]
},
{
icon: AlertTriangle,
title: "Liability and Disclaimers",
content: [
"The Client acknowledges that holistic therapy, counseling, and life coaching are supportive services and not substitutes for medical, psychiatric, or legal advice.",
"The Service Provider makes no guarantees of specific results; outcomes depend on the Client’s own effort, circumstances, and external factors.",
"The Client agrees that the Service Provider is not liable for any direct, indirect, incidental, or consequential outcomes arising from the use of services.",
"By engaging with the Service Provider, the Client releases them from any future claims, disputes, or liabilities related to the services provided."
]
}
];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Uma Pandiyan Holistic Therapy | Service Agreement</title>
        <meta name="description" content="Read the terms and conditions for UmaPandiyan's holistic therapy services, including privacy policy, cancellation terms, and service agreements." />
      </Helmet>

      <div className="min-h-screen py-20 font-lato">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our holistic therapy services. 
              These terms govern your relationship with Uma Pandiyan's practice.
            </p>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 p-4 bg-[#F5EBFA] rounded-lg"
          >
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {termsData.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-[#49225B]">{section.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
{/* Detailed Terms Placeholder */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-12 bg-gradient-to-br from-[#F5EBFA] to-[#E7DBEF] rounded-3xl p-8"
>
  <h2 className="text-2xl font-playfair font-bold text-[#49225B] mb-6 text-center">
    Detailed Terms & Conditions
  </h2>
  <div className="space-y-6 text-gray-700">
    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">1. Service Description</h3>
      <p className="italic">
        Services are intended to provide holistic support, including relaxation, guidance, 
        and wellness practices. These services are not a substitute for professional medical 
        advice, diagnosis, or treatment.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">2. Client Responsibilities</h3>
      <p className="italic">
        Clients are expected to provide accurate information regarding their health, follow 
        guidance provided during sessions, and notify practitioners of any medical conditions 
        or concerns that may affect participation.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">3. Payment Terms</h3>
      <p className="italic">
        All payments must be made prior to the session unless otherwise agreed. Accepted 
        payment methods include UPI, bank transfer, and cards. Refunds are not applicable 
        once a session has been delivered.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">4. Cancellation & Rescheduling</h3>
      <p className="italic">
        Cancellations must be made at least 24 hours before the session for a full reschedule. 
        No-shows or late cancellations may result in forfeiture of the session fee.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">5. Confidentiality</h3>
      <p className="italic">
        All client information shared during sessions will remain confidential and will not 
        be disclosed to third parties unless required by law.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">6. Limitations & Disclaimers</h3>
      <p className="italic">
        Holistic therapy is complementary in nature and does not guarantee specific outcomes. 
        Practitioners are not liable for any decisions made by clients based on the guidance 
        provided during sessions.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-playfair font-semibold text-[#49225B] mb-3">7. Liability</h3>
      <p className="italic">
        By participating in services, clients acknowledge that they do so at their own risk. 
        Practitioners are not responsible for any physical, emotional, or financial outcomes 
        resulting from sessions or related advice.
      </p>
    </div>
  </div>
</motion.div>


          {/* Contact for Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-playfair font-semibold text-[#49225B] mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about these terms and conditions, please don't hesitate to contact me.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-[#49225B] hover:bg-[#6E3482] text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;
