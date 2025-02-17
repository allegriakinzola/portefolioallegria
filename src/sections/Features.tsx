import React from 'react';
import Image from 'next/image';

export const Features = () => {
  return (
    <section className="py-16 bg-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Comment Belela fonctionne</h2>
        <p className="mt-4 text-gray-600">
          Téléchargez l'application Belela Driver depuis le Playstore, créez un compte, utilisez votre voiture et conduisez par vous-même. Obtenez des courses et gagnez plus d'argent.
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="space-y-8 max-w-sm">
          <Step number={1} title="Demander un trajet" description="Choisissez vos lieux de prise en charge et de dépose, ainsi que le type de trajet qui correspond à vos besoins." />
          <Step number={3} title="Profitez de votre trajet" description="Rencontrez votre chauffeur grâce à nos services GPS en temps réel et profitez de votre trajet !" />
        </div>
        <div>
          <Image src="/phonefeatures.png" alt="Capture d'écran de l'application" width={500} height={500} className="rounded-lg" />
        </div>
        <div className="space-y-8 max-w-sm">
          <Step number={2} title="Associez-vous à un chauffeur" description="Belela vous associera au chauffeur disponible le plus proche." />
          <Step number={4} title="Payer et évaluer" description="Payez en espèces ou par carte et évaluez votre chauffeur." />
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
