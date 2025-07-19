import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  name: string;
  type: string;
  img_url: string;
  link: string;
  description:string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, type, img_url, link,description }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={cardRef}
      className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform relative overflow-hidden border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Project Image */}
      <div className="relative">
        <img src={img_url} alt={name} className="w-full h-48 object-cover rounded-lg" />
        {/* Project Type Badge */}
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
          {type} Project
        </span>
      </div>

      {/* Project Details */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">
         {description}
        </p>
      </div>

      {/* View Project Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-all shadow-md hover:shadow-lg"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
