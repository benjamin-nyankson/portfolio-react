import { motion } from "framer-motion";

 const about = {
  first: [
    {
      content:
        "I am a passionate and dedicated Frontend Developer with a strong foundation in building dynamic and responsive web applications. With expertise across various modern technologies and frameworks, I aim to create seamless user experiences and efficient, maintainable codebases. My strengths lie in my adaptability, problem-solving skills, and my commitment to continuous learning.",
    },
    {
      content:
        "From my early days of experimenting with HTML and CSS to mastering JavaScript and diving deep into frameworks like React, Vue, and Angular, my journey in web development has been both challenging and rewarding. I believe in writing clean, modular, and scalable code, ensuring that my applications are not only functional but also aesthetically pleasing and user-friendly.",
    },
  ],

  second: [
    {
      content:
        "My approach to development is user-centric. I put myself in the shoes of the end-users, striving to understand their needs and pain points. This empathy drives my design and development choices, ensuring that the solutions I create genuinely enhance user experiences. I have a keen eye for detail, which helps me spot potential issues early and address them before they become significant problems.",
    },
    {
      content:
        "In addition to my frontend expertise, I have experience with backend technologies such as Node.js and GraphQL, allowing me to build full-stack applications and understand the complete lifecycle of web development. This holistic understanding enables me to collaborate effectively with backend developers, ensuring seamless integration and smooth functionality across the entire stack.",
    },
    {
      content:
        "I thrive in collaborative environments where I can share my knowledge and learn from others. Whether working in a team or independently, I am committed to delivering high-quality work on time. I enjoy keeping up with the latest industry trends and continuously improving my skills through online courses, workshops, and hands-on projects.",
    },
  ],
};

export const approaches = [
  { title: "User Experience:", content: "Prioritizing intuitive and engaging user interfaces." },
  { title: "Performance Optimization:", content: "Ensuring fast load times and smooth interactions." },
  { title: "Responsive Design:", content: "Creating adaptable layouts for various devices and screen sizes." },
  { title: "Component Reusability:", content: "Building modular components to streamline development and maintenance." },
  { title: "Testing:", content: "Implementing thorough testing strategies to maintain high code quality." },
];

 const extras = [
  "In my spare time, I love exploring new frontend technologies, participating in hackathons, and contributing to open-source projects. These activities not only sharpen my skills but also allow me to give back to the community and stay connected with fellow developers.",
  "I am excited to bring my expertise and enthusiasm to new challenges and opportunities, and I look forward to contributing to innovative projects that make a difference.",
];

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="space-y-6">
              {about.first.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg leading-relaxed">
                  {paragraph.content}
                </motion.p>
              ))}
            </div>
            {/* Second Column */}
            <div className="space-y-6">
              {about.second.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg leading-relaxed">
                  {paragraph.content}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Approaches Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
            My Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-md transition hover:shadow-blue-500"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">{approach.title}</h3>
                <p className="text-lg">{approach.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extras Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Beyond Coding
          </h2>
          <div className="space-y-6">
            {extras.map((extra, index) => (
              <motion.p key={index} variants={itemVariants} className="text-lg leading-relaxed">
                {extra}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;