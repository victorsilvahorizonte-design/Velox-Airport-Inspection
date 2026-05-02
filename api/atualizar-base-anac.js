import base from "../src/data/aerodromosCompletos.json";

export default function handler(req, res) {
  return res.status(200).json({
    sucesso: true,
    modo: "vercel-api-direta",
    atualizadoEm: new Date().toISOString(),
    total: Object.keys(base).length,
    aerodromos: base,
  });
}