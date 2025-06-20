/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#FFFFFF",
				"text-primary": "#111827",
				"text-secondary": "#6B7280",
				accent: "#3B82F6",
				"accent-hover": "#2563EB",
				"section-bg": "#F9FAFB",
				"border-color": "#E5E7EB",
			},
		},
	},
	plugins: [],
};
