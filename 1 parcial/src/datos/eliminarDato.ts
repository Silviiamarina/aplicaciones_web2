import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function eliminarTransaccion(transaccionId: number): Promise<void> {
  try {
    const transaccion = await prisma.transaccion.findUnique({
      where: {
        id: transaccionId
      }
    });

    if (!transaccion) {
      console.log(`No se encontró ninguna transacción con el ID ${transaccionId}`);
      return;
    }

    await prisma.transaccion.update({
      where: {
        id: transaccionId
      },
      data: {
        transaccion: false
      }
    });

    console.log(`Transacción con ID ${transaccionId} eliminada lógicamente.`);
  } catch (error) {
    console.error("Error al eliminar la transacción:", error);
  } finally {
    await prisma.$disconnect(); 
  }
}
