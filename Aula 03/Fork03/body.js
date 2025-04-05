//Novo Jogo

rodada = 1

while(rodada <= 3) {
  console.log("Rodada: " + rodada)
  rodada = rodada + 1
  
  escolhaJogador = prompt("Rodada:"+rodada+", Escolha (1, 2 ou 3)")
  pisoQuebrado = Math.floor(Math.randon() * 3) + 1;
  
}

//Rodada 4