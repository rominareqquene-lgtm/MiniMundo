# Plan de Desarrollo - MiniMundo

## Funcionalidades Clave de la Propuesta

Alineados con la propuesta de la aplicación móvil para estudiantes, el desarrollo abarcará las siguientes funcionalidades principales:

1. **Catálogo de Juegos Educativos Interactivos:**
   - **Módulo de Letras y Abecedario:** Aprendizaje de vocales y consonantes mediante sonidos y trazados básicos.
   - **Módulo de Números:** Identificación de números del 1 al 10 y conteo de objetos.
   - **Módulo de Colores y Formas:** Reconocimiento visual e interacciones para arrastrar y soltar figuras geométricas según su forma y color.

2. **Sistema de Recompensas y Motivación:**
   - Obtención de "estrellas" y medallas virtuales al completar lecciones de manera exitosa para reforzar positivamente el progreso del niño.

3. **Panel de Progreso para Padres:**
   - Área restringida y protegida con PIN/Contraseña.
   - Visualización de estadísticas de tiempo de uso, áreas de mayor interés y rendimiento del menor.

4. **Gestión de Perfiles Múltiples:**
   - Capacidad para que un padre o tutor agregue múltiples perfiles de niños dentro de la misma cuenta, permitiendo un seguimiento personalizado.

5. **Entorno Seguro (Child-Safe):**
   - Interfaz sin anuncios, sin compras integradas visibles y navegación bloqueada para evitar que el niño salga accidentalmente de los juegos.
## Cronograma de 11 Semanas Detallado

A continuación, se detalla el plan de acción especificando las tareas técnicas relacionadas al Stack Tecnológico (React, Node, MySQL) y los entregables esperados a nivel de ficheros y arquitectura.

| Fase | Actividad y Detalles Técnicos | Tiempo |
| :--- | :--- | :--- |
| **1** | **Cimentación y Base de Datos (Backend):**<br>- Definir modelo Entidad-Relación final.<br>- Setup de la estructura de carpetas (`/frontend` y `/backend`).<br>- Configurar conexión a MySQL usando Sequelize (`/backend/config`).<br>- Crear las migraciones y modelos iniciales en `/backend/models` (`Users`, `Children`, `Activities`, `Progress`). | 1 Semana |
| **2** | **Diseño de Interfaces (UI/UX):**<br>- Prototipado en Figma enfocado en accesibilidad infantil.<br>- Diseñar vistas principales: Menú Principal, Tablero de Juegos y Panel de Padres.<br>- Definir paleta de colores corporativos y tipografías en `tailwind.config.js`. | 2 Semanas |
| **3** | **Desarrollo Backend (API REST):**<br>- Levantar servidor Express en `server.js`.<br>- Implementar registro y autenticación con JWT (`/backend/controllers/authController.js`).<br>- Desarrollar endpoints CRUD esenciales en `/backend/routes` (Crear perfiles de niño, consultar/guardar progreso). | 1 Semana |
| **4** | **Desarrollo Frontend Core - Base y Juegos Iniciales:**<br>- Configurar enrutamiento en `App.jsx` con React Router.<br>- Crear componentes base en `/src/components` (Botones interactivos, Tarjetas).<br>- Implementar la lógica del primer grupo de juegos (Letras/Números) en `/src/pages`. | 2 Semanas |
| **5** | **Desarrollo Frontend - Multimedia e Integración con API:**<br>- Incorporar audios (efectos de acierto/error) en `/src/assets`.<br>- Conectar el frontend con el backend usando `/services/api.js` (Axios).<br>- Integrar el sistema para sumar y guardar "estrellas" ganadas en la BD tras completar actividades. | 1 Semana |
| **6** | **Integración de Capacitor y Empaquetado Móvil:**<br>- Inicializar y configurar Capacitor (`capacitor.config.ts`).<br>- Ajustar la interfaz para pantallas móviles (Touch events, áreas seguras).<br>- Generar y probar la primera build compilada en un emulador Android. | 1 Semana |
| **7** | **QA y Pruebas de Usabilidad:**<br>- Testing funcional y pruebas de usabilidad con niños (público objetivo).<br>- Depuración de bugs del cliente React y del servidor Express.<br>- Optimización de carga de audios e imágenes. | 2 Semanas |
| **8** | **Documentación Final y Despliegue:**<br>- Actualizar la documentación técnica y generar manual de usuario.<br>- Compilación del archivo `.apk` de lanzamiento (Release).<br>- Preparación del entorno de producción para el Backend (VPS o PaaS como Render/Railway) y base de datos. | 1 Semana |

## Hitos Principales y Entregables Técnicos
1. **Hito 1 (Semana 2)**: Estructura base del repositorio creada. Base de datos MySQL modelada, instanciada y sincronizada con Sequelize. Mockups finalizados.
2. **Hito 2 (Semana 4)**: API REST Node.js probada y funcional; Endpoints de autenticación y registro respondiendo correctamente a peticiones de Postman.
3. **Hito 3 (Semana 7)**: SPA de React (Frontend) jugable en el navegador, consumiendo la API real para el guardado de progreso y carga de perfiles.
4. **Hito 4 (Semana 8)**: Integración con Capacitor finalizada. Primera compilación `.apk` exitosa que se instala nativamente en un dispositivo Android.
5. **Hito 5 (Semana 11)**: Proyecto depurado, documentado y versión 1.0 lista para su uso.

## Metodología y Buenas Prácticas Técnicas
- Se aplicará el marco de trabajo ágil **SCRUM**, trabajando en Sprints de 2 semanas de duración.
- **Control de Versiones (Git)**:
  - Rama `main`: Código estable y compilable, refleja la versión de producción.
  - Rama `develop`: Rama principal de integración donde se fusionan las funcionalidades nuevas.
  - Ramas de características: `feature/nombre-de-la-tarea` (ej. `feature/crear-modelo-usuarios`) para el desarrollo aislado de cada parte del stack.
- **Variables de Entorno**: Estricto uso de archivos `.env` (no trackeados en Git) para credenciales de MySQL y secretos de JWT.