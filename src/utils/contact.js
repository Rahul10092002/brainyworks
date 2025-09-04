// Contact information
export const CONTACT_INFO = {
  phone: "+918085035032",
  email: "developer@teconico.in",
  whatsappNumber: "918085035032", // Without + for WhatsApp URL
};

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
  "Get Started":
    "Hi! I'm interested in getting started with your services. Can you please provide more information?",
  "Hire Us":
    "Hello! I would like to hire your team for a project. Let's discuss the details.",
  "Start Your Project":
    "Hi! I want to start a new project with your team. Can we schedule a discussion?",
  "Schedule Consultation":
    "Hello! I would like to schedule a consultation to discuss my project requirements.",
  "Send Message":
    "Hi! I have a project inquiry and would like to get in touch.",
  WhatsApp: "Hello! I'm reaching out via WhatsApp for quick communication.",
  "Schedule Call":
    "Hi! I would like to schedule a call to discuss my project needs.",
  "Subscribe to Newsletter":
    "Hello! I would like to subscribe to your newsletter and stay updated with your latest services and insights.",
  "Generative AI & LLM Solutions":
    "Hello! I'm interested in your Generative AI & LLM Solutions. Can you provide more details?",
  "Predictive Analytics & Forecasting":
    "Hi! I want to learn more about your Predictive Analytics & Forecasting services.",
  "End-to-End ML Systems & MLOps":
    "Hello! I'm interested in your End-to-End ML Systems & MLOps capabilities.",
  "AI-Powered Document Intelligence":
    "Hi! I need information about your AI-Powered Document Intelligence solutions.",
  "Full-Stack Application Development":
    "Hello! I'm looking for Full-Stack Application Development services.",
  default:
    "Hello! I'm interested in your services and would like to know more.",
};

// Function to open WhatsApp with custom message
export const openWhatsApp = (buttonTitle = "default") => {
  const message = WHATSAPP_MESSAGES[buttonTitle] || WHATSAPP_MESSAGES.default;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

// Function to open email client
export const openEmail = (subject = "Project Inquiry") => {
  const emailUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    subject
  )}`;
  window.open(emailUrl, "_blank");
};

// Function to open phone dialer
export const openPhone = () => {
  const phoneUrl = `tel:${CONTACT_INFO.phone}`;
  window.open(phoneUrl, "_blank");
};
