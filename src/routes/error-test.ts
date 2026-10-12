import type { FastifyInstance } from "fastify";
import { logger } from "../infra/logger";

export async function errorTest(app: FastifyInstance) {
  app.get('/error-test', async (_, reply) => {
    try {
      throw new Error('Test error triggered intentionally')
    } catch (error) {
      logger.error({ err: error }, 'Error test endpoint called')
      await reply.status(500).send({ message: 'Error test mano' })
    }
  })
}
