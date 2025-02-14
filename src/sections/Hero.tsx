import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Téléchargez l&apos;app,<br />
              Restez en sécurité,<br />
              Soyez alerté !
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Téléchargez l&apos;application Belela, créez votre compte et restez informé des incidents dans votre zone. Simple et efficace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block">
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-14 w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/app-store.png"
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto md:max-w-none">
              <div className="relative w-full pt-[177.78%]">
                <div className="absolute inset-0">
                  <Image
                    src="/app-preview.png"
                    alt="Belela App Preview"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/user-avatar.png"
                    alt="User Avatar"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
