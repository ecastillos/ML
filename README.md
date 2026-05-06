# ML Marketplace Clone

Estructura inicial para construir un marketplace inspirado en la experiencia de compra de MercadoLibre, sin usar marca, logotipos ni activos propietarios.

## Objetivo

Crear una plataforma con:

- Catálogo de productos
- Búsqueda y filtros
- Detalle de producto
- Carrito de compra
- Usuarios y autenticación
- Publicación de productos por vendedores
- Órdenes de compra
- Panel administrativo
- API propia
- Base de datos PostgreSQL

## Stack propuesto

- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript
- **Base de datos:** PostgreSQL
- **ORM:** Prisma
- **Monorepo:** pnpm workspaces + Turborepo

## Estructura

```txt
apps/
  web/       Frontend Next.js
  api/       API REST con Express
packages/
  types/     Tipos compartidos
prisma/      Esquema de base de datos
docs/        Documentación técnica y funcional
```

## Inicio rápido

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Para levantar PostgreSQL local:

```bash
docker compose up -d
```

## Nota legal

Este proyecto debe desarrollarse como marketplace propio. No debe copiar logotipos, nombre comercial, interfaz exacta, textos, imágenes ni elementos protegidos de MercadoLibre.