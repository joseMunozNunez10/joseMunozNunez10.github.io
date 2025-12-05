# 🎨 Mi Portafolio - Jose Muñoz Nuñez

Bienvenido a mi portafolio personal. Un sitio moderno, responsive y fácil de personalizar construido con **Astro**, **React**, y **Tailwind CSS**.

## 🚀 Características

- ⚡ **Astro** para generación estática rápida
- ⚡ **React** componentes interactivos
- 🎨 **Tailwind CSS** para estilos modernos
- 📱 **Responsive Design** en todos los dispositivos
- 🔄 **Deploy automático** con GitHub Actions
- 🎯 **Fácil de personalizar** - Todo en `src/data/config.js`

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── data/
│   │   ├── config.js    # ⭐ EDITA AQUÍ - Toda tu información
│   │   └── README.md    # Guía de edición
│   ├── layouts/         # Layouts base
│   ├── pages/           # Páginas principales
│   │   ├── index.astro      # Página principal
│   │   ├── about.astro      # Sobre mí
│   │   ├── proyectos.astro  # Proyectos
│   │   └── contact.astro    # Contacto
│   ├── assets/          # Imágenes y recursos
│   └── styles/          # Estilos globales
├── public/              # Archivos estáticos
├── astro.config.mjs     # Configuración de Astro
└── package.json         # Dependencias del proyecto
```

## ✏️ Cómo Personalizar

### 1️⃣ **Editar tu Información**
Abre `src/data/config.js` y actualiza:
- Tu nombre y profesión
- Descripción personal
- Links de redes sociales
- Experiencia laboral
- Proyectos
- Habilidades

Ver: `src/data/README.md` para detalles

### 2️⃣ **Agregar Imágenes**
Coloca tus imágenes en `src/assets/img-projects/` y referencia en config.js

### 3️⃣ **Hacer Deploy**
```bash
git add .
git commit -m "chore: actualizar portafolio"
git push
```
¡GitHub Pages se actualizará automáticamente! ✨

## 🛠️ Desarrollo Local

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)

### Compilar para producción
```bash
npm run build
```

### Preview de producción
```bash
npm run preview
```

## 📚 Secciones del Portafolio

### 🏠 Inicio (`index.astro`)
- Presentación personal
- CTA (Call to Action)
- Resumen de proyectos destacados

### 📖 Sobre Mí (`about.astro`)
- Descripción completa
- Experiencia laboral
- Habilidades técnicas
- Preguntas frecuentes

### 💼 Proyectos (`proyectos.astro`)
- Galería de proyectos
- Filtrado por categoría
- Links a demo y código

### 📧 Contacto (`contact.astro`)
- Formulario de contacto
- Links de redes sociales

## 🎨 Personalización Avanzada

### Cambiar Colores
Edita `src/styles/globals.css` o la configuración de Tailwind

### Agregar Nuevas Páginas
1. Crea un archivo en `src/pages/mi-pagina.astro`
2. Usa el layout `Layout.astro`
3. Navega a `/mi-pagina` en el sitio

### Modificar Componentes
Los componentes están en `src/components/`:
- `home/` - Componentes de la página principal
- `about/` - Componentes de la página "Sobre mí"
- `commons/` - Componentes reutilizables

## 🔗 Links Importantes

- 📌 Portafolio en vivo: https://joseMunozNunez10.github.io
- 📝 Documentación de Astro: https://docs.astro.build
- 🎨 Tailwind CSS: https://tailwindcss.com

## 📝 Notas de Desarrollo

- El `dist/` se genera automáticamente (no editar)
- GitHub Actions compila y deploya automáticamente
- El sitio se actualiza en ~2-3 minutos después de hacer push

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio mi foto de perfil?**
R: Reemplaza la imagen en `src/assets/` o cambia la URL en `config.js`

**P: ¿Cómo agrego un nuevo proyecto?**
R: Edita el array `projects` en `src/data/config.js`

**P: ¿Se actualiza automáticamente?**
R: Sí, después de hacer `git push`, GitHub Actions compila y deploya automáticamente.

---

**Hecho con ❤️ por Jose Muñoz Nuñez**
