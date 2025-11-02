<script setup lang="ts">
import { services } from '../data/services'
import { Mail } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
function openDetails(slug: string) {
  router.push({ name: 'detalle', params: { slug } })
}
</script>

<template>
  <main>
    <section id="inicio" class="hero">
      <div class="container hero-inner">
        <span class="hero-tagline">SV Contadores Públicos</span>
        <h2 class="hero-title">Especialistas en Revisoría Fiscal y Auditoría Integral</h2>
        <p class="hero-copy">
          Acompañamos a tu organización con una visión estratégica y rigurosa, garantizando información
          financiera precisa, cumplimiento normativo y decisiones de alto impacto.
        </p>
        <div class="hero-actions">
          <a href="#contacto" class="primary-btn">Solicita tu asesoría</a>
          <router-link to="/servicios" class="secondary-btn">Conoce nuestros servicios</router-link>
        </div>
      </div>
    </section>

    <section id="servicios" class="services">
      <div class="container services-shell">
        <h3 class="section-title">Nuestros Servicios</h3>
        <div class="services-grid">
          <div class="service-card" v-for="s in services" :key="s.title" role="button" tabindex="0" @click="openDetails(s.slug)" @keyup.enter="openDetails(s.slug)">
            <div class="service-icon" aria-hidden="true">
              <component :is="s.icon" :size="32" :stroke-width="1.6" class="service-icon-mark" />
            </div>
            <h4 class="service-title">{{ s.title }}</h4>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto" class="contact">
      <div class="container contact-inner">
        <Mail :size="40" class="contact-icon" aria-hidden="true" />
        <h3 class="section-title">Contáctanos</h3>
        <p class="contact-copy">
          Escríbenos para recibir una asesoría personalizada o resolver tus dudas.
        </p>
        <form class="contact-form" @submit.prevent>
          <input type="text" name="name" placeholder="Nombre completo" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <textarea name="message" placeholder="Tu mensaje" rows="4" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  </main>
</template>
