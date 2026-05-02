import base from "../../src/data/aerodromosCompletos.json" assert { type: "json" };

export async function handler() {
  try {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        sucesso: true,
        modo: "base-completa-local",
        mensagem: "Base completa carregada com sucesso.",
        atualizadoEm: new Date().toISOString(),
        total: Object.keys(base).length,
        aerodromos: base,
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