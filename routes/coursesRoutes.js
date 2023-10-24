const express = require('express')
const Courses = require('../models/coursesModels')

//definir ruteador de bootcamps
const router = express.Router()

//Utiliza el rooteador para la creacion de rutas




////CURSOS/////
//SELECCIONAAAR

router.get(('/'),
        async (req, res) => {

            const courses = await Courses.find()
            return  res.json({
                success: true,
                data: courses
            })
        })


//SELECCIONAR POR ID

router.get(('/:id'),
        async (req, res) => {
        Id =   req.params.id  
        const cours= await Courses.findById(Id)
            return res.json(
            {
                success: true,
                data:cours
            }
            )
        })


//CREAAAAAAAR
router.post(('/'),
        (req, res) => {
        return  res.json({
        success: true,
        msg: "Crear cursos"
    })
})




//ACTUALIZAAAAAAR

router.put(('/:id'),
        (req, res) => {
         Id =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Actualizando los cursos| cuyo id es ${Id}`
            }
            )
        })


//ELIMINAAAAAR

router.delete(('/:id'),
        (req, res) => {
         Id =   req.params.id    
            return res.json(
            {
                success: true,
                msg: `Eliminando los cursos| cuyo id es ${Id}`
            }
            )
        })



module.exports = router