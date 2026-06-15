# Documentación Técnica - MiniMundo

## 1. Descripción General
**MiniMundo** es una aplicación móvil híbrida diseñada para el aprendizaje temprano de niños de 3 a 5 años. Utiliza tecnologías web modernas para ofrecer una experiencia interactiva y educativa.

## 2. Stack Tecnológico

### Frontend (Mobile App)
- **React.js**: Biblioteca principal para la interfaz de usuario.
- **Capacitor**: Framework para convertir la aplicación web en una aplicación móvil nativa (Android).
- **Tailwind CSS**: Para el diseño visual y adaptabilidad (estilos coloridos y botones grandes).

### Backend (API REST)
- **Node.js**: Entorno de ejecución.
- **Express.js**: Framework para la gestión de rutas y lógica de servidor.
- **Sequelize (ORM)**: Para la gestión y consultas a la base de datos.

### Base de Datos
- **MySQL**: Almacenamiento relacional para el progreso de los niños, usuarios (padres/docentes) y configuración de actividades.

### Herramientas de Desarrollo
- **Figma**: Diseño de UI/UX.
- **Git/GitHub**: Control de versiones.
- **Postman**: Pruebas de la API.

## 3. Arquitectura del Sistema
El sistema sigue un modelo Cliente-Servidor:
1. **Cliente**: App React que se comunica mediante peticiones HTTP (Axios) con el backend.
2. **Servidor**: API Express que valida datos y gestiona la lógica de negocio.
3. **BD**: MySQL almacena los logros (estrellas), perfiles y estadísticas de uso.

## 4. Requisitos de Instalación
- Node.js (v18+)
- MySQL Server (v8.0+)
- Android Studio (para el despliegue con Capacitor)

## 5. Seguridad
- Navegación segura mediante rutas protegidas en React.
- Validación de datos de entrada en Express para evitar inyecciones SQL.
- Entorno digital libre de publicidad y contenido externo.