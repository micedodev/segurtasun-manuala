# SegurtasunManuala — Manual bilingüe ES/EU

Manual de campo de **Seguridad y Alta Disponibilidad (FP)**: UD1 Introducción (8 amenazas), UD2 Lógica (5), UD3 Activa (4), 2 ciberataques reales diseccionados, Perimetral (4 controles) + glosario ES–EU buscable.

Diseño editorial papel `#F2E8CF` + bosque `#386641` + teja `#BC4749`. Gimmick: **scroll horizontal pineado (GSAP)** en desktop, vertical en móvil. Fichas coleccionables + drawer con caso, tabla CIA y defensa.

## Stack
Astro estático + Tailwind + GSAP + TypeScript. Sin backend. Contenido fuente en `contenidos/` (markdown ES/EU original).

## Scripts
- `npm install` — instalar
- `npm run dev` — desarrollo (`http://localhost:4321/es`)
- `npm run build` — build estático a `dist/`
- `npm run preview` — previsualizar build

## Despliegue en Vercel (lo hace el dueño)
1. Subir esta carpeta a GitHub (ignorar `dist/` y `node_modules/`).
2. Vercel → New Project → Import repo → Framework: **Astro** → Build: `npm run build` → Output: `dist/`.
3. Sin variables de entorno. Cada push redespliega.

## Añadir temario futuro
- Nuevo `.md` en `contenidos/es` + `contenidos/eu` con misma estructura (`## N. Título`, `### Definición`, tablas `| Propiedad | ¿...? | ... |`).
- Añadir entrada en `CAPITULOS` en `src/lib/content.ts` y crear `src/pages/[lang]/nuevo.astro` copiando `ud1.astro`.
- El parser genera cards + drawer automáticamente.
