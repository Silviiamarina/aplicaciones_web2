import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CajaController {

  constructor() { }
   public getCajas = async (req: Request, res: Response) => {
  try {
    const cajas = await prisma.caja.findMany({
      where: { estado: 'Activo' },
      include: { transacciones: true },
    });
    res.json(cajas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las cajas.' });
  }
};

public createCaja = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newCaja = await prisma.caja.create({
      data: { description },
    });
    res.json(newCaja);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la caja.' });
  }
};

public updateCaja = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description, estado } = req.body;
    const updatedCaja = await prisma.caja.update({
      where: { id: Number(id) },
      data: { description, estado },
    });
    res.json(updatedCaja);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la caja.' });
  }
};

public deleteCaja = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const caja = await prisma.caja.findUnique({
      where: { id: Number(id) },
    });

    if (!caja) {
      return res.status(404).json({ error: 'Caja no encontrada.' });
    }

    const deletedCaja = await prisma.caja.update({
      where: { id: Number(id) },
      data: { estado: 'Eliminado' },
    });

    res.json(deletedCaja);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la caja.' });
  }
};
}
