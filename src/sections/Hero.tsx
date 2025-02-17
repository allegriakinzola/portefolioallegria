'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">How does this app work</h2>
        <p className="mt-4 text-gray-600">
          Download catch driver app from Playstore, create an account, use your car and drive by yourself. Get rides and earn more money.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg">Passenger</button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg">Driver</button>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image src="/phonefeatures.png" alt="App Screenshot" width={500} height={500} className="rounded-lg" />
        </div>
        
        <div className="space-y-8 max-w-md">
          <Step title="Receive a Offer" description="Provide your details. Simply key in your information and let us know what you need." />
          <Step title="Accept Offer" description="The G Garage app will help with valuations and locations of garages." />
          <Step title="Start Trip" description="It's your turn to select your garage and the option that best suits." />
        </div>
      </div>

      {/* New Section: Download Roader App */}
      <div className="mt-16 bg-red-600 text-white py-12 px-6 rounded-lg max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold">Download Roader App</h2>
          <p className="mt-4 text-white">
            Roader is an awesome venture in the ride-hailing market in East Africa. Operated and owned by Africans for Africans, Roader brings local creativity and insights to get the importance of passengers and drivers. Whether you need to get where you're going fast or looking to make money on your schedule, Roader provides the best in class solution.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">Get Started</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/phone.png" alt="Roader App Screenshot" width={400} height={400} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}

function Step({ title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}