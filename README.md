# 🌍 MiniMundo

> Una aplicación web y móvil híbrida educativa diseñada para el aprendizaje temprano de niños de 3 a 5 años.

![Estado](https://img.shields.io/badge/Estado-MVP_Completado-brightgreen)
![Progreso](https://img.shields.io/badge/Progreso-85%25-success)

**MiniMundo** utiliza tecnologías web modernas para ofrecer una experiencia interactiva, colorida y educativa, libre de publicidad, en un entorno completamente seguro para los más pequeños.

## ✨ Características Principales (MVP)

- **Juegos Educativos Interactivos**: Actividades para aprender letras (vocales) y colores con formas.
- **Sistema de Recompensas (Estrellas)**: Refuerzo auditivo y visual con obtención de estrellas al completar actividades con éxito.
- **Panel para Padres**: Área restringida para visualizar el progreso acumulado y las estrellas ganadas por los perfiles de los niños.
- **Entorno Seguro (Child-Safe)**: Interfaz sin menús complicados, sin enlaces externos ni distracciones, diseñada específicamente para uso infantil.
- **Autenticación Segura**: Manejo de sesiones de tutores mediante JWT.

## 🛠️ Stack Tecnológico

El proyecto está diseñado bajo una arquitectura Cliente-Servidor funcional:

* **Frontend (SPA/App Móvil)**: React.js, React Router DOM, y Vanilla CSS con diseño moderno (Glassmorphism, variables dinámicas, animaciones). Preparado para Capacitor.
* **Backend (API REST)**: Node.js, Express.js. Rutas protegidas y manejo de lógica de negocios.
* **Base de Datos**: MySQL, gestionada a través de Sequelize (ORM).
* **Seguridad**: Autenticación con `jsonwebtoken` (JWT) y encriptación de contraseñas con `bcrypt`.

## 🚀 Requisitos e Instalación

Para ejecutar este proyecto en un entorno local, asegúrate de tener instalado **Node.js** (v18+) y un servidor **MySQL** corriendo en tu máquina.

### 1. Configuración del Backend
1. Navega a la carpeta del backend: `cd backend`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno. Crea un archivo `.env` basado en la configuración necesaria (puerto, conexión a base de datos `DB_URL` y `JWT_SECRET`).
4. Inicia el servidor: `node server.js` (La base de datos se sincronizará automáticamente).

### 2. Configuración del Frontend
1. Navega a la carpeta del frontend: `cd frontend`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre la aplicación en tu navegador (por lo general en `http://localhost:5173`).

## 📖 Documentación del Proyecto

El repositorio cuenta con documentación detallada sobre su planificación y arquitectura:

- 📄 [Documentación Técnica](./DOCUMENTACION_TECNICA.md): Arquitectura detallada, tecnologías y aspectos de seguridad.
- 📅 [Plan de Desarrollo](./PLAN_DESARROLLO.md): Cronograma de desarrollo y metodología de trabajo (SCRUM).
- 📊 [Estado del Proyecto](./ESTADO_PROYECTO.md): Seguimiento actualizado del progreso del MVP y funcionalidades actuales.

## 📅 Hoja de Ruta Actual (Roadmap)

1. **[Completado]** Hito 1 y 2: Prototipo funcional en navegador web, API REST con persistencia de datos y sistema de usuarios.
2. **[Completado]** Hito 3: Integración del sistema de recompensas y minijuegos clave (Letras, Colores).
3. **[En Proceso]** Hito 4: Primera compilación nativa en Android vía Capacitor e integración final de minijuego de Números.

---
*Desarrollado con ❤️ para el aprendizaje en edad preescolar.*
