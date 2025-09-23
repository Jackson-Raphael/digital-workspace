import { createFileRoute } from '@tanstack/react-router'
import { Observations } from '~/2-pages/observations'

export const Route = createFileRoute('/_layout/observations')({
  component: Observations,
})