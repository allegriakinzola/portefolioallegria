"use client";
import Image from 'next/image';
import { FaArrowRight, FaComment } from 'react-icons/fa';
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Testimonials from '@/sections/Testimonials';
import { motion } from "framer-motion";
import { fadeInUp, float, slideIn } from "@/utils/animations";
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="font-poppins bg-background-light dark:bg-background-dark">
        <ThemeToggle />
        
        <div className="fixed top-0 left-0 w-full h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-white/80 to-transparent dark:from-blue-900/20 dark:via-zinc-900/20 dark:to-transparent pointer-events-none"></div>
        
        <section 
          id="hero" 
          className="relative text-text-light dark:text-text-dark w-full px-6 md:px-20 mx-auto min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <motion.div 
                className="md:w-1/2 text-center md:text-left"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <motion.div 
                  className="inline-flex items-center bg-primary-light/10 backdrop-blur-sm rounded-full px-4 py-2 mb-2"
                  variants={slideIn}
                >
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                  <p className="text-primary-light">Mbote!</p>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  Je suis <span className="text-primary-light">Allegria Kinzola</span>,<br/>
                  Développeur Full Stack
                </motion.h1>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 text-lg mb-8"
                  variants={fadeInUp}
                >
                  Développeur d'applications, Marketeur digitale et Graphiste basé en RDC
                </motion.p>
                
                <motion.div 
                  className="flex gap-4 justify-center md:justify-start"
                  variants={fadeInUp}
                >
                  <button 
                    className="group px-6 py-3 bg-primary-light hover:bg-primary-dark text-white rounded-lg flex items-center gap-2 transition-all"
                    onClick={() => window.open('https://wa.me/243828312365', '_blank')}
                  >
                    Me contacter 
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 relative"
                variants={float}
                animate="animate"
              >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 bg-primary-light/20 rounded-full blur-3xl"></div>
                  <Image 
                    src="/photoprofileallegria.png" 
                    alt="Allegria Kinzola" 
                    fill
                    className="object-cover rounded-full relative z-10"
                    style={{ 
                      border: '2px solid var(--primary-light)',
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-text-light dark:text-text-dark">Prête à collaborer</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <FaComment className="text-primary-light" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Discutons de votre projet</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-primary-light/10 dark:bg-primary-light/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
            <div className="absolute w-[400px] h-[400px] bg-primary-light/5 dark:bg-primary-light/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
          </div>
        </section>

        <Services />
        <About />
        <Testimonials />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}