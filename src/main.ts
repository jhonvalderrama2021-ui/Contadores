import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Update favicon at runtime with a cache-busting query param so browsers fetch the latest
function refreshFavicon() {
	try {
		const base = import.meta.env.BASE_URL ?? '/'
		const faviconUrl = `${base}icono.png?v=${Date.now()}`

		let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
		if (!link) {
			link = document.createElement('link')
			link.rel = 'icon'
			document.head.appendChild(link)
		}
		link.type = 'image/png'
		link.href = faviconUrl

		let apple: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']")
		if (!apple) {
			apple = document.createElement('link')
			apple.rel = 'apple-touch-icon'
			document.head.appendChild(apple)
		}
		apple.href = faviconUrl
	} catch (e) {
		// if document isn't ready or running in a non-browser context, ignore
		// console.warn('favicon update failed', e)
	}
}

// Call early so browser fetches the updated icon when the app loads
refreshFavicon()

createApp(App).use(router).mount('#app')
