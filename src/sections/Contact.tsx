"use client";
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: FaEnvelope, text: 'contact@allegriakinzola.com', href: 'mailto:contact@allegriakinzola.com' },
    { icon: FaPhone, text: '+243 828 312 365', href: 'tel:+243828312365' },
    { icon: FaWhatsapp, text: 'WhatsApp', href: 'https://wa.me/243828312365' },
    { icon: FaLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/allegria-kinzola-a602a8213/' }
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
            Me Contacter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group hover:border-primary-light transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-light/10 flex items-center justify-center group-hover:bg-primary-light/20 transition-all">
                  <info.icon className="text-2xl text-primary-light" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
                    {info.text}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Cliquez pour me contacter
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-primary-light focus:ring-1 focus:ring-primary-light outline-none transition-all text-text-light dark:text-text-dark"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-primary-light focus:ring-1 focus:ring-primary-light outline-none transition-all text-text-light dark:text-text-dark"
                placeholder="Votre email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-primary-light focus:ring-1 focus:ring-primary-light outline-none transition-all text-text-light dark:text-text-dark resize-none"
              placeholder="Votre message"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-primary-light hover:bg-primary-dark text-white rounded-lg transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Envoyer le message
          </motion.button>
        </motion.form>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl -top-32 -right-32"></div>
        <div className="absolute w-[400px] h-[400px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl bottom-0 -left-32"></div>
      </div>
    </section>
  );
};

export default Contact;
