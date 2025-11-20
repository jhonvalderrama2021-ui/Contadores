<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { services } from '../data/services'

const route = useRoute()
const router = useRouter()

const slug = computed(() => (route.params.slug as string | undefined) || undefined)

const activeService = computed(() => {
  if (!services || !services.length) return null
  if (!slug.value) return services[0]
  return services.find((s) => s.slug === slug.value) || services[0]
})

const getServiceParts = (description: string) => {
  const parts = {
    description: '',
    includes: [] as string[],
    benefits: [] as string[]
  }

  if (!description) return parts

  const [desc, rest] = description.split('\n\nIncluye:')
  parts.description = desc || ''

  if (rest) {
    const [includesPart, benefitsPart] = rest.split('\n\nBeneficios:')
    
    parts.includes = includesPart
      ?.split('•')
      .map(item => item.trim())
      .filter(Boolean) || []

    parts.benefits = benefitsPart
      ?.split('✔')
      .map(item => item.trim())
      .filter(Boolean) || []
  }

  return parts
}

const activeSlug = computed(() => activeService.value?.slug)

function select(slugS: string) {
  router.push({ name: 'detalle', params: { slug: slugS } })
}

// Contact helpers for this details page
function openWhatsAppForService(phone: string, serviceTitle?: string) {
  const text = serviceTitle ? encodeURIComponent(`Hola, estoy interesado en el servicio: ${serviceTitle}. ¿Me pueden dar más información?`) : ''
  const url = text ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/${phone}`
  window.open(url, '_blank')
}



// Modal state for collecting client info before opening mailto
const showEmailModal = ref(false)
const modalName = ref('')
const modalEmail = ref('')
const modalPhone = ref('')
const modalServiceTitle = ref<string | undefined>(undefined)

function openEmailModal(serviceTitle?: string) {
  modalServiceTitle.value = serviceTitle
  modalName.value = ''
  modalEmail.value = ''
  modalPhone.value = ''
  showEmailModal.value = true
}

function openMailClientFromModal() {
  const recipients = 'contabildiad.valderrana@gmail.com,stefaniaconta10@gmail.com'
  const subject = modalServiceTitle.value ? `Consulta sobre: ${modalServiceTitle.value}` : 'Consulta de servicio'

  const bodyLines = [
    'Hola,',
    '',
    modalServiceTitle.value ? `Quisiera recibir información sobre el servicio: ${modalServiceTitle.value}` : 'Quisiera recibir información sobre sus servicios.',
    '',
    `Nombre: ${modalName.value || ''}`,
    `Correo electrónico: ${modalEmail.value || ''}`,
    `Teléfono: ${modalPhone.value || ''}`,
    '',
    'Gracias.'
  ]

  const bodyText = bodyLines.join('\r\n')
  const mailto = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`
  // close modal then open mail client
  showEmailModal.value = false
  window.location.href = mailto
}

function closeEmailModal() {
  showEmailModal.value = false
}
</script>

<template>
  <div class="details-page container">
    <div class="details-shell">
      <aside class="sidebar">
        <h4 class="sidebar-title">Nuestros servicios</h4>
        <ul class="services-list">
          <li v-for="s in services" :key="s.slug" :class="{ active: s.slug === activeSlug }">
            <button type="button" class="service-link" @click="select(s.slug)">
              <span class="sidebar-icon" aria-hidden="true">
                <component :is="s.icon" :size="18" :stroke-width="1.8" />
              </span>
              <span class="sidebar-label">{{ s.title }}</span>
            </button>
          </li>
        </ul>
      </aside>

      <section class="detail-content">
        <div class="detail-top">
          <!-- back button removed: use header 'Inicio' to go back -->
        </div>
        <div class="detail-body">
          <div v-if="activeService" class="detail-header">
            <component :is="activeService.icon" :size="64" class="detail-icon" />
            <h2 class="detail-title">{{ activeService.title }}</h2>
          </div>
          <div class="service-details" v-if="activeService">
            <div class="service-description">
              {{ getServiceParts(activeService.description).description }}
            </div>
            
            <div class="service-includes" v-if="getServiceParts(activeService.description).includes.length">
              <h3>Incluye:</h3>
              <ul>
                <li v-for="(item, index) in getServiceParts(activeService.description).includes"
                    :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="service-benefits" v-if="getServiceParts(activeService.description).benefits.length">
              <h3>Beneficios:</h3>
              <ul>
                <li v-for="(benefit, index) in getServiceParts(activeService.description).benefits"
                    :key="index">
                  <span class="check">✔</span> {{ benefit }}
                </li>
              </ul>
            </div>
            <!-- Contact actions for this specific service -->
            <div class="service-contact-actions" style="margin-top:2rem;display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
              <button type="button" class="primary-btn" @click="openEmailModal(activeService.title)">Enviar por correo</button>
              <button type="button" class="primary-btn" @click="openWhatsAppForService('573142376316', activeService.title)">WhatsApp - Carlos</button>
              <button type="button" class="primary-btn" @click="openWhatsAppForService('573173444410', activeService.title)">WhatsApp - Stefanía</button>
            </div>

            <!-- Email modal (simple) -->
            <div v-if="showEmailModal" class="email-modal" style="position:fixed;left:0;top:0;right:0;bottom:0;display:grid;place-items:center;background:rgba(0,0,0,0.55);z-index:1000;padding:1.5rem;">
              <div style="width:100%;max-width:540px;background:rgba(8,12,20,0.95);padding:1.25rem;border-radius:12px;border:1px solid rgba(245,216,168,0.12);">
                <div style="display:flex;justify-content:flex-start;align-items:center;margin-bottom:0.75rem;">
                  <h4 style="margin:0;color:#f5d8a8">Enviar correo - Información de contacto</h4>
                </div>
                <div style="display:grid;gap:0.75rem;">
                  <label style="display:block;color:rgba(241,226,199,0.9)">Nombre completo
                    <input v-model="modalName" type="text" style="width:100%;margin-top:0.35rem;padding:0.6rem;border-radius:8px;border:1px solid rgba(245,216,168,0.12);background:rgba(10,14,22,0.7);color:#fff" />
                  </label>
                  <label style="display:block;color:rgba(241,226,199,0.9)">Correo electrónico
                    <input v-model="modalEmail" type="email" style="width:100%;margin-top:0.35rem;padding:0.6rem;border-radius:8px;border:1px solid rgba(245,216,168,0.12);background:rgba(10,14,22,0.7);color:#fff" />
                  </label>
                  <label style="display:block;color:rgba(241,226,199,0.9)">Teléfono
                    <input v-model="modalPhone" type="tel" style="width:100%;margin-top:0.35rem;padding:0.6rem;border-radius:8px;border:1px solid rgba(245,216,168,0.12);background:rgba(10,14,22,0.7);color:#fff" />
                  </label>
                </div>
                <div style="display:flex;gap:0.75rem;justify-content:flex-end;margin-top:0.85rem;">
                  <button type="button" class="primary-btn" @click="closeEmailModal">Cancelar</button>
                  <button type="button" class="primary-btn" @click="openMailClientFromModal">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.details-page {
  padding: 2.5rem 0 4rem;
}
.details-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 1.5rem;
  align-items: start;
}
.sidebar {
  background: rgba(8,12,20,0.78);
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid rgba(245,216,168,0.12);
}
.sidebar-title {
  margin: 0 0 1rem;
  font-weight: 700;
  color: #f5d8a8;
}
.services-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.sidebar-icon {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-right: 0.6rem;
  background: rgba(245,216,168,0.06);
  border-radius: 8px;
}
.sidebar-label { vertical-align: middle; }
.detail-header { display:flex; align-items:center; gap:1rem; }
.detail-icon { background: rgba(245,216,168,0.06); padding: 0.6rem; border-radius: 12px; }
.service-link {
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: #f1e2c7;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
}
.service-link:hover { background: rgba(245,216,168,0.06); }
.services-list li.active .service-link {
  background: linear-gradient(135deg, rgba(245,216,168,0.12), rgba(207,162,91,0.06));
  color: #f5e3bf;
  font-weight: 600;
}
.detail-content {
  background: rgba(8,12,20,0.78);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(245,216,168,0.12);
  min-height: 420px;
}
.detail-top { display:flex; justify-content:flex-start; }
.back-btn {
  background: transparent;
  border: 1px solid rgba(245,216,168,0.12);
  color: #f1e2c7;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
}
.detail-body { margin-top: 1.25rem; }
.detail-title { margin: 0 0 1rem; color: #f5d8a8; }
.service-details {
  color: rgba(241,226,199,0.82);
  line-height: 1.6;
}

.service-description {
  font-size: 1.2rem;
  color: #f5d8a8;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.service-includes h3,
.service-benefits h3 {
  color: #f5d8a8;
  margin: 1.5rem 0 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.service-includes ul,
.service-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-includes li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
}

.service-includes li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 5px;
  height: 5px;
  background-color: #f5d8a8;
  border-radius: 50%;
}

.service-benefits li {
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  position: relative;
}

.service-benefits .check {
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

@media (max-width: 820px) {
  .details-shell { grid-template-columns: 1fr; }
  .sidebar { order: 2; }
}
</style>
