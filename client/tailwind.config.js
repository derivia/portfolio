/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#fefefe",
				"background-secondary": "#e0e2e0",
				"text-primary": "#2c2c2c",
				"text-secondary": "#666",
				accent: "#a8c8a8",
				"accent-gradient-start": "#f0c5c5",
				"accent-gradient-end": "#c5d4f0",
				border: "#f0f0f0",
				"heading-primary": "#1a1a1a",
				"section-title-underline": "#ddd",
				"about-text": "#555",
				"project-card-bg": "#fafafa",
				"project-icon-gradient-start": "#e8f4e8",
				"project-icon-gradient-end": "#f0e8f4",
				"project-link": "#7a9a7a",
				"contact-bg": "#f9f9f9",
				"contact-email-bg": "#2c2c2c",
				"contact-email-hover-bg": "#3a3a3a",
				"footer-text": "#999",
				"skill-tag-bg": "#f5f5f5",
			},
			fontFamily: {
				sans: ["Georgia", "serif"],
			},
		},
	},
	plugins: [],
};
