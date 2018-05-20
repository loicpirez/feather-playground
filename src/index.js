import 'babel-polyfill'
import app from './app'
import './api'

// Start the server
app.listen(3030).on('listening', () =>
  console.log('Feathers server listening on localhost:3030')
)
