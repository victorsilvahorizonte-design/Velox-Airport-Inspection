export async function atualizarBaseANAC() {
  const resposta = await fetch("/data/aerodromosCompletos.json");

  if (!resposta.ok) {
    throw new Error("Falha ao carregar base ANAC.");
  }

  const aerodromos = await resposta.json();

  return {
    sucesso: true,
    modo: "json-publico",
    atualizadoEm: new Date().toISOString(),
    total: Object.keys(aerodromos).length,
    aerodromos: aerodromos,
  };
}