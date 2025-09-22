import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Authentication - Uma Pandiyan Holistic Therapy</title>
        <meta name="description" content="Authentication services are currently unavailable. Please check back later." />
      </Helmet>

      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gradient mb-2">
                Service Unavailable
              </h1>
              <p className="text-gray-600">
                The sign-in and sign-up features are currently disabled. We apologize for any inconvenience.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() => navigate('/')}
                className="w-full bg-[#49225B] hover:bg-[#6E3482] text-white py-3 text-lg font-semibold"
              >
                Return to Homepage
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Auth;