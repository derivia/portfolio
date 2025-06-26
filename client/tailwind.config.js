/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#fefefe",
				"background-secondary": "#f9f9f9",
				"text-primary": "#333",
				"text-secondary": "#666",
				"heading-primary": "#222",
				"about-text": "#666",
				"project-card-bg": "#ffffff",
				"project-link": "#333",
				"contact-bg": "#2a2a2a",
				"contact-text": "#bbb",
				"footer-bg": "#1a1a1a",
				"footer-text": "#777",
				"skill-tag-bg": "rgba(168, 181, 160, 0.1)",
				accent: "#a8b5a0",
			},
			fontFamily: {
				sans: ["Helvetica Neue", "Arial", "sans-serif"],
			},
			borderRadius: {
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
			},
		},
	},
	plugins: [],
};
