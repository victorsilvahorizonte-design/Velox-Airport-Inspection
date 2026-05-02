const fs = require("fs");
const path = require("path");

const caminhoSaida = path.join(__dirname, "../src/data/aerodromosCompletos.json");

function gerarAerodromos() {
  const base = {};

  const lista = [
    { icao: "SBGR", nome: "Guarulhos", cidade: "Guarulhos", uf: "SP", pista: 3700, pax: 43000000 },
    { icao: "SBBR", nome: "Brasília", cidade: "Brasília", uf: "DF", pista: 3300, pax: 15000000 },
    { icao: "SBGO", nome: "Goiânia", cidade: "Goiânia", uf: "GO", pista: 2500, pax: 3500000 }
  ];

  lista.forEach(a => {
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
      tipoOperacaoAVSEC: ["doméstica", "passageiros"],
      taxiway: true,
      patio: true,
      pavimentado: true,
      sistemaEletrico: true,
      operacaoNoturna: true
    };
  });

  return base;
}

const base = gerarAerodromos();

fs.writeFileSync(caminhoSaida, JSON.stringify(base, null, 2), "utf-8");

console.log("✅ Base básica gerada!");