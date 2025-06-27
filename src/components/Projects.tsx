import ProjectCard from "./ProjectCard";
import img from "../assets/favicon.png"

const listOfProjects = [
  {
    name: "Smart AI",
    type: "React",
    img_url:
      img,
    link: "https://chat-wizard-nine.vercel.app/",
  },
  {
    name: "Project Time Line",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/timeline-SIOEYKQm.png",
    link: "https://time-line-livid.vercel.app/",
  },
  {
    name: "E-shop",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/e-com-a1BNCC49.png",
    link: "https://e-com-three-tan.vercel.app/",
  },
  {
    name: "E-learning",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/e-lerning-0AzyyjdS.png",
    link: "https://e-learning-dashboard-31k8xgwp6-nyankson-benjamin.vercel.app",
  },
  {
    name: "Mini E-commerce",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/e-commerce-6GwpTu5C.png",
    link: "https://e-commerce-app-vue.vercel.app/",
  },
  {
    name: "Youtube Clone",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/youtube-clone-TPg68Rcs.png",
    link: "https://youtube-three-delta.vercel.app",
  },
  {
    name: "Travelling App",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/react-png-AnaWmz9K.png",
    link: "https://travelling-app-rho.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listOfProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
