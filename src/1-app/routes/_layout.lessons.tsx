import { createFileRoute } from '@tanstack/react-router'
import { Lessons } from '~/2-pages/lessons'

export const Route = createFileRoute('/_layout/lessons')({
  component: Lessons,
})
