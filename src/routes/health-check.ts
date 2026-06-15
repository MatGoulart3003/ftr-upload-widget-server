import type { FastifyInstance } from "fastify";

export async function healthCheck(app: FastifyInstance) {
  app.get('/health', async (_, reply) => {
    await reply.status(200).send({ status: 'Service OK' })
  })
}
  