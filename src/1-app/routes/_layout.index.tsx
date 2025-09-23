// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Home } from '~/2-pages/home'


export const Route = createFileRoute('/_layout/')({
  component: Home
})