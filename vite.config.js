import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
	plugins: [react()],
	clearScreen: false,
	server: {
		port: 3000,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: "ws",
					host,
					port: 3000,
			  }
			: undefined,
		watch: {
			ignored: ["**/src-tauri/**"],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
	},
	build: {
		target: "esnext",
	},
}));
