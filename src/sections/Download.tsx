import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Download = () => {
  return (
    <section 
      id="download" 
      className="text-slate-800 w-full px-6 md:px-20 mx-auto h-full flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%), url(/fontcode.jpeg)'

      }} // Remplacez par le chemin de votre image
    >
       <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold">Professional <span className="text-blue-400">consulting</span> for your app & software.</h2>
          <p className="text-gray-400 mt-4">Hey there! I’m John Parker. Coding consultant focused on coding and deployment solutions.</p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center gap-2">
              Let's Talk <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image src="/photoprofileallegria.png" alt="John Parker" width={400} height={400} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Download;
