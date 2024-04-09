/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {},
	plugins: [require('tailwindcss-gradients')],
	darkMode: ['class', '[data-mode="dark"]']
}
