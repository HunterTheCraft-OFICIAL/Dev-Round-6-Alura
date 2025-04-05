//Novo Jogo

//rodada = 1;

//while (rodada <= 3) {

for(let rodada = 1; rodada <= 3; rodada++){
  console.log("Rodada: " + rodada);

  // rodada = rodada + 1

  escolhaJogador = prompt("Rodada: " + rodada + ", Escolha (1, 2 ou 3)");

  pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == pisoQuebrado) {
    //Falhou na Escolha e caiu no limbo

    alert(
      "Você caiu no Limbo pois o Piso " + pisoQuebrado + " estava Quebrando"
    );

    rodada = 1000;
  } else {
    //Passou com Dificuldades

    alert("O Piso Quebrado ficou no " + pisoQuebrado + ".");
  } 

//rodada = rodada + 1;
}

if (rodada == 4) {
  alert("Você Sobreviveu por pouco!");
} else {
  alert("Você NÃO sobreviveu");
}

//rodada = 4

//Rodada 4

//Fim da Aula 03
//Mudanças na Aula 04
