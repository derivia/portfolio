/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#ffffff",
				"background-secondary": "#f8f8f8",
				"text-primary": "#1c1c1c",
				"text-secondary": "#6b7280",
				accent: "#1f66e5",
				"accent-light": "#e0e7ff",
				border: "#e5e7eb",
				"heading-primary": "#1c1c1c",
				"section-title-underline": "#d1d5db",
				"about-text": "#374151",
				"project-card-bg": "#ffffff",
				"project-icon-gradient-start": "#eef2ff",
				"project-icon-gradient-end": "#e0e7ff",
				"project-link": "#1f66e5",
				"contact-bg": "#f8f8f8",
				"contact-email-bg": "#1f66e5",
				"contact-email-hover-bg": "#1338ca",
				"footer-text": "#9ca3af",
				"skill-tag-bg": "#f3f4f6",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
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
