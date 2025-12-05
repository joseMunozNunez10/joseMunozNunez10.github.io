import urbanStyle from "../assets/img-projects/urbanStyle.png";
import imgNote from "../assets/img-projects/note-app.png";

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
    titulo: "E-commerce Urban Style",
    descripcion: "Descripción breve del proyecto 1.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/joseMunozNunez10/ProyectoFinal-Rodriguez.git",
  },
  {
    titulo: "Tienda Artesana",
    imagen:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    tecnologias: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
  },
  {
    titulo: "App organizacion",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/joseMunozNunez10/Front-react-todo",
  },
  {
    titulo: "API REST",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/joseMunozNunez10/Back-express-todo.git",
  },
];
