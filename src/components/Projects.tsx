import ProjectCard from "./ProjectCard";
import img from "../assets/favicon.png";
import resume from "../assets/resume.png";

const listOfProjects = [
  {
    name: "SmartChat",
    type: "React",
    img_url: img,
    link: "https://chat-wizard-nine.vercel.app/",
    description:
      "A smart AI-powered chatbot interface built with React, enabling interactive communication using modern UI components.",
  },

  {
    name: "E-shop",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/e-com-a1BNCC49.png",
    link: "https://e-com-three-tan.vercel.app/",
    description:
      "A modern e-commerce web app for browsing and purchasing products, featuring product pages, cart functionality, and a responsive design.",
  },
  {
    name: "Project Time Line",
    type: "Vue",
    img_url:
      "https://portfolio-website-rho-lovat.vercel.app/assets/timeline-SIOEYKQm.png",
    link: "https://time-line-livid.vercel.app/",
    description:
      "A timeline app to visualize and manage project schedules effectively. Built with Vue and styled for clarity and usability.",
  },
  {
    name: "Resume Builder",
    type: "React",
    img_url: resume,
    link: "https://cv-generator-bay.vercel.app/",
    description:
      "A React-based web app that allows users to easily create, preview, and download professional resumes with a clean and intuitive interface.",
  },
  // {
  //   name: "E-learning",
  //   type: "Vue",
  //   img_url:
  //     "https://portfolio-website-rho-lovat.vercel.app/assets/e-lerning-0AzyyjdS.png",
  //   link: "https://e-learning-dashboard-31k8xgwp6-nyankson-benjamin.vercel.app",
  //   description:
  //     "An educational dashboard to manage courses, students, and progress tracking in a user-friendly layout.",
  // },
  // {
  //   name: "Mini E-commerce",
  //   type: "Vue",
  //   img_url:
  //     "https://portfolio-website-rho-lovat.vercel.app/assets/e-commerce-6GwpTu5C.png",
  //   link: "https://e-commerce-app-vue.vercel.app/",
  //   description:
  //     "A lightweight Vue-based e-commerce platform designed for fast browsing and simplified shopping experiences.",
  // },
  // {
  //   name: "Youtube Clone",
  //   type: "Vue",
  //   img_url:
  //     "https://portfolio-website-rho-lovat.vercel.app/assets/youtube-clone-TPg68Rcs.png",
  //   link: "https://youtube-three-delta.vercel.app",
  //   description:
  //     "A clone of the YouTube interface allowing users to explore videos and search content using the YouTube Data API.",
  // },
  // {
  //   name: "Travelling App",
  //   type: "Vue",
  //   img_url:
  //     "https://portfolio-website-rho-lovat.vercel.app/assets/react-png-AnaWmz9K.png",
  //   link: "https://travelling-app-rho.vercel.app/",
  //   description:
  //     "A travel planner app designed to help users explore destinations, plan trips, and view travel guides.",
  // },
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
