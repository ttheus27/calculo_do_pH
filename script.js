// Tabela de ácidos fracos
const tabelaAcidos = {
  "acido1": {
    nome: "Ácido Acético",
    Ka: 1.8e-5
  },
  "acido2": {
    nome: "Ácido Benzóico",
    Ka: 6.2e-6
  },
  "acido3": {
    nome: "Ácido Cítrico",
    Ka: 4.0e-7
  },
  "acido4": {
    nome: "Ácido Carbônico",
    Ka1: 4.3e-7,
    Ka2: 4.8e-11
  },
  "acido5": {
    nome: "Ácido Fórmico",
    Ka: 6.3e-6
  },
  "acido6": {
    nome: "Ácido Fosfórico",
    Ka1: 7.1e-3,
    Ka2: 6.3e-8,
    Ka3: 4.8e-13
  }
  // Adicione mais ácidos conforme necessário
};

// Função para calcular o pH do ácido selecionado com base na concentração
function calcularpH() {
  const acidoSelecionado = document.getElementById("acido").value;
  const concentracao = parseFloat(document.getElementById("concentracao").value);
  
  if (isNaN(concentracao) || concentracao <= 0) {
    alert("Por favor, insira uma concentração válida.");
    return;
  }

  const acid = tabelaAcidos[acidoSelecionado];
  const nomeAcido = acid.nome;

  let pH;

  if ("Ka" in acid) {
    const Ka = acid.Ka;
    const concentracaoMolar = concentracao;
    const KaConcentrado = Ka * concentracaoMolar;
    pH = -Math.log10(KaConcentrado);
  } else if ("Ka1" in acid && "Ka2" in acid && "Ka3" in acid) {
    const Ka1 = acid.Ka1;
    const Ka2 = acid.Ka2;
    const Ka3 = acid.Ka3;
    const concentracaoMolar = concentracao;

    const H3O_concentrado = Math.sqrt(Ka1 * Ka2 * Ka3) * concentracaoMolar / (Math.sqrt(Ka1 * Ka2) + Math.sqrt(Ka2 * Ka3) + Math.sqrt(Ka3 * Ka1));

    pH = -Math.log10(H3O_concentrado);
  }

  document.getElementById("result").textContent = `O pH do ${nomeAcido} (${concentracao} mol/L) é ${pH.toFixed(2)}.`;
}
