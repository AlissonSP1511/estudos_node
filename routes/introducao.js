const express = require('express');
const router = express();


router.post ('/hello', function(req, res) {
    res.send('chegou a resposta do servidor!');
})

router.post('/', (req, res) => {
    res.send('Hello World! Ola mundo!');
})

router.post('/Alisson', (req, res) => {
    res.send('Hello Alisson! Ola Alhkhdsfsisson!');
})

router.listen(3000, () => {
    console.log("Servidor iniciado!");
})

module.exports = router