/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: '"Raleway", sans-serif',
				body: '"Varela Round", sans-serif',
				comfortaa: '"Comfortaa", sans-serif'
			},
			colors: {
				background: '#FCFCFF',
				'font-primary': '#343247',
				muted: '#666666'
			},
			spacing: {
				tight: '0.25rem',
				snug: '1rem',
				loose: '2.25rem',
				relaxed: '5rem'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: []
};
