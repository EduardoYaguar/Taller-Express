var express = require('express');
const suscriptores = require('../models/suscriptores');
var router = express.Router();
const {Sequelize, Op, where} = require('sequelize');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tabla', function(req, res, next) {
  // Sample data for the table
  const arrPersonas = [
    { id: 1, nombre: 'Juan Pérez', email: 'juanp@hotmail.com', createdAt: new Date() },
    { id: 2, nombre: 'María López', email: 'marial@hotmail.com', createdAt: new Date() },
    { id: 3, nombre: 'Carlos Gómez', email: 'carlosg@hotmail.com', createdAt: new Date() }
  ];
  
  res.render('tabla', { title: 'Tabla de Personas', arrPersonas: arrPersonas });
});

router.get('/tabla/:id/view', function(req,res,next){
  let id = parseInt(req.params.id);
  Foto.findAll({
      attributes: {exclude: ["updatedAt"] },
      include: [{
          model: suscriptores,
          attributes: ['texto'],
          through: {attributes: []}
      }],
      where:{
          [Op.and]: {id: id}
      }
  })
  .then(personas => {res.json(personas);
  })
  .catch(error => tes.status(400).send(error))
})

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registro de Usuario' });
});
module.exports = router;
