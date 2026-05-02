export const RBAC153 = [

    // =========================
    // SUBPARTE A — GERAL
    // =========================
  
    {
      ref: "153.1",
      subparte: "Subparte A - Geral",
      itemVerificavel: "O aeródromo opera sob certificado válido emitido pela ANAC",
      criterio: "Certificado de aeródromo válido conforme RBAC 153",
      evidencias: "Certificado ANAC vigente, publicação oficial",
      risco: "Operação irregular sujeita à interdição",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.3",
      subparte: "Subparte A - Geral",
      itemVerificavel: "O operador do aeródromo está formalmente designado",
      criterio: "Existência de operador legalmente responsável",
      evidencias: "Contrato de concessão ou ato administrativo",
      risco: "Falta de responsabilidade operacional definida",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.5",
      subparte: "Subparte A - Geral",
      itemVerificavel: "O operador cumpre integralmente os requisitos do RBAC 153",
      criterio: "Atendimento às exigências normativas aplicáveis",
      evidencias: "Registros, auditorias, evidências operacionais",
      risco: "Não conformidade regulatória",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.7",
      subparte: "Subparte A - Geral",
      itemVerificavel: "Existe estrutura organizacional definida para operação aeroportuária",
      criterio: "Organograma formalizado e implantado",
      evidencias: "Organograma, descrição de cargos",
      risco: "Falta de controle operacional",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.9",
      subparte: "Subparte A - Geral",
      itemVerificavel: "Responsabilidades e atribuições estão claramente definidas",
      criterio: "Designação formal de funções operacionais",
      evidencias: "Documentos internos, contratos",
      risco: "Falhas operacionais por indefinição de responsabilidades",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // SUBPARTE B — OPERADOR DE AERÓDROMO
    // =========================
  
    {
      ref: "153.101",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Manual de Operações do Aeródromo (MOPS) existe e está aprovado",
      criterio: "Manual aprovado pela ANAC e disponível",
      evidencias: "MOPS aprovado",
      risco: "Operação sem padronização",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.103",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Manual de Operações está atualizado",
      criterio: "Revisões periódicas implementadas",
      evidencias: "Controle de revisões",
      risco: "Uso de procedimentos desatualizados",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.105",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Manual de Operações é divulgado e conhecido pelos envolvidos",
      criterio: "Treinamento e divulgação comprovados",
      evidencias: "Lista de presença, treinamentos",
      risco: "Execução incorreta de procedimentos",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.107",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "O operador garante recursos adequados à operação",
      criterio: "Disponibilidade de pessoal, equipamentos e infraestrutura",
      evidencias: "Registros operacionais",
      risco: "Falha operacional por falta de recursos",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.109",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Existe sistema de controle operacional do aeródromo",
      criterio: "Monitoramento contínuo das operações",
      evidencias: "Centro operacional, registros",
      risco: "Perda de controle operacional",
      criticidade: "CRÍTICO",
      classeMinima: 2
    },
  
    {
      ref: "153.111",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Procedimentos para inspeções operacionais estão definidos",
      criterio: "Rotinas de inspeção formalizadas",
      evidencias: "Checklists, relatórios",
      risco: "Riscos não identificados",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.113",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Inspeções são realizadas conforme frequência definida",
      criterio: "Cumprimento de periodicidade",
      evidencias: "Registros de inspeção",
      risco: "Falhas não detectadas",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.115",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Registros operacionais são mantidos e controlados",
      criterio: "Sistema de registro implantado",
      evidencias: "Logs, relatórios",
      risco: "Falta de rastreabilidade",
      criticidade: "ALTO",
      classeMinima: 1
    }
  
  ];
  // =========================
// PARTE 2 — SUBPARTE B REAL
// OPERADOR DE AERÓDROMO
// =========================

RBAC153.push(
    {
      ref: "153.13",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Verificar se o operador do aeródromo está formalmente identificado e responsável pela operação.",
      criterio: "Deve existir identificação clara do operador responsável pelo aeródromo.",
      evidencias: "Cadastro ANAC, contrato, ato de delegação, documento societário ou administrativo.",
      risco: "Ausência de responsável legal e operacional pelo aeródromo.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos públicos conforme classificação."
    },
  
    {
      ref: "153.13(a)",
      subparte: "Subparte B - Operador de Aeródromo",
      itemVerificavel: "Verificar se o operador possui estrutura mínima para cumprir o RBAC 153.",
      criterio: "O operador deve demonstrar capacidade técnica, administrativa e operacional.",
      evidencias: "Organograma, equipe, contratos, procedimentos e registros operacionais.",
      risco: "Operação sem suporte técnico adequado.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme porte e classe do aeródromo."
    },
  
    {
      ref: "153.15",
      subparte: "Subparte B - Responsáveis Operacionais",
      itemVerificavel: "Verificar se há responsáveis operacionais formalmente designados.",
      criterio: "As funções críticas devem possuir responsáveis formalmente nomeados.",
      evidencias: "Portarias, designações, contratos, matriz de responsabilidades.",
      risco: "Falha de comando e tomada de decisão operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os aeródromos públicos."
    },
  
    {
      ref: "153.15(a)",
      subparte: "Subparte B - Responsáveis Operacionais",
      itemVerificavel: "Verificar se existe gestor responsável pelo aeródromo.",
      criterio: "Deve haver pessoa responsável pela gestão geral da operação aeroportuária.",
      evidencias: "Designação formal do gestor responsável.",
      risco: "Ausência de autoridade para garantir conformidade regulatória.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Obrigatório conforme classificação do aeródromo."
    },
  
    {
      ref: "153.15(b)",
      subparte: "Subparte B - Responsáveis Operacionais",
      itemVerificavel: "Verificar se existe responsável pelo gerenciamento da segurança operacional.",
      criterio: "Deve haver responsável designado para SGSO ou PGSO, conforme aplicável.",
      evidencias: "Designação formal, currículo, treinamento e atribuições.",
      risco: "Riscos operacionais sem coordenação ou acompanhamento.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme exigência de SGSO ou PGSO."
    },
  
    {
      ref: "153.15(c)",
      subparte: "Subparte B - Responsáveis Operacionais",
      itemVerificavel: "Verificar se existe responsável pela operação aeroportuária.",
      criterio: "A operação diária deve possuir responsável técnico-operacional definido.",
      evidencias: "Escalas, designação, procedimentos e registros de decisão.",
      risco: "Falhas na coordenação da área operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com operação regular."
    },
  
    {
      ref: "153.15(d)",
      subparte: "Subparte B - Responsáveis Operacionais",
      itemVerificavel: "Verificar se existe responsável pela manutenção aeroportuária.",
      criterio: "A manutenção da infraestrutura deve possuir responsável definido.",
      evidencias: "Designação, plano de manutenção, ordens de serviço e registros.",
      risco: "Degradação da infraestrutura sem controle técnico.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com infraestrutura operacional."
    },
  
    {
      ref: "153.15(e)",
      subparte: "Subparte B - Responsáveis Operacionais",
      itemVerificavel: "Verificar se existe responsável pela resposta à emergência aeroportuária.",
      criterio: "O sistema de emergência deve possuir coordenação responsável.",
      evidencias: "Designação formal, plano de emergência, contatos e escalas.",
      risco: "Resposta descoordenada em emergência aeronáutica.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme estrutura de emergência exigida."
    },
  
    {
      ref: "153.23",
      subparte: "Subparte B - Gestor Responsável",
      itemVerificavel: "Verificar se o gestor responsável garante recursos para operação segura.",
      criterio: "O gestor deve assegurar recursos humanos, materiais e financeiros adequados.",
      evidencias: "Orçamento, contratos, registros de aquisição, atas e planos.",
      risco: "Operação sem recursos mínimos para segurança.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os aeródromos certificados ou cadastrados."
    },
  
    {
      ref: "153.23(a)",
      subparte: "Subparte B - Gestor Responsável",
      itemVerificavel: "Verificar se o gestor acompanha a conformidade regulatória do aeródromo.",
      criterio: "Deve existir rotina de acompanhamento de requisitos ANAC.",
      evidencias: "Auditorias internas, checklists, planos de ação e atas de análise crítica.",
      risco: "Descumprimento regulatório recorrente.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme classe do aeródromo."
    },
  
    {
      ref: "153.23(b)",
      subparte: "Subparte B - Gestor Responsável",
      itemVerificavel: "Verificar se o gestor assegura comunicação com a ANAC quando necessário.",
      criterio: "Comunicações regulatórias devem ser formais, rastreáveis e tempestivas.",
      evidencias: "Protocolos, ofícios, e-mails oficiais e registros de atendimento.",
      risco: "Falta de comunicação com autoridade aeronáutica.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver alterações, eventos ou exigências."
    },
  
    {
      ref: "153.25",
      subparte: "Subparte B - Responsável pela Segurança Operacional",
      itemVerificavel: "Verificar se o responsável pelo SGSO/PGSO possui atribuições documentadas.",
      criterio: "As atribuições devem estar formalizadas e compatíveis com o RBAC 153.",
      evidencias: "Descrição de função, designação, matriz de responsabilidades.",
      risco: "Gestão de risco operacional sem autoridade definida.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando exigido SGSO ou PGSO."
    },
  
    {
      ref: "153.25(a)",
      subparte: "Subparte B - Responsável pela Segurança Operacional",
      itemVerificavel: "Verificar se há processo de identificação de perigos sob responsabilidade do gestor de segurança.",
      criterio: "Perigos devem ser registrados, avaliados e acompanhados.",
      evidencias: "Relatórios de perigo, matriz de risco, plano de mitigação.",
      risco: "Perigos não identificados ou não tratados.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme sistema de segurança operacional."
    },
  
    {
      ref: "153.27",
      subparte: "Subparte B - Responsável pela Operação Aeroportuária",
      itemVerificavel: "Verificar se o responsável pela operação controla as atividades diárias do aeródromo.",
      criterio: "A operação diária deve ser monitorada e registrada.",
      evidencias: "Livro de ocorrências, relatórios operacionais, escala da equipe.",
      risco: "Falha na supervisão da operação aeroportuária.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos em operação."
    },
  
    {
      ref: "153.27(a)",
      subparte: "Subparte B - Responsável pela Operação Aeroportuária",
      itemVerificavel: "Verificar se as inspeções operacionais são coordenadas pelo responsável da operação.",
      criterio: "Inspeções devem ser planejadas, executadas e registradas.",
      evidencias: "Checklists, registros fotográficos, relatórios de turno.",
      risco: "Condição insegura não identificada.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável especialmente a aeródromos públicos."
    },
  
    {
      ref: "153.29",
      subparte: "Subparte B - Responsável pela Manutenção Aeroportuária",
      itemVerificavel: "Verificar se o responsável pela manutenção controla o plano de manutenção aeroportuária.",
      criterio: "O plano deve ter responsáveis, prazos e registros de execução.",
      evidencias: "Plano de manutenção, OS, relatórios, fotos e medições.",
      risco: "Falha estrutural ou operacional por manutenção deficiente.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme infraestrutura existente."
    },
  
    {
      ref: "153.29(a)",
      subparte: "Subparte B - Responsável pela Manutenção Aeroportuária",
      itemVerificavel: "Verificar se as não conformidades de manutenção são tratadas.",
      criterio: "Defeitos identificados devem gerar ação corretiva documentada.",
      evidencias: "Planos de ação, ordens de serviço, registros de conclusão.",
      risco: "Degradação progressiva da infraestrutura operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a pista, pátio, taxiway, sinalização e sistemas."
    },
  
    {
      ref: "153.31",
      subparte: "Subparte B - Responsável pela Resposta à Emergência",
      itemVerificavel: "Verificar se o responsável pela emergência mantém planos e recursos atualizados.",
      criterio: "Planos, recursos e contatos devem estar atualizados e testados.",
      evidencias: "PLEM, PCINC, listas de contatos, simulados e atas.",
      risco: "Resposta inadequada a acidente ou incidente.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme classe e tipo de operação."
    },
  
    {
      ref: "153.31(a)",
      subparte: "Subparte B - Responsável pela Resposta à Emergência",
      itemVerificavel: "Verificar se recursos internos e externos de emergência estão identificados.",
      criterio: "Devem existir recursos mapeados, acionáveis e compatíveis com o risco.",
      evidencias: "Inventário, contatos, acordos externos e registros de teste.",
      risco: "Demora no atendimento de emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme necessidade operacional."
    },
  
    {
      ref: "153.33",
      subparte: "Subparte B - Demais Entes no Aeródromo",
      itemVerificavel: "Verificar se empresas e órgãos que atuam no aeródromo conhecem suas responsabilidades.",
      criterio: "Todos os entes devem ter responsabilidades operacionais formalizadas.",
      evidencias: "Contratos, termos de responsabilidade, procedimentos e treinamentos.",
      risco: "Atuação insegura de terceiros no lado ar.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver terceiros atuando no aeródromo."
    },
  
    {
      ref: "153.33(a)",
      subparte: "Subparte B - Demais Entes no Aeródromo",
      itemVerificavel: "Verificar se prestadores de serviço cumprem procedimentos operacionais do aeródromo.",
      criterio: "Prestadores devem cumprir regras de acesso, circulação, segurança e emergência.",
      evidencias: "Treinamentos, credenciais, registros de fiscalização e contratos.",
      risco: "Terceiros causando risco operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a operadores aéreos, handling, combustível, obras e serviços."
    },
  
    {
      ref: "153.35",
      subparte: "Subparte B - Habilitação dos Profissionais",
      itemVerificavel: "Verificar se profissionais que executam atividades específicas possuem habilitação adequada.",
      criterio: "Funções críticas devem ser exercidas por pessoal qualificado.",
      evidencias: "Certificados, treinamentos, autorizações internas e registros.",
      risco: "Execução de atividade crítica por profissional não habilitado.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável às atividades específicas do aeródromo."
    },
  
    {
      ref: "153.35(a)",
      subparte: "Subparte B - Habilitação dos Profissionais",
      itemVerificavel: "Verificar validade das habilitações e treinamentos exigidos.",
      criterio: "Certificados e autorizações devem estar vigentes.",
      evidencias: "Controle de validade, certificados, matriz de competência.",
      risco: "Profissional atuando com qualificação vencida.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a equipe operacional, manutenção, emergência e lado ar."
    },
  
    {
      ref: "153.37",
      subparte: "Subparte B - Treinamento",
      itemVerificavel: "Verificar se existe programa de treinamento para profissionais que exercem atividades específicas.",
      criterio: "O programa deve cobrir atividades críticas e requisitos aplicáveis.",
      evidencias: "Programa de treinamento, matriz de competências, cronograma.",
      risco: "Equipe despreparada para atividades operacionais.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme funções existentes no aeródromo."
    },
  
    {
      ref: "153.37(a)",
      subparte: "Subparte B - Treinamento",
      itemVerificavel: "Verificar se treinamentos iniciais são realizados antes da atuação em área operacional.",
      criterio: "Profissionais devem ser capacitados antes de executar atividades críticas.",
      evidencias: "Lista de presença, conteúdo programático, certificados.",
      risco: "Atuação insegura por ausência de treinamento inicial.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a pessoal próprio e terceirizado."
    },
  
    {
      ref: "153.37(b)",
      subparte: "Subparte B - Treinamento",
      itemVerificavel: "Verificar se treinamentos recorrentes são realizados.",
      criterio: "Deve haver reciclagem periódica conforme programa aprovado.",
      evidencias: "Cronograma, certificados, registros de reciclagem.",
      risco: "Perda de proficiência operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme complexidade e classe."
    },
  
    {
      ref: "153.37(c)",
      subparte: "Subparte B - Treinamento",
      itemVerificavel: "Verificar se o conteúdo dos treinamentos contempla segurança operacional.",
      criterio: "Treinamentos devem abordar perigos, riscos, reporte e prevenção.",
      evidencias: "Material didático, avaliações, registros de participação.",
      risco: "Baixa cultura de segurança operacional.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável especialmente a aeródromos com SGSO/PGSO."
    },
  
    {
      ref: "153.39",
      subparte: "Subparte B - Documentação",
      itemVerificavel: "Verificar se a documentação operacional é mantida atualizada e controlada.",
      criterio: "Documentos devem possuir versão, responsável, data e controle de distribuição.",
      evidencias: "Lista mestra, histórico de revisão, registros arquivados.",
      risco: "Uso de procedimento obsoleto.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os documentos operacionais."
    },
  
    {
      ref: "153.39(a)",
      subparte: "Subparte B - Documentação",
      itemVerificavel: "Verificar se registros exigidos pelo RBAC 153 estão disponíveis para auditoria.",
      criterio: "Registros devem ser mantidos pelo prazo definido e acessíveis quando solicitados.",
      evidencias: "Arquivos físicos ou digitais, sistema de gestão documental.",
      risco: "Impossibilidade de comprovar conformidade.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a inspeções, manutenção, emergência, SGSO e treinamento."
    }
  );
  // =========================
// PARTE 3 — SUBPARTE C
// GERENCIAMENTO DA SEGURANÇA OPERACIONAL
// =========================

RBAC153.push(
    {
      ref: "153.51",
      subparte: "Subparte C - Gerenciamento da Segurança Operacional",
      itemVerificavel: "Verificar se o aeródromo possui sistema ou plano de gerenciamento da segurança operacional compatível com sua classe.",
      criterio: "Deve existir SGSO ou PGSO implementado conforme exigência aplicável ao aeródromo.",
      evidencias: "SGSO, PGSO, política de segurança operacional, matriz de risco, registros de reuniões e planos de ação.",
      risco: "Gestão reativa da segurança, riscos não identificados e aumento da probabilidade de incidentes.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme classificação do aeródromo e exigência do RBAC 153."
    },
  
    {
      ref: "153.53",
      subparte: "Subparte C - Política e Objetivos de Segurança Operacional",
      itemVerificavel: "Verificar se existe política formal de segurança operacional aprovada pelo operador.",
      criterio: "A política deve estar documentada, assinada pela alta direção e comunicada às equipes.",
      evidencias: "Política assinada, registros de divulgação, treinamentos, murais, comunicados internos.",
      risco: "Ausência de cultura formal de segurança operacional.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos com SGSO ou PGSO."
    },
  
    {
      ref: "153.53(a)",
      subparte: "Subparte C - Política e Objetivos de Segurança Operacional",
      itemVerificavel: "Verificar se os objetivos de segurança operacional estão definidos.",
      criterio: "Devem existir objetivos e metas relacionados ao desempenho da segurança operacional.",
      evidencias: "Metas, indicadores, plano anual, atas de análise crítica.",
      risco: "Gestão sem direcionamento mensurável.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver SGSO/PGSO formalizado."
    },
  
    {
      ref: "153.53(b)",
      subparte: "Subparte C - Política e Objetivos de Segurança Operacional",
      itemVerificavel: "Verificar se a política de segurança operacional é conhecida pelos colaboradores.",
      criterio: "A política deve ser divulgada e compreendida pelas pessoas envolvidas na operação.",
      evidencias: "Entrevistas, listas de presença, evidências de comunicação e material de divulgação.",
      risco: "Baixa adesão às práticas de segurança operacional.",
      criticidade: "MÉDIO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a operadores que possuam pessoal próprio ou terceirizado."
    },
  
    {
      ref: "153.55",
      subparte: "Subparte C - Gerenciamento de Riscos",
      itemVerificavel: "Verificar se existe processo formal de identificação de perigos.",
      criterio: "Perigos devem ser identificados, registrados, analisados e acompanhados.",
      evidencias: "Formulários de reporte, banco de perigos, relatórios, inspeções e atas.",
      risco: "Perigos existentes não tratados antes de gerar ocorrência.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a qualquer aeródromo com operação ativa."
    },
  
    {
      ref: "153.55(a)",
      subparte: "Subparte C - Gerenciamento de Riscos",
      itemVerificavel: "Verificar se os riscos são avaliados por severidade e probabilidade.",
      criterio: "Riscos devem ser classificados com metodologia definida e rastreável.",
      evidencias: "Matriz de risco, critérios de severidade, critérios de probabilidade, relatórios de análise.",
      risco: "Decisões operacionais sem avaliação técnica adequada.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável sempre que houver perigo identificado."
    },
  
    {
      ref: "153.55(b)",
      subparte: "Subparte C - Gerenciamento de Riscos",
      itemVerificavel: "Verificar se existem medidas mitigadoras para riscos classificados como não aceitáveis.",
      criterio: "Riscos acima do nível aceitável devem possuir ação mitigadora documentada.",
      evidencias: "Plano de mitigação, responsável, prazo, evidência de execução e reavaliação do risco.",
      risco: "Manutenção de risco operacional em nível inaceitável.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a riscos médios, altos ou críticos."
    },
  
    {
      ref: "153.55(c)",
      subparte: "Subparte C - Gerenciamento de Riscos",
      itemVerificavel: "Verificar se as ações mitigadoras são acompanhadas até o encerramento.",
      criterio: "Ações devem ter responsável, prazo, status e evidência de conclusão.",
      evidencias: "Plano de ação atualizado, registros de acompanhamento, evidências fotográficas ou documentais.",
      risco: "Ações abertas sem controle, mantendo risco ativo.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os planos de ação de segurança operacional."
    },
  
    {
      ref: "153.57",
      subparte: "Subparte C - Garantia da Segurança Operacional",
      itemVerificavel: "Verificar se há monitoramento do desempenho da segurança operacional.",
      criterio: "Indicadores devem ser definidos, medidos e analisados periodicamente.",
      evidencias: "Indicadores, relatórios mensais, gráficos, atas de reunião e análise crítica.",
      risco: "Falta de percepção de tendência negativa de segurança.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos com SGSO/PGSO estruturado."
    },
  
    {
      ref: "153.57(a)",
      subparte: "Subparte C - Garantia da Segurança Operacional",
      itemVerificavel: "Verificar se auditorias internas de segurança operacional são realizadas.",
      criterio: "Auditorias devem ser planejadas, executadas e registradas.",
      evidencias: "Plano de auditoria, relatórios, checklists, plano de ação e fechamento de achados.",
      risco: "Não conformidades sistêmicas não identificadas.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme complexidade e classe do aeródromo."
    },
  
    {
      ref: "153.57(b)",
      subparte: "Subparte C - Garantia da Segurança Operacional",
      itemVerificavel: "Verificar se ocorrências operacionais são analisadas quanto à causa e ação corretiva.",
      criterio: "Ocorrências devem gerar análise, causa provável e plano de ação quando aplicável.",
      evidencias: "Relatórios de ocorrência, investigação interna, evidências de correção.",
      risco: "Reincidência de falhas por ausência de análise de causa.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a incidentes, ocorrências, quase acidentes e reportes relevantes."
    },
  
    {
      ref: "153.57(c)",
      subparte: "Subparte C - Garantia da Segurança Operacional",
      itemVerificavel: "Verificar se mudanças operacionais são avaliadas antes da implementação.",
      criterio: "Mudanças devem passar por análise de risco e avaliação de impacto operacional.",
      evidencias: "Formulário de gestão de mudança, AISO, parecer técnico, autorização interna.",
      risco: "Introdução de perigo novo sem mitigação.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a obras, alterações de procedimento, infraestrutura, equipe ou operação."
    },
  
    {
      ref: "153.59",
      subparte: "Subparte C - Promoção da Segurança Operacional",
      itemVerificavel: "Verificar se existem ações de promoção da segurança operacional.",
      criterio: "Devem existir treinamentos, campanhas, comunicados e orientações periódicas.",
      evidencias: "Campanhas, DDS, boletins, listas de presença, cartazes e comunicados.",
      risco: "Baixa cultura de segurança e subnotificação de perigos.",
      criticidade: "MÉDIO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os aeródromos com equipes operacionais."
    },
  
    {
      ref: "153.59(a)",
      subparte: "Subparte C - Promoção da Segurança Operacional",
      itemVerificavel: "Verificar se existe canal de reporte de perigos ou ocorrências.",
      criterio: "O canal deve estar disponível, ser conhecido e permitir registro rastreável.",
      evidencias: "Formulários físicos, sistema eletrônico, e-mail, registros de reportes e tratamento.",
      risco: "Perigos não reportados pelas equipes.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a colaboradores próprios, terceirizados e demais entes aeroportuários."
    },
  
    {
      ref: "153.59(b)",
      subparte: "Subparte C - Promoção da Segurança Operacional",
      itemVerificavel: "Verificar se os reportes recebidos são analisados e respondidos.",
      criterio: "Reportes devem possuir triagem, análise e retorno quando aplicável.",
      evidencias: "Banco de reportes, análise, comunicação ao relator e plano de ação.",
      risco: "Perda de confiança no sistema de reporte.",
      criticidade: "MÉDIO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver canal de reporte implementado."
    },
  
    {
      ref: "153.63",
      subparte: "Subparte C - Plano de Gerenciamento da Segurança Operacional",
      itemVerificavel: "Verificar se o PGSO está formalmente elaborado quando aplicável.",
      criterio: "O PGSO deve consolidar responsabilidades, processos de risco, garantia e promoção da segurança.",
      evidencias: "PGSO aprovado, controle de revisão, registros de implementação.",
      risco: "Gerenciamento de segurança incompleto ou não documentado.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos obrigados a manter PGSO."
    },
  
    {
      ref: "153.63(a)",
      subparte: "Subparte C - Plano de Gerenciamento da Segurança Operacional",
      itemVerificavel: "Verificar se o PGSO contém responsáveis, processos e registros mínimos.",
      criterio: "O plano deve descrever claramente como os riscos serão geridos.",
      evidencias: "Capítulos do PGSO, matriz de responsabilidades, fluxo de reporte e tratamento.",
      risco: "Plano meramente formal, sem efetividade prática.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando o PGSO for exigido."
    },
  
    {
      ref: "153.73",
      subparte: "Subparte C - Aspectos Críticos de Segurança Operacional",
      itemVerificavel: "Verificar se aspectos críticos da operação foram identificados.",
      criterio: "Atividades críticas devem possuir controles específicos e monitoramento.",
      evidencias: "Lista de aspectos críticos, análise de risco, controles operacionais e indicadores.",
      risco: "Atividade crítica executada sem controle adequado.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a pista, pátio, taxiway, emergência, fauna, obras e circulação no lado ar."
    },
  
    {
      ref: "153.73(a)",
      subparte: "Subparte C - Aspectos Críticos de Segurança Operacional",
      itemVerificavel: "Verificar se os aspectos críticos possuem barreiras de segurança definidas.",
      criterio: "Cada aspecto crítico deve possuir barreiras preventivas, mitigadoras ou corretivas.",
      evidencias: "Procedimentos, sinalização, treinamentos, barreiras físicas, controles administrativos.",
      risco: "Falha crítica sem barreira de prevenção.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme análise de risco do aeródromo."
    }
  );
  // =========================
// PARTE 4 — SUBPARTE D
// OPERAÇÕES AEROPORTUÁRIAS
// =========================

RBAC153.push(
    {
      ref: "153.101",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se os equipamentos posicionados na área operacional não interferem na segurança das aeronaves.",
      criterio: "Equipamentos devem estar posicionados em locais autorizados, sinalizados e fora das áreas protegidas.",
      evidencias: "Inspeção em campo, layout operacional, registros fotográficos, procedimento de posicionamento.",
      risco: "Colisão, interferência na movimentação de aeronaves ou incursão em área protegida.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver equipamentos na área operacional."
    },
  
    {
      ref: "153.103",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se a infraestrutura disponível está em condição operacional segura.",
      criterio: "Pista, pátio, taxiways, auxílios visuais e áreas operacionais devem estar aptos ao uso.",
      evidencias: "Checklists operacionais, inspeções diárias, registros de manutenção, NOTAMs e fotos.",
      risco: "Uso de infraestrutura degradada ou indisponível sem controle.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a toda infraestrutura em operação."
    },
  
    {
      ref: "153.105",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se as informações aeronáuticas do aeródromo estão atualizadas.",
      criterio: "Alterações operacionais relevantes devem ser comunicadas e publicadas quando aplicável.",
      evidencias: "Publicações, dados cadastrais, solicitações de NOTAM, cartas, registros de alteração.",
      risco: "Operação baseada em informação incorreta ou desatualizada.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver alteração de infraestrutura, operação ou restrição."
    },
  
    {
      ref: "153.107",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se a área operacional está protegida contra acesso indevido.",
      criterio: "Devem existir barreiras, controles e procedimentos para impedir acesso não autorizado.",
      evidencias: "Cercamento, portões, controle de acesso, rondas, registros e inspeção de perímetro.",
      risco: "Entrada de pessoas, veículos ou animais na área operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com área operacional segregada."
    },
  
    {
      ref: "153.109",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se há sistema de orientação e controle da movimentação no solo.",
      criterio: "Devem existir procedimentos, sinalização e meios de comunicação para orientar aeronaves, veículos e pessoas.",
      evidencias: "Procedimentos, sinalização horizontal/vertical, cartas, registros de treinamento e inspeção em campo.",
      risco: "Incursão em pista, conflito de tráfego no solo ou colisão.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme complexidade do aeródromo."
    },
  
    {
      ref: "153.111",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar controle da movimentação de aeronaves, veículos, equipamentos e pessoas.",
      criterio: "Toda movimentação na área operacional deve ser autorizada, controlada e registrada quando aplicável.",
      evidencias: "Procedimentos, credenciais, autorizações, registros de acesso, observação em campo.",
      risco: "Colisão no solo, entrada indevida em pista ou interferência com aeronaves.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos que acessam o lado ar."
    },
  
    {
      ref: "153.113",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar regras de acesso e permanência na área de manobras.",
      criterio: "Somente pessoas, veículos e equipamentos autorizados devem acessar a área de manobras.",
      evidencias: "Credenciais, autorizações, registros de rádio, controle de acesso e fiscalização.",
      risco: "Acesso indevido à área de manobras e risco de incursão em pista.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver área de manobras definida."
    },
  
    {
      ref: "153.115",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar programa ou medidas de prevenção de incursão em pista.",
      criterio: "Devem existir medidas preventivas contra entrada indevida de pessoas, veículos ou aeronaves na pista.",
      evidencias: "Procedimentos, treinamentos, sinalização, registros de ocorrência, ações corretivas.",
      risco: "Incursão em pista com risco de colisão.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com pista operacional."
    },
  
    {
      ref: "153.117",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar gerenciamento do pátio de aeronaves.",
      criterio: "O pátio deve ser gerenciado quanto a circulação, estacionamento, segurança e interferências.",
      evidencias: "Procedimentos de pátio, mapa de posições, registros de alocação e inspeção em campo.",
      risco: "Colisão em solo, dano à aeronave ou conflito operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver pátio de aeronaves."
    },
  
    {
      ref: "153.119",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se a alocação de aeronaves no pátio considera porte e afastamentos.",
      criterio: "Posições devem ser compatíveis com dimensões das aeronaves e segurança operacional.",
      evidencias: "Mapa de posições, registros de alocação, procedimentos e observação em campo.",
      risco: "Estacionamento incompatível e risco de colisão.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver operação de estacionamento no pátio."
    },
  
    {
      ref: "153.121",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar procedimentos de estacionamento de aeronaves.",
      criterio: "O estacionamento deve ser orientado, seguro e compatível com marcações e procedimentos locais.",
      evidencias: "Procedimentos de sinaleiro, marcações, registros de treinamento e inspeção em campo.",
      risco: "Posicionamento incorreto de aeronave ou dano em solo.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com operações de estacionamento."
    },
  
    {
      ref: "153.123",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar procedimento de abordagem à aeronave por veículos, equipamentos e pessoas.",
      criterio: "A aproximação deve seguir regras de segurança, prioridade e distância mínima.",
      evidencias: "Procedimentos, treinamento, observação de turnaround, registros de ocorrência.",
      risco: "Danos à aeronave, lesões pessoais ou interferência operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver atendimento de aeronaves no pátio."
    },
  
    {
      ref: "153.125",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar segurança no abastecimento e transferência de combustível.",
      criterio: "Abastecimento deve ocorrer com controle de segurança, prevenção contra incêndio e isolamento adequado.",
      evidencias: "Procedimento de abastecimento, extintores, aterramento, sinalização, treinamento e registros.",
      risco: "Incêndio, explosão, derramamento ou contaminação.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver abastecimento de aeronaves."
    },
  
    {
      ref: "153.127",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar processamento seguro de passageiros, bagagens, mala postal e carga aérea.",
      criterio: "Fluxos devem ser organizados para evitar interferência na operação e riscos no lado ar.",
      evidencias: "Procedimentos, layout, inspeção em campo, registros de operadores e interface AVSEC.",
      risco: "Interferência operacional, acesso indevido ou falha de processamento.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver processamento de passageiros, bagagens ou carga."
    },
  
    {
      ref: "153.129",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar procedimento de liberação de aeronave.",
      criterio: "A aeronave deve ser liberada apenas quando condições operacionais e de segurança estiverem atendidas.",
      evidencias: "Procedimentos de despacho, comunicação, registros operacionais e evidências de inspeção.",
      risco: "Partida de aeronave em condição insegura.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver operação regular ou atendimento operacional."
    },
  
    {
      ref: "153.131",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar procedimentos para operações em baixa visibilidade quando aplicável.",
      criterio: "Devem existir procedimentos específicos, treinamentos e critérios de ativação.",
      evidencias: "Procedimento LVP, registros de ativação, treinamento, auxílios visuais e comunicação.",
      risco: "Incursão, perda de separação ou colisão em baixa visibilidade.",
      criticidade: "CRÍTICO",
      classeMinima: 3,
      condicaoComplementar: "Aplicável a aeródromos IFR, operação noturna ou com baixa visibilidade."
    },
  
    {
      ref: "153.133",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar monitoramento da condição física e operacional do aeródromo.",
      criterio: "O operador deve monitorar continuamente pista, pátio, taxiways, auxílios e áreas operacionais.",
      evidencias: "Inspeções, relatórios, fotos, plano de ação e comunicação de restrições.",
      risco: "Condição insegura não detectada antes da operação.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a toda infraestrutura operacional."
    }
  );
  // =========================
// PARTE 5 — SUBPARTE E
// MANUTENÇÃO AEROPORTUÁRIA
// =========================

RBAC153.push(

    {
      ref: "153.201",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se existe programa de manutenção aeroportuária formalmente estabelecido.",
      criterio: "O aeródromo deve possuir plano de manutenção documentado e implementado.",
      evidencias: "Plano de manutenção, cronograma, registros de execução.",
      risco: "Degradação da infraestrutura e aumento do risco operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a toda infraestrutura operacional."
    },
  
    {
      ref: "153.203",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se a pista de pouso e decolagem está em condições operacionais adequadas.",
      criterio: "A pista deve estar livre de defeitos, FOD, rachaduras críticas e deformações.",
      evidencias: "Inspeção em campo, registros de manutenção, relatórios técnicos.",
      risco: "Danos à aeronave ou acidente durante pouso/decolagem.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.205",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se há controle de FOD na pista, taxiway e pátio.",
      criterio: "O aeródromo deve possuir rotina de inspeção e remoção de FOD.",
      evidencias: "Checklists de inspeção, registros de limpeza, fotos.",
      risco: "Ingestão de objeto por motor ou dano estrutural à aeronave.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.207",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se o sistema de drenagem da pista é funcional.",
      criterio: "A pista deve permitir escoamento adequado de água.",
      evidencias: "Inspeção em campo, registros de manutenção, fotos.",
      risco: "Aquaplanagem e perda de controle da aeronave.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.209",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar estado das taxiways.",
      criterio: "Taxiways devem estar sem falhas estruturais e devidamente sinalizadas.",
      evidencias: "Inspeção em campo, registros de manutenção.",
      risco: "Danos à aeronave ou perda de controle.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.211",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar estado do pátio de aeronaves.",
      criterio: "Pátio deve estar íntegro, sem buracos ou irregularidades críticas.",
      evidencias: "Inspeção visual, registros, fotos.",
      risco: "Danos à aeronave em solo.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.213",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar manutenção da sinalização horizontal.",
      criterio: "Marcas devem estar visíveis e conforme padrão.",
      evidencias: "Inspeção em campo, fotos, plano de pintura.",
      risco: "Confusão operacional e incursão.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.215",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar manutenção da sinalização vertical.",
      criterio: "Placas devem estar legíveis e corretamente posicionadas.",
      evidencias: "Inspeção visual, registros de manutenção.",
      risco: "Erro de navegação em solo.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.217",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar funcionamento do sistema de iluminação.",
      criterio: "Sistema deve operar sem falhas críticas.",
      evidencias: "Testes, registros, inspeção noturna.",
      risco: "Operação insegura à noite ou baixa visibilidade.",
      criticidade: "CRÍTICO",
      classeMinima: 2
    },
  
    {
      ref: "153.219",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar manutenção de áreas adjacentes à pista.",
      criterio: "Áreas devem estar livres de obstáculos e vegetação excessiva.",
      evidencias: "Inspeção em campo, registros de roçagem.",
      risco: "Risco de colisão ou fauna.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.221",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar controle de vegetação.",
      criterio: "Vegetação deve ser controlada para não interferir na operação.",
      evidencias: "Registros de manutenção, fotos.",
      risco: "Atração de fauna e risco operacional.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.223",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se defeitos são corrigidos dentro de prazo adequado.",
      criterio: "Defeitos devem gerar ação corretiva rastreável.",
      evidencias: "Ordens de serviço, plano de ação.",
      risco: "Persistência de risco operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.225",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar registro das atividades de manutenção.",
      criterio: "Manutenção deve ser registrada e rastreável.",
      evidencias: "Registros, relatórios, sistema de gestão.",
      risco: "Falta de controle e histórico.",
      criticidade: "ALTO",
      classeMinima: 1
    }
  
  );
  // =========================
// PARTE 6 — SUBPARTE F
// RESPOSTA À EMERGÊNCIA AEROPORTUÁRIA
// =========================

RBAC153.push(
    {
      ref: "153.301",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se o aeródromo possui Plano de Emergência em Aeródromo implementado.",
      criterio: "O plano deve contemplar cenários de emergência, responsabilidades, comunicação, recursos e acionamento.",
      evidencias: "PLEM, controle de revisão, aprovação, fluxos de acionamento e lista de contatos.",
      risco: "Resposta desorganizada ou tardia a acidente aeronáutico.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme classe e tipo de operação do aeródromo."
    },
  
    {
      ref: "153.303",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se os recursos de emergência estão disponíveis e compatíveis com a operação.",
      criterio: "Recursos humanos, materiais, veículos, equipamentos e apoio externo devem estar definidos e disponíveis.",
      evidencias: "Inventário de recursos, escalas, contratos, acordos, registros de inspeção e testes.",
      risco: "Atendimento insuficiente em situação de emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os aeródromos operacionais."
    },
  
    {
      ref: "153.309",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar disponibilidade de atendimento médico ou ambulância quando aplicável.",
      criterio: "O recurso médico deve estar previsto no planejamento de emergência e disponível conforme operação.",
      evidencias: "Contrato, escala, registro de disponibilidade, inspeção da ambulância e equipamentos médicos.",
      risco: "Demora ou incapacidade de atendimento às vítimas.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme porte, operação regular e exigências do plano de emergência."
    },
  
    {
      ref: "153.311",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se existe Centro de Operações de Emergência ou estrutura equivalente.",
      criterio: "O aeródromo deve possuir local ou estrutura para coordenação da emergência.",
      evidencias: "COE, sala de crise, equipamentos de comunicação, procedimentos e registros de teste.",
      risco: "Falha na coordenação e tomada de decisão em emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme classe e complexidade operacional."
    },
  
    {
      ref: "153.313",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se há Posto de Coordenação Móvel ou recurso equivalente quando aplicável.",
      criterio: "Deve existir recurso para coordenação próxima ao local da emergência, quando previsto.",
      evidencias: "PCM, veículo, rádio, checklist, equipamentos e simulado.",
      risco: "Coordenação deficiente no local do acidente.",
      criticidade: "ALTO",
      classeMinima: 3,
      condicaoComplementar: "Aplicável a aeródromos de maior complexidade ou conforme PLEM."
    },
  
    {
      ref: "153.315",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se recursos externos de emergência estão identificados e pactuados.",
      criterio: "Corpo de bombeiros, SAMU, hospitais, defesa civil, polícia e demais recursos devem estar mapeados.",
      evidencias: "Acordos, contatos atualizados, mapas de acesso, tempo estimado de resposta e registros de teste.",
      risco: "Dependência de recurso externo não disponível no momento da emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando o plano depender de órgãos externos."
    },
  
    {
      ref: "153.317",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar existência de mapa de grade interno do aeródromo.",
      criterio: "O mapa deve permitir localização rápida de eventos dentro do sítio aeroportuário.",
      evidencias: "Mapa de grade interno, distribuição às equipes, uso em treinamento e simulado.",
      risco: "Demora na localização da emergência dentro do aeródromo.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme plano de emergência."
    },
  
    {
      ref: "153.319",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar existência de mapa de grade externo do entorno do aeródromo.",
      criterio: "O mapa deve apoiar resposta a emergências em áreas externas ao sítio aeroportuário.",
      evidencias: "Mapa externo, rotas de acesso, pontos de encontro, recursos externos e distribuição.",
      risco: "Dificuldade de resposta fora dos limites do aeródromo.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme cenário de emergência externa previsto."
    },
  
    {
      ref: "153.321",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se os mapas de grade são distribuídos aos entes envolvidos.",
      criterio: "Equipes internas e externas devem ter acesso às informações de localização necessárias.",
      evidencias: "Protocolo de entrega, lista de distribuição, confirmação de recebimento e uso em simulado.",
      risco: "Equipes sem referência de localização durante emergência.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável aos entes previstos no PLEM."
    },
  
    {
      ref: "153.323",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se os planos de emergência estão integrados ao sistema de resposta do aeródromo.",
      criterio: "Planos devem conter fluxos integrados, responsáveis, comunicação e interfaces entre equipes.",
      evidencias: "PLEM, PCINC, procedimentos, fluxogramas, atas de coordenação e registros de revisão.",
      risco: "Planos desconectados entre si e sem efetividade prática.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os planos de resposta à emergência."
    },
  
    {
      ref: "153.325",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se o Plano de Emergência em Aeródromo está atualizado e testado.",
      criterio: "O PLEM deve estar vigente, revisado e validado por exercícios ou simulados.",
      evidencias: "PLEM atualizado, histórico de revisão, relatórios de simulado, lições aprendidas e plano de ação.",
      risco: "Plano ineficaz ou desatualizado em situação real.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme exigência do RBAC 153."
    },
  
    {
      ref: "153.329",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se existe Plano Contraincêndio de Aeródromo quando aplicável.",
      criterio: "O PCINC deve definir recursos, procedimentos, responsabilidades e acionamento do serviço contraincêndio.",
      evidencias: "PCINC, inventário SESCINC, escala, simulados e registros de inspeção.",
      risco: "Combate a incêndio ineficiente ou incompatível com a operação.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme categoria contraincêndio e operação do aeródromo."
    },
  
    {
      ref: "153.331",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar realização de exercícios simulados de emergência.",
      criterio: "Simulados devem ser planejados, executados, avaliados e gerar ações corretivas.",
      evidencias: "Plano de simulado, relatório, lista de presença, fotos, avaliação, plano de ação e fechamento.",
      risco: "Equipe despreparada e planos não testados.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme periodicidade prevista no planejamento de emergência."
    }
  );
  // =========================
// PARTE 7 — SUBPARTE G / H / J
// SESCINC + FAUNA + CONFORMIDADE FINAL
// =========================

RBAC153.push(
    // =========================
    // SUBPARTE G — SESCINC
    // =========================
  
    {
      ref: "153.401",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se o Serviço de Salvamento e Combate a Incêndio está implementado quando aplicável.",
      criterio: "O aeródromo deve possuir SESCINC compatível com sua operação e categoria contraincêndio.",
      evidencias: "PCINC, categoria contraincêndio, escala, veículos, equipamentos, registros e inspeção in loco.",
      risco: "Incapacidade de resposta a incêndio ou acidente aeronáutico.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme categoria contraincêndio, operação regular e exigência do RBAC 153."
    },
  
    {
      ref: "153.403",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se a Categoria Contraincêndio do Aeródromo está corretamente definida.",
      criterio: "A categoria deve ser calculada conforme aeronaves atendidas e compatível com a operação.",
      evidencias: "Memória de cálculo, lista de aeronaves, registros de movimento, publicação e documentação técnica.",
      risco: "Categoria inferior à necessária para atendimento da aeronave crítica.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos com exigência de serviço contraincêndio."
    },
  
    {
      ref: "153.405",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar disponibilidade e validade dos agentes extintores.",
      criterio: "Agentes extintores devem estar disponíveis, válidos e em quantidade compatível com a categoria.",
      evidencias: "Inventário, validade, laudos, registros de inspeção, recarga e reposição.",
      risco: "Falha no combate inicial ao incêndio.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver SESCINC ou recursos contraincêndio."
    },
  
    {
      ref: "153.407",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar condição operacional dos veículos de combate a incêndio.",
      criterio: "Veículos devem estar operacionais, abastecidos, inspecionados e compatíveis com a categoria exigida.",
      evidencias: "Checklist diário, manutenção preventiva, testes de bomba, abastecimento, pneus, rádio e registros.",
      risco: "Indisponibilidade do CCI em emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver viatura ou CCI."
    },
  
    {
      ref: "153.409",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se o tempo-resposta do SESCINC é medido e atendido.",
      criterio: "O serviço deve demonstrar tempo-resposta compatível com a operação e áreas atendidas.",
      evidencias: "Registros de simulado, cronometragem, mapas de rota, relatórios de teste e plano de ação.",
      risco: "Atraso crítico no atendimento a acidente aeronáutico.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos com SESCINC."
    },
  
    {
      ref: "153.411",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se a Categoria Contraincêndio da Aeronave crítica foi considerada.",
      criterio: "A CAT-AV deve ser usada para dimensionamento do serviço e compatibilidade operacional.",
      evidencias: "Lista de aeronaves, dimensões, movimentos, cálculo de categoria e registros.",
      risco: "Operação de aeronave incompatível com recursos disponíveis.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver operação de aeronaves que demandem categoria contraincêndio."
    },
  
    {
      ref: "153.413",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se operações são compatíveis com a categoria contraincêndio disponível.",
      criterio: "A operação deve respeitar a categoria disponível ou possuir restrições formalmente publicadas.",
      evidencias: "Publicações, NOTAM, registros operacionais, controle de aceitação de aeronaves e comunicação.",
      risco: "Operação acima da capacidade de resposta a incêndio.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando a categoria disponível for inferior à aeronave pretendida."
    },
  
    {
      ref: "153.415",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se as funções do SESCINC estão definidas.",
      criterio: "Funções operacionais, supervisão, acionamento e resposta devem estar formalmente atribuídas.",
      evidencias: "Escalas, designações, descrição de função, procedimentos e registros de treinamento.",
      risco: "Equipe sem atribuição clara durante emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver equipe de emergência ou SESCINC."
    },
  
    {
      ref: "153.417",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar formação e treinamento dos profissionais do SESCINC.",
      criterio: "Profissionais devem possuir formação, capacitação e reciclagem compatíveis com suas funções.",
      evidencias: "Certificados, validade, matriz de treinamento, listas de presença e avaliações.",
      risco: "Atuação técnica inadequada em salvamento e combate a incêndio.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a bombeiros de aeródromo e equipes de resposta."
    },
  
    {
      ref: "153.419",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se a equipe mínima de serviço está disponível durante a operação.",
      criterio: "O efetivo mínimo deve estar presente e compatível com a categoria e horário operacional.",
      evidencias: "Escalas, registro de presença, livro de plantão, controle de efetivo e substituições.",
      risco: "Efetivo insuficiente para resposta à emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme horário e categoria operacional."
    },
  
    {
      ref: "153.421",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar disponibilidade e condição dos equipamentos de proteção individual.",
      criterio: "EPIs devem estar completos, íntegros, válidos e disponíveis aos profissionais.",
      evidencias: "Inventário, CA/validade, inspeção visual, registros de substituição e fotos.",
      risco: "Exposição da equipe a risco de morte ou lesão grave.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a equipe de combate a incêndio e resgate."
    },
  
    {
      ref: "153.423",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar equipamentos de apoio ao resgate e salvamento.",
      criterio: "Equipamentos devem estar disponíveis, funcionais, acessíveis e inspecionados.",
      evidencias: "Inventário, testes, manutenção, localização dos equipamentos e registros de inspeção.",
      risco: "Resgate ineficaz de vítimas em aeronave ou área operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme categoria e recursos previstos."
    },
  
    {
      ref: "153.425",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar condições da Seção Contraincêndio.",
      criterio: "A SCI deve permitir guarda, acionamento, comunicação, manutenção e saída rápida dos recursos.",
      evidencias: "Inspeção da SCI, layout, energia, comunicação, abastecimento, registros e fotos.",
      risco: "Atraso ou impedimento de resposta do SESCINC.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver SCI ou base de emergência."
    },
  
    {
      ref: "153.427",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar sistemas de comunicação e alarme do SESCINC.",
      criterio: "Comunicação e alarme devem permitir acionamento rápido e coordenação da emergência.",
      evidencias: "Testes de rádio, telefone, alarme, registros e plano de contingência.",
      risco: "Falha de acionamento ou coordenação em emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos com estrutura de emergência."
    },
  
    {
      ref: "153.429",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar vias de acesso de emergência.",
      criterio: "As vias devem permitir deslocamento rápido, seguro e desobstruído dos veículos de emergência.",
      evidencias: "Inspeção de vias, mapas, sinalização, simulado, fotos e registros de manutenção.",
      risco: "Atraso no atendimento por rota bloqueada ou inadequada.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a rotas internas e externas previstas no PLEM/PCINC."
    },
  
    {
      ref: "153.431",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar se informações críticas do SESCINC estão atualizadas e acessíveis.",
      criterio: "Mapas, contatos, categoria, aeronaves críticas e procedimentos devem estar disponíveis.",
      evidencias: "Quadros, fichas, mapas, contatos, procedimentos, registros de revisão e comunicação.",
      risco: "Equipe sem informação essencial durante emergência.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver equipe de resposta."
    },
  
    {
      ref: "153.433",
      subparte: "Subparte G - SESCINC",
      itemVerificavel: "Verificar necessidade de Serviço Especializado de Salvamento Aquático.",
      criterio: "Quando houver risco aquático relevante, deve existir planejamento e recursos específicos.",
      evidencias: "Mapa de corpos d’água, análise de risco, acordos, equipamentos, treinamento e simulado.",
      risco: "Resposta inadequada em emergência aquática.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver corpos d’água relevantes no entorno operacional."
    },
  
    // =========================
    // SUBPARTE H — FAUNA
    // =========================
  
    {
      ref: "153.501",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se o aeródromo gerencia o risco da fauna.",
      criterio: "O operador deve identificar, monitorar, registrar e mitigar perigos relacionados à fauna.",
      evidencias: "Registros de avistamento, colisões, inspeções, ações de manejo, indicadores e relatórios.",
      risco: "Colisão com fauna e danos à aeronave.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com operação aérea e risco de fauna."
    },
  
    {
      ref: "153.503",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se existe Identificação do Perigo da Fauna.",
      criterio: "A IPF deve identificar espécies, atrativos, áreas críticas e frequência de ocorrência.",
      evidencias: "Relatório IPF, levantamentos, registros de fauna, mapa de atrativos e histórico de colisões.",
      risco: "Perigos de fauna não identificados ou subestimados.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável conforme exposição do aeródromo ao risco de fauna."
    },
  
    {
      ref: "153.503(a)",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se os atrativos de fauna internos e externos foram mapeados.",
      criterio: "Devem ser identificados focos de atração de fauna no sítio aeroportuário e entorno.",
      evidencias: "Mapas, inspeções, relatórios ambientais, fotos, registros de vegetação, resíduos e água acumulada.",
      risco: "Atração permanente de aves ou animais para a área operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável especialmente em aeródromos próximos a lixões, corpos d’água ou vegetação."
    },
  
    {
      ref: "153.505",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se existe Programa de Gerenciamento do Risco da Fauna.",
      criterio: "O PGRF deve conter ações de prevenção, monitoramento, mitigação e avaliação de eficácia.",
      evidencias: "PGRF, plano de ação, registros de execução, indicadores, revisões e relatórios.",
      risco: "Aumento do risco de colisão com fauna.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando exigido pela classe, operação ou nível de risco de fauna."
    },
  
    {
      ref: "153.505(a)",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se ações de mitigação de fauna são executadas e registradas.",
      criterio: "Ações devem possuir responsável, frequência, registro e avaliação de eficácia.",
      evidencias: "Registros de afugentamento, manejo, roçagem, controle de resíduos, drenagem e inspeções.",
      risco: "Persistência de fauna na área operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver avistamento, colisão ou atrativo identificado."
    },
  
    {
      ref: "153.505(b)",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se colisões com fauna são registradas e analisadas.",
      criterio: "Toda colisão ou quase colisão com fauna deve ser registrada, analisada e gerar ação quando aplicável.",
      evidencias: "Relatórios de colisão, fotos, identificação de espécie, comunicação e plano de ação.",
      risco: "Reincidência de colisões sem tratamento de causa.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável sempre que houver ocorrência com fauna."
    },
  
    {
      ref: "153.507",
      subparte: "Subparte H - Gerenciamento do Risco da Fauna",
      itemVerificavel: "Verificar se há comissão ou instância de gerenciamento do risco da fauna quando aplicável.",
      criterio: "A gestão deve envolver áreas internas e externas necessárias para tratamento de atrativos.",
      evidencias: "Atas, composição, convocações, planos de ação e registros de acompanhamento.",
      risco: "Falta de articulação para reduzir atrativos externos ou recorrentes.",
      criticidade: "ALTO",
      classeMinima: 3,
      condicaoComplementar: "Aplicável conforme exigência, porte do aeródromo e complexidade do risco."
    },
  
    // =========================
    // SUBPARTE J — DISPOSIÇÕES FINAIS
    // =========================
  
    {
      ref: "153.701",
      subparte: "Subparte J - Disposições Transitórias e Finais",
      itemVerificavel: "Verificar se disposições transitórias aplicáveis estão atendidas.",
      criterio: "O operador deve demonstrar cumprimento de prazos, adaptações e condições transitórias aplicáveis.",
      evidencias: "Plano de adequação, evidências de cumprimento, protocolos e comunicação com a ANAC.",
      risco: "Permanência de não conformidade regulatória.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver obrigação transitória ou adequação pendente."
    },
  
    {
      ref: "153.703",
      subparte: "Subparte J - Conformidade Geral",
      itemVerificavel: "Verificar conformidade geral do operador com os requisitos aplicáveis do RBAC 153.",
      criterio: "O operador deve manter operação, manutenção e resposta à emergência em conformidade contínua.",
      evidencias: "Relatório consolidado, evidências, plano de ação, responsáveis, prazos e acompanhamento.",
      risco: "Não conformidade sistêmica perante fiscalização da ANAC.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável ao encerramento da auditoria ou inspeção."
    },
  
    {
      ref: "153.APD-A",
      subparte: "Apêndice A - Requisitos por Classe",
      itemVerificavel: "Verificar se os requisitos aplicáveis foram filtrados conforme a classificação do aeródromo.",
      criterio: "A auditoria deve considerar a classe do aeródromo e aplicar somente requisitos exigíveis.",
      evidencias: "Classificação RBAC 153, passageiros/ano, matriz de aplicabilidade e checklist filtrado.",
      risco: "Aplicação indevida de requisito não aplicável ou omissão de requisito obrigatório.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todas as inspeções baseadas no RBAC 153."
    }
  );
  // =========================
// COMPLEMENTO RBAC 153 — OPERAÇÕES / MANUTENÇÃO / EMERGÊNCIA
// Itens adicionais para reduzir lacunas de inspeção
// =========================

RBAC153.push(
    // OPERAÇÕES — INSPEÇÕES E CONDIÇÃO OPERACIONAL
    {
      ref: "153.133(a)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se a inspeção da área de movimento é realizada antes do início das operações.",
      criterio: "A inspeção deve identificar condições inseguras antes da liberação operacional.",
      evidencias: "Checklist diário, livro de ocorrências, fotos, registro de turno.",
      risco: "Operação iniciada com condição insegura não detectada.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com operação diária ou regular."
    },
  
    {
      ref: "153.133(b)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se há inspeções adicionais após chuva forte, vento forte, obra, ocorrência ou reporte operacional.",
      criterio: "Eventos que possam afetar a segurança devem gerar inspeção extraordinária.",
      evidencias: "Registros de inspeção extraordinária, fotos, relatórios climáticos, NOTAM se aplicável.",
      risco: "Condição degradada permanecer ativa após evento relevante.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver evento que possa afetar pista, pátio, taxiway ou auxílios."
    },
  
    {
      ref: "153.133(c)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se a pista é interditada ou restringida quando houver condição insegura.",
      criterio: "Condição insegura deve gerar restrição operacional, correção imediata ou divulgação aeronáutica.",
      evidencias: "Registro de interdição, comunicação operacional, NOTAM, ordem de serviço.",
      risco: "Aeronave operar em pista sem condição segura.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver defeito, contaminação, FOD, obstáculo ou risco operacional."
    },
  
    {
      ref: "153.133(d)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se o operador mantém procedimento para remoção imediata de FOD.",
      criterio: "FOD deve ser removido de forma imediata ou a área deve ser restringida.",
      evidencias: "Procedimento FOD, registros de coleta, fotos, checklists e entrevistas.",
      risco: "Dano a pneus, motores, hélices ou estrutura da aeronave.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a pista, taxiway, pátio e vias operacionais."
    },
  
    {
      ref: "153.133(e)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se ocorrências operacionais são registradas no turno.",
      criterio: "Ocorrências devem ser registradas de forma rastreável e tratadas quando necessário.",
      evidencias: "Livro de ocorrências, sistema operacional, relatório de turno, plano de ação.",
      risco: "Perda de histórico e reincidência de falhas.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a toda operação aeroportuária."
    },
  
    {
      ref: "153.133(f)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se o operador comunica condição operacional relevante aos usuários do aeródromo.",
      criterio: "Mudanças de condição devem ser comunicadas a operadores aéreos, ATS e demais envolvidos.",
      evidencias: "Comunicados, e-mails, NOTAM, registros de rádio, atas ou mensagens operacionais.",
      risco: "Usuários operarem com informação incorreta.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver restrição, interdição, alteração ou condição insegura."
    },
  
    // OPERAÇÕES — PÁTIO, VEÍCULOS E LADO AR
    {
      ref: "153.117(a)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se as posições de estacionamento possuem marcações visíveis e compatíveis.",
      criterio: "As marcações devem permitir estacionamento seguro conforme aeronaves previstas.",
      evidencias: "Inspeção de pátio, fotos, planta de posições, registros de pintura.",
      risco: "Posicionamento incorreto e risco de colisão.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver pátio demarcado."
    },
  
    {
      ref: "153.117(b)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se equipamentos de solo permanecem fora das áreas de segurança quando não utilizados.",
      criterio: "Equipamentos devem ficar em áreas demarcadas e não interferir nas aeronaves.",
      evidencias: "Inspeção em campo, fotos, procedimento de organização de pátio.",
      risco: "Colisão em solo ou obstrução de rota de aeronave.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com equipamentos de apoio em solo."
    },
  
    {
      ref: "153.111(a)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se veículos que acessam o lado ar possuem identificação visual.",
      criterio: "Veículos devem possuir identificação, sinalização e autorização compatível.",
      evidencias: "Inspeção de veículos, credenciais, adesivos, giroflex, registros de autorização.",
      risco: "Veículo não autorizado ou não identificado na área operacional.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a veículos que acessam pátio, taxiway, pista ou vias operacionais."
    },
  
    {
      ref: "153.111(b)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se condutores no lado ar possuem autorização e treinamento.",
      criterio: "Condutores devem estar treinados, autorizados e conhecer regras de circulação.",
      evidencias: "Lista de condutores autorizados, treinamento, teste prático, credencial.",
      risco: "Incursão em pista ou colisão com aeronave.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver circulação de veículos no lado ar."
    },
  
    {
      ref: "153.111(c)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se há controle de velocidade nas vias operacionais.",
      criterio: "Limites de velocidade devem estar definidos, sinalizados e fiscalizados.",
      evidencias: "Procedimento, sinalização, registros de fiscalização, ocorrências.",
      risco: "Atropelamento, colisão ou perda de controle de veículo.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a vias do lado ar."
    },
  
    {
      ref: "153.115(a)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se pontos críticos de incursão em pista foram identificados.",
      criterio: "Hot spots e pontos de risco devem ser mapeados e tratados.",
      evidencias: "Mapa de risco, histórico de ocorrências, sinalização, plano de mitigação.",
      risco: "Incursão recorrente em pista.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável conforme complexidade de pistas, taxiways e acessos."
    },
  
    {
      ref: "153.115(b)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se há procedimento de autorização para entrada em pista.",
      criterio: "Entrada em pista deve ocorrer somente com autorização e comunicação adequada.",
      evidencias: "Procedimento, registros de rádio, treinamento, observação operacional.",
      risco: "Entrada indevida em pista ativa.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver acesso operacional à pista."
    },
  
    // MANUTENÇÃO — PAVIMENTO, SINALIZAÇÃO E SISTEMAS
    {
      ref: "153.203(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se defeitos no pavimento da pista são classificados quanto à severidade.",
      criterio: "Defeitos devem ser avaliados e priorizados conforme impacto operacional.",
      evidencias: "Relatório técnico, fotos, medição, histórico de manutenção, plano de ação.",
      risco: "Defeito crítico sem priorização de correção.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a pistas pavimentadas."
    },
  
    {
      ref: "153.203(b)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se buracos, desagregação, trincas ou recalques são tratados.",
      criterio: "Defeitos com impacto operacional devem ser corrigidos ou gerar restrição.",
      evidencias: "Ordens de serviço, fotos antes/depois, relatório de inspeção.",
      risco: "Dano à aeronave, FOD ou perda de controle direcional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a pista, pátio e taxiway."
    },
  
    {
      ref: "153.203(c)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se há controle de atrito ou condição superficial quando aplicável.",
      criterio: "A condição superficial deve ser monitorada conforme operação e risco.",
      evidencias: "Medições, relatórios técnicos, registros de ação corretiva.",
      risco: "Excursão de pista por baixa aderência.",
      criticidade: "CRÍTICO",
      classeMinima: 3,
      condicaoComplementar: "Aplicável a aeródromos com operação regular, pista pavimentada ou maior movimento."
    },
  
    {
      ref: "153.207(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se canaletas, bueiros e dispositivos de drenagem estão desobstruídos.",
      criterio: "Sistema de drenagem deve permanecer limpo e funcional.",
      evidencias: "Inspeção em campo, registros de limpeza, fotos, cronograma de manutenção.",
      risco: "Acúmulo de água, aquaplanagem e degradação do pavimento.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a áreas com drenagem implantada."
    },
  
    {
      ref: "153.213(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se sinalização horizontal crítica está legível.",
      criterio: "Marcas de pista, taxiway e pátio devem estar visíveis ao usuário.",
      evidencias: "Inspeção diurna/noturna, fotos, plano de repintura.",
      risco: "Erro de navegação no solo ou incursão.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a áreas pavimentadas e sinalizadas."
    },
  
    {
      ref: "153.215(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se placas operacionais estão íntegras, limpas e legíveis.",
      criterio: "Sinalização vertical deve orientar corretamente a movimentação no solo.",
      evidencias: "Inspeção em campo, fotos, registros de manutenção.",
      risco: "Erro de rota, conflito no solo ou incursão.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver sinalização vertical."
    },
  
    {
      ref: "153.217(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se luzes de pista, taxiway e pátio são testadas periodicamente.",
      criterio: "Auxílios luminosos devem ser inspecionados e mantidos em condição operacional.",
      evidencias: "Registros de teste, inspeção noturna, ordens de serviço, fotos.",
      risco: "Operação noturna ou IFR insegura.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável a aeródromos com operação noturna, IFR ou sistema de iluminação."
    },
  
    {
      ref: "153.217(b)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se há plano de contingência para falha de iluminação operacional.",
      criterio: "Falhas devem possuir resposta, restrição operacional ou sistema alternativo.",
      evidencias: "Procedimento de contingência, NOTAM, registros de ocorrência e manutenção.",
      risco: "Operação mantida sem auxílio visual necessário.",
      criticidade: "CRÍTICO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando houver operação dependente de iluminação."
    },
  
    {
      ref: "153.221(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se cercas, portões e barreiras físicas estão íntegros.",
      criterio: "Proteção física deve impedir acesso indevido de pessoas, veículos e animais.",
      evidencias: "Inspeção de perímetro, fotos, registros de manutenção e rondas.",
      risco: "Entrada indevida na área operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a aeródromos com perímetro controlado."
    },
  
    {
      ref: "153.225(a)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se obras no lado ar possuem análise de impacto operacional.",
      criterio: "Obras devem ser avaliadas antes da execução e controladas durante a realização.",
      evidencias: "Plano de obra, AISO, NOTAM, sinalização temporária, isolamento.",
      risco: "Obra interferir na operação ou gerar FOD/incursão.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver obra ou serviço na área operacional."
    },
  
    {
      ref: "153.225(b)",
      subparte: "Subparte E - Manutenção Aeroportuária",
      itemVerificavel: "Verificar se áreas em obra estão isoladas e sinalizadas.",
      criterio: "Áreas interditadas devem estar claramente segregadas e comunicadas.",
      evidencias: "Fotos, barreiras, cones, sinalização temporária, comunicação operacional.",
      risco: "Aeronave, veículo ou pessoa acessar área em obra.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável durante obras, reparos ou manutenção."
    },
  
    // EMERGÊNCIA — COMPLEMENTOS
    {
      ref: "153.325(a)",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se o PLEM contempla cenários de acidente aeronáutico dentro e fora do sítio aeroportuário.",
      criterio: "O plano deve prever resposta para diferentes cenários e locais de ocorrência.",
      evidencias: "PLEM, mapas de grade, cenários, fluxos de acionamento.",
      risco: "Plano incompleto para cenário real de emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável ao Plano de Emergência em Aeródromo."
    },
  
    {
      ref: "153.325(b)",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se o PLEM possui lista de contatos atualizada.",
      criterio: "Contatos internos e externos devem estar atualizados e disponíveis.",
      evidencias: "Lista de contatos, registros de teste, protocolo de atualização.",
      risco: "Falha de acionamento de recursos em emergência.",
      criticidade: "CRÍTICO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável a todos os planos de emergência."
    },
  
    {
      ref: "153.331(a)",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se simulados geram relatório de lições aprendidas.",
      criterio: "Todo exercício deve ser avaliado e resultar em melhorias quando necessário.",
      evidencias: "Relatório de simulado, lista de falhas, plano de ação, evidências de fechamento.",
      risco: "Repetição de falhas em emergência real.",
      criticidade: "ALTO",
      classeMinima: 1,
      condicaoComplementar: "Aplicável quando houver simulado executado."
    },
  
    {
      ref: "153.331(b)",
      subparte: "Subparte F - Resposta à Emergência",
      itemVerificavel: "Verificar se os entes externos participam dos simulados quando previstos.",
      criterio: "Órgãos externos devem ser integrados ao exercício quando previstos no PLEM.",
      evidencias: "Lista de presença, convites, atas, relatório de participação.",
      risco: "Falta de integração entre recursos internos e externos.",
      criticidade: "ALTO",
      classeMinima: 2,
      condicaoComplementar: "Aplicável quando o plano depender de recursos externos."
    }
  );
  // =========================
// BLOCO FINAL — COMPLEMENTO TOTAL
// FECHAMENTO RBAC 153 EMD 09
// =========================

RBAC153.push(

    // =========================
    // TREINAMENTO (REFORÇO)
    // =========================
  
    {
      ref: "153.37(d)",
      subparte: "Subparte B - Treinamento",
      itemVerificavel: "Verificar se treinamentos possuem avaliação de aprendizado.",
      criterio: "Treinamentos devem possuir mecanismo de avaliação e registro de desempenho.",
      evidencias: "Provas, listas de presença, avaliações, certificados.",
      risco: "Equipe treinada sem comprovação de competência.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.37(e)",
      subparte: "Subparte B - Treinamento",
      itemVerificavel: "Verificar se há controle de validade dos treinamentos.",
      criterio: "Treinamentos devem possuir controle de vencimento e reciclagem.",
      evidencias: "Planilha de controle, sistema de gestão, alertas de vencimento.",
      risco: "Equipe atuando com treinamento vencido.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    // =========================
    // DOCUMENTAÇÃO (REFORÇO)
    // =========================
  
    {
      ref: "153.39(b)",
      subparte: "Subparte B - Documentação",
      itemVerificavel: "Verificar se documentos possuem controle de revisão.",
      criterio: "Todo documento deve ter versão, data e responsável.",
      evidencias: "Controle de revisão, histórico de alterações.",
      risco: "Uso de documento desatualizado.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.39(c)",
      subparte: "Subparte B - Documentação",
      itemVerificavel: "Verificar se documentos são acessíveis aos usuários.",
      criterio: "Equipe deve ter acesso fácil aos documentos operacionais.",
      evidencias: "Sistema, pastas, intranet, cópias físicas.",
      risco: "Execução incorreta de procedimento.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // OPERAÇÃO — CONTROLE AVANÇADO
    // =========================
  
    {
      ref: "153.109(a)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se há coordenação entre operador aeroportuário e ATS.",
      criterio: "Comunicação deve ser clara, contínua e registrada quando aplicável.",
      evidencias: "Rádio, gravação, procedimento, entrevistas.",
      risco: "Falta de coordenação e conflito operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 2
    },
  
    {
      ref: "153.109(b)",
      subparte: "Subparte D - Operações Aeroportuárias",
      itemVerificavel: "Verificar se há coordenação com operadores aéreos.",
      criterio: "Operador deve manter interface operacional com companhias aéreas.",
      evidencias: "Reuniões, atas, comunicados, procedimentos.",
      risco: "Desalinhamento operacional.",
      criticidade: "ALTO",
      classeMinima: 2
    },
  
    // =========================
    // MANUTENÇÃO — COMPLEMENTO
    // =========================
  
    {
      ref: "153.223(a)",
      subparte: "Subparte E - Manutenção",
      itemVerificavel: "Verificar se defeitos críticos são tratados imediatamente.",
      criterio: "Defeitos com risco à segurança devem ser tratados sem atraso.",
      evidencias: "Ordem de serviço, interdição, registros.",
      risco: "Acidente por falha conhecida.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.223(b)",
      subparte: "Subparte E - Manutenção",
      itemVerificavel: "Verificar se há priorização de manutenção baseada em risco.",
      criterio: "Manutenção deve seguir criticidade e impacto operacional.",
      evidencias: "Plano de manutenção, classificação de defeitos.",
      risco: "Recursos mal alocados.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // EMERGÊNCIA — COMPLEMENTO
    // =========================
  
    {
      ref: "153.325(c)",
      subparte: "Subparte F - Emergência",
      itemVerificavel: "Verificar se o plano prevê comunicação com imprensa.",
      criterio: "Deve haver controle de informação pública em emergência.",
      evidencias: "Procedimento, designação de porta-voz.",
      risco: "Divulgação inadequada de informações.",
      criticidade: "MÉDIO",
      classeMinima: 2
    },
  
    {
      ref: "153.325(d)",
      subparte: "Subparte F - Emergência",
      itemVerificavel: "Verificar se há ponto de encontro definido.",
      criterio: "Ponto de encontro deve estar definido e conhecido.",
      evidencias: "Mapa, plano, treinamento.",
      risco: "Desorganização de equipes.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // FAUNA — COMPLEMENTO
    // =========================
  
    {
      ref: "153.505(c)",
      subparte: "Subparte H - Fauna",
      itemVerificavel: "Verificar se há registro histórico de fauna.",
      criterio: "Registros devem permitir análise de tendência.",
      evidencias: "Planilhas, relatórios, banco de dados.",
      risco: "Falta de análise de risco de fauna.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.505(d)",
      subparte: "Subparte H - Fauna",
      itemVerificavel: "Verificar se ações de fauna são avaliadas quanto à eficácia.",
      criterio: "Ações devem ser revisadas e ajustadas.",
      evidencias: "Relatórios, indicadores.",
      risco: "Ação ineficaz mantida.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // CONFORMIDADE FINAL
    // =========================
  
    {
      ref: "153.FINAL.1",
      subparte: "Conformidade Geral",
      itemVerificavel: "Verificar se todos os requisitos aplicáveis foram avaliados.",
      criterio: "Checklist deve cobrir integralmente requisitos aplicáveis.",
      evidencias: "Checklist completo, relatório final.",
      risco: "Auditoria incompleta.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.FINAL.2",
      subparte: "Conformidade Geral",
      itemVerificavel: "Verificar se há plano de ação para não conformidades.",
      criterio: "NC deve gerar plano com prazo e responsável.",
      evidencias: "Plano de ação, cronograma.",
      risco: "NC não tratada.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    }
  
  );
  // =========================
// BLOCO FINAL — LACUNAS RBAC 153
// GOVERNANÇA / ANAC / MUDANÇA / KPI / TERCEIROS
// =========================

RBAC153.push(

    // =========================
    // GOVERNANÇA OPERACIONAL
    // =========================
  
    {
      ref: "153.GOV.1",
      subparte: "Governança Operacional",
      itemVerificavel: "Verificar se há reuniões periódicas de gestão operacional.",
      criterio: "A operação deve ser analisada regularmente pela gestão.",
      evidencias: "Atas, relatórios, calendário de reuniões.",
      risco: "Falta de controle gerencial da operação.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    {
      ref: "153.GOV.2",
      subparte: "Governança Operacional",
      itemVerificavel: "Verificar se decisões operacionais são registradas.",
      criterio: "Decisões críticas devem possuir rastreabilidade.",
      evidencias: "Atas, registros operacionais, e-mails.",
      risco: "Decisões sem histórico ou controle.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // INTERFACE COM ANAC
    // =========================
  
    {
      ref: "153.ANAC.1",
      subparte: "Interface ANAC",
      itemVerificavel: "Verificar se o operador mantém comunicação formal com a ANAC.",
      criterio: "Comunicações devem ser documentadas e rastreáveis.",
      evidencias: "Ofícios, protocolos, e-mails oficiais.",
      risco: "Descumprimento regulatório não comunicado.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.ANAC.2",
      subparte: "Interface ANAC",
      itemVerificavel: "Verificar se não conformidades apontadas pela ANAC são tratadas.",
      criterio: "NC deve gerar plano de ação com prazo e responsável.",
      evidencias: "Relatórios ANAC, plano de ação, evidência de correção.",
      risco: "Sanções regulatórias.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    // =========================
    // GESTÃO DE MUDANÇA
    // =========================
  
    {
      ref: "153.MUD.1",
      subparte: "Gestão de Mudança",
      itemVerificavel: "Verificar se mudanças operacionais passam por análise prévia.",
      criterio: "Mudanças devem ser avaliadas antes da implementação.",
      evidencias: "Formulário de mudança, análise de risco.",
      risco: "Introdução de risco não controlado.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.MUD.2",
      subparte: "Gestão de Mudança",
      itemVerificavel: "Verificar se mudanças possuem aprovação formal.",
      criterio: "Mudanças devem ser aprovadas por responsável designado.",
      evidencias: "Assinatura, autorização, fluxo de aprovação.",
      risco: "Mudança não controlada.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.MUD.3",
      subparte: "Gestão de Mudança",
      itemVerificavel: "Verificar se mudanças são comunicadas aos envolvidos.",
      criterio: "Mudança deve ser divulgada antes de entrar em vigor.",
      evidencias: "Comunicado, treinamento, briefing.",
      risco: "Execução incorreta por falta de comunicação.",
      criticidade: "ALTO",
      classeMinima: 1
    },
  
    // =========================
    // CONTROLE DE TERCEIROS
    // =========================
  
    {
      ref: "153.TERC.1",
      subparte: "Controle de Terceiros",
      itemVerificavel: "Verificar se terceiros seguem os procedimentos do aeródromo.",
      criterio: "Prestadores devem cumprir regras operacionais.",
      evidencias: "Contratos, fiscalização, relatórios.",
      risco: "Terceiro causar risco operacional.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    {
      ref: "153.TERC.2",
      subparte: "Controle de Terceiros",
      itemVerificavel: "Verificar se terceiros são treinados para operar no lado ar.",
      criterio: "Treinamento deve ser obrigatório antes do acesso.",
      evidencias: "Lista de treinamento, certificados.",
      risco: "Acesso inseguro ao lado ar.",
      criticidade: "CRÍTICO",
      classeMinima: 1
    },
  
    // =========================
    // INDICADORES / KPI
    // =========================
  
    {
      ref: "153.KPI.1",
      subparte: "Indicadores Operacionais",
      itemVerificavel: "Verificar se existem indicadores de desempenho operacional.",
      criterio: "Indicadores devem ser definidos e monitorados.",
      evidencias: "Relatórios, dashboards, planilhas.",
      risco: "Gestão sem controle de desempenho.",
      criticidade: "ALTO",
      classeMinima: 2
    },
  
    {
      ref: "153.KPI.2",
      subparte: "Indicadores Operacionais",
      itemVerificavel: "Verificar se indicadores são analisados periodicamente.",
      criterio: "Indicadores devem ser revisados pela gestão.",
      evidencias: "Reuniões, atas, relatórios.",
      risco: "Problemas recorrentes não tratados.",
      criticidade: "ALTO",
      classeMinima: 2
    },
  
    {
      ref: "153.KPI.3",
      subparte: "Indicadores Operacionais",
      itemVerificavel: "Verificar se indicadores geram ações corretivas.",
      criterio: "Desvios devem gerar plano de ação.",
      evidencias: "Plano de ação, acompanhamento.",
      risco: "Indicadores sem utilidade prática.",
      criticidade: "ALTO",
      classeMinima: 2
    }
  
  );
  export default RBAC153;