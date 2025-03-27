"use client";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: "Heureka",
    description: "Application innovante permettant de retrouver les cartes perdues (cartes d'identité, permis, etc.) grâce à un système de notification intelligent et une communauté engagée.",
    image: "/projects/heureka.jpg",
    role: "Développeur Web Full Stack",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Belela",
    description: "Application de lutte contre la criminalité permettant aux citoyens de signaler des incidents en temps réel et de collaborer avec les forces de l'ordre pour une ville plus sûre.",
    image: "/projects/belela.jpg",
    role: "Développeur Web Frontend",
    status: "Confidentiel",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "TypeScript", icon: SiTypescript }
    ],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Ubuntu Kids",
    description: "Application éducative interactive permettant aux enfants de découvrir l'histoire fascinante de l'Afrique à travers des jeux, des quiz et des histoires animées.",
    image: "/projects/ubuntu.jpg",
    role: "Développeur Web Full Stack",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Optimiste",
    description: "Plateforme de podcast dédiée à la culture africaine, offrant des contenus riches et variés sur l'histoire, la musique, l'art et les traditions du continent.",
    image: "/projects/optimiste.jpg",
    role: "Développeur Web Frontend",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "DGI Impôt",
    description: "Application de collecte et de gestion des impôts pour la Direction Générale des Impôts, facilitant le processus de déclaration et de paiement des impôts.",
    image: "/projects/dgi.jpg",
    role: "Développeur Web Full Stack",
    status: "Confidentiel",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Shop Evirtus",
    description: "Plateforme e-commerce spécialisée dans la vente de fournitures scolaires, offrant une expérience d'achat simplifiée pour les parents et les établissements scolaires.",
    image: "/projects/evirtus.jpg",
    role: "Développeur Web Full Stack",
    status: "Public",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    links: {
      github: "#",
      live: "#"
    }
  }
];

const Projects = () => {
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
            <p className="text-primary-light">Projets</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
            Mes <span className="text-primary-light">Réalisations</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-primary-light/50 transition-all"
              variants={fadeInUp}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                  <div className="flex gap-4">
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
                      <>
                        <a
                          href={project.links.github}
                          onClick={(e) => e.preventDefault()}
                          className="text-white hover:text-primary-light transition-colors cursor-not-allowed"
                          aria-label={`Code source de ${project.title} (Non disponible)`}
                        >
                          <FaGithub className="text-2xl" />
                        </a>
                        <a
                          href={project.links.live}
                          onClick={(e) => e.preventDefault()}
                          className="text-white hover:text-primary-light transition-colors cursor-not-allowed"
                          aria-label={`Site de ${project.title} (Non disponible)`}
                        >
                          <FaExternalLinkAlt className="text-2xl" />
                        </a>
                      </>
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
                    project.status === "Confidentiel" 
                      ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-primary-light">
                  {project.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl -top-32 -right-32"></div>
        <div className="absolute w-[400px] h-[400px] bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl bottom-0 -left-32"></div>
      </div>
    </section>
  );
};

export default Projects;
