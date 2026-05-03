import React, { useMemo, useState } from "react";
import "./App.css";

import { NORMAS } from "./data/normas";
import { CONFIG_INICIAL_RBAC154 } from "./data/configuracaoAerodromo";
import { verificarAplicabilidade } from "./utils/aplicabilidade";

export default function App() {
  const [normaSelecionada, setNormaSelecionada] = useState("RBAC154");
  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("TODOS");
  const [subparteFiltro, setSubparteFiltro] = useState("TODAS");
  const [configAerodromo, setConfigAerodromo] = useState(CONFIG_INICIAL_RBAC154);

  const normaAtual = NORMAS?.[normaSelecionada] || {
    nome: "Norma não encontrada",
    descricao: "",
    itens: [],
  };

  const itensNorma = Array.isArray(normaAtual.itens) ? normaAtual.itens : [];

  const itensProcessados = useMemo(() => {
    return itensNorma.map((item, index) => {
      const resultado = verificarAplicabilidade(item, configAerodromo);

      return {
        ...item,
        id: item.id || item.item || `ITEM-${index + 1}`,
        item: item.item || item.id || `ITEM-${index + 1}`,
        titulo: item.titulo || item.nome || "Requisito sem título",
        descricao:
          item.descricao ||
          item.descricaoRequisito ||
          item.requisito ||
          "Descrição não informada.",
        criterio:
          item.criterio ||
          item.criterioConformidade ||
          "Verificar conformidade conforme requisito regulamentar.",
        evidencia:
          item.evidencia ||
          item.evidencias ||
          item.evidenciasEsperadas ||
          "Registros, documentos, inspeção visual, entrevistas e evidências operacionais.",
        risco:
          item.risco ||
          item.riscoAssociado ||
          "Risco regulatório, operacional ou de segurança pela não conformidade.",
        subparte: item.subparte || item.capitulo || "Sem subparte",
        aplicavel: resultado.aplicavel,
        motivoAplicabilidade: resultado.motivo,
      };
    });
  }, [itensNorma, configAerodromo]);

  const subpartes = useMemo(() => {
    const lista = itensProcessados.map((item) => item.subparte).filter(Boolean);
    return ["TODAS", ...Array.from(new Set(lista))];
  }, [itensProcessados]);

  const itensFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return itensProcessados.filter((item) => {
      const texto = `
        ${item.item}
        ${item.titulo}
        ${item.descricao}
        ${item.criterio}
        ${item.evidencia}
        ${item.risco}
        ${item.subparte}
      `.toLowerCase();

      const passaBusca = !termo || texto.includes(termo);

      const passaStatus =
        statusFiltro === "TODOS" ||
        (statusFiltro === "APLICAVEL" && item.aplicavel) ||
        (statusFiltro === "NAO_APLICAVEL" && !item.aplicavel);

      const passaSubparte =
        subparteFiltro === "TODAS" || item.subparte === subparteFiltro;

      return passaBusca && passaStatus && passaSubparte;
    });
  }, [busca, statusFiltro, subparteFiltro, itensProcessados]);

  const totalItens = itensProcessados.length;
  const totalAplicaveis = itensProcessados.filter((item) => item.aplicavel).length;
  const totalNaoAplicaveis = itensProcessados.filter((item) => !item.aplicavel).length;

  function atualizarConfig(campo, valor) {
    setConfigAerodromo((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  }

  return (
    <div className="app">
      <header className="topo">
        <div>
          <h1>Velox Airport Inspection</h1>
          <p>Sistema inteligente de checklist regulatório aeroportuário</p>
        </div>

        <div className="topo-badge">
          <strong>{normaAtual.nome}</strong>
          <span>{normaAtual.descricao}</span>
        </div>
      </header>

      <main className="layout">
        <aside className="painel">
          <section className="card">
            <h2>Norma</h2>

            <label>
              Selecione a norma
              <select
                value={normaSelecionada}
                onChange={(e) => {
                  setNormaSelecionada(e.target.value);
                  setBusca("");
                  setStatusFiltro("TODOS");
                  setSubparteFiltro("TODAS");
                }}
              >
                {Object.keys(NORMAS || {}).map((chave) => (
                  <option key={chave} value={chave}>
                    {NORMAS[chave]?.nome || chave}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className="card">
            <h2>Configuração do Aeródromo</h2>

            <label>
              Nome do aeródromo
              <input
                type="text"
                value={configAerodromo.nomeAerodromo || ""}
                onChange={(e) => atualizarConfig("nomeAerodromo", e.target.value)}
                placeholder="Ex.: Aeroporto Regional"
              />
            </label>

            <label>
              Código ICAO
              <input
                type="text"
                value={configAerodromo.codigoICAO || ""}
                onChange={(e) =>
                  atualizarConfig("codigoICAO", e.target.value.toUpperCase())
                }
                placeholder="Ex.: SWBC"
              />
            </label>

            <label>
              Letra do código de referência
              <select
                value={configAerodromo.letraCodigo || "A"}
                onChange={(e) => atualizarConfig("letraCodigo", e.target.value)}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </label>

            <div className="checks">
              <label>
                <input
                  type="checkbox"
                  checked={!!configAerodromo.internacional}
                  onChange={(e) =>
                    atualizarConfig("internacional", e.target.checked)
                  }
                />
                Internacional
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={!!configAerodromo.operacaoNoturna}
                  onChange={(e) =>
                    atualizarConfig("operacaoNoturna", e.target.checked)
                  }
                />
                Operação noturna
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={!!configAerodromo.operacaoIFR}
                  onChange={(e) => atualizarConfig("operacaoIFR", e.target.checked)}
                />
                Operação IFR
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={!!configAerodromo.processaPassageiros}
                  onChange={(e) =>
                    atualizarConfig("processaPassageiros", e.target.checked)
                  }
                />
                Processa passageiros
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={!!configAerodromo.processaCarga}
                  onChange={(e) => atualizarConfig("processaCarga", e.target.checked)}
                />
                Processa carga
              </label>
            </div>
          </section>

          <section className="card">
            <h2>Resumo</h2>

            <div className="resumo">
              <div>
                <strong>{totalItens}</strong>
                <span>Total</span>
              </div>

              <div>
                <strong>{totalAplicaveis}</strong>
                <span>Aplicáveis</span>
              </div>

              <div>
                <strong>{totalNaoAplicaveis}</strong>
                <span>Não aplicáveis</span>
              </div>
            </div>
          </section>
        </aside>

        <section className="conteudo">
          <section className="filtros">
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por item, descrição, critério, evidência ou risco..."
            />

            <select
              value={statusFiltro}
              onChange={(e) => setStatusFiltro(e.target.value)}
            >
              <option value="TODOS">Todos os status</option>
              <option value="APLICAVEL">Somente aplicáveis</option>
              <option value="NAO_APLICAVEL">Somente não aplicáveis</option>
            </select>

            <select
              value={subparteFiltro}
              onChange={(e) => setSubparteFiltro(e.target.value)}
            >
              {subpartes.map((subparte) => (
                <option key={subparte} value={subparte}>
                  {subparte}
                </option>
              ))}
            </select>
          </section>

          <section className="resultado-info">
            <strong>{itensFiltrados.length}</strong> itens encontrados
          </section>

          <section className="lista-itens">
            {itensFiltrados.length === 0 ? (
              <div className="vazio">
                Nenhum item encontrado para os filtros selecionados.
              </div>
            ) : (
              itensFiltrados.map((item, index) => (
                <article
                  key={`${item.item}-${index}`}
                  className={`item-card ${item.aplicavel ? "aplicavel" : "nao-aplicavel"}`}
                >
                  <div className="item-header">
                    <div>
                      <span className="item-codigo">{item.item}</span>
                      <h3>{item.titulo}</h3>
                    </div>

                    <span
                      className={`status ${item.aplicavel ? "ok" : "nao"}`}
                    >
                      {item.aplicavel ? "Aplicável" : "Não aplicável"}
                    </span>
                  </div>

                  <p className="subparte">
                    <strong>Subparte:</strong> {item.subparte}
                  </p>

                  <div className="bloco">
                    <strong>Descrição do requisito</strong>
                    <p>{item.descricao}</p>
                  </div>

                  <div className="bloco">
                    <strong>Critério de conformidade</strong>
                    <p>{item.criterio}</p>
                  </div>

                  <div className="bloco">
                    <strong>Evidências esperadas</strong>
                    <p>{item.evidencia}</p>
                  </div>

                  <div className="bloco">
                    <strong>Risco associado</strong>
                    <p>{item.risco}</p>
                  </div>

                  <div className="motivo">
                    <strong>Aplicabilidade:</strong> {item.motivoAplicabilidade}
                  </div>
                </article>
              ))
            )}
          </section>
        </section>
      </main>
    </div>
  );
}