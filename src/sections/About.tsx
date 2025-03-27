"use client";
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Image from 'next/image';

const About = () => {
  const stats = [
    { number: '10+', text: 'Projets Réalisés' },
    { number: '8+', text: 'Clients Satisfaits' },
    { number: '3+', text: "Années d'Expérience" }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
            À Propos de Moi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Développeur passionné par la création d'expériences digitales uniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary-light/20 rounded-2xl blur-2xl"></div>
              <div className="absolute inset-0 bg-background-light dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"></div>
              <Image
                src="/photoprofileallegria.png"
                alt="Allegria Kinzola"
                fill
                className="object-cover rounded-2xl relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 dark:from-background-dark/80 to-transparent rounded-2xl z-20"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">
              Développeur Full Stack & Designer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Passionné par le développement web et le design, je crée des expériences digitales 
              qui allient esthétique et fonctionnalité. Mon approche combine créativité et 
              expertise technique pour donner vie à vos projets.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary-light mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="px-6 py-3 bg-primary-light hover:bg-primary-dark text-white rounded-lg flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En Savoir Plus
              </motion.button>
              <motion.button 
                className="px-6 py-3 border border-primary-light text-primary-light hover:bg-primary-light/10 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl -bottom-32 -left-32"></div>
      </div>
    </section>
  );
};

export default About;
