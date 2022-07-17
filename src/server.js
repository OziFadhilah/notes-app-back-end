import Hapi from '@hapi/hapi'
import route from './routes.js'

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: '192.168.100.36',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(route)

  await server.start()

  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
