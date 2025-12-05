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
  email: "jose.munoz.nunez@gmail.com",
};

// ============================================
// EXPERIENCIA LABORAL
// ============================================
export const experience = [
  {
    title: "Android Developer - Freelance",
    company: "Freelance",
    time: ["2024 - Presente"],
    description:
      "Desarrollo de aplicaciones móviles nativas para Android con arquitectura sólida, enfoque en UX y buenas prácticas.",
    list: [
      "Kotlin, MVVM y Jetpack Compose para interfaces modernas y reactivas",
      "Integración con APIs REST usando Retrofit",
      "Persistencia de datos con Room, Flow y LiveData",
      "Implementación de Material Design 3 y navegación por componentes",
      "Control de versiones con Git y uso de Android Studio y Figma",
    ],
  }
];

// ============================================
// PROYECTOS
// ============================================
export const projects = [
  {
    id: 1,
    title: "App Gala taiel",
    description:
      "Aplicación móvil Android con funciones CRUD, creación de tableros y listas, autenticación de usuarios y sincronización en tiempo real, desarrollada con Kotlin, MVVM, Jetpack y Firebase",
    image: new URL("../assets/img-projects/mackup1.png", import.meta.url).href,
    technologies: ["Kotlin", "Jetpack", "Firebase", "MVVM, Coroutines, Flow, LiveData, Room"],    
    repository: "https://github.com/joseMunozNunez10/Gala8voTaiel",
    category: "Android",
  },
  {
    id: 2,
    title: "Agenda Perdonal",
    description:
      "AgendaPersonal es tu asistente ideal para organizar tu vida. Gestiona eventos con alarmas y notificaciones, y mantén tus finanzas bajo control. ¡Todo en una app moderna y fácil de usa",
    image: new URL("../assets/img-projects/IMG-20251018-WA0021.jpg", import.meta.url).href,
    technologies: ["Kotlin", "MVVM", "Hilt", "Jetpack Navigation", "Coroutines"],    
    repository: "https://github.com/joseMunozNunez10/AgendaPersonal",
    category: "Android",
  },
  {
    id: 3,
    title: "Referidos App",
    description:
      "Aplicación móvil Android en desarrollo para gestionar y compartir referidos de productos y servicios, con autenticación de usuarios, almacenamiento local y sincronización en la nube, desarrollada con Kotlin, Jetpack y Firebase.",
    image: new URL("../assets/img-projects/referidosapp.png", import.meta.url).href,
    technologies: ["Kotlin", "Jetpack", "Firebase", "MVVM,"],    
    repository: "https://github.com/joseMunozNunez10/ReferidosApp",
    category: "Android",
  },  
];

// ============================================
// HABILIDADES
// ============================================
export const skills = {
  languages: ["Kotlin", "JavaScript", "HTML", "CSS", "python"],
  frontend: ["Material Disaing", "Material Design", "Jetpack Compose en aprendisaje"],
  backend: ["Firebase (Firestore, Authentication, Storage, Cloud Messaging)"],
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
