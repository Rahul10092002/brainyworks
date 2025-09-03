import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      name: "Flutter",
      category: "Mobile",
      logo: "https://storage.googleapis.com/cms-storage-bucket/c823e53b3a1a7b0d36a9.png",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "React Native",
      category: "Mobile",
      logo: "https://reactnative.dev/img/header_logo.svg",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "React",
      category: "Frontend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      color: "from-blue-400 to-cyan-300",
    },
    {
      name: "Node.js",
      category: "Backend",
      logo: "https://nodejs.org/static/images/logo.svg",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Python",
      category: "Backend/AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      color: "from-yellow-400 to-blue-500",
    },
    {
      name: "AWS",
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      color: "from-orange-400 to-yellow-400",
    },
    {
      name: "Azure",
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Machine Learning",
      category: "AI",
      logo: "🤖",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-12 lg:py-16 relative" id="tech-stack">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            <span className="gradient-text">Our Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and frameworks to deliver
            robust, scalable, and future-ready solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center">
                  {tech.logo.startsWith("http") ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tech.logo}
                    </span>
                  )}
                </div>

                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors line-clamp-1">
                  {tech.name}
                </h3>

                <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 lg:mt-16 text-center"
        >
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            And many more technologies including:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
            {[
              "CrewAI",
              "n8n",
              "Docker",
              "Kubernetes",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "GraphQL",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
