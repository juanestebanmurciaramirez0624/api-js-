const express = require('express')
const Bootcamp = require('../models/bootcampModels')
//definir ruteador de bootcamps
const router = express.Router()


//Utiliza el rooteador para la creacion de rutas


//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {
            //traer los bootcamps en mongo
            const bootcamp = 
                    await Bootcamp.find()
            return  res.json({
                success: true,
                data: bootcamp
            })
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async(req, res) => {
         const bootcapmId =  req.params.id    
         //Traerlo por id
         const bootcamp = await Bootcamp.findById(bootcapmId)
            return res.json(
            {
                success: true,
                data: bootcamp
            }
            )
        })


//CREAAAAAAAR

router.post(('/'),
        async (req, res) => {
        const newBootcamp =  await Bootcamp.create(req.body)
        return  res.json({
        success: true,
        data: newBootcamp
    })
})


//ACTUALIZAAAAAAR

router.put(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los bootcamps| cuyo id es ${bootcapmId}`
            }
            )
        })


//ELIMINAAAAAR

router.delete(('/:id'),
        (req, res) => {
         bootcapmId =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los bootcamps| cuyo id es ${bootcapmId}`
            }
            )
        })

module.exports = router