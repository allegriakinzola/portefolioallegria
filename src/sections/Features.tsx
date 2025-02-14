import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Comment Belela fonctionne</h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full pt-[200%] md:pt-[100%]">
                <div className="absolute inset-0">
                  <Image
                    src="/app-screen.png"
                    alt="Belela App Interface"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e6f5e6] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1a8917] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Signalez un incident</h3>
                  <p className="text-gray-600">Sélectionnez votre localisation et le type d'incident que vous souhaitez signaler</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e6f5e6] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1a8917] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Recevez des alertes</h3>
                  <p className="text-gray-600">Belela vous notifie instantanément des incidents dans votre zone</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e6f5e6] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1a8917] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Restez informé</h3>
                  <p className="text-gray-600">Suivez l'évolution des incidents et recevez des mises à jour en temps réel</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e6f5e6] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1a8917] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contribuez à la sécurité</h3>
                  <p className="text-gray-600">Participez à la sécurité de votre communauté en partageant des informations utiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
