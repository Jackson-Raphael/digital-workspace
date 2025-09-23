import { createFileRoute } from '@tanstack/react-router'
import Recommendations from '~/2-pages/recommendations/components/Recommendations'

export const Route = createFileRoute('/_layout/recommendations')({
  component: Recommendations,
})