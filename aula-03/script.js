let counter = 0;

const numeroAleatorio = parseInt(Math.random() * 11);

const gerarNovoNumeroAleatorio = () => {
  window.location.reload();
};

const elementoResposta = document.getElementById("texto-resposta");
const elementoTentativas = document.getElementById("numero-de-tentativas");

const onClick = () => {
  const numeroEntrada = document.getElementById("valor").value;
  if (numeroEntrada == numeroAleatorio) {
    elementoResposta.innerHTML = `Parabéns, você acertou o número, e esse número é ${numeroAleatorio}! Você acertou na ${counter + 1}ª tentativa!`;
    counter = 0;
  } else if (numeroEntrada < 0 || numeroEntrada > 10) {
    elementoResposta.innerHTML = `Por favor, digite um número entre 0 e 10 para continuar!`;
  } else {
    counter++;
    elementoTentativas.innerHTML = `O número de tentativas é: ${counter}!`
    elementoResposta.innerHTML = `Você errou, tente novamente, dessa vez com outro número!`;
  }
};
