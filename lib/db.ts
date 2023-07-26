/* eslint-disable vars-on-top */
import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

function createPrismaClient(): PrismaClient {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  }
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  return global.cachedPrisma;
}

export const db = createPrismaClient();
