const numeroAleatorio = parseInt(Math.random() * 11);
const elementoResposta = document.getElementById("texto-resposta");

const onClick = () => {
  const numeroEntrada = document.getElementById("valor").value;
  if (numeroEntrada == numeroAleatorio) {
    elementoResposta.innerHTML = `Parabéns, você acertou o número, e esse número é ${numeroAleatorio}!`
  } else if (numeroEntrada < 0 || numeroEntrada > 10) {
    elementoResposta.innerHTML = `Por favor, digite um número entre 0 e 10 para continuar!`
  } else {
    elementoResposta.innerHTML = `Você errou, tente novamente, dessa vez com outro número!`
  }
}

