import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'

// Creates an Express compatible Feathers application
const app = express(feathers())

// Parse HTTP JSON bodies
app.use(express.json())
// Parse URL-encoded params
app.use(express.urlencoded({
  extended: true
}))
// Add REST API support
app.configure(express.rest())
// Configure Socket.io real-time APIs
app.configure(socketio())
// Register a nicer error handler than the default Express one
app.use(express.errorHandler())

export default app
