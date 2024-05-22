import { Router } from 'express';

import { ConceptoController } from './controller';

export class ConceptoRoutes {

    static get routes(): Router {
  
      const router = Router();
  
      const conceptoController = new ConceptoController();
  
      router.get('/', conceptoController.getConceptos );
      router.post('/', conceptoController.createConcepto );
      router.put('/:id', conceptoController.updateConcepto );
      router.delete('/:id', conceptoController.deleteConcepto );
      return router;
    }
  
}
