import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Filter } from "lucide-react";
import { openWhatsApp } from "../utils/contact";

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce AI Assistant",
      category: "AI",
      description:
        "Intelligent chatbot with natural language processing for customer support and product recommendations.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "TensorFlow", "NLP", "React"],
      link: "#",
    },
    {
      id: 2,
      title: "Healthcare Management App",
      category: "Mobile",
      description:
        "Cross-platform mobile application for patient management with real-time analytics.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "Web",
      description:
        "Real-time financial analytics dashboard with advanced data visualization and reporting.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "D3.js", "Python", "AWS"],
      link: "#",
    },
    {
      id: 4,
      title: "Supply Chain Automation",
      category: "Automation",
      description:
        "End-to-end supply chain automation with IoT integration and predictive analytics.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["n8n", "AWS IoT", "Machine Learning", "Docker"],
      link: "#",
    },
    {
      id: 5,
      title: "Smart City Platform",
      category: "Web",
      description:
        "Comprehensive smart city management platform with real-time monitoring and control systems.",
      image:
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "IoT", "Azure"],
      link: "#",
    },
    {
      id: 6,
      title: "AI-Powered Learning",
      category: "AI",
      description:
        "Personalized learning platform using AI to adapt content based on student performance.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      link: "#",
    },
  ];

  const categories = ["All", "Web", "Mobile", "AI", "Automation"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-12 lg:py-16 relative" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our successful projects across various domains and
            technologies, delivering innovative solutions that drive business
            growth.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-10"
        >
          <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-2 mr-1 sm:mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:text-gray-800 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 lg:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors line-clamp-2 flex-shrink-0">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-semibold text-xs sm:text-sm hover:text-blue-700 transition-colors"
                >
                  View Project
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-10 lg:mt-16"
        >
          <div className="glass p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life with our
              expertise in cutting-edge technologies and AI solutions.
            </p>
            <button
              onClick={() => openWhatsApp("Start Your Project")}
              className="btn-primary"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
