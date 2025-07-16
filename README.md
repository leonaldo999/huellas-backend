# 🐶 Backend — API REST para Plataforma de Adopción de Perritos

Este backend está diseñado para gestionar la base de datos y la lógica de negocio de una plataforma solidaria de **adopción de perritos**. Incluye autenticación, manejo de perritos, publicaciones, productos de tienda y usuarios administradores.

---

## 🎯 Objetivos Principales

- Proveer una API RESTful para el frontend.
- Permitir operaciones CRUD sobre perritos, productos y publicaciones.
- Implementar autenticación con JWT y verificación de roles (admin).
- Asegurar rutas protegidas y estructura escalable.

---

## 🧰 Tecnologías Utilizadas

| Categoría        | Herramientas                                                |
|------------------|-------------------------------------------------------------|
| **Lenguaje**      | JavaScript (ES6+)                                           |
| **Entorno**       | Node.js, Express                                            |
| **Base de Datos** | MongoDB Atlas                                               |
| **ORM / ODM**     | Mongoose                                                    |
| **Autenticación** | JSON Web Tokens (JWT)                                       |
| **Middleware**    | Express middlewares personalizados (auth, isAdmin, etc.)   |
| **Otros**         | CORS, dotenv, Morgan (logging)                             |

---

## 🗃️ Colecciones principales

- `users`: Manejo de usuarios, roles y autenticación.
- `dogs`: Información de perritos en adopción.
- `products`: Productos disponibles en la tienda solidaria.
- `posts`: Publicaciones o novedades.
- `orders`: (Opcional) Registro de compras o pedidos.

---

## 🔐 Autenticación

- Login con email y contraseña.
- Generación de token JWT al iniciar sesión.
- Tokens incluyen el campo `isAdmin` para proteger rutas sensibles.

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...",
  "user": {
    "id": "64a1e3...",
    "email": "admin@email.com",
    "isAdmin": true
  }
}
```

---

## 🚀 Endpoints Principales

```http
# Auth
POST    /api/auth/login

# Usuarios
GET     /api/users
POST    /api/users
DELETE  /api/users/:id

# Perritos
GET     /api/dogs
POST    /api/dogs        # Solo admins
PUT     /api/dogs/:id    # Solo admins
DELETE  /api/dogs/:id    # Solo admins

# Productos
GET     /api/products
POST    /api/products    # Solo admins
PUT     /api/products/:id
DELETE  /api/products/:id

# Publicaciones
GET     /api/posts
POST    /api/posts       # Solo admins
DELETE  /api/posts/:id
```

---

## ⚙️ Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/leonaldo999/backend-rescate-adopcion
cd backend-rescate-adopcion

```

### 2. Instala dependencias

```bash
npm install
```

### 3. Configura las variables de entorno

Crea un archivo .env con el siguiente contenido:

```env
PORT=5000
MONGO_URI=tu_conexion_mongodb
JWT_SECRET=tu_secreto_personal
```

### 4. Inicia el servidor

```bash
npm run dev
```
El servidor estará disponible en http://localhost:5000.

---

## ✅ Estado del Proyecto
 
✅ CRUD completo para perritos, productos y publicaciones.

✅ Autenticación funcional con JWT.

✅ Middleware para proteger rutas de admin.

✅ Integración con frontend funcional.

⬜ Validación avanzada de formularios.

⬜ Upload de imágenes (Cloudinary/Firebase).

---

## 🔐 Seguridad

- Rutas sensibles protegidas por authMiddleware.

- Rol de administrador verificado por isAdminMiddleware.

- Contraseñas encriptadas usando bcrypt.

---

## 🧪 Testing

(Próximamente integración de pruebas con Postman o Jest)

---

## 🤝 Autor

Proyecto desarrollado por **LeoNaldoDev** como parte de su portafolio profesional con impacto social.

---

## 📬 Contacto

GitHub: leonaldo999

LinkedIn: Tu perfil

Portafolio: Tu sitio web

---

## 🐾 Gracias por apoyar esta plataforma. ¡Cada línea de código suma esperanza!
