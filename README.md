# 🏔️ Espacio Nórdico — Landing Page

> Landing page moderna, minimalista e inspirada en el diseño escandinavo para una tienda de muebles y decoración.

![Espacio Nórdico Preview](img/hero.png)

## 🌐 Demo en vivo

👉 **[Ver en Vercel](https://espacio-nordico.vercel.app)**  *(reemplazar con tu URL real)*

---

## ✨ Características

- **Diseño nórdico minimalista** con paleta cálida de tonos neutros y madera
- **100% Responsive** — perfecto en móvil, tablet y escritorio
- **Animaciones suaves** con scroll reveal y micro-interacciones
- **Botón flotante de WhatsApp** con tooltip animado
- **SEO optimizado** — meta tags, Open Graph, HTML semántico
- **Accesible** — ARIA labels, focus rings, contraste adecuado
- **Ultrarrápido** — cero dependencias, sin frameworks externos
- **Código limpio** — CSS custom properties, JS vanilla modular

---

## 🗂️ Estructura del Proyecto

```
espacio-nordico/
├── index.html          # Página principal (HTML5 semántico)
├── css/
│   ├── styles.css      # Sistema de diseño y componentes
│   └── animations.css  # Keyframes y efectos visuales
├── js/
│   └── main.js         # Lógica: nav, scroll reveal, WhatsApp
├── img/
│   ├── hero.png                # Imagen hero principal
│   ├── product-armchair.png    # Sillón Hygge
│   ├── product-table.png       # Mesa Fjord
│   ├── product-lamp.png        # Lámpara Sol
│   ├── product-shelving.png    # Estantería Arco
│   ├── product-sofa.png        # Sofá Lund
│   └── product-rug.png         # Alfombra Visby
└── README.md
```

---

## 📱 Secciones

| Sección | Descripción |
|---------|-------------|
| **Header** | Navegación fija con logo, links y CTA. Backdrop blur on scroll. Menú hamburguesa móvil. |
| **Hero** | Imagen a pantalla completa, título, descripción, stats y CTAs. Parallax sutil. |
| **Catálogo** | Grid de 6 productos con imagen, nombre, descripción y precio. Hover animado. |
| **Beneficios** | 4 tarjetas: Envío seguro, Calidad, Asesoría, Diseño atemporal. |
| **Contacto WhatsApp** | Sección CTA oscura con botón de chat directo. |
| **Footer** | Links, redes sociales, contacto y copyright. |
| **Flotante WhatsApp** | Botón fijo en esquina inferior con pulso animado y tooltip. |

---

## 🚀 Deploy en Vercel

### Opción 1 — Vercel CLI
```bash
npm i -g vercel
cd espacio-nordico
vercel --prod
```

### Opción 2 — Vercel Web
1. Subir este repositorio a **GitHub**
2. Ir a [vercel.com/new](https://vercel.com/new)
3. Importar el repositorio
4. Vercel detecta automáticamente el sitio estático → **Deploy** ✅

### Opción 3 — Drag & Drop
1. Ir a [vercel.com/new](https://vercel.com/new)
2. Arrastrar la carpeta `espacio-nordico/` → **Deploy** ✅

---

## ⚙️ Personalización rápida

### Cambiar número de WhatsApp
En `js/main.js`, buscar y reemplazar:
```js
const WHATSAPP_NUMBER = '5491112345678'; // ← Tu número con código de país
```

### Cambiar precios
En `index.html`, buscar los elementos `.product-card-price` de cada producto.

### Cambiar colores
En `css/styles.css`, modificar las CSS variables del `:root`:
```css
--color-accent:       #8B7355;  /* Color principal madera */
--color-accent-light: #C4A882;  /* Acento claro */
--color-bg:           #FAFAF8;  /* Fondo general */
```

---

## 🛠️ Tecnologías

- **HTML5** — semántico y accesible
- **CSS3** — custom properties, grid, flexbox, animaciones
- **JavaScript** (ES6+) — vanilla, sin dependencias
- **Google Fonts** — Cormorant Garamond + Inter
- **IntersectionObserver API** — scroll reveal nativo

---

## 👨‍💻 Autor

Desarrollado con ❤️ y precisión escandinava.

---

## 📄 Licencia

MIT — libre para usar y modificar.
