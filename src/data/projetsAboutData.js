import mackup1 from "../assets/img-projects/mackup1.png";
import agendaPersonal from "../assets/img-projects/IMG-20251018-WA0021.jpg";
import referidosApp from "../assets/img-projects/referidosapp.png";

export const aboutData = {
  name: "Jose Muñoz Nuñez",
  profession: "Android Developer",
  description:
    "Mi nombre es Jose Muñoz, soy Desarrollador de Software enfocado en el ecosistema Android. Actualmente me desempeño como Android Developer, especializado en la creación de experiencias móviles fluidas y centradas en el usuario. Trabajo con tecnologías como Kotlin, Jetpack Compose, Android Jetpack, Firebase, Material Design, Git, y herramientas como Android Studio y Figma, entre otras.",
  social: {
    linkedin: "https://www.linkedin.com/in/josemunoznunez/",
    github: "https://github.com/joseMunozNunez10",
  },
};

export const proyectos = [
  {
    titulo: "App Gala Taiel",
    descripcion: "Aplicación móvil Android con funciones CRUD, creación de tableros y listas, autenticación de usuarios y sincronización en tiempo real, desarrollada con Kotlin, MVVM, Jetpack y Firebase",
    imagen: mackup1.src,
    tecnologias: ["Kotlin", "Jetpack", "Firebase", "MVVM"],
    demo: "",
    codigo: "https://github.com/joseMunozNunez10/Gala8voTaiel",
  },
  {
    titulo: "Agenda Personal",
    descripcion: "AgendaPersonal es tu asistente ideal para organizar tu vida. Gestiona eventos con alarmas y notificaciones, y mantén tus finanzas bajo control. ¡Todo en una app moderna y fácil de usar!",
    imagen: agendaPersonal.src,
    tecnologias: ["Kotlin", "MVVM", "Hilt", "Jetpack Navigation"],
    demo: "",
    codigo: "https://github.com/joseMunozNunez10/AgendaPersonal",
  },
  {
    titulo: "Referidos App",
    descripcion: "Aplicación móvil Android en desarrollo para gestionar y compartir referidos de productos y servicios, con autenticación de usuarios, almacenamiento local y sincronización en la nube",
    imagen: referidosApp.src,
    tecnologias: ["Kotlin", "Jetpack", "Firebase", "MVVM"],
    demo: "",
    codigo: "https://github.com/joseMunozNunez10/ReferidosApp",
  },
];
