import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'
import { createRouter } from './1-app/router'

export default createStartHandler({
  createRouter,
})(defaultStreamHandler)