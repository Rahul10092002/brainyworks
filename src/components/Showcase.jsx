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
          problem:
            "Manual claims processing led to delays, errors, and customer dissatisfaction in insurance operations.",
          solution:
            "Developed an intelligent claims processing system with automated document analysis, fraud detection, and real-time status tracking using Machine Learning and OCR technologies.",
          impact:
            "Reduced processing time by 75%, improved accuracy by 90%, and enhanced customer satisfaction scores significantly.",
          tech: ["Python", "TensorFlow", "OCR", "React", "PostgreSQL", "AWS"],
        },
        {
          name: "Financial Risk Assessment Platform",
          problem:
            "Traditional risk assessment methods were time-consuming and often missed crucial risk indicators.",
          solution:
            "Built a comprehensive risk assessment platform with predictive analytics, real-time monitoring, and automated reporting capabilities.",
          impact:
            "Improved risk prediction accuracy by 85% and reduced assessment time from weeks to hours.",
          tech: [
            "Machine Learning",
            "Python",
            "FastAPI",
            "React",
            "MongoDB",
            "Docker",
          ],
        },
      ],
    },
    healthcare: {
      label: "Healthcare & Pharmaceuticals",
      icon: <Heart className="w-5 h-5" />,
      projects: [
        {
          name: "Electronic Medical Records (EMR) System",
          problem:
            "Healthcare providers struggled with paper-based records, leading to inefficiencies and potential medical errors.",
          solution:
            "Developed a comprehensive EMR system with patient management, appointment scheduling, prescription tracking, and secure data storage with HIPAA compliance.",
          impact:
            "Improved patient care coordination by 80%, reduced paperwork by 95%, and enhanced data security and accessibility.",
          tech: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "HIPAA Compliance",
            "AWS",
          ],
        },
        {
          name: "AI-Powered Drug Discovery Platform",
          problem:
            "Traditional drug discovery processes were extremely time-consuming and expensive with high failure rates.",
          solution:
            "Created an AI platform for molecular analysis, drug interaction prediction, and compound optimization using deep learning models.",
          impact:
            "Accelerated drug discovery timeline by 60% and improved success rate in early-stage compound identification.",
          tech: [
            "Deep Learning",
            "PyTorch",
            "Molecular Modeling",
            "Python",
            "Kubernetes",
            "Cloud Computing",
          ],
        },
        {
          name: "Patient Mobile Application",
          problem:
            "Patients had limited access to their health information and struggled with appointment management and medication tracking.",
          solution:
            "Developed a user-friendly mobile app with appointment booking, medication reminders, health tracking, and secure messaging with healthcare providers.",
          impact:
            "Increased patient engagement by 70%, improved medication adherence by 65%, and reduced missed appointments by 50%.",
          tech: [
            "React Native",
            "Firebase",
            "Node.js",
            "Push Notifications",
            "Secure Messaging",
          ],
        },
      ],
    },
    manufacturing: {
      label: "Manufacturing & Engineering",
      icon: <Factory className="w-5 h-5" />,
      projects: [
        {
          name: "Predictive Maintenance System",
          problem:
            "Unexpected equipment failures caused costly downtime and maintenance inefficiencies in manufacturing operations.",
          solution:
            "Implemented IoT sensors and machine learning algorithms to predict equipment failures, optimize maintenance schedules, and reduce downtime.",
          impact:
            "Reduced unplanned downtime by 70%, decreased maintenance costs by 40%, and improved overall equipment effectiveness.",
          tech: [
            "IoT Sensors",
            "Machine Learning",
            "Python",
            "InfluxDB",
            "Grafana",
            "AWS IoT",
          ],
        },
        {
          name: "Quality Control Automation",
          problem:
            "Manual quality control processes were slow, inconsistent, and prone to human error in manufacturing lines.",
          solution:
            "Developed an automated quality control system using computer vision and AI to detect defects in real-time during production.",
          impact:
            "Improved defect detection accuracy by 95%, reduced inspection time by 80%, and minimized product recalls.",
          tech: [
            "Computer Vision",
            "OpenCV",
            "TensorFlow",
            "Python",
            "Industrial Cameras",
            "Real-time Processing",
          ],
        },
      ],
    },
    consumer: {
      label: "Consumer, Sales & Cloud Infrastructure",
      icon: <ShoppingCart className="w-5 h-5" />,
      projects: [
        {
          name: "E-commerce Analytics Platform",
          problem:
            "Online retailers lacked comprehensive insights into customer behavior, sales trends, and inventory optimization.",
          solution:
            "Built a real-time analytics platform with customer segmentation, sales forecasting, and inventory management using advanced data processing.",
          impact:
            "Increased sales conversion by 45%, optimized inventory turnover by 60%, and improved customer retention by 35%.",
          tech: [
            "React",
            "Python",
            "Apache Kafka",
            "Elasticsearch",
            "Machine Learning",
            "AWS",
          ],
        },
        {
          name: "Cloud Migration & Infrastructure Optimization",
          problem:
            "Legacy systems were expensive to maintain, lacked scalability, and posed security risks for growing businesses.",
          solution:
            "Designed and executed complete cloud migration strategy with auto-scaling, disaster recovery, and enhanced security measures.",
          impact:
            "Reduced infrastructure costs by 50%, improved system availability to 99.9%, and enhanced security posture significantly.",
          tech: [
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "CI/CD",
            "Monitoring",
          ],
        },
      ],
    },
    iot: {
      label: "IoT & Smart Automation",
      icon: <Cpu className="w-5 h-5" />,
      projects: [
        {
          name: "Smart Building Management System",
          problem:
            "Building operations lacked automation, leading to energy waste, security concerns, and inefficient resource management.",
          solution:
            "Developed an integrated IoT system for lighting, HVAC, security, and energy management with intelligent automation and remote monitoring.",
          impact:
            "Reduced energy consumption by 40%, improved security response time by 80%, and enhanced occupant comfort and productivity.",
          tech: [
            "IoT Devices",
            "MQTT",
            "Node.js",
            "React",
            "Time Series Database",
            "Edge Computing",
          ],
        },
        {
          name: "Industrial Automation Platform",
          problem:
            "Manufacturing processes required manual monitoring and control, leading to inefficiencies and safety risks.",
          solution:
            "Created a comprehensive automation platform with real-time monitoring, automated controls, and predictive analytics for industrial operations.",
          impact:
            "Improved operational efficiency by 55%, enhanced workplace safety by 70%, and reduced human error incidents significantly.",
          tech: [
            "PLC Integration",
            "SCADA",
            "Industrial IoT",
            "Real-time Analytics",
            "Safety Systems",
          ],
        },
      ],
    },
    custom: {
      label: "Custom Solutions",
      icon: <Settings className="w-5 h-5" />,
      projects: [
        {
          name: "Agro Product Shop Management System",
          problem:
            "Local agro shops relied on manual registers, leading to inefficiency, inventory errors, and poor financial tracking.",
          solution:
            "Built a comprehensive web-based system with billing, stock management, expense tracking, credit handling, and real-time reporting capabilities.",
          impact:
            "Enabled real-time tracking of sales/stock/credits, reduced manual workload by 85%, and improved financial transparency and decision-making.",
          tech: [
            "Node.js",
            "Express",
            "MongoDB",
            "React",
            "Tailwind CSS",
            "Real-time Updates",
          ],
        },
        {
          name: "Gym Management & Member Portal",
          problem:
            "Fitness centers struggled with member management, class scheduling, and payment tracking using outdated manual systems.",
          solution:
            "Developed an integrated gym management system with member portals, class booking, payment processing, and fitness tracking capabilities.",
          impact:
            "Streamlined gym operations by 70%, improved member engagement by 60%, and automated payment collection processes.",
          tech: [
            "React",
            "Node.js",
            "Stripe API",
            "MongoDB",
            "Mobile App",
            "Calendar Integration",
          ],
        },
        {
          name: "Restaurant Order Management System",
          problem:
            "Restaurants faced challenges with order processing, inventory management, and customer service during peak hours.",
          solution:
            "Created a complete restaurant management solution with online ordering, kitchen display systems, inventory tracking, and customer feedback integration.",
          impact:
            "Reduced order processing time by 50%, improved kitchen efficiency by 65%, and enhanced customer satisfaction scores.",
          tech: [
            "React",
            "Node.js",
            "Real-time Updates",
            "Payment Gateway",
            "Kitchen Display",
            "Mobile Ordering",
          ],
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

        {/* Built Products & Systems Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10 text-gray-800"
          >
            Built Products & Systems
          </motion.h3>

          {/* Domain Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center mb-8 lg:mb-10 gap-2"
          >
            {Object.entries(projectDomains).map(([key, domain]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                {domain.icon}
                <span className="ml-1 sm:ml-2 hidden sm:inline">
                  {domain.label}
                </span>
                <span className="ml-1 sm:hidden">
                  {domain.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Project Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {projectDomains[activeTab].projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-4 sm:p-6 rounded-xl card-hover group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1 pr-2">
                    {project.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                </div>

                <div className="space-y-3 sm:space-y-4 flex-1">
                  <div>
                    <div className="flex items-center mb-1 sm:mb-2">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        Problem
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-4 sm:pl-6 line-clamp-3">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-1 sm:mb-2">
                      <Cog className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        Solution
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-4 sm:pl-6 line-clamp-3">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-1 sm:mb-2">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        Impact
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-4 sm:pl-6 line-clamp-2">
                      {project.impact}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        Technologies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 pl-4 sm:pl-6">
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{project.tech.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
