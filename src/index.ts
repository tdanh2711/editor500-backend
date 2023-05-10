import { createServer } from 'http'
import app from './app'

const httpServer = createServer(app)

httpServer.listen({ port: 3000 }, () => {
  console.log('NODE_ENV', process.env.NODE_ENV)
  console.log(`🚀 Server ready at http://localhost:${3000}`)
})