import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const caminho = path.join(process.cwd(), "src", "data", "aerodromosCompletos.json");
    const conteudo = fs.readFileSync(caminho, "utf-8");
    const base = JSON.parse(conteudo);

    return res.status(200).json({
      sucesso: true,
      modo: "vercel-api",
      atualizadoEm: new Date().toISOString(),
      total: Object.keys(base).length,
      aerodromos: base,
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      erro: error.message,
    });
  }
}