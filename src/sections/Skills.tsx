"use client";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiFirebase, SiGit, SiGithub,
  SiAdobephotoshop, SiAdobeillustrator,
  SiDocker, SiPrisma, SiSequelize, SiPostgresql,
  SiMysql
} from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Prisma", icon: SiPrisma, color: "text-slate-800 dark:text-slate-200" },
  { name: "Sequelize", icon: SiSequelize, color: "text-blue-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-200" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-600" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "text-orange-500" }
];

const Skills = () => {
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
            <p className="text-primary-light">Compétences</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
            Mes <span className="text-primary-light">Technologies</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-zinc-200/10 dark:border-zinc-800 p-6 rounded-2xl hover:border-primary-light/50 transition-all group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-light/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition-colors">
                  <skill.icon className={`text-3xl ${skill.color} group-hover:text-white transition-colors`} />
                </div>
                <p className="text-text-light dark:text-text-dark font-medium text-center">{skill.name}</p>
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

export default Skills;
