idade = prompt("Qual a sua Idade?")

if (idade < 18) {
  alert("Espere! você NÃO pode jogar Jokenpo")
} 

if (idade >= 18) {
  alert("Parabéns você pode jogar Jokenpo")
  
  escolhaJogador = prompt("Faça sua escolha. 1 - Pedra, 2 - Papel, 3 - Tesoura")
  
  escolhaComputador = Math.floor(Math.random() * 3)+1
  
  // Cenário - 01
  // Pedra + Pedra = Empate ✓
  // Papel + Papel = Empate ✓
  // Tesoura + Tesoura = Empate ✓
  
  if (escolhaJogador == escolhaComputador) {
    alert(Empate no Jogo)
  }
  
  // Cenário - 02
  // Pedra + Pedra = Empate ×
  // Pedra + Papel = Perde ✓
  // Pedra + Tesoura = Vence ✓
  
  if () {}
  
  // Cenário - 3
  // Papel + Pedra = Vence ✓
  // Papel + Papel = Empate ×
  // Papel + Tesoura = Perde ✓
  
  if () {}
  
  // Cenário - 4
  // Tesoura + Pedra = Vence ✓
  // Tesoura + Papel = Perde ✓
  // Tesoura + Tesoura = Empate ×
  
  if () {}
  
}

//alert("Vamos começar a Jogar!")