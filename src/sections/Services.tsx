"use client";
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaSearch } from 'react-icons/fa';
import { fadeInUp } from '@/utils/animations';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Sites Web',
      description: 'Création de sites web modernes et réactifs avec les dernières technologies.'
    },
    {
      icon: FaMobileAlt,
      title: 'Applications Web',
      description: 'Développement d\'applications web adaptées à vos besoins.'
    },
    {
      icon: FaPalette,
      title: 'Design Graphique',
      description: 'Conception graphique créative pour vos projets digitaux.'
    },
    {
      icon: FaSearch,
      title: 'SEO',
      description: 'Optimisation pour les moteurs de recherche et visibilité en ligne.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
            Mes Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des solutions digitales complètes pour vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary-light dark:hover:border-primary-light transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light/10 flex items-center justify-center mb-4 group-hover:bg-primary-light/20 transition-all">
                <service.icon className="text-2xl text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
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

export default Services;
