/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./components/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Geist: "Geist",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				red: {
					DEFAULT: "hsl(var(--red-background))",
					foreground: "hsl(var(--red))"
				},
				green: {
					DEFAULT: "hsl(var(--green-background))",
					foreground: "hsl(var(--green))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
			keyframes: {
				fadeIn: {
					"0%": { filter: "blur(4px)", opacity: "0" },
					"100%": { filter: "blur(0px)", opacity: "1" },
				},
				fadeOut: {
					"0%": { filter: "blur(0px)", opacity: "1" },
					"100%": { filter: "blur(4px)", opacity: "0" },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
