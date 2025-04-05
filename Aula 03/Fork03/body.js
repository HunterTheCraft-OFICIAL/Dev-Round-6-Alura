//Novo Jogo

rodada = 1

while(rodada <= 3) {
  console.log("Rodada: " + rodada)
//  rodada = rodada + 1
  
  escolhaJogador = prompt("Rodada: "+rodada+", Escolha (1, 2 ou 3)")
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;
  
  if(escolhaJogador == pisoQuebrado) {
    //Falhou na Escolha e caiu no limbo 
    alert("Você caiu no Limbo pois o Piso " + pisoQuebrado + " estava Quebrando")
    rodada = 1000
  }
  
  rodada = rodada + 1
  
}

//Rodada 4