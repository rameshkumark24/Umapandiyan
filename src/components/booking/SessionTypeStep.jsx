import React from 'react';
import { Button } from '@/components/ui/button';

const sessionTypes = [
  {
    id: 'individual',
    name: 'Individual Session',
    duration: '60 minutes',
    price: 'Price will be provided',
    description: 'One-on-one personalized holistic therapy session'
  },
  {
    id: 'couple',
    name: 'Couple Session',
    duration: '90 minutes',
    price: 'Price will be provided',
    description: 'Relationship counseling and healing for couples'
  },
  {
    id: 'group',
    name: 'Group Session',
    duration: '120 minutes',
    price: 'Price will be provided',
    description: 'Small group therapy session (max 6 people)'
  }
];

const SessionTypeStep = ({ bookingData, setBookingData, onNext }) => {
  const handleSelect = (id) => {
    setBookingData(prev => ({ ...prev, sessionType: id }));
  };

  return (
    <div className="font-body">
      <h2 className="text-2xl font-heading font-bold text-[#49225B] mb-6 text-center">
        Choose Your Session Type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sessionTypes.map((session) => (
          <div
            key={session.id}
            onClick={() => handleSelect(session.id)}
            className={`p-4 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all hover-lift ${
              bookingData.sessionType === session.id
                ? 'border-[#49225B] bg-[#F5EBFA]'
                : 'border-gray-200 hover:border-accent-gold'
            }`}
          >
            <h3 className="text-lg font-heading font-semibold text-[#49225B] mb-2">{session.name}</h3>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">{session.duration}</p>
            <p className="text-accent-gold font-semibold mb-3 text-sm sm:text-base">{session.price}</p>
            <p className="text-sm text-gray-600">{session.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button onClick={onNext} className="bg-[#49225B] hover:bg-[#6E3482] text-white px-8 py-3 w-full sm:w-auto">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SessionTypeStep;