const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


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

app.get('/Alisson1', (req, res) => {
    res.send('Hello Alisson! Ola Alhkhdsfsisson!');
})

app.post('/Lista1/ex2', (req, res) => {

    // res.status(200).json(req.body)
    
    // input dos dados
    let totaleleitores = Number(req.body.totaleleitores)
    // validação dos dados
    while (totaleleitores <= 0) {
        totaleleitores = Number(req.body.totaleleitores)
    }
    let totalbancos = Number(req.body.totalbancos)
    while (totalbancos <= 0) {
        totalbancos = Number(req.body.totalbancos)
    }
    let totalnulos = Number(req.body.totalnulos)
    while (totalnulos <= 0) {
        totalnulos = Number(req.body.totalnulos)
    }
    let totalvalidos = Number(req.body.totalvalidos)
    while (totalvalidos <= 0) {
        totalvalidos = Number(req.body.totalvalidos)
    }
    // calculo total
    let somatotal = totalbancos + totalnulos + totalvalidos;
    // validação se a quantidade de votos e maior que o total de eleitores
    // if (somatotal > totaleleitores) {
    //     console.log('Quantidade de votos inválida');
    let retorno = {}
        if (somatotal > totaleleitores) {
            retorno = {
            codigo:'Quantidade de votos inválida',
            mensagem:'a soma nao pode passar do total de eleitores' 
            }
            res.status(400).json(retorno)
        } else {
        {
            retorno = {
                brancos: totalbancos,
                nulos: totalnulos,
                validos: totalvalidos,
            }
        }

        // calculo das porcentagens
        let porcentagembrancos = (totalbancos / totaleleitores) * 100;
        let porcentagemnulos = (totalnulos / totaleleitores) * 100;
        let porcentagemvalidos = (totalvalidos / totaleleitores) * 100;
        let porcentagemInvalidos = (totaleleitores - somatotal) / totaleleitores * 100;
        // exibição das porcentagens
        console.log('Porcentagem de votos brancos: ' + porcentagembrancos);
        console.log('Porcentagem de votos nulos: ' + porcentagemnulos);
        console.log('Porcentagem de votos validos: ' + porcentagemvalidos);
        console.log('Porcentagem de votos inválidos: ' + porcentagemInvalidos);
        console.log(`Porcentagem de votos brancos: ${porcentagembrancos}\nPorcentagem de votos nulos: ${porcentagemnulos}\nPorcentagem de votos validos: ${porcentagemvalidos}\nPorcentagem de votos inválidos: ${porcentagemInvalidos}`);	
        retorno = {
            porcentagembrancos: porcentagembrancos,
            porcentagemnulos: porcentagemnulos,
            porcentagemvalidos: porcentagemvalidos,
            porcentagemInvalidos: porcentagemInvalidos
        }
        res.status (200).json(retorno)
        // res.json(`Lista1 -->ex2 \nQuantidade de votos brancos: ${totalbancos}\nQuantidade de votos nulos: ${totalnulos}\nQuantidade de votos validos: ${totalvalidos}\nQuantidade de votos inválidos: ${totaleleitores - somatotal}`);
   
        } 

    })
    // res.send(`Lista1 -->ex2 \nQuantidade de votos brancos: ${totalbancos}\nQuantidade de votos nulos: ${totalnulos}\nQuantidade de votos validos: ${totalvalidos}\nQuantidade de votos inválidos: ${totaleleitores - somatotal}`);
    
    
