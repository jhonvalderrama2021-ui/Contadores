<script setup lang="ts">
import { ref, computed } from 'vue'
import { services } from '../data/services'
import { Mail } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
function openDetails(slug: string) {
  router.push({ name: 'detalle', params: { slug } })
}

// Contact form state
const name = ref('')
const email = ref('')
const message = ref('')

// Configure these to your real contact channels (comma-separated list for mailto)
const recipientEmail = ref('contabildiad.valderrana@gmail.com,stefaniaconta10@gmail.com')

// No external form endpoint configured — emails are sent via the user's mail client (mailto:)

// UI state for submission
const submitting = ref(false)
const sendSuccess = ref('')
const sendError = ref('')

// Contact persons for direct WhatsApp (displayed on the page)
const contacts = ref([
  { name: 'CARLOS ANDRES VALDERRAMA ORDOÑEZ', phone: '573142376316' },
  { name: 'STEFANÍA ESPINAL ARISTIZABAL', phone: '573173444410' }
])

const isFormValid = computed(() => {
  const re = /^\S+@\S+\.\S+$/
  return name.value.trim().length > 0 && re.test(email.value) && message.value.trim().length > 0
})

function sendEmail() {
  if (!isFormValid.value) return
  sendError.value = ''
  sendSuccess.value = ''

  // Open user's mail client with prefilled content addressed to recipientEmail
  const subject = encodeURIComponent(`Solicitud de asesoría - ${name.value}`)
  const body = encodeURIComponent(`Nombre: ${name.value}\nCorreo: ${email.value}\n\n${message.value}`)
  window.location.href = `mailto:${recipientEmail.value}?subject=${subject}&body=${body}`
}


function openContactWhatsApp(phone: string, contactName?: string) {
  // phone expected in international format without +, e.g. '57314...'
  const preset = contactName ? encodeURIComponent(`Hola ${contactName}, quisiera información sobre sus servicios`) : ''
  const url = preset ? `https://wa.me/${phone}?text=${preset}` : `https://wa.me/${phone}`
  window.open(url, '_blank')
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
        <div class="contact-list" style="margin:1.25rem 0; display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:1rem;align-items:stretch;">
          <template v-for="c in contacts" :key="c.phone">
            <div class="contact-row" style="display:flex;flex-direction:column;justify-content:space-between;padding:1.25rem;border-radius:12px;background:rgba(245,216,168,0.03);border:1px solid rgba(245,216,168,0.06);box-shadow:rgba(0,0,0,0.25) 0 1px 0 inset;height:100%;box-sizing:border-box;">
              <div>
                <div style="font-weight:600;color:#f5e3bf;font-size:16px;line-height:1.15;">{{ c.name }}</div>
                <div style="color:rgba(241,226,199,0.78);margin-top:10px;font-size:14px;">{{ c.phone.replace(/^57/,'(+57) ') }}</div>
              </div>
              <div style="display:flex;justify-content:center;margin-top:12px;">
                <button type="button" class="primary-btn" @click="openContactWhatsApp(c.phone, c.name)" style="width:70%;max-width:260px;height:50px;border-radius:9999px;padding:0 20px;">Enviar WhatsApp</button>
              </div>
            </div>
          </template>
        </div>
        <form class="contact-form" @submit.prevent="sendEmail">
          <input v-model="name" type="text" name="name" placeholder="Nombre completo" required />
          <input v-model="email" type="email" name="email" placeholder="Correo electrónico" required />
          <textarea v-model="message" name="message" placeholder="Tu mensaje" rows="4" required></textarea>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
            <button type="button" class="primary-btn" @click="sendEmail" :disabled="!isFormValid || submitting">{{ submitting ? 'Enviando...' : 'Enviar por correo' }}</button>
          </div>

          <div style="margin-top:0.75rem">
            <p v-if="sendSuccess" style="color:#cfe8c1">{{ sendSuccess }}</p>
            <p v-if="sendError" style="color:#f4b0b0">{{ sendError }}</p>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
