import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tsConfigPaths(),
		tanstackStart({
			router: {
				routesDirectory: "1-app/routes",
				generatedRouteTree: "routeTree.gen.ts",
				routeFileIgnorePrefix: "-",
				quoteStyle: "single",
			},
		}),
		viteReact(),
		tailwindcss(),
	],
});
