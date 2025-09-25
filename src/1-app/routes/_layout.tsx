// src/routes/_layout.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/2-pages/_layout";

export const Route = createFileRoute("/_layout")({
	component: Layout,
});