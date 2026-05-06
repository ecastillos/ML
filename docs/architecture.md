# Arquitectura inicial

## Módulos principales

1. **Catálogo**
   - Productos
   - Categorías
   - Imágenes
   - Estado de publicación

2. **Usuarios**
   - Compradores
   - Vendedores
   - Administradores

3. **Búsqueda**
   - Texto libre
   - Categoría
   - Precio
   - Ubicación
   - Estado del producto

4. **Carrito y órdenes**
   - Carrito temporal
   - Creación de órdenes
   - Estado del pedido
   - Historial de compras

5. **Panel de vendedor**
   - Alta de productos
   - Inventario
   - Órdenes recibidas

6. **Panel administrativo**
   - Moderación de productos
   - Gestión de usuarios
   - Métricas básicas

## Decisiones iniciales

- Separar `apps/web` y `apps/api` permite escalar frontend y backend de forma independiente.
- `packages/types` evita duplicar contratos de datos.
- Prisma centraliza el modelo de datos y facilita migraciones.
- PostgreSQL es adecuado para órdenes, usuarios, productos y relaciones transaccionales.

## Pendientes recomendados

- Definir autenticación: JWT, sesiones o proveedor externo.
- Definir estrategia de imágenes: local, S3 compatible o Cloudinary.
- Definir pagos: pasarela real o simulador inicial.
- Agregar búsqueda avanzada con PostgreSQL full-text o Meilisearch.
