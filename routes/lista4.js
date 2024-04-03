const express = require('express');
const router = express();

router.post('/ex01', (req, res) => {
    //1. Faça um programa que receba uma quantidade N de números e informe a média de todos os números.
    const n = req.body.notas
    let soma = 0
    for (let i of n){
        soma += i
        console.log(soma)
    }
    console.log("soma = " + soma)
    //media
    const media = soma / n.length
    //resposta
    res.json({
        dados: req.body,
        'soma': soma,
        'media': media,
    })     
})
router.post('/ex02', (req, res) => {
        //2. Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido
        const cemValores = req.body.numbers; //adicionando body a constante
        let maior = cemValores[0];//atrinbuindo o primeiro valor da constante a variavel maior
        let menor = cemValores[0];//atrinbuindo o primeiro valor da constante a variavel menor
        console.log("cemValores.length = " + cemValores.length);//mostrando o tamanho da constante
        for (let i = 0; i < cemValores.length; i++){//iterando a constante
            if (cemValores[i] > maior){//verificando se o valor da constante e maior que o valor da variavel maior
                maior = cemValores[i]//atrinbuindo o valor da constante a variavel maior
                console.log(maior)//mostrando o valor da variavel maior
            } else if (cemValores[i] < menor) {//verificando se o valor da constante e menor que o valor da variavel menor
                menor = cemValores[i];//atrinbuindo o valor da constante a variavel menor
            }
            //exibindo o log da iteração
            console.log(`Iteração ${i}: maior = ${maior}, menor = ${menor}, testado = ${cemValores[i]}`);
        }
        res.json({//exibindo o json com as variaveis
            'maior': maior,
            'menor': menor
        })        
})
router.post('/ex03', (req, res) => {   
        //3. Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem crescente.
        let n = []//criando a variavel n para receber os valores
        for (let i = 1; i <= 10; i++){//iterando de 1 a 10
            n.push(i)//adicionando o valor na variavel a partir da iteração
        }
        res.json({//exibindo o json com as variaveis
            'n': n
        })
})
router.post('/ex04', (req, res) => {
        //4. Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
        let n = [] //criando a variavel n para receber os valores
        for (let i = 10; i >= 1; i--){ //iterando de 10 a 1
            n.push(i) //adicionando o valor na variavel a partir da iteração
        }
        res.json({//exibindo o json com as variaveis
            'n': n
        })
})
router.post('/ex05', (req, res) => {
        //5. Escreva um script para imprimir os 10 primeiros números inteiros maiores que 100.
        let n = [] //criando a variavel n para receber os valores
        for (let i = 101; i <= 110; i++){ //iterando de 101 a 110
            n.push(i) //adicionando o valor na variavel a partir da iteração
        }
        res.json({//exibindo o json com as variaveis
            'n': n
        })
})
router.post('/ex06', (req, res) => {
        //6. Escreva um script para ler 10 números e ao final da leitura escrever a soma total dos 10 números lidos.
        const n = req.body.numbers; //adicionando body a constante
        console.log("n.length = " + n.length)
        let soma = 0 //criando a variavel soma para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            console.log(`Iteração ${i}: soma = ${soma}, numero a ser somado = ${n[i]}`)
            soma += n[i] //adicionando o valor na variavel a partir da iteração
        }
        res.json({//exibindo o json com as variaveis
            'soma': soma
        })
})
router.post('/ex07', (req, res) => {
        //7. Ler um valor N e imprimir todos os valores pares entre 1 (inclusive) e N (inclusive).
        const n = req.body.number
        let valoresPares = [] //criando a variavel valoresPares para receber os valores
        for (let i = 1; i <= n; i++){
            if (i % 2 == 0){
                valoresPares.push(i)
                console.log(i)
            }
        }
        res.json({//exibindo o json com as variaveis
            'n': n,
            'valoresPares': valoresPares
        })
})
router.post('/ex08', (req, res) => {
        //8. Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.
        const n = req.body.numbers
        let quantidadeNegativos = 0 //criando a variavel quantidadeNegativos para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            if (n[i] < 0){ //verificando se o valor e negativo
                quantidadeNegativos++ //adicionando o valor na variavel a partir da iteração
            }
        }
        res.json({//exibindo o json com as variaveis
            'n': n,
            'quantidadeNegativos': quantidadeNegativos
        })
})
router.post('/ex09', (req, res) => {
        //9. Ler 10 valores e escrever quais são os valores são NEGATIVOS.
        const n = req.body.numbers
        let valoresNegativos = [] //criando a variavel valoresNegativos para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            if (n[i] < 0){ //verificando se o valor e negativo
                valoresNegativos.push(n[i]) //adicionando o valor na variavel a partir da iteração
            }
        }
        res.json({//exibindo o json com as variaveis
            'n': n,
            'valoresNegativos': valoresNegativos
        })
})
router.post('/ex10', (req, res) => {
        //10. Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] e quantos deles estão fora deste intervalo.
        const n = req.body.numbers
        let quantidadeIntervalo = 0 //criando a variavel quantidadeIntervalo para receber os valores
        let quantidadeForaIntervalo = 0 //criando a variavel quantidadeForaIntervalo para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            if (n[i] >= 10 && n[i] <= 20){ //verificando se o valor esta no intervalo
                quantidadeIntervalo++ //adicionando o valor na variavel a partir da iteração
            } else {
                quantidadeForaIntervalo++ //adicionando o valor na variavel a partir da iteração
            }
        }
        res.json({//exibindo o json com as variaveis
            'n': n,
            'quantidadeIntervalo': quantidadeIntervalo,
            'quantidadeForaIntervalo': quantidadeForaIntervalo
        })
})
router.post('/ex11', (req, res) => {
        //11. Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.
        const n = req.body.numbers
        let soma = 0 //criando a variavel soma para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            console.log(`Iteração ${i}: soma = ${soma}, numero a ser somado = ${n[i]}`)
            soma += n[i] //adicionando o valor na variavel a partir da iteração
        }
        console.log(`soma = ${soma}`) //mostrando o valor da variavel soma
        let media = soma / n.length //calculando a media
        console.log(`media = ${soma}/${n.length} = ${media}`) //mostrando o valor da variavel media
        res.json({//exibindo o json com as variaveis
            'n': n,
            'media': media
        })
})
router.post('/ex12', (req, res) => {
        //12. Ler N valores, calcular e escrever a média aritmética desses valores lidos.
        const n = req.body.numbers
        let soma = 0 //criando a variavel soma para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            console.log(`Iteração ${i}: soma = ${soma}, numero a ser somado = ${n[i]}`)
            soma += n[i] //adicionando o valor na variavel a partir da iteração
        }
        console.log(`soma = ${soma}`) //mostrando o valor da variavel soma
        let media = soma / n.length //calculando a media
        console.log(`media = ${soma}/${n.length} = ${media}`) //mostrando o valor da variavel media
        res.json({//exibindo o json com as variaveis
            'media': media
        })
})
router.post('/ex13', (req, res) => {
        //13. Faça um script que leia um número N correspondente ao número de valores a serem lidos em seguida. Para cada número lido, imprimir o seu triplo.
        const n = req.body.numbers
        console.log("n.length = " + n.length)
        let triplos = [] //criando a variavel triplos para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            triplos.push(n[i] * 3)
            console.log(`Iteração ${i}: triplos = ${triplos}`)
        }
        console.log("triplos = " + triplos)
        res.json({//exibindo o json com as variaveis
            'numbers': n, triplos,
        })
})
router.post('/ex14', (req, res) => {
        //14. Faça um script que leia 30 números positivos e, para cada número lido, imprima seu dobro.
        const n = req.body.numbers
        console.log("n.length = " + n.length)
        let dobro = [] //criando a variavel dobro para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            dobro.push(n[i] * 2)
            console.log(`Iteração ${i}: dobro = ${dobro}`)
        }
        console.log("n.length = " + n.length)
        console.log("n = " + n)
        console.log("dobro = " + dobro)
        res.json({//exibindo o json com as variaveis
            'numbers': n, dobro,
        })
})
router.post('/ex15', (req, res) => {
        //15. Escreva um script para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.
        const n = req.body.numbers
        console.log("n.length = " + n.length)
        let soma = 0 //criando a variavel soma para receber os valores
        for (let i = 0; i < n.length; i++){//iterando a constante
            console.log(`Iteração ${i}: soma = ${soma}, numero a ser somado = ${n[i]}`)
            soma += n[i] //adicionando o valor na variavel a partir da iteração
        }
        res.json({//exibindo o json com as variaveis
            'soma': soma
        })
})
router.post('/ex16', (req, res) => {
        /*16. Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um script que permita a entrada das seguintes informações:
            a) o número total de mercadorias no estoque;
            b) o valor de cada mercadoria.
        Ao final imprimir o valor total em estoque e a média de valor das mercadorias.*/
        const totalItensEstoque = req.body.estoque.totalItensEstoque
        const valorCadaMercadoria = req.body.estoque.valorCadaMercadoria
        let valorEmEstoque = valorCadaMercadoria * totalItensEstoque //adicionando o valor na variavel a partir da iteração
        let mediaMercadorias = valorEmEstoque / totalItensEstoque //calculando a mediaMercadorias
        res.json({//exibindo o json com as variaveis
            'totalItensEstoque': totalItensEstoque,
            'valorEmEstoque': valorEmEstoque,
            'mediaMercadorias': mediaMercadorias
        })
})
router.post('/ex17', (req, res) => {
        //17. Faça um script que gere e escreva os números ímpares dentro de um intervalo digitado pelo usuário. O script deve exibir também a soma destes números.
        const inicio = req.body.intervalo.inicio //criando as variavel inicio
        const fim = req.body.intervalo.fim //criando as variavel fim
        let soma = 0 //criando a variavel soma para receber os valores
        for (let i = inicio; i <= fim; i++){   //iterando a constante
            if (i % 2 != 0){ //verificando se o valor e impar
                console.log(`iteração ${i}: soma = ${soma}, i = ${i}`) //mostrando o valor da variavel
                soma += i //adicionando o valor na variavel a partir da iteração
            }
        }
        console.log("soma = " + soma) //mostrando o valor da variavel
        res.json({//exibindo o json com as variaveis
            'soma': soma
        })
})
router.post('/ex18', (req, res) => {
        /*18. Faça um programa que leia 30 valores inteiros e imprima:
             O maior valor lido;
             O menor valor lido;
             A média dos valores lidos.*/
        const valoresInteiros = req.body.numbers; //adicionando body a constante
        let maior = valoresInteiros[0];//atrinbuindo o primeiro valor da constante a variavel maior
        let menor = valoresInteiros[0];//atrinbuindo o primeiro valor da constante a variavel menor
        console.log("valoresInteiros.length = " + valoresInteiros.length);//mostrando o tamanho da constante
        for (let i = 0; i < valoresInteiros.length; i++){//iterando a constante
            if (valoresInteiros[i] > maior){//verificando se o valor da constante e maior que o valor da variavel maior
                maior = valoresInteiros[i]//atrinbuindo o valor da constante a variavel maior
                console.log(maior)//mostrando o valor da variavel maior
            } else if (valoresInteiros[i] < menor) {//verificando se o valor da constante e menor que o valor da variavel menor
                menor = valoresInteiros[i];//atrinbuindo o valor da constante a variavel menor
            }
            //exibindo o log da iteração
            console.log(`Iteração ${i}: maior = ${maior}, menor = ${menor}`);
        }
        res.json({//exibindo o json com as variaveis
            'maior': maior,
            'menor': menor
        })
})  
router.post('/ex19', (req, res) => {
        /*19. Um total de 500 alunos de uma universidade foram entrevistados. 
        De cada um deles foram coletadas as seguintes informações: 
        o código do curso que frequenta (1-sistemas de informação; 2-ciência da computação; 3-engenharia civil) e a idade. 
        Faça um programa que processe estes dados e que forneça as seguintes informações:
             Número de alunos por curso;
             Número de alunos com idade entre 20 e 25 anos, por curso; e
             Qual o curso com menor média de idade. */
        const alunos = req.body.alunos; //adicionando body a constante
        let sistemasInformacao = 
        sistemasInformacao20_25 = 
        sistemasInformacaoSomaIdade = 
        cienciaComputacao = 
        cienciaComputacao20_25 = 
        cienciaComputacaoSomaIdade = 
        engenhariaCivil = 
        engenhariaCivil20_25 = 
        engenhariaCivilSomaIdade = 0;
        for (let i = 0; i < alunos.length; i++){//iterando a constante
            if (alunos[i].codigo_curso == 1){ //verificando se o valor da constante e igual a 1
                sistemasInformacao += 1;
                if (alunos[i].idade >= 20 && alunos[i].idade <= 25){ //verificando se o valor da constante e entre 20 e 25
                    sistemasInformacao20_25 += 1; //adicionando o valor na variavel a partir da iteração
                }
                sistemasInformacaoSomaIdade += alunos[i].idade;

            } else if (alunos[i].codigo_curso == 2){ //verificando se o valor da constante e igual a 2
                cienciaComputacao += 1; //adicionando o valor na variavel a partir da iteração
                if (alunos[i].idade >= 20 && alunos[i].idade <= 25){ //verificando se o valor da constante e entre 20 e 25
                    cienciaComputacao20_25 += 1; //adicionando o valor na variavel a partir da iteração
                }
                cienciaComputacaoSomaIdade += alunos[i].idade;

            } else if (alunos[i].codigo_curso == 3){ //verificando se o valor da constante e igual a 3
                engenhariaCivil += 1; //adicionando o valor na variavel a partir da iteração
                if (alunos[i].idade >= 20 && alunos[i].idade <= 25){ //verificando se o valor da constante e entre 20 e 25
                    engenhariaCivil20_25 += 1; //adicionando o valor na variavel a partir da iteração
                }
                engenhariaCivilSomaIdade += alunos[i].idade;
            }
        }
        res.json({//exibindo o json com as variaveis
            'sistemasInformacao': sistemasInformacao,
            'sistemasInformacao20_25': sistemasInformacao20_25,
            'sistemasInformacaoMediaIdade': sistemasInformacaoSomaIdade / sistemasInformacao,
            'cienciaComputacao': cienciaComputacao,
            'cienciaComputacao20_25': cienciaComputacao20_25,
            'cienciaComputacaoMediaIdade': cienciaComputacaoSomaIdade / cienciaComputacao,
            'engenhariaCivil': engenhariaCivil,
            'engenhariaCivil20_25': engenhariaCivil20_25,
            'engenhariaCivilMediaIdade': engenhariaCivilSomaIdade / engenhariaCivil
        })

})
router.post('/ex20', (req, res) => {
    //20. Faça um programa que imprima uma tabuada para os números de 1 a 10.
    const tabuada = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            tabuada.push({
                multiplicacao : `${i} x ${j} = ${i * j}`,
                resultado: i * j
            });
        }
    }
    res.json(tabuada);
});
router.post('/ex21', (req, res) => {
        /*21. Foi realizada uma pesquisa de opinião com 200 pessoas que assistiram a uma peça de teatro. 
        Cada espectador respondeu a um questionário que solicitava os seguintes dados:
             Idade da pessoa;
             O nome da pessoa;
             Nota dada à peça (de 0 a 10).
        Faça um programa que, a partir destes dados, calcule e imprima:
             a. A quantidade de respostas 10.
             b. A média de idade das pessoas que responderam o questionário.
             c. A percentagem de pessoas que responderam 5 ou menos para a nota da peça.
             d. O nome da pessoa mais velha.
            Obs.: Considere que a maior idade não é repetida.*/
        const pesquisa_opiniao = req.body.pesquisa_opiniao;
        let quantidadeRespostas10 = 0;//quantidade de respostas 10
        let somaIdade = 0;
        let nNotas5ouMenos = 0;//numero de pessoas que responderam 5 ou menos para a nota da peça
        let maiorIdade = 0;//maior idade
        let nomePessoaMaisVelha = '';//nome da pessoa mais velha
        for (let i = 0; i < pesquisa_opiniao.length; i++) {
            if (pesquisa_opiniao[i].nota_peca === 10) {
                quantidadeRespostas10++;
            }
            if (pesquisa_opiniao[i].nota_peca <= 5) {
                nNotas5ouMenos++;
            }
            if (pesquisa_opiniao[i].idade > maiorIdade) {
                maiorIdade = pesquisa_opiniao[i].idade;
                nomePessoaMaisVelha = pesquisa_opiniao[i].nome;
            }            
            somaIdade += pesquisa_opiniao[i].idade;
            console.log(`Iteração ${i}: somaIdade = ${somaIdade}`);
        }
        console.log("somaIdade = " + somaIdade)
        const mediaIdade = somaIdade / pesquisa_opiniao.length;
        const percentagem5ouMenosPessoa = (nNotas5ouMenos / pesquisa_opiniao.length) * 100;
        res.json({
            'a_quantidadeRespostas10': quantidadeRespostas10,
            'b_mediaIdade': mediaIdade,
            'c_percentagem5ouMenos': percentagem5ouMenosPessoa,
            'd_nomePessoaMaisVelha': nomePessoaMaisVelha,
        });       
})
router.post('/ex22', (req, res) => {
        /*22. Faça um script para ler o código e o preço de 15 produtos, calcular e escrever:
         O maior preço lido; e
         A média aritmética dos preços dos produtos.*/
        const produtos = req.body.produtos;
        let maiorPreco = somaPreco = mediaPreco = 0;
        for (let i = 0; i < produtos.length; i++) {
            somaPreco += produtos[i].preco;
            if (produtos[i].preco > maiorPreco) {
                maiorPreco = produtos[i].preco;
            }
        }
        mediaPreco = somaPreco / produtos.length;
        res.json({
            'maiorPreco': maiorPreco,
            'mediaPreco': mediaPreco
        });
})
module.exports = router