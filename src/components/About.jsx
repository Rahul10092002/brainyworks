import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Target, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Freelancers",
      description:
        "Access to a curated network of skilled developers and AI specialists",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Scalable Solutions",
      description:
        "Flexible and scalable architectures that grow with your business",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "Cutting-edge technology solutions using the latest frameworks and AI",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Delivery",
      description: "Agile development process ensuring quick turnaround times",
    },
  ];

  return (
    <section className="py-12 lg:py-16 relative bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
              <span className="gradient-text">About BrainyWorks</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              We are a forward-thinking IT solutions firm that specializes in
              connecting businesses with top-tier freelance talent to deliver
              exceptional software and AI solutions. Our approach combines the
              flexibility of freelance expertise with the reliability of
              enterprise-grade project management.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-6 lg:mb-8 leading-relaxed">
              Founded on the principle that innovation thrives when diverse
              talents collaborate, we've built a network of specialized
              developers, data scientists, and AI engineers who are passionate
              about creating solutions that drive business growth in the digital
              age.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="text-blue-400 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-12 rounded-3xl relative overflow-hidden">
              {/* Abstract shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400/30 rounded-full blur-sm"></div>
                <div className="absolute top-12 right-8 w-24 h-24 bg-purple-400/20 rounded-full blur-sm"></div>
                <div className="absolute bottom-8 left-8 w-20 h-20 bg-cyan-400/25 rounded-full blur-sm"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500/40 rounded-full blur-sm"></div>
              </div>

              {/* Central content */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 text-gray-800" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Innovation Driven
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transforming ideas into reality through collaborative
                  excellence and cutting-edge technology solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
