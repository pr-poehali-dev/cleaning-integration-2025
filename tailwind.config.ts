import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./1780734760343366714.html"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: { '2xl': '1400px' }
		},
		extend: {
			fontFamily: {
				sans: ['Golos Text', 'sans-serif'],
				heading: ['Oswald', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				neon: '#00ffa3',
				'neon-blue': '#00c8ff',
				'dark-bg': '#060d14',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-left': {
					from: { opacity: '0', transform: 'translateX(-40px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-right': {
					from: { opacity: '0', transform: 'translateX(40px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-d1': 'fade-in 0.8s 0.2s ease-out forwards',
				'fade-in-d2': 'fade-in 0.8s 0.4s ease-out forwards',
				'fade-in-d3': 'fade-in 0.8s 0.6s ease-out forwards',
				'slide-left': 'slide-left 0.8s ease-out forwards',
				'slide-right': 'slide-right 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'rotate-slow': 'rotate-slow 20s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
