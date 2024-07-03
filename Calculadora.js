const prompt= require("prompt-sync")({sigint: true});
let funcoes =require('./Funcoes.js')
while (true){

    console.log(`
    //    ===MENU OPERAÇÕES==
    //    1. Soma(+)
    //    2. Subtração(-)
    //    3. Multiplicação(*)
    //    4. Divisão(/)
    //    5. Porcentagem(%)
    //    0. Sair
    //    `);
    
    let operacao = prompt('Escolha uma operação: ')
    switch (operacao) {
        case '1':
            funcoes.soma()
            break;
        case '2':
            funcoes.subtracao()
            break;
        case '3':
            funcoes.multiplicação()
            break;
        case '4':
            funcoes.divisão()
            break;
        case '5':
            funcoes.porcentagem()
            break;
        case '0':
            console.log('Até breve')
            process.exit()
        default:
            console.log('Opção inválida')
            break;
    }
}

