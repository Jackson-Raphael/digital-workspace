import { createFileRoute } from '@tanstack/react-router'
import { Reports } from '~/2-pages/reports'

export const Route = createFileRoute('/_layout/reports')({
  component: Reports,
})
