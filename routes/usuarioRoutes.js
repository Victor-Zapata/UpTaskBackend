import express from 'express';
const router = express.Router();
import { autenticar, registrar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from '../controllers/usuarioController.js';
import checkAuth from '../middleware/checkAuth.js';

// Autenticación, Registro y Confirmación de Usuarios

router.post('/', registrar); //crea un nuevo usuario. La función la declaro en controlllers

router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);

router.get('/perfil', checkAuth, perfil);



export default router;