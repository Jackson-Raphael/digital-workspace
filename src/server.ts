// src/server.ts
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'
import { createRouter } from './app/router'

export default createStartHandler({
  createRouter,
})(defaultStreamHandler)