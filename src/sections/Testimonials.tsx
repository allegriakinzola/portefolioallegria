"use client";
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Nehemie Lwantumba",
    role: "Co-Fondateur",
    company: "Belela",
    image: "/testimonials/person1.jpg",
    quote: "La collaboration avec Allegria a été une expérience exceptionnelle. Son professionnalisme et sa créativité ont permis de donner vie à notre vision d'une manière qui dépasse nos attentes"
  },
  {
    name: "Gloria Mukendi",
    role: "Directrice Marketing",
    company: "Optimiste",
    image: "/testimonials/person2.jpg",
    quote: "Allegria a fait un travail remarquable sur nos projets. Sa compréhension des besoins locaux et sa capacité à créer des solutions innovantes ont grandement contribué au succès de nos initiatives digitales."
  },
  {
    name: "Patrick Tshibamba",
    role: "Directeur Technique",
    company: "Digiweb",
    image: "/testimonials/person3.jpg",
    quote: "Un talent remarquable dans le développement web. Allegria comprend parfaitement les besoins du marché congolais et propose des solutions modernes et efficaces."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  if (!mounted) return null;

  return (
    <section className="py-20 px-6 md:px-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center bg-primary-light/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
            <p className="text-primary-light">Témoignages</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
            Ce Qu'ils <span className="text-primary-light">Disent</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800"
          >
            <div className="relative w-24 h-24 mb-6 mx-auto rounded-full overflow-hidden ring-4 ring-primary-light/20">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <FaQuoteLeft className="text-primary-light/20 text-4xl mb-6 mx-auto" />
            <p className="text-gray-600 dark:text-gray-400 text-center text-lg mb-8">
              {testimonials[currentIndex].quote}
            </p>
            <div className="text-center">
              <h3 className="font-semibold text-xl text-text-light dark:text-text-dark mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-primary-light hover:bg-primary-light hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-primary-light hover:bg-primary-light hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary-light w-6' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl -top-32 -right-32"></div>
        <div className="absolute w-[400px] h-[400px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl bottom-0 -left-32"></div>
      </div>
    </section>
  );
};

export default Testimonials;
