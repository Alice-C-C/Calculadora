const prompt= require("prompt-sync")({sigint: true});

soma = function (a,b) {
    a = +prompt('Digite o primeiro número: ')
    b = +prompt('Digite o segundo número: ')
    if(!isNaN(a,b)){
    result = a + b 
    console.log(`O resultado é: ${a} + ${b} = ${result}` )

    }else{
            console.log('Não é um número, digite novamente: ')
            return soma(a,b)
        }
    }
    module.exports.soma=soma


subtracao = function (a,b) {
    a = +prompt('Digite o primeiro número: ')
    b = +prompt('Digite o segundo número: ')
    if(!isNaN(a,b)){
    result = a - b 
    console.log(`O resultado é: ${a} - ${b} = ${result}` )


    }else{
            console.log('Não é um número, digite novamente: ')
            return subtracao(a,b)
        }
}
module.exports.subtracao = subtracao


multiplicação = function (a,b) {
    a = prompt('Digite o primeiro número: ')
    b = prompt('Digite o segundo número: ')
    if(!isNaN(a,b)){
     result = a * b 
    console.log(`O resultado é: ${a} * ${b} = ${result}` )


    }else{
            console.log('Não é um número, digite novamente: ')
            return multiplicação(a,b)
        }
}
module.exports.multiplicação=multiplicação

divisão = function (a,b) {
    a = prompt('Digite o primeiro número: ')
    b = prompt('Digite o segundo número: ')
    if(!isNaN(a,b)){
        if(b==0){
    console.log ('ERRO: Não existe divisão por zero')
        }else{
            result = a/b
            console.log(`O resultado é: ${a} / ${b} = ${result}` )

        }
    }else{
            console.log('Não é um número, digite novamente: ')
            return divisão(a,b)
        }
}
module.exports.divisão = divisão

porcentagem = function (a,b) {
    a = prompt('Digite o número: ')
    b = prompt('Digite a porcentagem: ')
    if(!isNaN(a,b)){
        if(b<0){
            console.log ('ERRO: Porcentagem negativa')
        }else{
            result = a*(b/100)
            console.log(`${b}% de ${a} é ${result}` )

        }

    }else{
            console.log('Não é um número, digite novamente: ')
            return porcentagem(a,b)
        }
}
module.exports.porcentagem = porcentagem
