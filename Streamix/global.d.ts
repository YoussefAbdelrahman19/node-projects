import { PrismaClient } from '@prisma/client';
declare global{
    namespace globalThis{
        var prismdb = PrismaClient
    }
}
declare module 'bcrypt';
