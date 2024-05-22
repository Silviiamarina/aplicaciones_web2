import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ConceptoController {

  constructor() { }

  public getConceptos = async (req: Request, res: Response) => {
    try {
      const conceptos = await prisma.concepto.findMany({
        where: { estado: 'Activo' },
        include: { transacciones: true },
      });
      res.json(conceptos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los conceptos.' });
    }
  };

  public createConcepto = async (req: Request, res: Response) => {
    try {
      const { concepto, detalle } = req.body;
      const newConcepto = await prisma.concepto.create({
        data: { concepto, detalle },
      });
      res.json(newConcepto);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el concepto.' });
    }
  };

  public updateConcepto = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { concepto, detalle, estado } = req.body;
      const updatedConcepto = await prisma.concepto.update({
        where: { id: Number(id) },
        data: { concepto, detalle, estado },
      });
      res.json(updatedConcepto);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el concepto.' });
    }
  };

  
  public deleteConcepto = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const concepto = await prisma.concepto.findUnique({
        where: { id: Number(id) },
      });

      if (!concepto) {
        return res.status(404).json({ error: 'Concepto no encontrado.' });
      }

      const deletedConcepto = await prisma.concepto.update({
        where: { id: Number(id) },
        data: { estado: 'Eliminado' },
      });

      res.json(deletedConcepto);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el concepto.' });
    }
  };
}
