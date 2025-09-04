import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import {
  CONTACT_INFO,
  openWhatsApp,
  openEmail,
  openPhone,
} from "../utils/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", name: "GitHub" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "App Development", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "AI Solutions", href: "#services" },
    { name: "Data Analytics", href: "#services" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white/20 backdrop-blur-sm border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <img
                src="/images/Transparent_LOGO.png"
                alt="BrainyWorks Logo"
                className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
              />
              <span className="text-xl lg:text-2xl font-bold text-gray-800">
                BrainyWorks
              </span>
            </div>

            <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
              Empowering businesses with innovative IT and AI solutions through
              our network of expert freelancers and cutting-edge technologies.
            </p>

            <div className="space-y-2 lg:space-y-3">
              <div
                onClick={() => openEmail("General Inquiry")}
                className="flex items-center space-x-3 text-gray-600 text-sm lg:text-base cursor-pointer hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div
                onClick={() => openPhone()}
                className="flex items-center space-x-3 text-gray-600 text-sm lg:text-base cursor-pointer hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm lg:text-base">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform text-sm lg:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">
              Services
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform text-sm lg:text-base"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

         
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} BrainyWorks. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 lg:gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
