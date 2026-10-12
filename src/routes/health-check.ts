import type { FastifyInstance } from "fastify";
import { logger } from "../infra/logger";

export async function healthCheck(app: FastifyInstance) {
  app.get('/health', async (_, reply) => {
    logger.info('Health check endpoint called')
    await reply.status(200).send({ status: 'Service OK' })
  })
}
  