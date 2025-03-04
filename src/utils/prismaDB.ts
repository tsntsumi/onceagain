import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ["query"],
  })
}

export const prisma = global.prisma;
export default prisma;
