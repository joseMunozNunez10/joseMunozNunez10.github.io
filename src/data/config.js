/**
 * CONFIGURACIÓN CENTRAL DEL PORTAFOLIO
 * Edita este archivo para personalizar tu portafolio
 */

// ============================================
// INFORMACIÓN PERSONAL
// ============================================
export const profileData = {
  name: "Jose Muñoz Nuñez",
  profession: "Android Developer",
  description:
    "Mi nombre es Jose Muñoz, soy Desarrollador de Software enfocado en el ecosistema Android. Actualmente me desempeño como Android Developer, especializado en la creación de experiencias móviles fluidas y centradas en el usuario. Trabajo con tecnologías como Kotlin, Jetpack Compose, Android Jetpack, Firebase, Material Design, Git, y herramientas como Android Studio y Figma, entre otras.",
  social: {
    linkedin: "https://www.linkedin.com/in/josemunoznunez/",
    github: "https://github.com/joseMunozNunez10",
  },
};

// ============================================
// EXPERIENCIA LABORAL
// ============================================
export const experience = [
  {
    title: "Android Developer",
    company: "",
    time: ["2024 - Presente"],
    description:
      "Desarrollo de aplicaciones móviles nativas para Android con enfoque en experiencia del usuario y rendimiento.",
    list: [
      "Kotlin y Jetpack Compose para desarrollo de interfaces modernas",
      "Android Jetpack, Firebase, Material Design",
      "Git y herramientas como Android Studio y Figma",
    ],
  },
  {
    title: "Frontend Developer - Neowyze",
    company: "Neowyze",
    time: ["12/2024 - 05/2025"],
    description:
      "Desarrollo de webs responsivas basadas en diseños de Figma, utilizando Astro, React, Tailwind y otras librerías frontend.",
    list: [
      "Jira para gestión de tareas y Git/GitHub para control de versiones",
      "Metodología ágil Scrum con sprints de 2 semanas",
    ],
  },
  {
    title: "Frontend Developer - Vegna",
    company: "Vegna",
    time: ["05/2024 - 02/2024"],
    description: "Desarrollo y mantenimiento de interfaces de usuario con:",
    list: ["JavaScript - TypeScript", "React - Next.js", "Tailwind", "Shadcn"],
  },
  {
    title: "Frontend Developer - Igrowker",
    company: "Igrowker",
    time: ["07/2022 - 08/2022"],
    description: "Desarrollo y mantenimiento de interfaces de usuario con",
    list: ["React - React Router - Context API - CSS - Material UI"],
  },
  {
    title: "Web Developer - NoCountry",
    company: "NoCountry",
    time: ["03/2022 - 06/2022"],
    description:
      "Desarrollo de aplicaciones web responsivas MVP fullstack usando tecnologías como",
    list: [
      "Frontend: React - React Router - Context API - Tailwind CSS",
      "Backend: API REST con Express.js y MongoDB",
    ],
  },
];

// ============================================
// PROYECTOS
// ============================================
export const projects = [
  {
    id: 1,
    title: "App Organización",
    description:
      "App full-stack con funciones CRUD, creación de tableros y listas, autenticación de usuarios, desarrollada con MERN stack.",
    image: new URL("../assets/img-projects/note-app.png", import.meta.url).href,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    repository: "https://github.com/Lautaro-R-collins/Front-react-todo",
    category: "fullstack",
  },
  {
    id: 2,
    title: "E-commerce Urban Style",
    description:
      "E-commerce funcional de ropa y accesorios, con carrito de compras, categorías y pasarela de pago desarrollado en React.",
    image: new URL("../assets/img-projects/urbanStyle.png", import.meta.url).href,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    repository: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Tienda Artesana",
    description:
      "Ecommerce Full-Stack para ver, comprar y vender tus productos, con login para usuarios y vendedores.",
    image:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    technologies: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    repository: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Tracker Ingresos-Gastos",
    description:
      "App que realiza operaciones CRUD para agregar, ver, editar y eliminar ingresos/gastos.",
    image:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    technologies: ["React", "Context API"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    repository: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    category: "frontend",
  },
  {
    id: 5,
    title: "App Clima",
    description:
      "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
    image:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    technologies: ["React", "Context API", "Tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    repository: "https://github.com/Lautaro-R-collins/app-clima",
    category: "frontend",
  },
  {
    id: 6,
    title: "Legal Staff",
    description:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    image: new URL("../assets/img-projects/legalweb.webp", import.meta.url).href,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    repository: "https://github.com/Lautaro-R-collins/legal-staff",
    category: "frontend",
  },
  {
    id: 7,
    title: "Medicare",
    description:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    image: new URL("../assets/img-projects/medicare.jpg", import.meta.url).href,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    repository: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    category: "frontend",
  },
  {
    id: 8,
    title: "AstroFit",
    description:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorías fitness.",
    image: new URL("../assets/img-projects/Astrofit.jpg", import.meta.url).href,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    repository: "https://github.com/Lautaro-R-collins/GymPage.git",
    category: "frontend",
  },
  {
    id: 9,
    title: "100 Days Coding in JS",
    description: "100 proyectos realizados con HTML, CSS y JavaScript.",
    image:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://one00-proyects-web.onrender.com/",
    repository: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    category: "frontend",
  },
];

// ============================================
// HABILIDADES
// ============================================
export const skills = {
  languages: ["Kotlin", "JavaScript", "TypeScript", "HTML", "CSS"],
  frontend: ["React", "Astro", "Tailwind CSS", "Material UI", "Jetpack Compose"],
  backend: ["Node.js", "Express.js", "Firebase", "MongoDB"],
  tools: ["Git", "GitHub", "Android Studio", "Figma", "VS Code", "Jira"],
};

// ============================================
// CONFIGURACIÓN DE SITIO
// ============================================
export const siteConfig = {
  title: "Jose Muñoz Nuñez - Portfolio",
  description: "Android Developer Portfolio",
  url: "https://joseMunozNunez10.github.io",
  defaultLanguage: "es",
};
