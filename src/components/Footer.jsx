import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
              <div className="flex items-center space-x-3 text-gray-600 text-sm lg:text-base">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span>hello@brainyworks.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm lg:text-base">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 text-sm lg:text-base">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span>San Francisco, CA</span>
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

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">
              Stay Connected
            </h3>

            <p className="text-gray-600 mb-4 text-sm lg:text-base">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0 text-sm lg:text-base"
              />
              <button className="px-4 py-2 lg:px-6 lg:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors whitespace-nowrap font-medium text-sm lg:text-base">
                Subscribe
              </button>
            </div>

            <div className="flex space-x-3 lg:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-blue-500 rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="w-4 h-4 lg:w-5 lg:h-5">{social.icon}</div>
                </motion.a>
              ))}
            </div>
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
