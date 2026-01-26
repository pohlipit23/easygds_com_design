/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: 'var(--brand-primary)',
					secondary: 'var(--brand-secondary)',
					accent: 'var(--brand-accent)',
				},
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)',
				},
				bg: {
					primary: 'var(--bg-primary)',
					secondary: 'var(--bg-secondary)',
					glass: 'var(--bg-glass)',
				}
			},
			fontFamily: {
				primary: ['var(--font-primary)'],
				display: ['var(--font-display)'],
				mono: ['var(--font-mono)'],
			}
		},
	},
	plugins: [],
}
