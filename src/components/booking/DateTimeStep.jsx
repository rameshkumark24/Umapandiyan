import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'];

const DateTimeStep = ({ bookingData, setBookingData, onNext, onBack }) => {
  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="font-body">
      <h2 className="text-2xl font-heading font-bold text-[#49225B] mb-6 text-center">
        Select Date & Time
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Select Date
          </label>
          <input
            type="date"
            value={bookingData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            Select Time
          </label>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleInputChange('time', time)}
                className={`p-2 text-sm rounded-lg border transition-colors ${
                  bookingData.time === time
                    ? 'bg-[#49225B] text-white border-[#49225B]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-accent-gold'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
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

export default DateTimeStep;