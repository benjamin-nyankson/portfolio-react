import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiSonarqube,
  SiEslint,
  SiJira,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", value: 100, level: "Expert", img: <FaHtml5 size={32} /> },
    { name: "CSS", value: 100, level: "Expert", img: <FaCss3 size={32} /> },
    {
      name: "JavaScript",
      value: 90,
      level: "Advanced",
      img: <FaJs size={32} />,
    },
    {
      name: "TypeScript",
      value: 90,
      level: "Advanced",
      img: <SiTypescript size={32} />,
    },
    {
      name: "React (Js & Ts)",
      value: 90,
      level: "Advanced",
      img: <FaReact size={32} />,
    },
    {
      name: "Vue (Js & Ts)",
      value: 90,
      level: "Advanced",
      img: <FaVuejs size={32} />,
    },
    {
      name: "Angular",
      value: 50,
      level: "Beginner",
      img: <FaAngular size={32} />,
    },
    {
      name: "Redux Toolkit",
      value: 90,
      level: "Advanced",
      img: <SiRedux size={32} />,
    },
    { name: "Pinia", value: 90, level: "Advanced", img: <SiRedux size={32} /> },
    {
      name: "Zustand",
      value: 80,
      level: "Intermediate",
      img: <SiRedux size={32} />,
    },
    {
      name: "GraphQL (Apollo)",
      value: 80,
      level: "Intermediate",
      img: <SiGraphql size={32} />,
    },
    {
      name: "REST API",
      value: 90,
      level: "Advanced",
      img: <SiGraphql size={32} />,
    },
    {
      name: "Node.js",
      value: 70,
      level: "Intermediate",
      img: <FaNodeJs size={32} />,
    },
    {
      name: "Java",
      value: 70,
      level: "Intermediate",
      img: <FaJava size={32} />,
    },
    {
      name: "MongoDB",
      value: 50,
      level: "Beginner",
      img: <SiMongodb size={32} />,
    },
    {
      name: "Mongoose",
      value: 50,
      level: "Beginner",
      img: <DiMongodb size={32} />,
    },
    { name: "Vite", value: 90, level: "Advanced", img: <SiVite size={32} /> },
    {
      name: "Tailwind CSS",
      value: 90,
      level: "Advanced",
      img: <SiTailwindcss size={32} />,
    },
    {
      name: "Styled Components",
      value: 90,
      level: "Advanced",
      img: <SiTailwindcss size={32} />,
    },
    {
      name: "MUI",
      value: 90,
      level: "Advanced",
      img: <SiTailwindcss size={32} />,
    },
    { name: "Git", value: 90, level: "Advanced", img: <FaGithub size={32} /> },
    {
      name: "Postman",
      value: 90,
      level: "Advanced",
      img: <SiPostman size={32} />,
    },
    { name: "NPM", value: 90, level: "Advanced", img: <SiPostman size={32} /> },
    { name: "JIRA", value: 90, level: "Advanced", img: <SiJira size={32} /> },
    { name: "FIGMA", value: 90, level: "Advanced", img: <FaFigma size={32} /> },
    {
      name: "VS Code",
      value: 90,
      level: "Advanced",
      img: <SiPostman size={32} />,
    },
    {
      name: "SonarQube",
      value: 90,
      level: "Advanced",
      img: <SiSonarqube size={32} />,
    },
    {
      name: "ESLint",
      value: 90,
      level: "Advanced",
      img: <SiEslint size={32} />,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [maxItems, setMaxItems] = useState(5);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom: unknown) => ({
      width: `${custom}%`,
      transition: { duration: 1, delay: 0.5 },
    }),
  };

  const togleShow = () => {
    if (!showAll) {
      setMaxItems(skills.length);
    } else {
      setMaxItems(5);
    }

    setShowAll((prev) => !prev);
  };

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
         <p
          className="text-orange-500 py-4 cursor-pointer"
          onClick={togleShow}
        >
          {showAll ? "Show less" : "Show all"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.slice(0, maxItems).map((skill, index) => (
            <motion.div
              key={skill.name + index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-md transition hover:shadow-blue-500"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-blue-500">{skill.img}</div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="text-sm mb-2">Level: {skill.level}</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  custom={skill.value}
                  variants={progressVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `0%` }}
                ></motion.div>
              </div>
       
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
