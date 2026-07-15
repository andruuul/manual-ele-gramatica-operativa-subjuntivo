# Manual Interactivo de ELE — Gramática Operativa

Este proyecto es un **manual digital interactivo de Español como Lengua Extranjera (ELE)** diseñado específicamente para estudiantes de nivel **B1**. El capítulo se centra en el contraste entre el **Indicativo y el Subjuntivo** desde la perspectiva de la **Gramática Operativa** de José Plácido Ruiz Campillo, estructurado para cubrir dos sesiones de 50 minutos.

A diferencia de las explicaciones gramaticales tradicionales (realidad vs. irrealidad, duda, subjetividad), este material se enfoca en la **toma de decisiones lingüísticas** basadas en la identificación de la entidad de la que se habla:
* **Indicativo:** El hablante declara una entidad identificada.
* **Subjuntivo:** El hablante no declara esa entidad, sino que presenta un perfil o rol ideal no identificado.

---

## 🎨 Filosofía de Diseño y UX

El diseño del cuaderno digital ha sido concebido bajo estrictas pautas de estética editorial profesional, inspirada en editoriales líderes del sector ELE (Difusión, Edinumen, SGEL, EnClave-ELE).
* **Paleta de Colores:** Enfoque corporativo y claro con Azul Principal (`#1F3A5F`), Azul Claro (`#EAF3FA`), Verde Suave (`#EDF8F1`), Gris Claro (`#F7F7F7`) y Texto Principal (`#333333`).
* **Tipografía Profesional:** Títulos elegantes en **Nunito** y textos de lectura óptima en **Inter**, importadas desde Google Fonts.
* **Maquetación Impresa/Digital (BEM):** Estructura modular centrada con ancho máximo de 1000px, amplio espacio en blanco y componentes limpios libres de ruidos visuales o "decoraciones artificiales".

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide React (Iconos).
* **Entorno de Desarrollo:** Vite, Node.js.
* **Metodología CSS:** Combinación de clases de utilidad Tailwind v4 y clases personalizadas estructuradas según la convención **BEM** (`.ele-card`, `.ele-instruction`, `.ele-reflection`).

---

## 📁 Estructura del Proyecto

La arquitectura del proyecto sigue una estructura modular limpia:

```text
/
├── .env.example          # Plantilla de variables de entorno
├── index.html            # Punto de entrada HTML principal
├── metadata.json         # Configuración y permisos de la aplicación en AI Studio
├── package.json          # Gestión de dependencias y scripts de ejecución
├── tsconfig.json         # Configuración del compilador TypeScript
├── vite.config.ts        # Configuración del empaquetador Vite
├── src/
│   ├── main.tsx          # Entrada de ejecución de React
│   ├── index.css         # Importación de fuentes, Tailwind v4 y estilos globales BEM
│   ├── App.tsx           # Componente principal (Contenedor y menú adhesivo)
│   ├── types.ts          # Definiciones e interfaces de TypeScript compartidas
│   └── components/       # Sistema de componentes reutilizables
│       ├── ActivityCard.tsx              # Tarjeta contenedora de actividad con badges
│       ├── InstructionBox.tsx            # Caja de instrucciones pedagógicas
│       ├── ReflectionBox.tsx             # Caja de reflexión operativa y preguntas
│       ├── QuestionInput.tsx             # Entrada de texto para respuestas reflexivas
│       ├── Activity1_Descubre.tsx        # Actividad 1: Descubre la diferencia (contraste)
│       ├── Activity2_Algoritmo.tsx       # Actividad 2: El algoritmo de la forma (infografía)
│       ├── Activity3_Input.tsx           # Actividad 3: Input estructurado (5 situaciones reales)
│       ├── Activity4_Correo.tsx          # Actividad 4: Correo profesional (gaps de correo real)
│       ├── Activity5_Organigrama.tsx     # Actividad 5: Organigrama corporativo de RRHH
│       ├── Activity6_VerdaderoFalso.tsx  # Actividad 6: Verdadero o Falso con feedback inmediato
│       ├── Activity7_Chat.tsx            # Actividad 7: Simulación de chat (Inversionista-Gestor)
│       └── Activity8_Espejo.tsx          # Actividad 8: El espejo del significado (corrección de sesgos)
```

---

## 🚀 Instalación y Uso Local

Para ejecutar el proyecto en tu máquina local, asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

1. **Instalar Dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo Desarrollo (con recarga automática):**
   ```bash
   npm run dev
   ```
   El servidor se abrirá localmente en `http://localhost:3000`.

3. **Construir para Producción:**
   ```bash
   npm run build
   ```
   Esto generará una carpeta `dist/` optimizada y lista para desplegarse en cualquier servidor estático (como Cloud Run, Netlify o Vercel).

4. **Validación de Código (Linter):**
   ```bash
   npm run lint
   ```

---

## 📋 Variables de Entorno (`.env.example`)

* `GEMINI_API_KEY`: Clave para integrar capacidades del modelo (inyectada automáticamente por la plataforma).
* `APP_URL`: URL del entorno donde se hospeda la aplicación.

---

## 🔮 Posibles Mejoras Futuras

1. **Persistencia en la Nube:** Integración opcional con Firestore para almacenar las respuestas de cada alumno, de forma que el docente pueda revisar el progreso a distancia.
2. **Exportar a PDF:** Añadir un botón que permita descargar el cuaderno del alumno completado con sus respuestas en un formato PDF limpio optimizado para impresión.
3. **Módulo de Audio Integrado:** Grabación de voz para que el alumno pueda responder a las preguntas de reflexión de forma oral en la Actividad 7 y 8.
