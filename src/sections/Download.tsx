import React from 'react';
import Image from 'next/image';

const Download = () => {
  return (
    <section id="download" className="py-16 bg-[#1a8917] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Téléchargez l'application Belela</h2>
            <p className="text-lg mb-8">
              Belela est votre compagnon de sécurité au quotidien. Notre application
              simple et intuitive vous permet de rester informé et de contribuer à
              la sécurité de votre communauté. Que vous soyez chez vous ou en
              déplacement, Belela veille sur vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="/app-screen-1.png"
                  alt="Belela App Screen 1"
                  width={280}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative mt-12">
                <Image
                  src="/app-screen-2.png"
                  alt="Belela App Screen 2"
                  width={280}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
