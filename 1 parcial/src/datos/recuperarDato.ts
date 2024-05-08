import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function recuperarTransaccion(idTransaccion: number): Promise<void> {
    try {
        const transaccion = await prisma.transaccion.findUnique({
            where: {
                id: idTransaccion
            }
        });

        if (!transaccion) {
            console.log(`No se encontró ninguna transacción con el ID ${idTransaccion}.`);
            return;
        }

        await prisma.transaccion.update({
            where: {
                id: idTransaccion
            },
            data: {
                transaccion: true
            }
        });

        console.log(`Transacción con ID ${idTransaccion} recuperada exitosamente.`);
    } catch (error) {
        console.error("Error al recuperar transacción:", error);
    } finally {
        await prisma.$disconnect();
    }
}
