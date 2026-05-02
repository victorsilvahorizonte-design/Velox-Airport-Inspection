import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminhoSaida = path.resolve(__dirname, "../src/data/aerodromosCompletos.json");

function gerarBaseCompleta() {
  const base = {};

  const aeroportos = [
    { icao: "SBGR", nome: "Guarulhos", cidade: "Guarulhos", uf: "SP", pista: 3700, pax: 43000000 },
    { icao: "SBSP", nome: "Congonhas", cidade: "São Paulo", uf: "SP", pista: 1940, pax: 22000000 },
    { icao: "SBKP", nome: "Viracopos", cidade: "Campinas", uf: "SP", pista: 3240, pax: 12000000 },
    { icao: "SBBR", nome: "Brasília", cidade: "Brasília", uf: "DF", pista: 3300, pax: 15000000 },
    { icao: "SBGO", nome: "Goiânia", cidade: "Goiânia", uf: "GO", pista: 2500, pax: 3500000 },
    { icao: "SBGL", nome: "Galeão", cidade: "Rio de Janeiro", uf: "RJ", pista: 4000, pax: 14000000 },
    { icao: "SBRJ", nome: "Santos Dumont", cidade: "Rio de Janeiro", uf: "RJ", pista: 1323, pax: 9000000 },
    { icao: "SBCF", nome: "Confins", cidade: "Belo Horizonte", uf: "MG", pista: 3000, pax: 10000000 },
    { icao: "SBPA", nome: "Porto Alegre", cidade: "Porto Alegre", uf: "RS", pista: 3200, pax: 8000000 },
    { icao: "SBFL", nome: "Florianópolis", cidade: "Florianópolis", uf: "SC", pista: 2400, pax: 4000000 },
  ];

  aeroportos.forEach((a) => {
    base[a.icao] = {
      icao: a.icao,
      nome: `Aeroporto ${a.nome}`,
      cidade: a.cidade,
      uf: a.uf,
      uso: "Público",
      operacao: "IFR",
      passageirosAno: a.pax,
      comprimentoPista: a.pista,
      envergaduraMaxima: a.pista > 3000 ? 65 : 52,
      tipoAeronave: a.pista > 3000 ? "grandes" : "médias",
      tipoOperacaoAVSEC: ["doméstica", "internacional", "passageiros", "carga"],
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

console.log(`✅ Base completa gerada com sucesso: ${Object.keys(base).length} aeródromos.`);
console.log("📁 Arquivo atualizado em src/data/aerodromosCompletos.json");