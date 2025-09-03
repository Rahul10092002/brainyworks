import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Scalable Solutions",
      description:
        "Our architectures are designed to grow with your business, from startup to enterprise scale.",
      stats: "99.9% Uptime",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Freelancers",
      description:
        "Access to a curated network of top 5% developers and AI specialists worldwide.",
      stats: "200+ Experts",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cost-effective",
      description:
        "Reduce overhead costs by 40% while maintaining premium quality through our freelance model.",
      stats: "40% Cost Reduction",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Latest Tech Stack",
      description:
        "Always using cutting-edge technologies and frameworks to ensure future-proof solutions.",
      stats: "Latest Tech",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure bug-free, reliable deliverables.",
      stats: "Zero Defects",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description:
        "Track record of successful projects across various industries and business sizes.",
      stats: "100+ Projects",
    },
  ];

  return (
    <section className="py-20 relative" id="why-choose-us">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose BrainyWorks?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine the flexibility of freelance talent with enterprise-grade
            project management to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon with animation */}
                <div className="text-blue-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {reason.icon}
                </div>

                {/* Stats badge */}
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  {reason.stats}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have revolutionized their
              operations with our innovative IT and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-secondary">Schedule Consultation</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
