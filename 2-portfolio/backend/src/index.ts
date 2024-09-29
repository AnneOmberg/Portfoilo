import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { app } from "./app"

const app = new Hono()

app.get('/', (c) => {
  return c.json('Hello Hono!')
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
