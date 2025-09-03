import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Smartphone,
  Globe,
  Database,
  Brain,
  Cog,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications using Flutter and React Native with seamless user experiences.",
      tech: ["Flutter", "React Native", "iOS", "Android"],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      tech: ["React", "Node.js", "Python", "Next.js"],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Solutions",
      description:
        "Comprehensive data handling, analytics, and machine learning solutions for data-driven insights.",
      tech: ["Data Science", "ML", "Analytics", "Big Data"],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Solutions",
      description:
        "Advanced AI integration including generative AI, agentic AI, and intelligent automation systems.",
      tech: ["Generative AI", "Agentic AI", "NLP", "Computer Vision"],
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Automation & Deployment",
      description:
        "Cloud infrastructure, CI/CD pipelines, and intelligent workflow automation solutions.",
      tech: ["AWS", "Azure", "CrewAI", "n8n"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 lg:py-16 relative" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-10 lg:mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6"
          >
            <span className="gradient-text">Our Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We provide comprehensive IT and AI solutions tailored to your
            business needs, leveraging the latest technologies and our network
            of expert freelancers.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="glass p-4 sm:p-6 rounded-xl card-hover group cursor-pointer h-full flex flex-col"
            >
              <div className="text-blue-400 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3 text-center line-clamp-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed text-center line-clamp-4 flex-1">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center">
                {service.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {service.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    +{service.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors text-xs sm:text-sm">
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
