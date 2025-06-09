const config = {
  title: "Daniel Chet | Programador Junior",
  description: {
    long: "Portafolio de Prueba para Daniel Chet, un programador junior con experiencia en desarrollo web y tecnologías modernas. Explora proyectos innovadores y creativos que combinan diseño y funcionalidad.",
    short:
      "Portafolio de Daniel Chet, un programador junior con experiencia en desarrollo web y tecnologías modernas.",
  },
  keywords: [
    "Daniel Chet",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Daniel Chet",
  email: "danielchet875@gmail.com",
  site: "https://nareshkhatri.site",//CAMBIAR ESTOOOOOOOO

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/danielchet87",
    linkedin: "https://www.linkedin.com/in/daniel-alejandro-chet-delgado-6a042a2b7/",
    instagram: "https://www.instagram.com/danielalejandrochet",
    facebook: "https://www.facebook.com/PopositoMax/",
    github: "https://github.com/Dcextrim",
  },
};
export { config };
