import { PrismaClient } from '@prisma/client'

// Ensure we reuse a single PrismaClient instance in development
const globalForPrisma = global as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV === 'development') {
  globalForPrisma.prisma = prisma
}

