/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#FFFFFF",
				accent: "#4B8256",
				"background-secondary": "#E8E8CF",
				"text-primary": "#111827",
				"text-secondary": "#6B7280",
				"accent-hover": "#28432B",
				"section-bg": "#F9FAFB",
				"border-color": "#E5E7EB",
			},
		},
	},
	plugins: [],
};
