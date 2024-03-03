const express = require('express');
const app = express();


app.get ('/hello', function(req, res) {
    res.send('chegou a resposta do servidor!');
})


app.get('/', (req, res) => {
    res.send('Hello World! Ola mundo!');
})

app.get('/Alisson', (req, res) => {
    res.send('Hello Alisson! Ola Alhkhdsfsisson!');
})


app.listen(3000, () => {
    console.log("Servidor iniciado!");
})