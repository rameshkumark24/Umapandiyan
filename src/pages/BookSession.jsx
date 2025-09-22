import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const BookSession = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform?usp=header";

  useEffect(() => {
    window.location.href = googleFormUrl;
  }, [googleFormUrl]);

  return (
    <>
      <Helmet>
        <title>Booking Session - Redirecting...</title>
        <meta name="description" content="Redirecting you to our booking page." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-body">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8"
        >
          <div className="flex justify-center items-center mb-6">
            <Loader2 className="w-12 h-12 text-[#49225B] animate-spin" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-gradient mb-4">
            Redirecting to Booking Form
          </h1>
          <p className="text-lg text-gray-600">
            Please wait while we take you to our secure booking page.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            If you are not redirected automatically, please{' '}
            <a href={googleFormUrl} className="text-accent-gold hover:underline font-semibold">
              click here
            </a>.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default BookSession;