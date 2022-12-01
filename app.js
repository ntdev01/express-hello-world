// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: process.env.PORT || 3000 }, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})