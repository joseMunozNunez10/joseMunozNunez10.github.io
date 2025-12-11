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
    titulo: "Referidos App",
    descripcion: "Desarrollo de App para gestionar y seguir referidos fácilmente, impulsando el crecimiento de tu red.",
    imagen: referidosApp.src,
    tecnologias: ["Kotlin", "Jetpack", "Firebase", "MVVM"],
    demo: "",
    codigo: "https://github.com/joseMunozNunez10/ReferidosApp",
  },
  {
    titulo: "Gala Taiel",
    descripcion: "App para vivir la Gala Taiel con información, interacción y experiencia totalmente digital. red social en tiempo real.",
    imagen: mackup1.src,
    tecnologias: ["Kotlin", "Jetpack", "Firebase", "MVVM, Coroutines, Flow, LiveData, Room"],
    demo: "",
    codigo: "https://github.com/joseMunozNunez10/Gala8voTaiel",
  },
  {
    titulo: "Agenda Personal",
    descripcion: "App para organizar tu vida: gestiona eventos con alarmas y notificaciones, y mantén tus finanzas bajo control. ¡Todo en una app moderna y fácil de usar!",
    imagen: agendaPersonal.src,
    tecnologias: ["Kotlin", "MVVM", "Hilt", "Jetpack Navigation", "Coroutines"],
    demo: "",
    codigo: "https://github.com/joseMunozNunez10/AgendaPersonal",
  },
  {
    titulo: "Maestranza San Sebastian",
    descripcion: "Empresa especializada en trabajos metálicos, ofreciendo soluciones integrales para proyectos industriales, comerciales y residenciales con calidad y cumplimiento de plazo.",
    imagen: "https://i.pinimg.com/736x/57/7f/75/577f75825c09c5672e2f08ffd08c55a5.jpg",
    tecnologias: ["html", "css", "javascript", "bootstrap", "php"],
    demo: "https://www.maestranzasansebastian.cl",
    codigo: "https://github.com/joseMunozNunez10/maestranza-san-sebastian",
  },
  {
    titulo: "Transportes Mazem spa",
    descripcion: "Servicio de transporte privado en vehículos sedán, enfocado en seguridad, puntualidad y una experiencia cómoda para cada pasajero.",
    imagen: "https://i.pinimg.com/736x/5f/4b/06/5f4b061c88a95e37ad02e251fbe356ca.jpg",
    tecnologias: ["html", "css", "javascript", "bootstrap", "php"],
    demo: "https://www.transportesmazem.cl",
    codigo: "https://github.com/joseMunozNunez10/TransportesMazem",
  },
];
