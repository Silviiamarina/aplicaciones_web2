import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TransaccionController {

  constructor() { }

  public getTransacciones = async (req: Request, res: Response) => {
    try {
      const transacciones = await prisma.transaccion.findMany({
        where: { estado: 'Activo' },
        include: { caja: true, concepto: true },
      });
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las transacciones.' });
    }
  };

  public createTransaccion = async (req: Request, res: Response) => {
    try {
      const { id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion } = req.body;
      const newTransaccion = await prisma.transaccion.create({
        data: { 
          id_Caja,
          id_Concepto,
          fecha,
          ingreso,
          egreso,
          observacion,
          transaccion,
        },
      });
      res.json(newTransaccion);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la transacción.' });
    }
  };

  public updateTransaccion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { id_Caja, id_Concepto, fecha, ingreso, egreso, observacion, transaccion, estado } = req.body;
      const updatedTransaccion = await prisma.transaccion.update({
        where: { id: Number(id) },
        data: { 
          id_Caja,
          id_Concepto,
          fecha,
          ingreso,
          egreso,
          observacion,
          transaccion,
          estado,
        },
      });
      res.json(updatedTransaccion);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la transacción.' });
    }
  };

  public deleteTransaccion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const transaccion = await prisma.transaccion.findUnique({
        where: { id: Number(id) },
      });
  
      if (!transaccion) {
        return res.status(404).json({ error: 'Transacción no encontrada.' });
      }
  
      const deletedTransaccion = await prisma.transaccion.update({
        where: { id: Number(id) },
        data: { estado: 'Eliminado' },
      });
  
      res.json(deletedTransaccion);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la transacción.' });
    }
  };
  
  
}
