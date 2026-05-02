import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminhoSaida = path.resolve(
  __dirname,
  "../src/data/aerodromosCompletos.json"
);

function gerarBaseCompleta() {
  const base = {};

  const aeroportos = [
    ["SBGR", "Guarulhos", "SP", 43000000, 3700, 65],
    ["SBSP", "Congonhas", "SP", 22000000, 1940, 36],
    ["SBKP", "Viracopos", "SP", 12000000, 3240, 65],
    ["SBBR", "Brasília", "DF", 15000000, 3300, 65],
    ["SBGO", "Goiânia", "GO", 3500000, 2500, 52],
  ];

  aeroportos.forEach(([icao, cidade, uf, pax, pista, envergadura]) => {
    base[icao] = {
      icao,
      nome: `Aeroporto de ${cidade}`,
      cidade,
      uf,
      uso: "Público",
      operacao: "IFR",
      passageirosAno: pax,
      comprimentoPista: pista,
      envergaduraMaxima: envergadura,
      tipoAeronave: pista >= 1800 ? "grandes" : "médias",
      tipoOperacaoAVSEC: ["doméstica", "passageiros"],
      taxiway: true,
      patio: true,
      pavimentado: true,
      sistemaEletrico: true,
      operacaoNoturna: true,
    };
  });

  return base;
}

const base = gerarBaseCompleta();

fs.writeFileSync(caminhoSaida, JSON.stringify(base, null, 2), "utf-8");

console.log("✅ BASE GERADA COM SUCESSO!");
console.log("📁 Caminho:", caminhoSaida);