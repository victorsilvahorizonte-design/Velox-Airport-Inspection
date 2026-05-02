import { AERODROMOS_BRASIL } from "../data/aerodromosBrasil";

export function buscarAerodromoPorICAO(icao) {
  if (!icao) return null;

  const codigo = String(icao).trim().toUpperCase();

  const aerodromo = AERODROMOS_BRASIL[codigo];

  if (!aerodromo) {
    return null;
  }

  return aerodromo;
}