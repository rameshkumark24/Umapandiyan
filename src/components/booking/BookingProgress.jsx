import React from 'react';

const BookingProgress = ({ step }) => {
  const steps = ['Session Type', 'Date & Time', 'Details', 'Payment'];

  return (
    <div className="mb-12 font-body">
      <div className="flex items-center justify-center space-x-4">
        {steps.map((_, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step >= index + 1 
                ? 'bg-[#49225B] text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-1 mx-2 ${
                step > index + 1 ? 'bg-[#49225B]' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-8 text-sm text-gray-600">
        {steps.map((label, index) => (
          <span key={label} className={step === index + 1 ? 'font-bold text-[#49225B]' : ''}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;