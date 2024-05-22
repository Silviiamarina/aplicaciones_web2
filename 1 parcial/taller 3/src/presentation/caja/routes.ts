import { Router } from 'express';

import { CajaController } from './controller';

export class CajaRoutes {

    static get routes(): Router {
  
      const router = Router();
  
      const cajacontroller = new CajaController();
  
      router.get('/', cajacontroller.getCajas );
      router.post('/', cajacontroller.createCaja );
      router.put('/:id', cajacontroller.updateCaja );
      router.delete('/:id', cajacontroller.deleteCaja );
      return router;
    }
  
  
  }
