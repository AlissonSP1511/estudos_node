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

app.post('/Lista1/ex1', (req, res) => {
    // input dos dados
    let n1 = Number(req.body.n1)
    // validação dos dados entre 0 e 10
    while (n1 > 10 || n1 < 0) {
            n1 = Number(req.body.n1)
    }
    console.log(n1);

    let n2 = Number(req.body.n2)
    while (n2 > 10 || n2 < 0) {
        n2 = Number(req.body.n2)
    }
    console.log(n2);

    let n3 = Number(req.body.n3)
    while (n3 > 10 || n3 < 0) {
        n3 = Number(req.body.n3)
    }
    console.log(n3);

    let n4 = Number(req.body.n4)
    while (n4 > 10 || n4 < 0) {
        n4 = Number(req.body.n4)
    }
    console.log(n4);

    // calculo da media
    let media = (n1 + n2 + n3 + n4) / 4;
    console.log(`media = ${media}`);

    let retorno = {}
        // resultado
        if (media >= 7) {
            retorno = {
            media: media,
            mensagem: 'Aprovado'
            }
            // console.log('Aprovado');
            // alert(`media = ${media} \n Aprovado`); 
            res.status(200).json(retorno)
        }else if (media >= 5) {
            retorno = {
            media: media,
            mensagem: 'Recuperação'
            }
            res.status(200).json(retorno)
            // console.log('Recuperação');
            // alert(`media = ${media}\n Recuperação`);
        }
        else {
            retorno = {
                media: media,
                mensagem: 'Reprovado'
            }
            res.status(200).json(retorno)
            // console.log('Reprovado');
            // alert(`media = ${media}\n Reprovado`);
        }
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
            porcentagemInvalidos: porcentagemInvalidos,
            totaleleitores: totaleleitores,
            somatotal: somatotal,
            brancos: totalbancos,
            nulos: totalnulos,
            validos: totalvalidos,
            invalidos: totaleleitores - somatotal
        }
        res.status (200).json(retorno)
        // res.json(`Lista1 -->ex2 \nQuantidade de votos brancos: ${totalbancos}\nQuantidade de votos nulos: ${totalnulos}\nQuantidade de votos validos: ${totalvalidos}\nQuantidade de votos inválidos: ${totaleleitores - somatotal}`);
   
        } 

    })
    // res.send(`Lista1 -->ex2 \nQuantidade de votos brancos: ${totalbancos}\nQuantidade de votos nulos: ${totalnulos}\nQuantidade de votos validos: ${totalvalidos}\nQuantidade de votos inválidos: ${totaleleitores - somatotal}`);
    
app.post('/lista1/ex3', (req, res) => {
    let salarioMensal = Number(req.body.salarioMensal)
    while (salarioMensal < 0){
        salarioMensal = Number(req.body.salarioMensal)
    }
    let porcentagemReajuste = Number(req.body.porcentagemReajuste)
    while (porcentagemReajuste < 0){
        porcentagemReajuste = Number(req.body.porcentagemReajuste)
    }

    let novoSalario = (salarioMensal + (salarioMensal * porcentagemReajuste / 100));
    let retorno = {}
    retorno = {
        porcentagemReajuste: porcentagemReajuste,
        salarioMensal: salarioMensal,
        novoSalario: novoSalario
    }
    res.status(200).json(retorno)

    // alert(`Seu salario antigo era R$${salarioMensal},00\n\nReajuste de ${porcentagemReajuste}%\n\nSeu novo salario e R$${salarioMensal + (salarioMensal * porcentagemReajuste / 100)},00`);
})

app.post('/lista1/ex4', (req, res) => {
    //dados fixos
    const impostos = 0.45;
    const porcentagemDistribuidor = 0.28;
    // input dos dados
    let custoCarro = Number(req.body.custoCarro)
    // validação dos dados
    while (custoCarro < 0){
        custoCarro = Number(req.body.custoCarro)
    }
    // calculo
    const precoCunsumidor = custoCarro + (custoCarro * impostos) + (custoCarro * porcentagemDistribuidor);
    // saida
    let retorno = {}
    retorno = {
        precoCunsumidor: precoCunsumidor
    }
    res.status(200).json(retorno)
    // alert(`O valor a ser pago pelo consumidor é de R$${precoCunsumidor},00`);
})

app.post('/lista1/ex5', (req, res) => {
    // input dos dados
    let custoCarro = Number(req.body.custoCarro);
    // validação dos dados
    while (custoCarro < 0){
        custoCarro = Number(req.body.custoCarro);
    }
    let impostos = Number(req.body.impostos);
    while (impostos < 0 || impostos > 100){
        impostos = Number(req.body.impostos);
    }
    let porcentagemDistribuidor = Number(req.body.porcentagemDistribuidor);
    while (porcentagemDistribuidor < 0 || porcentagemDistribuidor > 100){
        porcentagemDistribuidor = Number(req.body.porcentagemDistribuidor);
    }


    // calculo
    let precoCunsumidor = custoCarro + (custoCarro * (impostos/100)) + (custoCarro * (porcentagemDistribuidor/100));
    // saida
    let retorno = {}
    retorno = {
        precoCunsumidor: precoCunsumidor,
        custoCarro: custoCarro,
        impostos: impostos,
        porcentagemDistribuidor: porcentagemDistribuidor,
    }
    res.status(200).json(retorno)
    // alert(`O valor a ser pago pelo consumidor é de R$${precoCunsumidor},00`);
})

app.post('/lista1/ex6', (req, res) => {
        const porcentagemComissao = 5/100

        let numeroDeCarrosVendidos = Number(req.body.numeroDeCarrosVendidos);
        while (numeroDeCarrosVendidos < 0){
            numeroDeCarrosVendidos = Number(req.body.numeroDeCarrosVendidos);
        }
        let valorTotalVendido = Number(req.body.valorTotalVendido);
        while (valorTotalVendido < 0){
            valorTotalVendido = Number(req.body.valorTotalVendido);
        }
        let salarioFixo = Number(req.body.salarioFixo);
        while (salarioFixo < 0){
            salarioFixo = Number(req.body.salarioFixo);
        }
        let valorPorCarro = Number(req.body.valorPorCarro);
        while (valorPorCarro < 0){
            valorPorCarro = Number(req.body.valorPorCarro);
        }
        
        let salarioTotal = (numeroDeCarrosVendidos * valorPorCarro) + (valorTotalVendido * porcentagemComissao) + (salarioFixo);

        let retorno = {}
        retorno = {
            numeroDeCarrosVendidos: numeroDeCarrosVendidos,
            valorTotalVendido: valorTotalVendido,
            salarioFixo: salarioFixo,
            valorPorCarro: valorPorCarro,
            salarioTotal: salarioTotal,
        }
        res.status(200).json(retorno)
        // alert(`O valor a ser pago pelo vendedor é de R$${salarioTotal},00`);
})

app.post('/lista1/ex7', (req, res) => {
        let nota1 = Number(req.body.nota1);
        while (nota1 < 0 || nota1 > 10){
            nota1 = Number(req.body.nota1);
        }
        let nota2 = Number(req.body.nota2);
        while (nota2 < 0 || nota2 > 10){
            nota2 = Number(req.body.nota2);
        }
        
        let media = (nota1 + nota2) / 2;

        let retorno = {}
        retorno = {
            nota1: nota1,
            nota2: nota2,
            media: media
        }
        res.status(200).json(retorno)

        // alert(`sua media foi ${media}`);
})

app.post('/lista1/ex8', (req, res) => {
        let raio = Number(req.body.raio);
        while (raio < 0){
            raio = Number(req.body.raio);
        }
        let altura = Number(req.body.altura);
        while (altura < 0){
            altura = Number(req.body.altura);
        }
        const volume = (Math.PI * Math.pow(raio, 2) * altura);
        // const roundedVolume = Math.round(volume * 100) / 100
        function roundToTwo(num) {
            return +(Math.round(num + 'e+2') + 'e-2');
        }

        let retorno = {}
        retorno = {
            raio: raio,
            altura: altura,
            volume: roundToTwo(volume)
        }
        res.status(200).json(retorno)
        // alert(`O volume do cilindro e ${roundToTwo(volume)}m³`);
})

app.post('/lista1/ex9', (req, res) => {
    
    let primeiroNumero = Number(req.body.primeiroNumero);
    let segundoNumero = Number(req.body.segundoNumero);
    let somaPrimeiroSegundo = primeiroNumero + segundoNumero;
    let somaPrimeiroSegundoMultiPrimeiro = somaPrimeiroSegundo * primeiroNumero;
    
    console.log(primeiroNumero);
    console.log(segundoNumero);
    console.log(`soma = ${somaPrimeiroSegundo}`);
    console.log(`multiplicação = ${somaPrimeiroSegundoMultiPrimeiro}`);

    let retorno = {}
    retorno = {
        primeiroNumero: primeiroNumero,
        segundoNumero: segundoNumero,
        somaPrimeiroSegundo: somaPrimeiroSegundo,
        somaPrimeiroSegundoMultiPrimeiro: somaPrimeiroSegundoMultiPrimeiro
    }
    res.status(200).json(retorno)
    // alert(`a soma de ${primeiroNumero} + ${segundoNumero} = ${somaPrimeiroSegundo}\na multiplicação de ${somaPrimeiroSegundo} * ${primeiroNumero} = ${somaPrimeiroSegundoMultiPrimeiro}`);


})
