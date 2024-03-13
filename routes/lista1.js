const express = require('express');
const router = express();



router.post('/ex1', (req, res) => {
    // input dos dados
    let n1 = Number(req.body.n1)
    let n2 = Number(req.body.n2)
    let n3 = Number(req.body.n3)
    let n4 = Number(req.body.n4)

    // validação dos dados entre 0 e 10
    if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10){
        res.status(400).json("digite valores entre 0 e 10")
    }
    else if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
        res.status(400).json("digite um valor númerico")
    }

    let media = (n1 + n2 + n3 + n4) / 4;

    let retorno = {}
        // resultado
        if (media >= 7) {
            retorno = {
            dados : req.body,
            media: media,
            mensagem: 'Aprovado'
            }
            res.status(200).json(retorno)
        }else if (media >= 5) {
            retorno = {
            dados : req.body,
            media: media,
            mensagem: 'Recuperação'
            }
            res.status(200).json(retorno)
        }
        else {
            retorno = {
                dados : req.body,
                media: media,
                mensagem: 'Reprovado'
            }
            res.status(200).json(retorno)
        }
})
router.post('/ex2', (req, res) => {
    // input dos dados
    let totaleleitores = Number(req.body.totaleleitores)
    let totalbancos = Number(req.body.totalbancos)
    let totalnulos = Number(req.body.totalnulos)
    let totalvalidos = Number(req.body.totalvalidos)

    // validação dos dados
    if(isNaN(totaleleitores) || isNaN(totalbancos) || isNaN(totalnulos) || isNaN(totalvalidos)){
        res.status(400).json("digite um valor númerico")
    }
    if(totaleleitores < 0 || totalbancos < 0 || totalnulos < 0 || totalvalidos < 0){
        res.status(400).json("digite valores positivos")
    }

    // calculo total
    let somatotal = totalbancos + totalnulos + totalvalidos;
    let retorno = {}
        if (somatotal > totaleleitores) {
            retorno = {
            dados: req.body,
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
        retorno = {
            dados: req.body,
            porcentagembrancos: porcentagembrancos,
            porcentagemnulos: porcentagemnulos,
            porcentagemvalidos: porcentagemvalidos,
            porcentagemInvalidos: porcentagemInvalidos,
            somatotal: somatotal,
            invalidos: totaleleitores - somatotal
        }
        res.status (200).json(retorno)
        } 

})  
router.post('/ex3', (req, res) => {
    // input dos dados
    let salarioMensal = Number(req.body.salarioMensal)
    let porcentagemReajuste = Number(req.body.porcentagemReajuste)
    // validação dos dados
    if(isNaN(salarioMensal) || isNaN(porcentagemReajuste)){
        res.status(400).json("digite um valor númerico")
    }
    if(salarioMensal < 0 || porcentagemReajuste < 0){
        res.status(400).json("digite valores positivos")
    }
    let novoSalario = (salarioMensal + (salarioMensal * porcentagemReajuste / 100));
    let retorno = {}
    retorno = {
        dados: req.body,
        novoSalario: novoSalario
    }
    res.status(200).json(retorno)

    // alert(`Seu salario antigo era R$${salarioMensal},00\n\nReajuste de ${porcentagemReajuste}%\n\nSeu novo salario e R$${salarioMensal + (salarioMensal * porcentagemReajuste / 100)},00`);
})
router.post('/ex4', (req, res) => {
    //dados fixos
    const impostos = 0.45;
    const porcentagemDistribuidor = 0.28;
    // input dos dados
    let custoCarro = Number(req.body.custoCarro)
    // validação dos dados
    if(isNaN(custoCarro)){
        res.status(400).json("digite um valor númerico")
    }
    else if(custoCarro < 0){
        res.status(400).json("digite valores positivos")
    }
    // calculo
    const precoCunsumidor = custoCarro + (custoCarro * impostos) + (custoCarro * porcentagemDistribuidor);
    // saida
    let retorno = {}
    retorno = {
        dados: req.body,
        precoCunsumidor: precoCunsumidor
    }
    res.status(200).json(retorno)
})
router.post('/ex5', (req, res) => {
    // input dos dados
    let custoCarro = Number(req.body.custoCarro);
    let impostos = Number(req.body.impostos);
    let porcentagemDistribuidor = Number(req.body.porcentagemDistribuidor);
    // validação dos dados
    if(isNaN(custoCarro) || isNaN(impostos) || isNaN(porcentagemDistribuidor)){
        res.status(400).json("digite um valor númerico")
    }
    else if(custoCarro < 0 || impostos < 0 || porcentagemDistribuidor < 0){
        res.status(400).json("digite valores positivos")
    }
    // calculo
    let precoCunsumidor = custoCarro + (custoCarro * (impostos/100)) + (custoCarro * (porcentagemDistribuidor/100));
    // saida
    let retorno = {}
    retorno = {
        dados: req.body,
        precoCunsumidor: precoCunsumidor,
    }
    res.status(200).json(retorno)
})
router.post('/ex6', (req, res) => {
        const porcentagemComissao = 5/100
        // input dos dados
        let numeroDeCarrosVendidos = Number(req.body.numeroDeCarrosVendidos);
        let valorTotalVendido = Number(req.body.valorTotalVendido);
        let salarioFixo = Number(req.body.salarioFixo);
        let valorPorCarro = Number(req.body.valorPorCarro);
        // validação dos dados
        if(isNaN(numeroDeCarrosVendidos) || isNaN(valorTotalVendido) || isNaN(salarioFixo) || isNaN(valorPorCarro)){
            res.status(400).json("digite um valor númerico")
        }
        if(numeroDeCarrosVendidos < 0 || valorTotalVendido < 0 || salarioFixo < 0 || valorPorCarro < 0){
            res.status(400).json("digite valores positivos")
        }
        // calculo
        let salarioTotal = (numeroDeCarrosVendidos * valorPorCarro) + (valorTotalVendido * porcentagemComissao) + (salarioFixo);
        // saida
        let retorno = {}
        retorno = {
            dados: req.body,
            salarioTotal: salarioTotal,
        }
        res.status(200).json(retorno)
})
router.post('/ex7', (req, res) => {
        // input dos dados
        let nota1 = Number(req.body.nota1);
        let nota2 = Number(req.body.nota2);
        // validação dos dados
        if(isNaN(nota1) || isNaN(nota2)){
            res.status(400).json("digite um valor númerico")
        }
        if(nota1 < 0 || nota2 < 0){
            res.status(400).json("digite valores positivos")
        }
        // calculo
        let media = (nota1 + nota2) / 2;
        // saida
        let retorno = {}
        retorno = {
            dados: req.body,
            media: media
        }
        res.status(200).json(retorno)
})
router.post('/ex8', (req, res) => {
        // input dos dados
        let raio = Number(req.body.raio);
        let altura = Number(req.body.altura);
        // validação dos dados
        if(isNaN(raio) || isNaN(altura)){
            res.status(400).json("digite um valor númerico")
        }
        // calculo
        const volume = (Math.PI * Math.pow(raio, 2) * altura);
        // const roundedVolume = Math.round(volume * 100) / 100
        function roundToTwo(num) {
            return +(Math.round(num + 'e+2') + 'e-2');
        }
        // saida
        let retorno = {}
        retorno = {
            dados: req.body,
            volume: roundToTwo(volume)
        }
        res.status(200).json(retorno)
})
router.post('/ex9', (req, res) => {
    //input dos dados
    let primeiroNumero = Number(req.body.primeiroNumero);
    let segundoNumero = Number(req.body.segundoNumero);
    // validação dos dados
    if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
        res.status(400).json("digite um valor númerico")
    }
    // calculo
    let somaPrimeiroSegundo = primeiroNumero + segundoNumero;
    let somaPrimeiroSegundoMultiPrimeiro = somaPrimeiroSegundo * primeiroNumero;
    // saida
    let retorno = {}
    retorno = {
        dados: req.body,
        somaPrimeiroSegundo: somaPrimeiroSegundo,
        somaPrimeiroSegundoMultiPrimeiro: somaPrimeiroSegundoMultiPrimeiro
    }
    res.status(200).json(retorno)
})
module.exports = router