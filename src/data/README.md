# 📋 Configuración del Portafolio

Este archivo centraliza toda la información personalizable del portafolio.

## 📝 Cómo Editar

### 1. **Información Personal**
Edita `profileData` con tu información:
```javascript
export const profileData = {
  name: "Tu Nombre",
  profession: "Tu Profesión",
  description: "Tu descripción...",
  social: {
    linkedin: "https://linkedin.com/in/tu-usuario/",
    github: "https://github.com/tu-usuario/",
  },
};
```

### 2. **Experiencia Laboral**
Edita el array `experience` para agregar, modificar o eliminar trabajos:
```javascript
{
  title: "Tu Puesto",
  company: "Nombre Empresa",
  time: ["Fecha Inicio - Fecha Fin"],
  description: "Descripción del trabajo...",
  list: ["Responsabilidad 1", "Responsabilidad 2"],
}
```

### 3. **Proyectos**
Edita el array `projects` para agregar tus proyectos:
```javascript
{
  id: 1,
  title: "Nombre del Proyecto",
  description: "Descripción...",
  image: "URL de la imagen o ruta local",
  technologies: ["React", "Tailwind"],
  demo: "https://demo-url.com",
  repository: "https://github.com/usuario/repo",
  category: "frontend" // o "fullstack", "backend"
}
```

### 4. **Habilidades**
Edita `skills` para actualizar tus tecnologías:
```javascript
export const skills = {
  languages: ["Tu Lenguaje 1", "Tu Lenguaje 2"],
  frontend: ["React", "Vue", "Astro"],
  backend: ["Node.js", "Express"],
  tools: ["Git", "Docker", "Figma"],
};
```

## 🔄 Cómo se Usa en los Componentes

Los componentes importan estos datos así:
```javascript
import { profileData, experience, projects, skills } from "../data/config.js";
```

## ✅ Tips de Edición

- **Imágenes locales**: Usa rutas relativas como `../assets/img-projects/mi-imagen.png`
- **Imágenes externas**: Usa URLs completas `https://ejemplo.com/imagen.jpg`
- **Fechas**: Usa formato `"Mes Año - Mes Año"` o `"Mes Año - Presente"`
- **Categorías de proyectos**: `"frontend"`, `"backend"`, `"fullstack"`, `"mobile"`

## 🚀 Después de Editar

1. Guarda los cambios en `src/data/config.js`
2. Haz commit y push:
```bash
git add src/data/config.js
git commit -m "chore: actualizar configuración del portafolio"
git push
```

¡GitHub Pages se actualizará automáticamente! 🎉
