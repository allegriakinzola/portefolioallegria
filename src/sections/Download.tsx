import React from 'react';
import Image from 'next/image';

const Download = () => {
  return (
    <section 
      id="download" 
      className="text-slate-800 w-full px-6 md:px-20 mx-auto flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(to top, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%), url(/fonthero.jpg)' 
      }} // Remplacez par le chemin de votre image
    >
      <div className="w-full mx-auto py-20">
        <div className="flex flex-col  md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-800">
    <span className='text-red-600 text-5xl md:text-6xl lg:text-8xl'>Sécurisez</span>  
    votre famille et vos proches grâce à <span className='text-red-600'>BELELA</span>
  </h1>
  <p className="text-xl md:text-xl lg:text-2xl mb-8">
    Belela est votre compagnon de sécurité au quotidien. Notre application
    simple et intuitive vous permet de rester informé et de contribuer à
    la sécurité de votre communauté. Que vous soyez chez vous ou en
    déplacement, Belela veille sur vous.
  </p>
  <div className='flex flex-col md:flex-row gap-2 items-center md:items-start justify-center md:justify-start'>
    <Image
      src="/apple.png"
      alt="Télécharger sur l'App Store"
      width={200} 
      height={100}
      className="h-auto max-w-[200px] md:max-w-[200px]" 
    />
    <Image
      src="/google.png"
      alt="Télécharger sur Google Play"
      width={200} 
      height={100}
      className="h-auto max-w-[200px] md:max-w-[200px]" 
    />
  </div>
</div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/phone.png"
              alt="Belela App Screen 1"
              width={500} 
              height={300}
              className="h-auto max-w-[300px] md:max-w-[500px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
