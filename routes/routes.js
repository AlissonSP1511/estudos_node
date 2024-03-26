const express = require('express');
const router = express();


const lista1 = require('./lista1');
const lista2 = require('./lista2');
const lista3 = require('./lista3');
const lista4 = require('./lista4');
const introducao = require('./introducao');

router.use('/lista1', lista1);
router.use('/lista2', lista2);
router.use('/lista3', lista3);
router.use('/lista4', lista4);
router.use('/', introducao);


module.exports = router