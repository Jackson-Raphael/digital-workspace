import { createFileRoute } from '@tanstack/react-router'
import { Insights } from '~/2-pages/insights'

export const Route = createFileRoute('/_layout/insights')({
  component: Insights,
})