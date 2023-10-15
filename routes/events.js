/*
    Rutas de events /event
    host + /api/events
*/

const { Router } = require("express")
const { check } = require('express-validator')

const { isDate } = require("../helpers/idDate")
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require("../middlewares/validar-jwt")
const { getEventos, crearEventos, actualizarEventos, eliminarEventos } = require("../controllers/events")


const router = Router()


//todas tienen que pasar por la validacion del JWT
router.use( validarJWT )

//Obtener Eventos
router.get(
    '/', 
    getEventos
)

//crear Eventos
router.post(
    '/',
    [
        check('title', 'El Titulo es Obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es Obligatorio').custom( isDate ),
        check('end', 'Fecha de finalizacion es Obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEventos
)

//actulizar Eventos
router.post('/:id', actualizarEventos)

//borrar Eventos
router.delete('/:id', eliminarEventos)



module.exports = router