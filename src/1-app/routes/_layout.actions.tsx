import { createFileRoute } from '@tanstack/react-router'
import { Actions } from '~/2-pages/actions'

export const Route = createFileRoute('/_layout/actions')({
  component: Actions,
})