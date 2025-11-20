import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // Cuando se despliega en GitHub Pages bajo un repositorio (ej: username.github.io/REPO/)
  // es necesario ajustar `base` al nombre del repositorio para que Vite genere rutas correctas.
  // Ajustado para el repo `Contadores`.
  base: '/Contadores/',
  plugins: [vue()],
})
