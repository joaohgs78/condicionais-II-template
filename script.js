// Ex1

// if aninhado
 //const idadeDependente = Number(prompt('Qual a idade da pessoa dependente ?'))

// if(idadeDependente >= 13){
//     if(idadeDependente <18) {
//         console.log('Cartão de credito para dependente Aprovado!')
//     } else {
//         console.log('Maior de Idade: Consulte outras opções do Labank')
//     }
// } else {
//     console.log('Idade Abaixo :Consulte outras opções do Labank')
// }
//relembrando else if



// operadologico

// if(idadeDependente >= 13 && idadeDependente < 18) {
//     console.log('Cartão de credito para dependente Aprovado!')
// } else {
//     console.log('Consulte outras opções do Labank')
// }


// pratica 2 ternario

// verificar se idade é exatamente 13 anos usando if ternario

// sitaxa ternario condição? expressao1 : expressao2

//idadeDependente === 13 ? console.log('idade é 13 ja pode ter um cartao') : console.log('verifique as opçoes do labank')


// ex3
// const tipoCartao = Number(prompt('Digite o numero do cartao escolhido'))

// switch(tipoCartao) {
//     case 1:
//         console.log('Cartão de credito FACIL')
//         break
//         case 2: 
//         console.log('Cartão de credito BLACK')
//         break
//             case 3:
//                 console.log('Cartão de credito PLATINUM')
//                 break
//                 case 4:
//                     console.log('Cartão de credito MASTER GOLD')
//                     break
//                     default:
//                         console.log('Escolha uma das opçoes acima')
//                         break
// }

// exercicios fixacao

const num = Number(prompt('Digite um numero'))

/*
if(num % 2 === 0) {
    console.log(`o numero ${num} é divisivel por 2 e 3 `)
    if(num % 3 === 0){
        console.log(`o numero ${num} é divisivel por 2 e 3`)
    } else {
        console.log(`o numero ${num} não é divisivel por 2 ou 3`)
    }
} else {
    console.log(`o numero ${num} não é divisivel por 2 ou 3`)
}
 */

if(num % 2 === 0 && num % 3 === 0) {
    console.log(`o numero ${num} é divisivel por 2 e 3 `)
    //num === 30 ? console.log('Ufa acertei') : console.log('Não foi dessa vez')
    switch(num) {
        case 6:
            console.log('MEIA DUZIA')
            break
            case 12:
                console.log('MEIO DIA')
                break
                case 18:
                    console.log('HORA DO ASSINCRONO')
                    break
                    case 24:
                        console.log('MEIA NOITE')  
                        break
                        case 30:
                            console.log('DIA DO MES') 
                            break
                            default:
                                console.log('O NUMERO É MAIOR QUE 30 ou MENOR QUE 6') 
                                break

    }
    
} 
  else {
    console.log(`o numero ${num} não é divisivel por 2 ou 3`)
}


/*

if(num % 2 === 0 && num % 3 === 0) {
    console.log(`o numero ${num} não é divisivel por 2 ou 3`)
} else if( num % 2 === 0) {
    console.log(`O número ${num} é divisível por 2.`)
} else if (num % 3 === 0) {
    console.log(`O número ${num} é divisível por 3.`)
} else {
    console.log(`O número ${num} não é divisível por 2 nem por 3.`)
}
*/

/*
switch(num) {
  case 30:
    console.log('Ufa acertei')
    break
  default:
    if(num % 2 === 0 && num % 3 === 0) {
      console.log(`O número ${num} é divisível por 2 e 3.`)
    } else if(num % 2 === 0) {
      console.log(`O número ${num} é divisível por 2.`)
    } else if(num % 3 === 0) {
      console.log(`O número ${num} é divisível por 3.`)
    } else {
      console.log(`O número ${num} não é divisível por 2 nem por 3.`)
    }
    break
}

*/