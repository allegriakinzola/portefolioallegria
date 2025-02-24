"use client";
import Hero from "@/sections/Hero";
import Download from "../sections/Download";
import Features from "@/sections/Features";
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';



export default function Home() {
  return (
    <section 
         id="download" 
         className="text-white bg-black w-full px-6 md:px-20 mx-auto h-screen flex items-center justify-center bg-cover bg-center"
         style={{ 
           backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%), url(/fontcode.jpeg)'
   
         }} // Remplacez par le chemin de votre image
       >
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6 h-full">
           <div className="md:w-1/2 text-center md:text-left">
             <h2 className="text-5xl font-bold">Développeur des applications <span className="text-blue-400">Marketeur digital</span> et Graphiste.</h2>
             <p className="text-gray-400 mt-4">Je conçois des applications et sites internets et j'accompagne les entreprises dans leur communication digitale</p>
             <div className="mt-6 flex justify-center md:justify-start">
             <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center gap-2"
              onClick={() => window.open('https://wa.me/243828312365', '_blank')}
            >
              Me contacter <FaArrowRight />
            </button>
             </div>
           </div>
           <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
             <Image src="/photoprofileallegria.png" alt="John Parker" width={400} height={400} className="rounded-lg" />
           </div>
         </div>
       </section>
  );
}