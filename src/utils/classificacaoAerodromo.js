const PASSAGEIROS_ESTIMADOS = {
  SBGR: 43000000,
  SBSP: 22000000,
  SBKP: 12000000,
  SBBR: 15000000,
  SBGL: 14000000,
  SBRJ: 10000000,
  SBCF: 12000000,
  SBGO: 3500000,
  SBSV: 9000000,
  SBPA: 8000000,
  SBEG: 7000000,
};

function normalizarTexto(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function numero(valor) {
  return Number(valor || 0) || 0;
}

export function classificarAerodromo(dados = {}) {
  const icao = String(dados.icao || "").toUpperCase();
  const tipoUso = normalizarTexto(dados.tipoUso || dados.uso);

  const passageirosAno =
    numero(dados.passageirosAno) > 0
      ? numero(dados.passageirosAno)
      : numero(PASSAGEIROS_ESTIMADOS[icao]);

  const comprimentoPista = numero(dados.comprimentoPista);
  const envergaduraMaxima = numero(dados.envergaduraMaxima);

  const tipoOperacaoAVSEC = Array.isArray(dados.tipoOperacaoAVSEC)
    ? dados.tipoOperacaoAVSEC
    : [dados.tipoOperacaoAVSEC];

  const operacoes = tipoOperacaoAVSEC.map(normalizarTexto);

  let rbac153 = "Não aplicável - Aeródromo privativo";
  let classe153 = 0;

  if (tipoUso.includes("publico")) {
    if (passageirosAno < 200000) {
      rbac153 = "Classe I";
      classe153 = 1;
    } else if (passageirosAno < 1000000) {
      rbac153 = "Classe II";
      classe153 = 2;
    } else if (passageirosAno < 5000000) {
      rbac153 = "Classe III";
      classe153 = 3;
    } else {
      rbac153 = "Classe IV";
      classe153 = 4;
    }
  }

  let codigoNumero = 1;
  if (comprimentoPista < 800) codigoNumero = 1;
  else if (comprimentoPista < 1200) codigoNumero = 2;
  else if (comprimentoPista < 1800) codigoNumero = 3;
  else codigoNumero = 4;

  let codigoLetra = "A";
  if (envergaduraMaxima < 15) codigoLetra = "A";
  else if (envergaduraMaxima < 24) codigoLetra = "B";
  else if (envergaduraMaxima < 36) codigoLetra = "C";
  else if (envergaduraMaxima < 52) codigoLetra = "D";
  else if (envergaduraMaxima < 65) codigoLetra = "E";
  else codigoLetra = "F";

  const temPassageiros = operacoes.includes("passageiros");
  const temInternacional = operacoes.includes("internacional");
  const temCarga = operacoes.includes("carga");
  const temDomestica = operacoes.includes("domestica");

  let rbac107 = "Não aplicável ou aplicabilidade reduzida";

  if (temPassageiros && temInternacional) {
    rbac107 = "Aplicável - Operação Internacional de Passageiros";
  } else if (temPassageiros && temDomestica) {
    rbac107 = "Aplicável - Operação Doméstica de Passageiros";
  } else if (temCarga) {
    rbac107 = "Aplicável - Operação de Carga";
  }

  return {
    RBAC_153: rbac153,
    RBAC_154: `Código ${codigoNumero}${codigoLetra}`,
    RBAC_107: rbac107,
    classe153,
    codigoNumero,
    codigoLetra,
    passageirosAno,
  };
}