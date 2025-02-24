import React from 'react'; 
import Image from 'next/image';

export const Features = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-6 text-white">
    Things I do for you that simply make your software better.
  </h2>
  <p className="text-gray-400 mb-8">
    Vivamus elementum semper nisi. Maecenas ullamcorper, dui et feugiat, eros pede.
  </p>
  <button className="px-6 py-3 border border-white text-white rounded-lg mb-10">
    See all services
  </button>

  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div className="p-6 rounded-xl bg-blue-400 text-black">
      <h3 className="text-lg font-semibold">General code</h3>
      <p className="text-sm mt-2">
        Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. Ut hac habitasse platea dictumst.
      </p>
      <a href="#" className="text-black font-medium mt-3 inline-block">Read more</a>
    </div>

    <div className="p-6 rounded-xl bg-gray-800 text-white">
      <h3 className="text-lg font-semibold">Code systems</h3>
      <p className="text-sm mt-2">
        Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. Ut hac habitasse platea dictumst.
      </p>
      <a href="#" className="text-blue-400 font-medium mt-3 inline-block">Read more</a>
    </div>

    <div className="p-6 rounded-xl bg-gray-800 text-white">
      <h3 className="text-lg font-semibold">DevOps</h3>
      <p className="text-sm mt-2">
        Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. Ut hac habitasse platea dictumst.
      </p>
      <a href="#" className="text-blue-400 font-medium mt-3 inline-block">Read more</a>
    </div>

    <div className="p-6 rounded-xl bg-gray-800 text-white">
      <h3 className="text-lg font-semibold">Agile consulting</h3>
      <p className="text-sm mt-2">
        Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. Ut hac habitasse platea dictumst.
      </p>
      <a href="#" className="text-blue-400 font-medium mt-3 inline-block">Read more</a>
    </div>
  </div>
</section>

    
  );
};

export default Features;

function Step({ number, title, description }: { number: number; title: string; description: string }) {
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