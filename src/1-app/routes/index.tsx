// src/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Home } from '~/2-pages/home'


export const Route = createFileRoute('/')({
  component: Home
})