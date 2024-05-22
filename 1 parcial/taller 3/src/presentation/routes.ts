import { Router } from 'express';

import { CajaRoutes,  } from './caja/routes';
import { ConceptoRoutes } from './concepto/routes';
import { TransaccionRoutes  } from './transaccion/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/cajas', CajaRoutes.routes );
    router.use('/api/conceptos', ConceptoRoutes.routes );
    router.use('/api/transacciones', TransaccionRoutes.routes );

    return router;
  }


}