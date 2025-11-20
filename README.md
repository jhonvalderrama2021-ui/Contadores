# Contadores — Sitio web

Repositorio del sitio web corporativo de "SV Contadores Públicos" construido con Vue 3 + Vite.

## Resumen
- Stack: Vue 3 (Composition API) + TypeScript + Vite
- Enrutador: vue-router v4
- Deploy: GitHub Pages (se publica la carpeta `dist/`)

Este repositorio contiene el código fuente del sitio público, incluyendo la sección de contacto con opciones para enviar correo (usa `mailto:`) y contactar por WhatsApp a contactos preconfigurados.

## Estructura importante
- `src/` — código fuente (vistas, componentes, router, assets)
- `src/views/Home.vue` — vista principal y sección de contacto (formulario y tarjetas de contacto)
- `src/App.vue` — shell de la app (header / footer / navegación)
- `dist/` — salida de build (no es necesario commitear, pero se puede publicar con `gh-pages`)

## Configuración rápida (desarrollo)

Prerequisitos:
- Node.js (>=16 recomendado)
- npm

Instalar dependencias:

```powershell
npm install
```

Ejecutar servidor de desarrollo:

```powershell
npm run dev
```

Generar build de producción:

```powershell
npm run build
```

Probar build localmente (opcional, con `serve` o similar):

```powershell
npx serve dist
```

## Publicación en GitHub Pages
Se usa `gh-pages` para publicar la carpeta `dist/` en la rama `gh-pages`.

Publicar manualmente:

```powershell
npm run build
npx gh-pages -d dist
```

Nota: el proyecto ya está configurado para publicarse bajo una subcarpeta (si corresponde) usando `base` en `vite.config.ts`. Verifica ese valor antes de publicar si cambias el nombre del repo.

## Contacto / Formulario
- El formulario de contacto actualmente abre el cliente de correo del usuario mediante `mailto:`. Los destinatarios configurados están en `src/views/Home.vue` como `recipientEmail` (se pueden especificar múltiples correos separados por comas).
- Si quieres envío directo desde el frontend (sin abrir el cliente), puedo integrar EmailJS o crear una función serverless que use SendGrid / Mailgun.

Para cambiar los correos destinatarios:

1. Edita `src/views/Home.vue`
2. Cambia la variable `recipientEmail` (valor por defecto: `contabildiad.valderrana@gmail.com,stefaniaconta10@gmail.com`)

## Contactos de WhatsApp
Los contactos visibles en la sección de contacto están en el arreglo `contacts` en `src/views/Home.vue`. Añade/edita objetos con la forma:

```js
{ name: 'NOMBRE COMPLETO', phone: '57XXXXXXXXXX' }
```

El botón abrirá `https://wa.me/<phone>?text=...` con un mensaje predefinido.

## Limpieza / Buenas prácticas aplicadas
- Se eliminó la integración con Formspree (no se usa). El envío por correo usa `mailto:` por defecto.
- El menú superior se simplificó (se removió la entrada "Nosotros" según petición).
- La sección de contactos fue refactorizada a tarjetas responsivas con diseño uniforme.

## Siguientes pasos recomendados
- Si deseas envío de formularios sin depender del cliente de correo, puedo integrar EmailJS (rápido) o crear una función serverless con SendGrid (más robusto y seguro).
- Añadir tests o validaciones adicionales al formulario si se requiere.

---
Si quieres, hago el commit y el push ahora y publico en GitHub Pages. Dime si quieres que incluya más detalles en este README (por ejemplo: cambios recientes, autor, licencia, instrucciones de despliegue CI/CD).
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
