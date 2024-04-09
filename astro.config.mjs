import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import nodejs from '@astrojs/node'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	renderers: ['@astrojs/renderer-react'],
	adapter: nodejs({
		mode: 'standalone' // or 'standalone'
	}),
	output: 'hybrid'
})
