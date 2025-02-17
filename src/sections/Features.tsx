import React from 'react';
import Image from 'next/image';

export const Features = () => {
  return (
    <section className="py-16 bg-slate-200 text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900">How Roader Works</h2>
      <p className="mt-4 text-gray-600">
        Download Roader driver app from Playstore, create an account, use your car, and drive by yourself. Get rides and earn more money.
      </p>
    </div>
    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="space-y-8 max-w-sm">
        <Step number={1} title="Request a Trip" description="Choose your pickup and drop-off locations, and the trip type that meets your needs." />
        <Step number={3} title="Enjoy Your Trip" description="Meet your driver with the help of our real-time GPS services and enjoy your trip!" />
      </div>
      <div>
        <Image src="/phonefeatures.png" alt="App Screenshot" width={500} height={500} className="rounded-lg" />
      </div>
      <div className="space-y-8 max-w-sm">
        <Step number={2} title="Match with a Driver" description="Roader will match you with the nearest available driver." />
        <Step number={4} title="Pay and Rate" description="Pay with cash or card and rate your driver." />
      </div>
    </div>
  </section>
  );
};

export default Features;

function Step({ number, title, description }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white text-xl font-bold rounded-full shrink-0">
        {number}
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

