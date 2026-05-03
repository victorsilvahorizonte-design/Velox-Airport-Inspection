// src/utils/aplicabilidade.js

const ORDEM_LETRAS = ["A", "B", "C", "D", "E", "F"];

function normalizarLetra(letra) {
  return String(letra || "A").trim().toUpperCase();
}

function valorBooleano(valor) {
  return valor === true || valor === "true" || valor === "SIM" || valor === "sim";
}

function letraAtende(letraAtual, letraMinima) {
  if (!letraMinima) return true;

  const atual = ORDEM_LETRAS.indexOf(normalizarLetra(letraAtual));
  const minima = ORDEM_LETRAS.indexOf(normalizarLetra(letraMinima));

  if (atual === -1 || minima === -1) return true;

  return atual >= minima;
}

export function verificarAplicabilidade(item = {}, config = {}) {
  try {
    const aplicabilidade = item.aplicabilidade || {};

    const letraAtual =
      config.letraCodigo ||
      config.codigoReferencia ||
      config.classificacao ||
      "A";

    if (
      aplicabilidade.letraMinima &&
      !letraAtende(letraAtual, aplicabilidade.letraMinima)
    ) {
      return {
        aplicavel: false,
        motivo: `Aplicável somente para letra ${aplicabilidade.letraMinima} ou superior.`,
      };
    }

    if (
      aplicabilidade.internacional === true &&
      !valorBooleano(config.internacional)
    ) {
      return {
        aplicavel: false,
        motivo: "Aplicável somente a aeródromo internacional.",
      };
    }

    if (
      aplicabilidade.noturno === true &&
      !valorBooleano(config.operacaoNoturna)
    ) {
      return {
        aplicavel: false,
        motivo: "Aplicável somente a aeródromo com operação noturna.",
      };
    }

    if (
      aplicabilidade.ifr === true &&
      !valorBooleano(config.operacaoIFR)
    ) {
      return {
        aplicavel: false,
        motivo: "Aplicável somente a aeródromo com operação IFR.",
      };
    }

    if (
      aplicabilidade.passageiros === true &&
      !valorBooleano(config.processaPassageiros)
    ) {
      return {
        aplicavel: false,
        motivo: "Aplicável somente a aeródromo com processamento de passageiros.",
      };
    }

    if (
      aplicabilidade.carga === true &&
      !valorBooleano(config.processaCarga)
    ) {
      return {
        aplicavel: false,
        motivo: "Aplicável somente a aeródromo com processamento de carga.",
      };
    }

    return {
      aplicavel: true,
      motivo: "Item aplicável aos parâmetros informados.",
    };
  } catch (error) {
    console.error("Erro em verificarAplicabilidade:", error, item, config);

    return {
      aplicavel: true,
      motivo: "Aplicabilidade não definida. Item mantido como aplicável por segurança.",
    };
  }
}