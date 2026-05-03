// src/data/normas.js

import RBAC153 from "./rbac153";
import RBAC154 from "./rbac154";

export const NORMAS = {
  RBAC153: {
    nome: "RBAC 153 - Emenda 09",
    descricao: "Aeródromos: operação, manutenção e resposta à emergência",
    itens: Array.isArray(RBAC153) ? RBAC153 : [],
  },

  RBAC154: {
    nome: "RBAC 154 - Emenda 08",
    descricao: "Projeto de aeródromos",
    itens: Array.isArray(RBAC154) ? RBAC154 : [],
  },
};

export default NORMAS;