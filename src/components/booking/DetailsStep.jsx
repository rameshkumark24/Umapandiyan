import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DetailsStep = ({ bookingData, setBookingData, onNext, onBack }) => {
  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="font-body">
      <h2 className="text-2xl font-heading font-bold text-[#49225B] mb-6 text-center">
        Your Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            value={bookingData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            value={bookingData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message
          </label>
          <textarea
            value={bookingData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
            placeholder="Any specific concerns or questions?"
          />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Button onClick={onBack} variant="outline" className="px-8 py-3">
          Back
        </Button>
        <Button onClick={onNext} className="bg-[#49225B] hover:bg-[#6E3482] text-white px-8 py-3">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DetailsStep;