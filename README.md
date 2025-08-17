# Blossom API

API RESTful para la gestión de productos, órdenes y reservas de Blossom.

## Tecnologías
- Node.js + Express
- MongoDB + Mongoose
- Cloudinary (imágenes)
- JWT (autenticación admin)
- Zod (validación)

## Variables de entorno (.env)
```
PORT=4000
MONGO_URI=...
CORS_ORIGIN=https://tu-frontend.vercel.app,http://localhost:5173
ADMIN_EMAIL=...
ADMIN_PASS=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

## Instalación
```bash
npm install
```

## Comandos útiles
```bash
npm run seed   # Carga productos de seed/products.json
npm run dev    # Inicia el servidor en modo desarrollo
```

## Endpoints principales

### Auth
- `POST /api/auth/login` — Login admin (email, password)

### Productos
- `GET /api/products` — Listar productos (paginado, filtro, búsqueda)
- `GET /api/products/:id` — Obtener producto por ID
- `POST /api/products` — Crear producto (admin)
- `PUT /api/products/:id` — Actualizar producto (admin)
- `DELETE /api/products/:id` — Eliminar producto (admin)

### Órdenes
- `POST /api/orders` — Crear orden
- `GET /api/orders` — Listar órdenes (admin)

### Reservas
- `POST /api/reservations` — Crear reserva
- `GET /api/reservations` — Listar reservas (admin)

### Upload
- `POST /api/upload` — Subir imagen (admin, multipart/form-data)

## Notas
- El login devuelve un token JWT para autenticación de rutas protegidas.
- Para rutas admin, enviar header: `Authorization: Bearer <token>`
- El frontend recomendado es Vite/React, pero puedes usar cualquier cliente.

---

Desarrollado por Ignacio Daddario
