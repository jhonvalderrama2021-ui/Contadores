<script setup lang="ts">
// App shell: header + footer. Views are provided by router via <router-view />
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="app-layout">
  <header class="site-header">
      <div class="container header-inner">
        <div class="brand-block">
          <img :src="base + 'sv-logo.png'" alt="Logotipo SV Contadores Públicos" class="brand-logo" />
          <div class="brand-copy">
            <p class="brand-title">Contadores Públicos</p>
            <p class="brand-subtitle">Especialistas en Revisoría Fiscal y Auditoría Integral</p>
          </div>
        </div>
        <nav class="nav-links" aria-label="Principal">
          <router-link to="/">Inicio</router-link>
          <router-link to="/servicios">Servicios</router-link>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      © 2025 Contaduría Profesional. Todos los derechos reservados.
    </footer>
  </div>
</template>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #04070d 0%, #060b15 45%, #030408 100%);
  color: #f1e2c7;
}

.container {
  width: min(1200px, 88vw);
  margin: 0 auto;
}

.site-header {
  background: linear-gradient(135deg, #050607, #151515);
  color: #f1e2c7;
  box-shadow: 0 18px 40px rgba(5, 6, 7, 0.4);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.brand-logo {
  width: clamp(72px, 7vw, 88px);
  height: clamp(72px, 7vw, 88px);
  object-fit: contain;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.45));
  border-radius: 12px;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.brand-title {
  margin: 0;
  font-size: clamp(1.6rem, 2.3vw + 0.8rem, 2.35rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: #f5d8a8;
}

.brand-subtitle {
  margin: 0;
  font-size: clamp(0.8rem, 1vw + 0.5rem, 1rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(241, 226, 199, 0.82);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-links a {
  color: rgba(241, 226, 199, 0.82);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: #f5d8a8;
}

main {
  flex: 1;
}

.hero {
  background: radial-gradient(circle at top left, rgba(245, 216, 168, 0.12), transparent 45%),
    linear-gradient(160deg, #020304 0%, #0c1019 55%, #010203 100%);
  color: #f1e2c7;
  padding: clamp(4rem, 8vw, 6.5rem) 3vw;
}

.hero-inner {
  text-align: center;
  display: grid;
  gap: 1.75rem;
  justify-items: center;
  width: min(920px, 100%);
  margin: 0 auto;
}

.hero-tagline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: rgba(245, 216, 168, 0.15);
  color: #f5d8a8;
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0;
  font-size: clamp(2.7rem, 4.5vw, 3.9rem);
  font-weight: 700;
  color: #f5e3bf;
  max-width: 48rem;
}

.hero-copy {
  margin: 0;
  max-width: 42rem;
  font-size: 1.15rem;
  color: rgba(241, 226, 199, 0.78);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.primary-btn {
  display: inline-block;
  background: linear-gradient(135deg, #f5d8a8, #cfa25b);
  color: #0b1019;
  padding: 0.9rem 2.5rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 25px rgba(24, 21, 16, 0.25);
}

.primary-btn:hover,
.primary-btn:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 20px 36px rgba(24, 21, 16, 0.28);
}

.secondary-btn {
  display: inline-block;
  padding: 0.9rem 2.5rem;
  border-radius: 999px;
  border: 1px solid rgba(245, 216, 168, 0.45);
  color: #f5d8a8;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.secondary-btn:hover,
.secondary-btn:focus-visible {
  background-color: rgba(245, 216, 168, 0.12);
  color: #f7e8c8;
}

.services {
  position: relative;
  padding: clamp(3.5rem, 8vw, 6.5rem) 3vw clamp(4rem, 10vw, 6.5rem);
  background: linear-gradient(180deg, rgba(2, 3, 4, 0.95) 0%, rgba(9, 13, 24, 0.92) 55%, #04070d 100%);
  margin-top: -3.5rem;
  z-index: 2;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: clamp(3.5rem, 8vw, 5.5rem);
  background: linear-gradient(180deg, rgba(10, 16, 24, 0.85) 0%, rgba(10, 16, 24, 0) 100%);
}

.services-shell {
  position: relative;
  z-index: 3;
  background: rgba(8, 12, 20, 0.78);
  backdrop-filter: blur(18px);
  border-radius: 28px;
  padding: clamp(2.5rem, 6vw, 3.5rem) clamp(2rem, 4vw, 3rem);
  box-shadow: 0 40px 80px rgba(3, 5, 9, 0.45);
  border: 1px solid rgba(245, 216, 168, 0.2);
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: #f5d8a8;
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.service-card {
  background: linear-gradient(180deg, rgba(10, 16, 28, 0.92) 0%, rgba(5, 9, 18, 0.92) 100%);
  border-radius: 20px;
  padding: 2rem 1.75rem;
  text-align: center;
  box-shadow: 0 22px 48px rgba(3, 6, 12, 0.45);
  border: 1px solid rgba(245, 216, 168, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #f1e2c7;
}

.service-card:hover,
.service-card:focus-within {
  transform: translateY(-6px);
  box-shadow: 0 32px 56px rgba(5, 8, 16, 0.55);
  border-color: rgba(245, 216, 168, 0.55);
  background: linear-gradient(180deg, rgba(14, 20, 36, 0.95) 0%, rgba(7, 12, 24, 0.95) 100%);
}

.service-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 0.5rem;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(245, 216, 168, 0.24), rgba(207, 162, 91, 0.4));
  box-shadow: inset 0 0 18px rgba(4, 7, 14, 0.6);
  font-size: 2.1rem;
  line-height: 1;
}

.service-title {
  font-size: 1.25rem;
  color: #f5e3bf;
  margin: 0;
}

.contact {
  background: linear-gradient(160deg, #050607 0%, #101826 60%, #050708 100%);
  color: #f1e2c7;
  padding: clamp(4rem, 8vw, 6rem) 3vw;
}

.contact-inner {
  max-width: 720px;
  text-align: center;
}

.contact-icon {
  margin-bottom: 1.5rem;
  color: #f5d8a8;
}

.contact-copy {
  margin: 0 auto 2.5rem;
  max-width: 34rem;
  color: rgba(241, 226, 199, 0.78);
}

.contact-form {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(8, 12, 20, 0.6);
  border-radius: 18px;
  border: 1px solid rgba(245, 216, 168, 0.18);
}

.contact-form input,
.contact-form textarea {
  border: 1px solid rgba(245, 216, 168, 0.25);
  border-radius: 14px;
  padding: 0.85rem 1.1rem;
  font-size: 1rem;
  font-family: inherit;
  color: #f8f9fc;
  background: rgba(10, 14, 22, 0.75);
}

.contact-form textarea {
  resize: vertical;
  min-height: 140px;
}

.contact-form button {
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.75rem;
  font-weight: 600;
  background: linear-gradient(135deg, #f5d8a8, #cfa25b);
  color: #0b1019;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 15px 32px rgba(17, 12, 4, 0.32);
}

.contact-form button:hover,
.contact-form button:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 22px 38px rgba(17, 12, 4, 0.4);
}

.site-footer {
  text-align: center;
  padding: 1.75rem 1rem;
  color: rgba(245, 216, 168, 0.75);
  background: #050607;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .container {
    width: min(1000px, 90vw);
  }

  .hero {
    padding: clamp(3.5rem, 10vw, 5rem) 6vw;
  }

  .services,
  .contact {
    padding-left: 6vw;
    padding-right: 6vw;
  }
}

@media (max-width: 720px) {
  .header-inner {
    flex-direction: column;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .brand-block {
    flex-direction: column;
    text-align: center;
  }

  .services {
    padding: 2.5rem 5vw;
  }

  .service-card {
    padding: 2rem 1.5rem;
  }

  .hero {
    padding: 3.5rem 6vw;
  }

  .hero-title {
    font-size: clamp(2.2rem, 8vw, 2.8rem);
  }

  .hero-copy {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions a {
    width: 100%;
    text-align: center;
  }

  .contact {
    padding: 3rem 6vw;
  }
}
</style>
