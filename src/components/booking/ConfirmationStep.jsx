import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ConfirmationStep = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center font-body">
      <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      <h2 className="text-3xl font-heading font-bold text-[#49225B] mb-4">
        Booking Confirmed!
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Thank you for booking your holistic therapy session. You'll receive a confirmation email shortly.
      </p>
      <div className="bg-[#F5EBFA] rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-heading font-semibold text-[#49225B] mb-4">What's Next?</h3>
        <ul className="text-left text-gray-700 space-y-2">
          <li>• You'll receive a confirmation email with session details</li>
          <li>• A reminder will be sent 24 hours before your session</li>
          <li>• You'll get access to the webinar link after payment confirmation</li>
          <li>• Prepare any questions you'd like to discuss during the session</li>
        </ul>
      </div>
      <Button 
        onClick={() => navigate('/')}
        className="bg-[#49225B] hover:bg-[#6E3482] text-white px-8 py-3"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default ConfirmationStep;