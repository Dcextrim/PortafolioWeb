// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  //TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  //VUE = "vue",
  //NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  //EXPRESS = "express",
  POSTGRES = "postgres",
  //MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  //PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  //WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  //VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Testeando el lenguaje pa ver hasta donde llego",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 2,
    name: "html",
    label: "HTML",
    shortDescription: "La base de la web, el OG del frontend.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 3,
    name: "css",
    label: "CSS",
    shortDescription: "Los estilos que hacen que la web se vea bien, no mal.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 4,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  

  [SkillNames.TAILWIND]: {
    id: 5,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "CSS pero con esteroides, no gorra",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 6,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Mi backend favorito!! (Solo ese he usado de momento)",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 7,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Ta wenardo, pero como cuesta conectarlo aveces (Se me olvida mi contraseña)",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.GIT]: {
    id: 8,
    name: "git",
    label: "Git",
    shortDescription: "La base para no perder tu código, y llorar menos",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 9,
    name: "github",
    label: "GitHub",
    shortDescription: "commitear el README es mi pasion.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.NPM]: {
    id: 10,
    name: "npm",
    label: "NPM",
    shortDescription: "Mi primer instalador de paquetes (Hasta que descubri bun)",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 11,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Medio le toque par hacer un marketplace y de ahi murio",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  [SkillNames.LINUX]: {
    id: 12,
    name: "linux",
    label: "Linux",
    shortDescription: "solo se que si no me deja hacer nada, aplico chmod 777 -R *",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 13,
    name: "docker",
    label: "Docker",
    shortDescription: "Como me ha ahorrado el instalar todo en mi pc, lo mejor que he descubierto",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 14,
    name: "nginx",
    label: "NginX",
    shortDescription: "Con esta cosa hice mi primera pagina web",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 15,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Medio le vi que es de amazon",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 16,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Desde aqui estan viendo esto",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "¡Advertencia: El modo claro emite un gazillón de lúmenes de pura radiancia!",
    "¡Precaución: Modo claro adelante! Por favor, no intente esto en casa.",
    "Solo profesionales entrenados pueden manejar tanta luminosidad. ¡Proceda con gafas de sol!",
    "¡Prepárate! El modo claro está a punto de hacer que todo brille más que tu futuro.",
    "Cambiando al modo claro... ¿Estás seguro de que tus ojos están listos para esto?",
  ],
  dark: [
    "¿Modo claro? Pensé que te habías vuelto loco... ¡pero bienvenido de nuevo al lado oscuro!",
    "Cambiando al modo oscuro... ¿Cómo era la vida en el lado brillante?",
    "¡Modo oscuro activado! Gracias desde el fondo de mi corazón, y mis ojos también.",
    "Bienvenido de vuelta a las sombras. ¿Cómo era la vida allá en la luz?",
    "¡Modo oscuro activado! Por fin, alguien que entiende la verdadera sofisticación.",
  ],
};

