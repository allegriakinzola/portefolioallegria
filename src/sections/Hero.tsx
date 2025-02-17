'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Comment fonctionne cette application</h2>
        <p className="mt-4 text-gray-600">
          Téléchargez l'application Belela Driver depuis le Playstore, créez un compte, utilisez votre voiture et conduisez par vous-même. Obtenez des courses et gagnez plus d'argent.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg">Passager</button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg">Chauffeur</button>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image src="/phonefeatures.png" alt="Capture d'écran de l'application" width={500} height={500} className="rounded-lg" />
        </div>
        
        <div className="space-y-8 max-w-md">
          <Step title="Recevoir une offre" description="Fournissez vos informations. Entrez simplement vos détails et faites-nous savoir ce dont vous avez besoin." />
          <Step title="Accepter l'offre" description="L'application Belela vous aidera avec les évaluations et les emplacements des chauffeurs." />
          <Step title="Commencer le trajet" description="C'est votre tour de choisir votre chauffeur et l'option qui vous convient le mieux." />
        </div>
      </div>

      {/* Nouvelle Section : Télécharger l'application Belela */}
      <div className="mt-16 bg-red-600 text-white py-12 px-6 rounded-lg max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold">Télécharger l'application Belela</h2>
          <p className="mt-4 text-white">
            Belela est une initiative fantastique dans le marché du transport en Afrique de l'Est. Exploitée et dirigée par des Africains pour des Africains, Belela apporte de la créativité locale et des connaissances pour mieux comprendre les besoins des passagers et des chauffeurs. Que vous ayez besoin de vous rendre rapidement à destination ou que vous souhaitiez gagner de l'argent selon votre emploi du temps, Belela offre la meilleure solution.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">Commencer</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/phone.png" alt="Capture d'écran de l'application Belela" width={400} height={400} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}

function Step({ title, description } : { title : string; description: string }) {
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
