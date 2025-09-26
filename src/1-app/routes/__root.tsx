/// <reference types="vite/client" />
import { HeroUIProvider } from "@heroui/system";

import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import styles from "~/1-app/styles.css?url";
export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Digital Workspace" },
		],
		links: [{ rel: "stylesheet", href: styles }],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<HeroUIProvider>
				<Outlet />
			</HeroUIProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
