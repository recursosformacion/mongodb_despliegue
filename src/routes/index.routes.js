import {Router} from 'express';
import RfmgruposController from '../controllers/RfmGruposController';

const router = Router();
const rfmgc = new RfmgruposController();

router.get('/',(rfmgc.leerTodos));
   
router.post('/grupos',rfmgc.graba)

router.get("/grupos/edit/:id" ,rfmgc.leerUno)

router.post("/grupos/put",rfmgc.actualiza)

router.get("/grupos/delete/:id", rfmgc.borra)

export default router;