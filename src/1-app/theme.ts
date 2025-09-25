/* 
https://chakra-ui.com/docs/theming/overview
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Chakra theme configuration
const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				body: { value: "Arial, sans-serif" },
				heading: { value: "Arial, sans-serif" },
				mono: { value: "Menlo, monospace" },
			},
			colors: {
				orange: {
					DEFAULT: { value: "#f48703" },
					50: { value: "#fffbec" },
					100: { value: "#fff6d3" },
					200: { value: "#ffe9a7" },
					300: { value: "#ffd86e" },
					400: { value: "#ffbb34" },
					500: { value: "#ffa30d" },
					600: { value: "#f48703" },
					700: { value: "#c96605" },
					800: { value: "#a04f0c" },
					900: { value: "#80420e" },
					950: { value: "#452005" },
				},
				navy: {
					DEFAULT: { value: "#1e3d78" },
					50: { value: "#f0f7fe" },
					100: { value: "#dcedfd" },
					200: { value: "#c1e0fc" },
					300: { value: "#97cdf9" },
					400: { value: "#65b2f5" },
					500: { value: "#4192f0" },
					600: { value: "#2c75e4" },
					700: { value: "#2360d2" },
					800: { value: "#234faa" },
					900: { value: "#1e3d78" },
					950: { value: "#192b52" },
				},
				gray: {
					DEFAULT: { value: "#4a4748" },
					50: { value: "#f6f5f6" },
					100: { value: "#e7e6e7" },
					200: { value: "#d2cfd1" },
					300: { value: "#b2aeb0" },
					400: { value: "#8b8587" },
					500: { value: "#706a6c" },
					600: { value: "#605a5c" },
					700: { value: "#514d4e" },
					800: { value: "#4a4748" },
					900: { value: "#3e3b3c" },
					950: { value: "#272525" },
				},
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
*/