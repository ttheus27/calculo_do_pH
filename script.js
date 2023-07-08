// Função para calcular o pH de um ácido fraco
function calcularpH() {
  // Obter os valores dos campos
  let acido = document.getElementById("acido").value;
  let concentracao = Number(document.getElementById("concentracao").value);
  
  // Verificar se a concentração é válida
  if (isNaN(concentracao) || concentracao < 0.1 || concentracao > 20) {
  // Mostrar uma mensagem de erro
  document.getElementById("result").innerHTML = "Por favor, digite uma concentração válida entre 0,1 e 20.";
  return;
  }
  
  // Obter os dados do ácido da tabela
  let tabela = [
  { nome: "ácido acético", ka: 1.8e-5 },
  { nome: "ácido benzóico", ka: 6.2e-6 },
  { nome: "ácido cítrico", ka: 4.0e-7 },
  { nome: "ácido carbônico", ka: 4.8e-11 },
  { nome: "ácido fórmico", ka: 6.3e-6 },
  { nome: "ácido fosfórico", ka: 3.6e-13 }
  ];
  
  // Verificar qual ácido foi escolhido
  let indice = acido.slice(-1) - 1;
  
  // Obter o ácido correspondente à escolha
  let dados = tabela[indice];
  
  // Calcular o valor de x usando a aproximação
  let x = Math.sqrt(concentracao * dados.ka);
  
  // Calcular o pH usando a equação do pH
  let ph = -Math.log10(x);
  
  // Mostrar o resultado na tela
  document.getElementById("result").innerHTML = `O pH de uma solução de ${dados.nome} ${concentracao} M é ${ph.toFixed(2)}`;
  }