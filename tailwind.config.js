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
				background: 'var(--background)',
				surface: 'var(--surface)',
				primary: 'var(--primary)',
				'primary-varient': 'var(--primary-varient)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				'font-primary': 'var(--font-primary)',
				muted: 'var(--muted)'
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
