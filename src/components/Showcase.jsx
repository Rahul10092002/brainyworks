import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  TrendingUp,
  Cog,
  FileText,
  Code,
  Shield,
  Heart,
  Factory,
  ShoppingCart,
  Cpu,
  Settings,
  ExternalLink,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";
import { openWhatsApp } from "../utils/contact";

const Showcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("insurance");

  const coreCapabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Generative AI & LLM Solutions",
      description:
        "Advanced language models, chatbots, content generation, and intelligent automation using cutting-edge AI technologies.",
      features: [
        "Custom LLM Integration",
        "AI Chatbots",
        "Content Generation",
        "Intelligent Automation",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics & Forecasting",
      description:
        "Data-driven insights and predictive models to forecast trends, optimize operations, and drive business growth.",
      features: [
        "Time Series Analysis",
        "Demand Forecasting",
        "Risk Assessment",
        "Market Prediction",
      ],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "End-to-End ML Systems & MLOps",
      description:
        "Complete machine learning pipelines from data ingestion to model deployment with automated monitoring and scaling.",
      features: [
        "ML Pipeline Development",
        "Model Deployment",
        "Automated Monitoring",
        "Scalable Infrastructure",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI-Powered Document Intelligence",
      description:
        "Intelligent document processing, OCR, information extraction, and automated workflow systems for enterprise needs.",
      features: [
        "Document OCR",
        "Information Extraction",
        "Workflow Automation",
        "Content Classification",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Application Development",
      description:
        "Complete web and mobile applications with modern frameworks, responsive design, and seamless user experiences.",
      features: [
        "React/Node.js Development",
        "Mobile Apps",
        "Cloud Integration",
        "API Development",
      ],
    },
  ];

  const projectDomains = {
    insurance: {
      label: "Insurance & FinTech",
      icon: <Shield className="w-5 h-5" />,
      projects: [
        {
          name: "AI-Powered Claims Processing System",
          description:
            "Intelligent claims processing with automated document analysis and fraud detection.",
          impact: "75% faster processing, 90% improved accuracy",
          tech: ["Python", "TensorFlow", "OCR", "React", "AWS"],
        },
      ],
    },
    healthcare: {
      label: "Healthcare",
      icon: <Heart className="w-5 h-5" />,
      projects: [
        {
          name: "Electronic Medical Records (EMR) System",
          description:
            "Comprehensive EMR system with patient management and HIPAA compliance.",
          impact: "80% improved care coordination, 95% reduced paperwork",
          tech: ["React", "Node.js", "MongoDB", "HIPAA Compliance"],
        },
      ],
    },
    manufacturing: {
      label: "Manufacturing",
      icon: <Factory className="w-5 h-5" />,
      projects: [
        {
          name: "Predictive Maintenance System",
          description:
            "IoT sensors and ML algorithms to predict equipment failures.",
          impact: "70% reduced downtime, 40% lower maintenance costs",
          tech: ["IoT Sensors", "Machine Learning", "Python", "AWS IoT"],
        },
      ],
    },
    consumer: {
      label: "E-commerce & Cloud",
      icon: <ShoppingCart className="w-5 h-5" />,
      projects: [
        {
          name: "E-commerce Analytics Platform",
          description:
            "Real-time analytics with customer segmentation and sales forecasting.",
          impact: "45% increased conversion, 60% optimized inventory",
          tech: ["React", "Python", "Apache Kafka", "Machine Learning"],
        },
      ],
    },
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className="py-12 lg:py-16 relative bg-gradient-to-b from-gray-50 to-white"
      id="showcase"
    >
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
            <span className="gradient-text">
              Core Capabilities & Project Showcase
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our technical expertise and real-world impact through
            innovative solutions across diverse industries
          </motion.p>
        </motion.div>

        {/* Core Capabilities Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 lg:mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10 text-gray-800"
          >
            Core Capabilities
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => openWhatsApp(capability.title)}
                className="glass p-4 sm:p-6 rounded-xl card-hover group cursor-pointer h-full"
              >
                <div className="text-blue-500 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>

                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2">
                  {capability.title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {capability.description}
                </p>

                <div className="space-y-1 sm:space-y-2">
                  {capability.features
                    .slice(0, 3)
                    .map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
