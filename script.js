// Tabela de ácidos fracos
const tabelaAcidos = {
    "acido1": {
      nome: "Ácido Acético",
      Ka: 1.8e-5
    },
    "acido2": {
      nome: "Ácido Fórmico",
      Ka: 1.8e-4
    },
    "acido3": {
      nome: "Ácido Cianídrico",
      Ka: 4.9e-10
    },
    "acido4": {
      nome: "Ácido Sulfuroso",
      Ka1: 1.0e-2,
      Ka2: 6.3e-8
    },
    "acido5": {
      nome: "Ácido Carbônico",
      Ka1: 4.3e-7,
      Ka2: 5.6e-11
    },
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
    } else if ("Ka1" in acid && "Ka2" in acid) {
      const Ka1 = acid.Ka1;
      const Ka2 = acid.Ka2;
      const concentracaoMolar = concentracao;
      const Ka1Concentrado = Ka1 * concentracaoMolar;
      const Ka2Concentrado = Ka2 * concentracaoMolar;
      pH = 0.5 * (-Math.log10(Ka1Concentrado) - Math.log10(Ka2Concentrado));
    }
  
    document.getElementById("result").textContent = `O pH do ${nomeAcido} (${concentracao} mol/L) é ${pH.toFixed(2)}.`;
  }
  