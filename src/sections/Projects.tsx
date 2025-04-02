"use client";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Image from 'next/image';
import { FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { SiPython, SiJavascript, SiBootstrap, SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiNextdotjs } from 'react-icons/si';

const projects = [
  {
    title: "Lax Medical",
    description: "Plateforme médicale innovante facilitant la gestion des rendez-vous et des consultations médicales en ligne.",
    image: "/projects/laxmedical.png",
    role: "Développeur frontend",
    status: "Public",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap }
    ],
    links: {
      live: "https://www.medical.laxtech.pro/"
    }
  },
  {
    title: "Lax Market",
    description: "Plateforme e-commerce complète permettant aux utilisateurs d'acheter et de vendre des produits en ligne.",
    image: "/projects/laxmarket.png",
    role: "Développeur Web Full Stack",
    status: "Public",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap }
    ],
    links: {
      live: "https://www.market.laxtech.pro/"
    }
  },
  {
    title: "DGI Impôt",
    description: "Application de collecte et de gestion des impôts pour la Direction Générale des Impôts, facilitant le processus de déclaration et de paiement des impôts.",
    image: "/projects/dgi.png",
    role: "Développeur frontend",
    status: "Confidentiel",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      live: "#"
    }
  },
  {
    title: "Heureka",
    description: "Application innovante permettant de retrouver les cartes perdues (cartes d'identité, permis, etc.) grâce à un système de notification intelligent et une communauté engagée.",
    image: "/projects/eureka.png",
    role: "Développeur Web Full Stack",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      live: "https://eureka-weld.vercel.app/"
    }
  },
  {
    title: "Belela",
    description: "Application de lutte contre la criminalité permettant aux citoyens de signaler des incidents en temps réel et de collaborer avec les forces de l'ordre pour une ville plus sûre.",
    image: "/projects/belela.jpg",
    role: "Développeur Web Frontend",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Firebase", icon: SiFirebase },
      { name: "TypeScript", icon: SiTypescript }
    ],
    links: {
      live: "https://www.belela.tech/"
    }
  },
  {
    title: "Ubuntu Kids",
    description: "Application éducative interactive permettant aux enfants de découvrir l'histoire fascinante de l'Afrique à travers des jeux, des quiz et des histoires animées.",
    image: "/projects/ubuntu.jpg",
    role: "Développeur Web Full Stack",
    status: "Confidentiel",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ],
    links: {
      live: "#"
    }
  },
  {
    title: "Optimiste",
    description: "Plateforme de podcast dédiée à la culture africaine, offrant des contenus riches et variés sur l'histoire, la musique, l'art et les traditions du continent.",
    image: "/projects/optimiste.png",
    role: "Développeur Web Full Stack",
    status: "Confidentiel",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      live: "#"
    }
  },
  {
    title: "Shop Evirtus",
    description: "Plateforme e-commerce spécialisée dans la vente de fournitures scolaires, offrant une expérience d'achat simplifiée pour les parents et les établissements scolaires.",
    image: "/projects/evirtus.png",
    role: "Développeur Frontend",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      live: "https://evirtus-site.vercel.app/"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-background-light dark:bg-background-dark relative">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center bg-primary-light/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
            <p className="text-primary-light">Projets</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
          Projets <span className="text-primary-light">réalisés</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <tech.icon 
                        key={techIndex}
                        className="text-2xl text-white"
                        title={tech.name}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.status === "Confidentiel" ? (
                      <FaLock className="text-2xl text-white" title="Projet Confidentiel" />
                    ) : (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-light transition-colors"
                        aria-label={`Visiter ${project.title}`}
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                    {project.title}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    project.status === "Public" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-primary-light text-sm">
                  {project.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
