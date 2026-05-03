import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminhoSaida = path.resolve(
  __dirname,
  "../public/data/aerodromosCompletos.json"
);

function definirCodigoReferencia(comprimentoPista) {
  if (comprimentoPista >= 1800) return { numero: 4, letra: "E" };
  if (comprimentoPista >= 1200) return { numero: 3, letra: "C" };
  if (comprimentoPista >= 800) return { numero: 2, letra: "B" };
  return { numero: 1, letra: "A" };
}

function gerarBaseCompleta() {
  const base = {};

  const aeroportos = [
    { icao: "SBGR", nome: "Guarulhos", cidade: "Guarulhos", uf: "SP", pista: 3700, pax: 43000000 },
    { icao: "SBSP", nome: "Congonhas", cidade: "Sao Paulo", uf: "SP", pista: 1940, pax: 22000000 },
    { icao: "SBKP", nome: "Viracopos", cidade: "Campinas", uf: "SP", pista: 3240, pax: 12000000 },
    { icao: "SBBR", nome: "Brasilia", cidade: "Brasilia", uf: "DF", pista: 3300, pax: 15000000 },
    { icao: "SBGO", nome: "Goiania", cidade: "Goiania", uf: "GO", pista: 2500, pax: 3500000 }
  ];

  aeroportos.forEach((a) => {
    const codigo = definirCodigoReferencia(a.pista);

    base[a.icao] = {
      icao: a.icao,
      nome: "Aeroporto " + a.nome,
      cidade: a.cidade,
      uf: a.uf,
      uso: "Publico",
      usoPublico: true,
      operacao: "IFR",
      tipoOperacao: "IFR",
      passageirosAno: a.pax,
      comprimentoPista: a.pista,
      codigoNumero: codigo.numero,
      codigoLetra: codigo.letra,
      envergaduraMaxima: codigo.numero >= 4 ? 65 : 36,
      tipoAeronave: codigo.numero >= 4 ? "grandes" : "medias",
      tipoOperacaoAVSEC: ["domestica", "internacional", "passageiros", "carga"],
      pista: true,
      taxiway: true,
      patio: true,
      pavimentado: true,
      sistemaEletrico: true,
      operacaoNoturna: true,
      baixaVisibilidade: true,
      internacional: a.pax > 10000000,
      possuiSinalizacaoLuminosa: true,
      possuiBalizas: true,
      possuiObstaculos: true,
      possuiAreaInterditada: false,
      possuiAreaSemSuporte: false,
      possuiAreaAntesCabeceira: false,
      possuiAreaForaServico: false,
      possuiPontoTesteAltimetro: true
    };
  });

  return base;
}

const base = gerarBaseCompleta();

fs.writeFileSync(caminhoSaida, JSON.stringify(base, null, 2), "utf-8");

console.log("Base completa gerada com sucesso: " + Object.keys(base).length + " aerodromos.");
console.log("Arquivo atualizado em public/data/aerodromosCompletos.json");