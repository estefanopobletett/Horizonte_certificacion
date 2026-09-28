#  Biblioteca Horizonte - Plataforma Web Interactiva

¡Bienvenido/a al repositorio oficial de **Biblioteca Horizonte**! Este proyecto consiste en una aplicación web interactiva desarrollada para la gestión visual, exploración y selección de libros digitales. La interfaz está optimizada para brindar una experiencia de usuario intuitiva mediante interacción directa con el DOM, animaciones de video y un sistema dinámico de reserva.

---

##  Autor
* **Desarrollador:** Estefano Poblete
* **Proyecto:** Biblioteca Horizonte
---

##  Descripción del Proyecto

**Biblioteca Horizonte** es un portal web diseñado para lectores apasionados que buscan explorar un catálogo virtual dinámico. La aplicación integra un sistema de categorías por género, una sección destacada con material audiovisual interactivo y un panel de recomendaciones que permite a los usuarios seleccionar sus obras favoritas y contarlas en un carrito virtual centralizado.

El objetivo principal de este desarrollo es poner en práctica fundamentos esenciales del desarrollo web *Front-End*, utilizando una arquitectura organizada, estándares semánticos modernos y manipulación del DOM mediante JavaScript sin dependencias de librerías externas.

---

## 🛠️ Tecnologías y Arquitectura

El desarrollo de la plataforma se basa en las tecnologías fundamentales del entorno web (*Vanilla Stack*):

* **HTML5:** Estructuración semántica de la página mediante etiquetas nativas (`<header>`, `<nav>`, `<main>`, `<section>`, `<video>`).
* **CSS3:** Sistema de estilos basado en **Flexbox** para la alineación, distribución de elementos, diseño en capas e implementación de layouts limpios.
* **JavaScript (ES6+):** Programación orientada a eventos (*Event Listeners*), manipulación dinámica de nodos HTML, control de reproducción/fuente de medios y cálculo del estado del carrito.

---

## Estructura del Proyecto

El código está estructurado siguiendo las mejores prácticas de separación de conceptos (*Separation of Concerns*), alojando todos los recursos estáticos dentro de un directorio dedicado:

```text
biblioteca-horizonte/
│
├── index.html                  # Estructura principal y maquetado de la aplicación
│
└── static/                     # Directorio de recursos estáticos
    ├── css/
    │   └── style.css           # Hoja de estilos (Maquetación, Flexbox, colores)
    │
    ├── js/
    │   └── script.js           # Lógica interactiva (Eventos, DOM, Carrito)
    │
    ├── images/                 # Iconos e imágenes de las portadas del catálogo
    │   ├── libro-alt.png
    │   ├── libros.png
    │   ├── matraz.png
    │   ├── museo.png
    │   ├── ordenador-portatil.png
    │   ├── paleta.png
    │   ├── oso-de-peluche.png
    │   ├── cien_año.png
    │   ├── sapiens.png
    │   └── princi.png
    │
    └── videos/                 # Material audiovisual utilizado en la plataforma
        ├── 14759309_3840_2160_30fps.mp4
        └── 3969597-uhd_3840_2160_25fps.mp4