//Aula 04

//Preciso criar uma lista com 3 jogadores 

personagens = ["", "", ""]

//Times > 3 Times > jogadores > 3 jogadores > personagem > personagens 

viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

alert("Os Personagens atuais armazenados são:" + personagens)
console.log("Os Personagens atuais armazenados são:" + personagens)

for (let i = 0; i - 3; i++) {

escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i+1))
personagens[i] = escolhaPersonagem

console.log("O Personagem "+ escolhaPersonagem +" foi adicionado a lista")

//Calcular a Força de cada Jogador, Somar para obter a força do time

//Força do Personagem 
//forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 50)+1
forcaPersonagem += Math.floor(Math.random() * 50)+1

}

console.log("Todos os Personagens da lista são: "+personagens)

//Escolha Randomizada do Computador:

console.log("Os Vilões atuais são ("+viloes+")")

for (let i = 0; i - 3; i++) {
indiceAleatorio = Math.floor(Math.random() * 5)

//Ex: Vilões de Novelas 
viloesPossiveis = ["Nazaré Tedesco", "Odete Roitman", "Flora", "Carminha", "Laura Prudente da Costa"]

viloes[i] = viloesPossiveis[indiceAleatorio]

console.log("O Vilão escolhido pelo Computador foi "+viloes)

//Calcular a força de cada jogador e obter a soma da força total do time do computador 

//Força dos Vilões 
forcaViloes += Math.floor(Math.random() * 10)+1

}

console.log("A Equipe de Vilões escolhidos pelo Computador foi "+viloes)



//Comparar os 2 times para saber quem venceu (Jogador vs Computador)

if(forcaPersonagem > forcaViloes) {

powerDifference = forcaPersonagem - forcaViloes;

alert("Parabéns seu Time Ganhou com uma Vantagem de "+ powerDifference +" de Força sendo a sua Força de "+ forcaPersonagem +" e a Força dos vilões sendo "+ forcaViloes)

console.log("Parabéns seu Time Ganhou com uma Vantagem de "+ powerDifference +" de Força sendo a sua Força de "+ forcaPersonagem +" e a Força dos vilões sendo "+ forcaViloes)
} else {

if(forcaPersonagem < forcaViloes) {

powerDifference = forcaViloes - forcaPersonagem; 

alert("Ah não foi dessa vez seu time perdeu com uma desvantagem de "+ powerDifference +" de Força sendo a sua Força de "+ forcaPersonagem +" e a Força dos vilões sendo "+ forcaViloes)

console.log("Ah não foi dessa vez seu time perdeu com uma desvantagem de "+ powerDifference +" de Força sendo a sua Força de "+ forcaPersonagem +" e a Força dos vilões sendo "+ forcaViloes)
} else {

alert("Houve um Empate entre você e os Vilões no Cabo de Guerra" + forcaPersonagem)

console.log("Houve um Empate entre você e os Vilões no Cabo de Guerra" + forcaPersonagem)

}

//O que será?