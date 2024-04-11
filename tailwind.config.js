/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: '"Nunito", sans-serif',
				body: '"Comfortaa", sans-serif'
			},
			colors: {
				background: 'rgb(var(--background))',
				surface: 'rgb(var(--surface))',
				primary: 'rgb(var(--primary))',
				'primary-varient': 'rgb(var(--primary-varient))',
				secondary: 'rgb(var(--secondary))',
				accent: 'rgb(var(--accent))',
				'font-primary': 'rgb(var(--font-primary))',
				muted: 'rgb(var(--muted))'
			},
			spacing: {
				tight: '0.25rem',
				snug: '1rem',
				loose: '2rem',
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
				},
				blob: {
					'0%': { rotate: '0deg' },
					'50%': { scale: '1 1.36' },
					'100%': { rotate: '360deg' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				blob: 'blob 18s linear infinite'
			}
		}
	},
	plugins: []
};
