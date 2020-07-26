function Usuario (nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

function verificaMaisVelho(usuarios) {
    let maiorIdade; 
    let pessoaMaisVelha;


for (let usuario of usuarios) {
    if (typeof maiorIdade == 'undefined') {
        maiorIdade = usuario.idade
        usuarioMaisVelho = usuario
}else{
    if (usuario.idade > maiorIdade) {
        maiorIdade = usuario.idade
        usuarioMaisVelho = usuario
        }
    }
}
    return usuarioMaisVelho
}

function listaDatos(datos) {
    
    console.log('São os datos registrados:')

    datos.forEach( datos => {
        console.log(`${datos.nome} possui ${datos.idade} anos`)
        document.write(`${datos.nome} possui ${datos.idade} anos`)
    } )
}

    let datos = []

while (true) {
    let nome = prompt("¿Qual é seu nome?");
    let sobrenome = prompt("¿Qual é seu sobrenome?");
    let idade = Number(prompt("¿Qual é sua edade?"));
    

    var usuario = new Usuario(nome, sobrenome, idade)

    datos.push(usuario)


    let repetir = prompt("Quieres ingresar otro nombre sim / não:");

if ('não' == repetir){
    break;
    }   
}

listaDatos(datos)
let maisVelho = verificaMaisVelho(datos)
console.log(`A pessoa mais velha é ${maisVelho.nome} com ${maisVelho.idade} anos`)
document.write(`A pessoa mais velha é ${maisVelho.nome} com ${maisVelho.idade} anos`)
