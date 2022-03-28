import express from 'express';
import {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarColaborador,
    eliminarColaborador,
    buscarColaborador
} from "../controllers/proyectoController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get('/', checkAuth, obtenerProyectos);
router.post('/', checkAuth, nuevoProyecto);

//cuando la ruta es la misma, puedo agrupar en route y 
//diferenciar por verbo
router.route('/:id')
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyecto);

router.post('/colaboradores', checkAuth, buscarColaborador);
router.post('/colaboradores/:id', checkAuth, agregarColaborador);
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborador);


export default router;
