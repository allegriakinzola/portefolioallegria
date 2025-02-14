import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Download from '../sections/Download';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Hero />
          <Features />
          <Download />
        </div>
      </main>
      <Footer />
    </div>
  );
}
