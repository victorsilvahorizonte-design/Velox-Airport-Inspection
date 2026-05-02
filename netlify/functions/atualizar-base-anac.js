export async function handler() {
  try {
    const baseFallback = {
      SBGO: {
        icao: "SBGO",
        nome: "Aeroporto Internacional de Goiânia - Santa Genoveva",
        cidade: "Goiânia",
        uf: "GO",
        uso: "Público",
        operacao: "IFR",
        passageirosAno: 3500000,
        comprimentoPista: 2500,
        envergaduraMaxima: 52,
        tipoAeronave: "grandes",
        tipoOperacaoAVSEC: ["doméstica", "internacional", "passageiros", "carga"],
        taxiway: true,
        patio: true,
        pavimentado: true,
        sistemaEletrico: true,
        operacaoNoturna: true,
      },
      SBBR: {
        icao: "SBBR",
        nome: "Aeroporto Internacional de Brasília",
        cidade: "Brasília",
        uf: "DF",
        uso: "Público",
        operacao: "IFR",
        passageirosAno: 15000000,
        comprimentoPista: 3300,
        envergaduraMaxima: 65,
        tipoAeronave: "grandes",
        tipoOperacaoAVSEC: ["doméstica", "internacional", "passageiros", "carga"],
        taxiway: true,
        patio: true,
        pavimentado: true,
        sistemaEletrico: true,
        operacaoNoturna: true,
      },
      SBGR: {
        icao: "SBGR",
        nome: "Aeroporto Internacional de São Paulo - Guarulhos",
        cidade: "Guarulhos",
        uf: "SP",
        uso: "Público",
        operacao: "IFR",
        passageirosAno: 43000000,
        comprimentoPista: 3700,
        envergaduraMaxima: 65,
        tipoAeronave: "grandes",
        tipoOperacaoAVSEC: ["doméstica", "internacional", "passageiros", "carga"],
        taxiway: true,
        patio: true,
        pavimentado: true,
        sistemaEletrico: true,
        operacaoNoturna: true,
      },
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        sucesso: true,
        modo: "fallback-preparado",
        mensagem:
          "Função Netlify configurada. Próxima etapa: conectar URLs oficiais da ANAC.",
        atualizadoEm: new Date().toISOString(),
        total: Object.keys(baseFallback).length,
        aerodromos: baseFallback,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        sucesso: false,
        erro: error.message,
      }),
    };
  }
}