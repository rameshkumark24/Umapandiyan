import React from 'react';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sessionTypes = [
  { id: 'individual', name: 'Individual Session', duration: '60 minutes' },
  { id: 'couple', name: 'Couple Session', duration: '90 minutes' },
  { id: 'group', name: 'Group Session', duration: '120 minutes' }
];

const PaymentStep = ({ bookingData, onConfirm, onBack }) => {
  const session = sessionTypes.find(s => s.id === bookingData.sessionType);

  return (
    <div className="font-body">
      <h2 className="text-2xl font-heading font-bold text-[#49225B] mb-6 text-center">
        Payment & Confirmation
      </h2>
      <div className="bg-[#F5EBFA] rounded-2xl p-4 sm:p-6 mb-6">
        <h3 className="text-lg font-heading font-semibold text-[#49225B] mb-4">Booking Summary</h3>
        <div className="space-y-2 text-gray-700 text-sm sm:text-base">
          <div className="flex justify-between">
            <span>Session Type:</span>
            <span className="font-medium text-right">{session?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span className="font-medium">{bookingData.date}</span>
          </div>
          <div className="flex justify-between">
            <span>Time:</span>
            <span className="font-medium">{bookingData.time}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium">{session?.duration}</span>
          </div>
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between text-lg font-semibold text-[#49225B]">
              <span>Total:</span>
              <span>Price will be provided</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <CreditCard className="w-6 h-6 text-accent-gold mr-2" />
          <span className="text-gray-600">Secure Payment Processing</span>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Your payment information is secure and encrypted. You'll receive a confirmation email after payment.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button onClick={onBack} variant="outline" className="w-full sm:w-auto px-8 py-3">
          Back
        </Button>
        <Button onClick={onConfirm} className="w-full sm:w-auto bg-[#49225B] hover:bg-[#6E3482] text-white px-8 py-3">
          Complete Booking
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;