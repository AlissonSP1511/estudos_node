const express = require('express');
const router = express();


router.post('/ex1', (req, res) => {
    let reajuste = 0
    const salario = Number(req.body.salario)
    if(salario <= 0){
        res.status(400).json("digite um valor positivo")
    }
    else if(isNaN(salario)){
        res.status(400).json("digite um valor númerico")
    }
    if(salario <= 2000){
        reajuste = (salario * 0.5)
    }
    else {
        reajuste = (salario * 0.3)
    }
    const salarioReajustado = (salario + reajuste)

    res.json({
        dados: req.body,
        salarioReajustado: salarioReajustado
    })
})
router.post('/ex2', (req, res) => {

    let {n1, n2, n3} = req.body
    if(n1==n2 || n2==n3 || n1==n3){
        res.status(400).json("numeros iguais foram inseridos")
    }
    if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
        res.status(400).json("digite um valor valido")
    }else {
        if(n1 > n2 && n1 > n3){
            res.json({dados: req.body, maior: n1})
        }
        else if(n2 > n1 && n2 > n3){
            res.json({dados: req.body, maior: n2})
        }
        else{
            res.json({dados: req.body, maior: n3})
        }
    }
})
router.post('/ex3', (req, res) => {
    const precoTulipaChopp = 4.80
    const precopizzaMistaGrande = 17
    const precoAdicionalCobertura = 1.50

    const pedidosChopp = Number(req.body.pedidosChopp)
    const pedidosPizzaMistaGrande = Number(req.body.pedidosPizzaMistaGrande)
    const pedidosCobertura = Number(req.body.pedidosCobertura)
    const pessoasMesa = Number(req.body.pessoasMesa)

    if(pedidosChopp < 0 || pedidosPizzaMistaGrande < 0 || pedidosCobertura < 0 || pessoasMesa < 0){
        res.status(400).json({
            erro: "digite um valor positivo"
        })
    }
    else if (isNaN(pedidosChopp) || isNaN(pedidosPizzaMistaGrande) || isNaN(pedidosCobertura) || isNaN(pessoasMesa)){
        res.status(400).json({
            erro: "digite valores númericos"
        })
    }

    const valorTotal = (pedidosChopp * precoTulipaChopp) + (pedidosPizzaMistaGrande * precopizzaMistaGrande) + (pedidosCobertura * precoAdicionalCobertura)
    const gorjetaGarcom = valorTotal * 0.1
    const valorTotalComGorjeta = valorTotal + gorjetaGarcom
    const valorTotalPorPessoa = valorTotalComGorjeta / pessoasMesa

    res.json({
        dados: req.body,
        valorTotal: valorTotal,
        gorjetaGarcom: gorjetaGarcom,
        valorTotalComGorjeta: valorTotalComGorjeta,
        valorTotalPorPessoa: valorTotalPorPessoa
    })

})
router.post('/ex4', (req, res) => {

    const salarioMinimo = Number(req.body.salarioMinimo)
    const horasTrabalhadas = Number(req.body.horasTrabalhadas)
    const dependentesFuncionario = Number(req.body.dependentesFuncionario)
    const horasExtras = Number(req.body.horasExtras)
    if (isNaN(salarioMinimo) || isNaN(horasTrabalhadas) || isNaN(dependentesFuncionario) || isNaN(horasExtras)) {
        res.status(400).json({
            erro: "digite um valor númerico"
        })
    }
    if (salarioMinimo < 0 || horasTrabalhadas < 0 || dependentesFuncionario < 0 || horasExtras < 0) {
        res.status(400).json({
            erro: "digite valores positivos"
        })
    }

    let acrecimoDependentes = dependentesFuncionario * 32 //32
    let valorPorHoraTrabalhada = (salarioMinimo / 5 ) //200
    let salarioMensal = horasTrabalhadas * valorPorHoraTrabalhada //2000
    let acrecimoHorasExtras = horasExtras * ((valorPorHoraTrabalhada) * 1.5)//300
    let salarioBruto = (salarioMensal + acrecimoDependentes + acrecimoHorasExtras)//2000+32+300
    
        if (salarioBruto <= 2000) {
            descontoImpostoRenda = (salarioBruto)
        }
        else if (salarioBruto <= 5000) {
            descontoImpostoRenda = (salarioBruto * 0.1)//233
        }
        else if (salarioBruto > 5000) {
            descontoImpostoRenda = (salarioBruto * 0.2)
        }
    let salarioLiquido = (salarioBruto - descontoImpostoRenda)//2332-233=2099
    
        if (salarioLiquido <= 3500) {
            gratificacao = 1000
        }
        else if (salarioLiquido > 3500) {
            gratificacao = 500
        }

    let salarioFinal = salarioLiquido + gratificacao//2099+1000=3099


    res.json({
        dados: req.body,
        salarioMensal: salarioMensal,
        valorPorHoraTrabalhada: valorPorHoraTrabalhada,
        acrecimoDependentes: acrecimoDependentes,
        acrecimoHorasExtras: acrecimoHorasExtras,
        descontoImpostoRenda: descontoImpostoRenda,
        gratificacao: gratificacao,
        salarioBruto: salarioBruto,
        salarioFinal: salarioFinal,
        salarioLiquido: salarioLiquido
    })
})
router.post('/ex5', (req, res) => {
    const IdAluno = Number(req.body.IdAluno)
    const nota1 = Number(req.body.nota1)
    const nota2 = Number(req.body.nota2)
    const nota3 = Number(req.body.nota3)
    const mediaExercicios = Number(req.body.mediaExercicios)
    const mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7
    //conceito aproveitamento :
    if (nota1<0 || nota1>10 || nota2<0 || nota2>10 || nota3<0 || nota3>10 || mediaExercicios<0 || mediaExercicios>10){
        res.status(400).json({
            erro: "digite uma nota entre 0 e 10"
        })
    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(mediaExercicios) || isNaN(mediaAproveitamento)){
        res.status(400).json({
            erro: "digite um valor valido"
        })
    }else{
        if (mediaAproveitamento >= 9) {
            conceitoAproveitamento = 'A',
            mensagem = "APROVADO"
        }
        else if (mediaAproveitamento >= 7.5) {
            conceitoAproveitamento = 'B',
            mensagem = "APROVADO"
        }
        else if (mediaAproveitamento >= 6) {
            conceitoAproveitamento = 'C',
            mensagem = "APROVADO"
        }
        else if (mediaAproveitamento >= 4) {
            conceitoAproveitamento = 'D',
            mensagem = "REPROVADO"
        }
        else {
            conceitoAproveitamento = 'E',
            mensagem = "REPROVADO"
        }
        res.json({
            dados: req.body,
            IdAluno: IdAluno,
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            mediaExercicios: mediaExercicios,
            mediaAproveitamento: mediaAproveitamento,
            conceitoAproveitamento: conceitoAproveitamento,
            mensagem: mensagem     
        })  
    }


   
})
router.post('/ex6', (req, res) => {
    const altura = Number(req.body.altura)
    const sexo = req.body.sexo
    if (isNaN(altura)){
        res.status(400).json({
            erro: "digite um valor valido"
        })
    }
    else if (altura < 0.8 || altura > 3.0){
        res.status(400).json({
            erro: "digite um valor positivo, entre 0.8 e 3.0 metros"
        })
    }
    else if (sexo != 'masculino' && sexo != 'feminino'){
        res.status(400).json({
            erro: "digite masculino ou feminino"
        })
    }
    else{
        if (sexo == 'masculino'){
            pesoIdeal = (72.7 * altura) - 58
        }
        else{
            pesoIdeal = (62.1 * altura) - 44.7
        }
    }
    res.json({
        dados: req.body,
        pesoIdeal: pesoIdeal
    })
})
router.post('/ex7', (req, res) => {
    let maior = 0
    const valor1 = Number(req.body.valor1)
    const valor2 = Number(req.body.valor2)
    const valor3 = Number(req.body.valor3)

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
        res.status(400).json({
            erro: "digite um valor valido"
        })
    }
    else if (valor1==valor2 || valor2==valor3 || valor1==valor3){
        res.status(400).json({
            erro: "numeros iguais foram inseridos"
        })
    }
    else{
        if (valor1 < valor2 && valor1 < valor3){
            res.json({
                dados: req.body, 
                "a soma dos dois maiores é": valor3 + valor2
            })
        }
        else if (valor2 < valor1 && valor2 < valor3){
            res.json({
                dados: req.body, 
                "a soma dos dois maiores é": valor1 + valor3
            })
        }
        else{
            res.json({
                dados: req.body, 
                "a soma dos dois maiores é": valor1 + valor2
            })
        }
    }
})
router.post('/ex8', (req, res) => {
    const salarioAtual = Number(req.body.salarioAtual)
    const codigoCargo = Number(req.body.codigoCargo)

    if (isNaN(salarioAtual) || isNaN(codigoCargo)){
        res.status(400).json({
            erro: "digite um valor valido"
        })
    }
    else if (salarioAtual < 0){
        res.status(400).json({
            erro: "digite um valor positivo"
        })
    }
    else{
        if(codigoCargo == 101){
            res.json({
                dados: req.body,
                salarioAtual: salarioAtual,
                novoSalario: (salarioAtual + (salarioAtual * 0.05)),
                diferenca: (salarioAtual - salarioAtual)

            })
        }
        else if(codigoCargo == 102){
            res.json({
                dados: req.body,
                salarioAtual: salarioAtual,
                novoSalario: (salarioAtual + (salarioAtual * 0.075)),
                diferenca: salarioAtual*0.075
            })
        }
        else if (codigoCargo == 103){
            res.json({
                dados: req.body,
                salarioAtual: salarioAtual,
                novoSalario: (salarioAtual + (salarioAtual * 0.1)),
                diferenca: salarioAtual*0.1
            })
        }
        else{
            res.json({
                dados: req.body,
                salarioAtual: salarioAtual,
                novoSalario: (salarioAtual + (salarioAtual * 0.15)),
                diferenca: salarioAtual*0.15
            })
        }
    }
})
module.exports = router