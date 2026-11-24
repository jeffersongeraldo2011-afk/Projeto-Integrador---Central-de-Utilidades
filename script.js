function calcularDesconto() {
  const valorOriginal = parseFloat(prompt("Digite o valor original do produto (ex: 100):"));
  const percentualDesconto = parseFloat(prompt("Digite a porcentagem de desconto (ex: 15):"));

  if (isNaN(valorOriginal) || isNaN(percentualDesconto) || valorOriginal <= 0 || percentualDesconto < 0) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  const valorDesconto = (valorOriginal * percentualDesconto) / 100;
  const valorFinal = valorOriginal - valorDesconto;

  alert(
    `--- Calculadora de Descontos ---\n` +
    `Valor original: R$ ${valorOriginal.toFixed(2)}\n` +
    `Desconto (${percentualDesconto}%): R$ ${valorDesconto.toFixed(2)}\n` +
    `Valor final a pagar: R$ ${valorFinal.toFixed(2)}`
  );
}

function iniciar() {
  const opcao = prompt(
    "Escolha uma ferramenta:\n1 - Descontos\n2 - Parcelas\n3 - Investimentos\n4 - Despesas"
  );

  if (opcao === "1") {
    calcularDesconto();
  } else if (opcao === "2") {
    alert("Calculadora de Parcelas (em breve)");
  } else if (opcao === "3") {
    alert("Simulador de Investimentos (em breve)");
  } else if (opcao === "4") {
    alert("Divisor de Despesas (em breve)");
  } else {
    alert("Opção inválida.");
  }
}

document.getElementById("btnIniciar").addEventListener("click", iniciar);