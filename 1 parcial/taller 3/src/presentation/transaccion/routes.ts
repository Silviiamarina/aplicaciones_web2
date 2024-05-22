import { Router } from 'express';
import { TransaccionController } from './controller';

export class TransaccionRoutes {

  static get routes(): Router {

    const router = Router();

    const transaccionController = new TransaccionController();

    router.get('/', transaccionController.getTransacciones );
    router.post('/', transaccionController.createTransaccion );
    router.put('/:id', transaccionController.updateTransaccion );
    router.delete('/:id', transaccionController.deleteTransaccion );
    return router;
  }
}
