# Documentación Técnica - MiniMundo

## 1. Descripción General
**MiniMundo** es una aplicación móvil híbrida diseñada para el aprendizaje temprano de niños de 3 a 5 años. Utiliza tecnologías web modernas para ofrecer una experiencia interactiva y educativa.

## 2. Stack Tecnológico Detallado

### Frontend (Mobile App - Client)
- **Core**: React.js (v18+)
- **Navegación**: React Router DOM (v6+) para la gestión de vistas (Pantalla de Inicio, Categorías de Juegos, Panel de Padres).
- **Estilos**: Tailwind CSS (v3+) para un diseño visual responsivo y enfocado en usabilidad infantil (colores contrastantes, botones grandes, tipografía muy legible).
- **Peticiones HTTP**: Axios para la comunicación asíncrona con la API REST.
- **Gestión de Estado**: React Context API para mantener el estado global de la sesión del usuario (tutor), configuración de sonido y progreso de la actividad en curso.
- **Contenedor Móvil**: Capacitor (v5+) para empaquetar la SPA (Single Page Application) web como una aplicación nativa para Android.

### Backend (API REST - Server)
- **Entorno**: Node.js (v18 LTS)
- **Framework Web**: Express.js (v4+) para el enrutamiento y creación de middleware.
- **Seguridad y Autenticación**:
  - `jsonwebtoken` (JWT) para la gestión segura de sesiones de los tutores.
  - `bcryptjs` para el hash seguro de las contraseñas en la base de datos.
  - `cors` para habilitar peticiones desde el frontend al backend.
- **ORM**: Sequelize para la abstracción y consultas a la base de datos SQL de forma estructurada.

### Base de Datos
- **Motor**: MySQL (v8.0+)
- **Características**: Almacenamiento relacional diseñado para asegurar la integridad de los datos entre las cuentas de tutores, perfiles de los niños y su progreso histórico.

## 3. Modelo de Base de Datos (Esquema Inicial)

La base de datos relacional se estructura en las siguientes entidades (tablas) clave:

1. **`Users` (Tutores/Padres)**:
   - `id` (PK, UUID/INT)
   - `name` (VARCHAR)
   - `email` (VARCHAR, Unique)
   - `password_hash` (VARCHAR)
   - `created_at` (TIMESTAMP)
2. **`Children` (Perfiles de niños asociados al tutor)**:
   - `id` (PK)
   - `user_id` (FK -> Users.id)
   - `name` (VARCHAR)
   - `age` (INT)
   - `avatar_url` (VARCHAR)
3. **`Activities` (Catálogo de juegos y lecciones)**:
   - `id` (PK)
   - `title` (VARCHAR, ej. "Aprender Letra A")
   - `category` (ENUM: 'Letras', 'Números', 'Colores', 'Formas')
   - `difficulty` (INT)
4. **`Progress` (Registro de avance y recompensas obtenidas)**:
   - `id` (PK)
   - `child_id` (FK -> Children.id)
   - `activity_id` (FK -> Activities.id)
   - `stars_earned` (INT, recompensa obtenida)
   - `completed_at` (TIMESTAMP)

## 4. Estructura de Directorios y Ficheros

Para mantener el orden y separar responsabilidades, el repositorio se organizará con la siguiente estructura (orientación a monorepo o carpetas principales separadas):

```text
/MiniMundo
├── /backend                 # Backend: Servidor Node.js + Express
│   ├── /config              # Configuración (Conexión Sequelize MySQL, variables)
│   ├── /controllers         # Lógica de negocio (ej. authController, progressController)
│   ├── /models              # Definición de Modelos Sequelize (User, Child, Activity...)
│   ├── /routes              # Definición de endpoints (ej. /api/users, /api/progress)
│   ├── /middlewares         # Validaciones (express-validator), protección JWT
│   ├── .env                 # Variables de entorno secretas (DB credentials, JWT_SECRET)
│   ├── package.json         # Dependencias del backend
│   └── server.js            # Entry point de la API Express
│
├── /frontend                # Frontend: Cliente React.js + Capacitor
│   ├── /public              # Assets estáticos y template index.html
│   ├── /src
│   │   ├── /assets          # Recursos locales (imágenes, iconos, audios mp3/ogg)
│   │   ├── /components      # Componentes UI reutilizables (GameButtons, Modals, Cards)
│   │   ├── /pages           # Vistas principales (Home, GameBoard, ParentDashboard)
│   │   ├── /services        # Funciones de consumo API con Axios (api.js)
│   │   ├── /context         # Contextos globales de estado
│   │   ├── App.jsx          # Componente raíz y definición de rutas (React Router)
│   │   └── index.css        # Importación de Tailwind y estilos CSS globales base
│   ├── capacitor.config.ts  # Configuración del empaquetado nativo (Bundle ID, nombre app)
│   ├── tailwind.config.js   # Configuración del tema (colores, fuentes)
│   └── package.json         # Dependencias del frontend
│
├── DOCUMENTACION_TECNICA.md
├── PLAN_DESARROLLO.md
└── README.md
```

## 5. Arquitectura del Sistema
El sistema sigue un modelo clásico **Cliente-Servidor (API-Driven)**:
1. **Cliente Móvil**: Aplicación SPA en React que provee la interfaz interactiva. Los datos asíncronos y guardado de progreso se realizan mediante llamadas HTTP al API.
2. **API REST**: El servidor Express recibe peticiones, valida credenciales (JWT), aplica lógica de negocio y se comunica con la base de datos a través de Sequelize.
3. **Base de Datos**: MySQL centraliza y garantiza la persistencia y consistencia de los datos.

## 6. Seguridad
- Rutas protegidas en el frontend: El área de "Panel de Padres" requiere autenticación previa mediante PIN o login.
- Protección en el backend mediante el uso de tokens JWT en los *headers* de autorización para las peticiones de modificación de datos.
- Saneamiento y validación de datos en Express para prevenir inyecciones SQL y ataques XSS.
- **Child-Safe UI**: La interfaz de juego está estrictamente aislada, sin enlaces externos, sin compras in-app visibles para el menor, y sin publicidad de terceros.