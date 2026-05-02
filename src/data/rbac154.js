export const RBAC154 = [

  // =========================
  // SUBPARTE C — PISTA (COMPLETO)
  // =========================

  {
    ref: "154.201",
    subparte: "Pista",
    itemVerificavel: "Verificar comprimento da pista conforme código de referência.",
    criterio: "Comprimento compatível com operação da aeronave crítica.",
    evidencias: "Projeto, AIP, medição.",
    risco: "Operação insegura por comprimento insuficiente.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.203",
    subparte: "Pista",
    itemVerificavel: "Verificar largura da pista.",
    criterio: "Compatível com código de referência do aeródromo.",
    evidencias: "Projeto geométrico, inspeção.",
    risco: "Saída lateral da aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.205",
    subparte: "Pista",
    itemVerificavel: "Verificar declividade longitudinal.",
    criterio: "Dentro dos limites normativos.",
    evidencias: "Levantamento topográfico.",
    risco: "Impacto na performance da aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.207",
    subparte: "Pista",
    itemVerificavel: "Verificar declividade transversal.",
    criterio: "Permite drenagem adequada.",
    evidencias: "Topografia, projeto.",
    risco: "Acúmulo de água.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.209",
    subparte: "Pista",
    itemVerificavel: "Verificar resistência do pavimento (PCN).",
    criterio: "Compatível com ACN das aeronaves.",
    evidencias: "Laudo estrutural.",
    risco: "Falha estrutural do pavimento.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPavimentado: true }
  },

  {
    ref: "154.211",
    subparte: "Pista",
    itemVerificavel: "Verificar faixa de pista (runway strip).",
    criterio: "Dimensões e limpeza conforme norma.",
    evidencias: "Inspeção, projeto.",
    risco: "Risco em excursão de pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.213",
    subparte: "Pista",
    itemVerificavel: "Verificar área de segurança de fim de pista (RESA).",
    criterio: "Dimensão conforme código do aeródromo.",
    evidencias: "Projeto, medição.",
    risco: "Gravidade em overrun.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { codigoNumeroMin: 2 }
  },

  {
    ref: "154.215",
    subparte: "Pista",
    itemVerificavel: "Verificar ombro de pista (shoulder).",
    criterio: "Existente quando exigido e em boas condições.",
    evidencias: "Inspeção visual.",
    risco: "Dano estrutural na aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { codigoNumeroMin: 3 }
  },

  {
    ref: "154.217",
    subparte: "Pista",
    itemVerificavel: "Verificar drenagem da pista.",
    criterio: "Sistema funcional sem acúmulo de água.",
    evidencias: "Inspeção, projeto.",
    risco: "Aquaplanagem.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.219",
    subparte: "Pista",
    itemVerificavel: "Verificar ausência de obstáculos na faixa de pista.",
    criterio: "Área livre de objetos.",
    evidencias: "Inspeção em campo.",
    risco: "Colisão durante operação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  }

];
// =========================
// PARTE 2 — RBAC 154
// TAXIWAYS / SEPARAÇÕES / SEGURANÇA LATERAL
// =========================

RBAC154.push(
  {
    ref: "154.301",
    subparte: "Taxiway",
    itemVerificavel: "Verificar largura da taxiway conforme código de referência da aeronave crítica.",
    criterio: "A largura deve ser compatível com o código de referência e o tipo de aeronave operante.",
    evidencias: "Projeto geométrico, levantamento topográfico, medição em campo.",
    risco: "Saída lateral da aeronave durante taxiamento.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.303",
    subparte: "Taxiway",
    itemVerificavel: "Verificar afastamento entre eixo da taxiway e objetos fixos.",
    criterio: "A distância deve garantir separação segura entre aeronaves e obstáculos.",
    evidencias: "Projeto, cadastro de obstáculos, inspeção em campo.",
    risco: "Colisão da aeronave com objeto fixo durante taxiamento.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.305",
    subparte: "Taxiway",
    itemVerificavel: "Verificar separação entre taxiway e pista.",
    criterio: "A separação deve ser compatível com o código de referência e operação prevista.",
    evidencias: "Projeto geométrico, planta aeroportuária, medição.",
    risco: "Conflito entre aeronave taxiando e aeronave em pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true, requerPista: true }
  },

  {
    ref: "154.307",
    subparte: "Taxiway",
    itemVerificavel: "Verificar raios de curva e transições da taxiway.",
    criterio: "Curvas devem permitir taxiamento seguro da aeronave crítica sem excursão.",
    evidencias: "Projeto geométrico, análise da aeronave crítica, inspeção de marcas de roda.",
    risco: "Saída da taxiway ou dano ao trem de pouso.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.309",
    subparte: "Taxiway",
    itemVerificavel: "Verificar acostamentos/ombros de taxiway quando aplicável.",
    criterio: "Ombros devem proteger contra ingestão de detritos e suportar tráfego eventual.",
    evidencias: "Projeto, inspeção visual, registros de manutenção.",
    risco: "Ingestão de FOD por motores ou dano à aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true, codigoLetraMin: "C" }
  },

  {
    ref: "154.311",
    subparte: "Taxiway",
    itemVerificavel: "Verificar resistência do pavimento da taxiway.",
    criterio: "Pavimento deve suportar aeronaves operantes.",
    evidencias: "Relatório estrutural, PCN/PCR, inspeção de deformações.",
    risco: "Falha estrutural do pavimento durante taxiamento.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true, requerPavimentado: true }
  },

  {
    ref: "154.313",
    subparte: "Taxiway",
    itemVerificavel: "Verificar declividade longitudinal e transversal da taxiway.",
    criterio: "Declividades devem permitir operação segura e drenagem adequada.",
    evidencias: "Topografia, projeto executivo, inspeção em campo.",
    risco: "Acúmulo de água, perda de controle ou esforço excessivo da aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.315",
    subparte: "Taxiway",
    itemVerificavel: "Verificar drenagem da taxiway.",
    criterio: "A taxiway deve possuir drenagem eficiente, sem acúmulo de água.",
    evidencias: "Inspeção após chuva, projeto de drenagem, registros de manutenção.",
    risco: "Aquaplanagem, FOD e degradação do pavimento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },
  

  {
    ref: "154.317",
    subparte: "Taxiway",
    itemVerificavel: "Verificar sinalização horizontal de eixo de taxiway.",
    criterio: "Marcas de eixo devem estar visíveis, contínuas e compatíveis com o traçado.",
    evidencias: "Inspeção visual, fotos, plano de pintura.",
    risco: "Erro de trajetória durante taxiamento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.319",
    subparte: "Taxiway",
    itemVerificavel: "Verificar pontos de espera de pista.",
    criterio: "Pontos de espera devem estar posicionados e sinalizados corretamente.",
    evidencias: "Inspeção em campo, planta, sinalização horizontal e vertical.",
    risco: "Incursão em pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true, requerPista: true }
  },

  {
    ref: "154.321",
    subparte: "Taxiway",
    itemVerificavel: "Verificar sinalização em interseções de taxiway.",
    criterio: "Interseções devem possuir orientação suficiente para evitar erro de rota.",
    evidencias: "Inspeção visual, fotos, planta de sinalização.",
    risco: "Conflito de tráfego ou entrada em rota incorreta.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.323",
    subparte: "Taxiway",
    itemVerificavel: "Verificar ausência de obstáculos na faixa de taxiway.",
    criterio: "Faixa de taxiway deve permanecer livre de obstáculos incompatíveis.",
    evidencias: "Inspeção em campo, cadastro de obstáculos, fotos.",
    risco: "Colisão lateral ou dano à aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  }
);
// =========================
// PARTE 3 — RBAC 154
// PÁTIO / POSIÇÕES DE ESTACIONAMENTO / SEPARAÇÕES
// =========================

RBAC154.push(
  {
    ref: "154.401",
    subparte: "Pátio",
    itemVerificavel: "Verificar dimensionamento do pátio conforme aeronave crítica e demanda operacional.",
    criterio: "O pátio deve permitir estacionamento, circulação e atendimento seguro das aeronaves previstas.",
    evidencias: "Projeto geométrico, planta de posições, inspeção em campo, estudo de demanda.",
    risco: "Conflito entre aeronaves, veículos e equipamentos no pátio.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.403",
    subparte: "Pátio",
    itemVerificavel: "Verificar afastamento entre posições de estacionamento.",
    criterio: "As posições devem garantir separação segura entre aeronaves estacionadas.",
    evidencias: "Planta do pátio, medição em campo, análise da aeronave crítica.",
    risco: "Colisão entre aeronaves estacionadas ou durante manobra.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.405",
    subparte: "Pátio",
    itemVerificavel: "Verificar afastamento entre aeronaves e edificações, cercas, postes ou obstáculos.",
    criterio: "Deve haver distância segura entre aeronaves e objetos fixos.",
    evidencias: "Projeto, inspeção em campo, cadastro de obstáculos, fotos.",
    risco: "Colisão da aeronave com obstáculo fixo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.407",
    subparte: "Pátio",
    itemVerificavel: "Verificar resistência do pavimento do pátio.",
    criterio: "Pavimento deve suportar aeronaves, equipamentos e veículos previstos.",
    evidencias: "Relatório estrutural, PCN/PCR, inspeção de deformações e trincas.",
    risco: "Falha estrutural no pátio e dano à aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true, requerPavimentado: true }
  },

  {
    ref: "154.409",
    subparte: "Pátio",
    itemVerificavel: "Verificar declividades e drenagem do pátio.",
    criterio: "O pátio deve permitir escoamento de água sem comprometer segurança e abastecimento.",
    evidencias: "Projeto de drenagem, topografia, inspeção após chuva, fotos.",
    risco: "Acúmulo de água, contaminação, derrapagem ou degradação do pavimento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.411",
    subparte: "Pátio",
    itemVerificavel: "Verificar marcação das posições de estacionamento.",
    criterio: "As marcas devem estar visíveis, corretas e compatíveis com a aeronave crítica.",
    evidencias: "Inspeção visual, fotos, planta de sinalização, plano de pintura.",
    risco: "Posicionamento incorreto da aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.413",
    subparte: "Pátio",
    itemVerificavel: "Verificar sinalização de vias de serviço e circulação de veículos no pátio.",
    criterio: "Veículos devem circular por rotas definidas e segregadas quando aplicável.",
    evidencias: "Inspeção em campo, fotos, planta de circulação, procedimentos operacionais.",
    risco: "Colisão entre veículos, equipamentos e aeronaves.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.415",
    subparte: "Pátio",
    itemVerificavel: "Verificar áreas destinadas a equipamentos de apoio em solo.",
    criterio: "Equipamentos devem possuir áreas demarcadas fora das rotas críticas de aeronaves.",
    evidencias: "Inspeção visual, fotos, layout do pátio, procedimentos.",
    risco: "Equipamento invadir área de segurança ou interferir em aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.417",
    subparte: "Pátio",
    itemVerificavel: "Verificar posição e segurança das áreas de abastecimento.",
    criterio: "Áreas de abastecimento devem permitir operação segura, controle de derramamento e acesso de emergência.",
    evidencias: "Layout, inspeção em campo, procedimentos de abastecimento, registros de emergência.",
    risco: "Incêndio, explosão ou contaminação ambiental.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.419",
    subparte: "Pátio",
    itemVerificavel: "Verificar iluminação do pátio quando houver operação noturna.",
    criterio: "Iluminação deve permitir operação segura de aeronaves, veículos, passageiros e equipes.",
    evidencias: "Teste noturno, medição luminotécnica, registros de manutenção.",
    risco: "Colisão, atropelamento ou erro operacional durante operação noturna.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true, requerOperacaoNoturna: true }
  },

  {
    ref: "154.421",
    subparte: "Pátio",
    itemVerificavel: "Verificar proteção contra blast/jet blast nas áreas críticas.",
    criterio: "Áreas sujeitas a jato de motores devem possuir proteção, afastamento ou procedimento operacional.",
    evidencias: "Estudo operacional, barreiras, sinalização, procedimento e inspeção em campo.",
    risco: "Danos a pessoas, veículos, equipamentos ou edificações.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.423",
    subparte: "Pátio",
    itemVerificavel: "Verificar acessibilidade e rotas seguras de passageiros quando houver embarque remoto.",
    criterio: "Passageiros devem circular por rotas protegidas, sinalizadas e controladas.",
    evidencias: "Inspeção em campo, layout, procedimentos, sinalização e registros operacionais.",
    risco: "Atropelamento, acesso indevido ao lado ar ou interferência com aeronaves.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  }
);
// =========================
// PARTE 4 — RBAC 154
// AUXÍLIOS VISUAIS / SINALIZAÇÃO / ILUMINAÇÃO
// =========================

RBAC154.push(

  {
    ref: "154.501",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar sinalização horizontal da pista.",
    criterio: "Marcas devem seguir padrão ICAO/ANAC e estar visíveis.",
    evidencias: "Inspeção visual, fotos, plano de pintura.",
    risco: "Erro de alinhamento ou operação incorreta.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.503",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar marcações de eixo de pista.",
    criterio: "Linha central deve ser contínua e visível.",
    evidencias: "Inspeção em campo.",
    risco: "Desalinhamento da aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.505",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar marcações de cabeceira.",
    criterio: "Cabeceiras devem estar corretamente identificadas.",
    evidencias: "Inspeção visual.",
    risco: "Erro de identificação de pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.507",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar marcações de zona de toque.",
    criterio: "Devem existir conforme categoria do aeródromo.",
    evidencias: "Inspeção visual, projeto.",
    risco: "Erro na zona de pouso.",
    criticidade: "ALTO",
    regraAplicabilidade: { codigoNumeroMin: 2 }
  },

  {
    ref: "154.509",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar marcações de ponto de visada (aiming point).",
    criterio: "Devem estar posicionadas corretamente.",
    evidencias: "Inspeção, medição.",
    risco: "Erro de aproximação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { codigoNumeroMin: 2 }
  },

  {
    ref: "154.511",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar sinalização de taxiway.",
    criterio: "Linhas de eixo e borda devem estar visíveis.",
    evidencias: "Inspeção em campo.",
    risco: "Erro de taxiamento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.513",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar placas de sinalização vertical.",
    criterio: "Placas devem estar legíveis e posicionadas corretamente.",
    evidencias: "Inspeção visual.",
    risco: "Erro de navegação no solo.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.515",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar iluminação de pista.",
    criterio: "Sistema deve estar operacional e conforme padrão.",
    evidencias: "Teste noturno, registros.",
    risco: "Operação insegura à noite.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.517",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar luzes de borda de pista.",
    criterio: "Devem estar alinhadas, funcionais e visíveis.",
    evidencias: "Inspeção noturna.",
    risco: "Saída lateral da aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.519",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar luzes de eixo de pista quando aplicável.",
    criterio: "Devem existir conforme categoria do aeródromo.",
    evidencias: "Teste noturno.",
    risco: "Desalinhamento em baixa visibilidade.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { codigoNumeroMin: 3 }
  },

  {
    ref: "154.521",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar iluminação de taxiway.",
    criterio: "Sistema deve garantir visibilidade segura.",
    evidencias: "Teste noturno.",
    risco: "Erro de taxiamento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.523",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar sistema PAPI/VASI.",
    criterio: "Sistema deve estar alinhado e operacional.",
    evidencias: "Teste, calibração.",
    risco: "Aproximação incorreta.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { codigoNumeroMin: 2 }
  },

  {
    ref: "154.525",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar indicadores de direção do vento (biruta).",
    criterio: "Deve estar visível e funcional.",
    evidencias: "Inspeção visual.",
    risco: "Informação incorreta ao piloto.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.527",
    subparte: "Auxílios Visuais",
    itemVerificavel: "Verificar iluminação de obstáculos.",
    criterio: "Obstáculos devem ser sinalizados conforme exigência.",
    evidencias: "Inspeção noturna.",
    risco: "Colisão com obstáculo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  }

);
// =========================
// PARTE 5 — RBAC 154
// OBSTÁCULOS / SUPERFÍCIES LIMITADORAS / ÁREAS DE PROTEÇÃO
// =========================

RBAC154.push(
  {
    ref: "154.601",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar se existe levantamento/cadastro de obstáculos do aeródromo e entorno.",
    criterio: "Obstáculos devem ser identificados, cadastrados e avaliados quanto à interferência nas superfícies de proteção.",
    evidencias: "Levantamento topográfico, cadastro de obstáculos, relatório técnico, fotos e coordenadas.",
    risco: "Obstáculo não identificado afetar aproximação, decolagem ou circulação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.603",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar superfície de aproximação.",
    criterio: "A superfície de aproximação deve estar livre de obstáculos não permitidos ou devidamente tratados.",
    evidencias: "Estudo OLS, carta, levantamento topográfico, análise técnica.",
    risco: "Colisão com obstáculo na aproximação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.605",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar superfície de decolagem/subida.",
    criterio: "A superfície de decolagem deve estar protegida contra obstáculos incompatíveis.",
    evidencias: "Estudo de obstáculos, levantamento, análise de trajetória de decolagem.",
    risco: "Colisão ou redução de margem de segurança na decolagem.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.607",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar superfície de transição.",
    criterio: "A superfície de transição deve preservar proteção lateral da pista e aproximação.",
    evidencias: "Estudo OLS, levantamento do entorno, inspeção visual.",
    risco: "Obstáculo lateral interferir em aproximação, arremetida ou excursão.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.609",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar superfície horizontal interna.",
    criterio: "A superfície horizontal interna deve estar controlada quanto à presença de obstáculos.",
    evidencias: "Cadastro de obstáculos, estudo de superfícies, relatório técnico.",
    risco: "Interferência em circuitos de tráfego e procedimentos visuais.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.611",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar superfície cônica.",
    criterio: "A superfície cônica deve ser avaliada quanto a obstáculos no entorno do aeródromo.",
    evidencias: "Estudo OLS, mapas, dados georreferenciados.",
    risco: "Obstáculo afetar proteção aérea do aeródromo.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.613",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar se obstáculos existentes possuem tratamento adequado.",
    criterio: "Obstáculos devem ser removidos, reduzidos, sinalizados, iluminados ou formalmente avaliados.",
    evidencias: "Plano de tratamento, NOTAM, autorização, sinalização/iluminação, relatório técnico.",
    risco: "Obstáculo permanecer sem mitigação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.615",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar sinalização diurna de obstáculos.",
    criterio: "Obstáculos que representem risco devem possuir sinalização visual diurna quando aplicável.",
    evidencias: "Inspeção em campo, fotos, projeto de sinalização.",
    risco: "Obstáculo não percebido por pilotos ou operadores.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.617",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar iluminação noturna de obstáculos.",
    criterio: "Obstáculos relevantes devem possuir iluminação operacional e mantida quando aplicável.",
    evidencias: "Inspeção noturna, registros de manutenção, fotos, testes.",
    risco: "Colisão noturna com obstáculo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.619",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar se novas construções no entorno são acompanhadas pelo operador.",
    criterio: "O operador deve monitorar alterações no entorno que possam afetar as superfícies de proteção.",
    evidencias: "Registros de acompanhamento, ofícios, mapas, comunicações com município/DECEA/ANAC.",
    risco: "Surgimento de obstáculo sem avaliação aeronáutica.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.621",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar proteção da faixa de pista contra objetos não frangíveis.",
    criterio: "Objetos na faixa de pista devem atender requisitos de frangibilidade ou estar fora das áreas protegidas.",
    evidencias: "Inspeção em campo, especificação técnica, fotos, projeto.",
    risco: "Impacto severo em caso de excursão de pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.623",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar se equipamentos necessários à navegação/aeródromo são frangíveis quando exigido.",
    criterio: "Equipamentos instalados em áreas protegidas devem possuir característica frangível quando aplicável.",
    evidencias: "Especificações técnicas, laudos, inspeção em campo.",
    risco: "Agravamento de acidente por impacto contra equipamento rígido.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.625",
    subparte: "Obstáculos e Superfícies Limitadoras",
    itemVerificavel: "Verificar se a vegetação interfere nas superfícies de proteção.",
    criterio: "Árvores e vegetação devem ser controladas para não penetrar superfícies limitadoras.",
    evidencias: "Inspeção, levantamento topográfico, fotos, registros de poda/supressão.",
    risco: "Vegetação se tornar obstáculo à aproximação ou decolagem.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  }
);
// =========================
// PARTE 6 — RBAC 154
// SISTEMAS ELÉTRICOS / ENERGIA / MANUTENÇÃO / CONFIABILIDADE
// =========================

RBAC154.push(

  {
    ref: "154.701",
    subparte: "Sistemas Elétricos",
    itemVerificavel: "Verificar existência de sistema elétrico dedicado aos auxílios visuais.",
    criterio: "Sistema deve garantir fornecimento contínuo e estável.",
    evidencias: "Projeto elétrico, inspeção, registros.",
    risco: "Falha total de iluminação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerSistemaEletrico: true }
  },

  {
    ref: "154.703",
    subparte: "Sistemas Elétricos",
    itemVerificavel: "Verificar redundância do sistema elétrico.",
    criterio: "Deve existir fonte alternativa de energia.",
    evidencias: "Gerador, UPS, testes.",
    risco: "Operação interrompida por falha elétrica.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerSistemaEletrico: true }
  },

  {
    ref: "154.705",
    subparte: "Sistemas Elétricos",
    itemVerificavel: "Verificar tempo de comutação para energia de emergência.",
    criterio: "Transição deve ocorrer dentro do tempo normativo.",
    evidencias: "Teste, cronometragem.",
    risco: "Perda momentânea de iluminação crítica.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.707",
    subparte: "Sistemas Elétricos",
    itemVerificavel: "Verificar manutenção do sistema elétrico.",
    criterio: "Deve existir plano de manutenção preventiva e corretiva.",
    evidencias: "Registros, plano, inspeção.",
    risco: "Falha progressiva do sistema.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerSistemaEletrico: true }
  },

  {
    ref: "154.709",
    subparte: "Sistemas Elétricos",
    itemVerificavel: "Verificar proteção contra surtos e descargas elétricas.",
    criterio: "Sistema deve possuir proteção adequada.",
    evidencias: "Projeto, dispositivos instalados.",
    risco: "Danos aos sistemas.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerSistemaEletrico: true }
  },

  // =========================
  // MANUTENÇÃO DE INFRAESTRUTURA
  // =========================

  {
    ref: "154.801",
    subparte: "Manutenção",
    itemVerificavel: "Verificar programa de manutenção da infraestrutura.",
    criterio: "Deve existir plano estruturado.",
    evidencias: "Plano, cronograma.",
    risco: "Degradação da infraestrutura.",
    criticidade: "CRÍTICO"
  },

  {
    ref: "154.803",
    subparte: "Manutenção",
    itemVerificavel: "Verificar manutenção da pista.",
    criterio: "Pista deve estar em condições operacionais.",
    evidencias: "Inspeção, registros.",
    risco: "Falha operacional.",
    criticidade: "CRÍTICO"
  },

  {
    ref: "154.805",
    subparte: "Manutenção",
    itemVerificavel: "Verificar manutenção da taxiway.",
    criterio: "Taxiway deve estar íntegra.",
    evidencias: "Inspeção.",
    risco: "Falha de taxiamento.",
    criticidade: "ALTO"
  },

  {
    ref: "154.807",
    subparte: "Manutenção",
    itemVerificavel: "Verificar manutenção do pátio.",
    criterio: "Pátio deve estar íntegro.",
    evidencias: "Inspeção.",
    risco: "Dano à aeronave.",
    criticidade: "ALTO"
  },

  {
    ref: "154.809",
    subparte: "Manutenção",
    itemVerificavel: "Verificar manutenção dos auxílios visuais.",
    criterio: "Sistema deve estar operacional.",
    evidencias: "Testes, registros.",
    risco: "Falha operacional.",
    criticidade: "CRÍTICO"
  },

  {
    ref: "154.811",
    subparte: "Manutenção",
    itemVerificavel: "Verificar manutenção da drenagem.",
    criterio: "Sistema deve estar funcional.",
    evidencias: "Inspeção.",
    risco: "Acúmulo de água.",
    criticidade: "CRÍTICO"
  }

);
// =========================
// PARTE 7 — RBAC 154 FINAL 2/3
// PLANEJAMENTO / COMPATIBILIDADE / ZONAS DE PROTEÇÃO / EXPANSÃO
// =========================

RBAC154.push(
  {
    ref: "154.901",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se o projeto do aeródromo considera a aeronave crítica.",
    criterio: "A infraestrutura deve ser compatível com dimensões, desempenho e operação da aeronave crítica.",
    evidencias: "Estudo de aeronave crítica, projeto geométrico, AIP, memorial técnico.",
    risco: "Infraestrutura incompatível com aeronaves operantes.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.903",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se o código de referência do aeródromo está corretamente definido.",
    criterio: "Código número e código letra devem refletir pista e aeronave crítica.",
    evidencias: "Classificação RBAC 154, projeto, dados da aeronave crítica.",
    risco: "Aplicação incorreta dos requisitos de projeto.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.905",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se futuras ampliações foram consideradas no planejamento.",
    criterio: "Planejamento deve evitar conflitos futuros com áreas protegidas e superfícies limitadoras.",
    evidencias: "Plano diretor, estudos de expansão, reserva de áreas, mapas.",
    risco: "Expansão futura inviabilizada ou insegura.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.907",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar compatibilidade entre pista, taxiway, pátio e acessos.",
    criterio: "O conjunto deve permitir fluxo operacional seguro da aeronave crítica.",
    evidencias: "Layout aeroportuário, simulação de giro, planta, inspeção em campo.",
    risco: "Conflito operacional entre infraestrutura e aeronaves.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.909",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se há análise de segurança para operação de aeronave superior ao código existente.",
    criterio: "Operações acima do código de referência devem possuir avaliação técnica e mitigação.",
    evidencias: "Estudo de compatibilidade, AISO, restrições operacionais, aprovação/parecer técnico.",
    risco: "Operação de aeronave incompatível com a infraestrutura.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.911",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se áreas protegidas do aeródromo estão livres de ocupações incompatíveis.",
    criterio: "Áreas necessárias à segurança operacional devem ser preservadas.",
    evidencias: "Planta patrimonial, inspeção, fotos, cadastro de ocupações.",
    risco: "Ocupação indevida de área crítica de segurança.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.913",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar proteção das áreas anteriores às cabeceiras.",
    criterio: "Áreas próximas às cabeceiras devem estar livres de obstáculos, desníveis e ocupações incompatíveis.",
    evidencias: "Inspeção em campo, levantamento, fotos, planta de cabeceiras.",
    risco: "Aumento de gravidade em pouso curto, decolagem abortada ou excursão.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.915",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar proteção lateral da faixa de pista.",
    criterio: "Laterais da faixa devem estar niveladas, livres de obstáculos críticos e mantidas.",
    evidencias: "Inspeção, topografia, registros de manutenção, fotos.",
    risco: "Agravamento de excursão lateral de pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.917",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar proteção da RESA contra objetos e desníveis.",
    criterio: "RESA deve estar livre de obstáculos incompatíveis e em condição adequada.",
    evidencias: "Projeto, medição, inspeção, fotos.",
    risco: "Agravamento de overrun ou undershoot.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { codigoNumeroMin: 2 }
  },

  {
    ref: "154.919",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar se áreas niveladas da faixa de pista estão mantidas.",
    criterio: "Áreas niveladas devem permitir redução de danos em caso de excursão.",
    evidencias: "Topografia, inspeção visual, manutenção de terreno.",
    risco: "Tombamento, dano estrutural ou parada brusca da aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.921",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar se equipamentos instalados em áreas de segurança são frangíveis quando exigido.",
    criterio: "Equipamentos essenciais devem possuir frangibilidade ou posicionamento compatível.",
    evidencias: "Especificação técnica, laudo, inspeção em campo.",
    risco: "Impacto severo contra equipamento rígido.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.923",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar controle de erosão nas áreas de segurança.",
    criterio: "Áreas de pista, faixa e RESA devem estar sem erosões críticas.",
    evidencias: "Inspeção, fotos, registros de manutenção, drenagem.",
    risco: "Desníveis e perda de suporte em área de excursão.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.925",
    subparte: "Zonas de Proteção",
    itemVerificavel: "Verificar proteção contra acúmulo de água nas áreas de segurança.",
    criterio: "Áreas protegidas devem possuir escoamento adequado.",
    evidencias: "Inspeção após chuva, projeto de drenagem, fotos.",
    risco: "Perda de suporte, erosão ou atração de fauna.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.927",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se interferências entre lado ar e lado terra são controladas pelo projeto.",
    criterio: "Fluxos de passageiros, veículos, serviço e aeronaves devem ser segregados de forma segura.",
    evidencias: "Layout, inspeção em campo, procedimentos, sinalização.",
    risco: "Conflito entre passageiros, veículos e aeronaves.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.929",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se acessos de emergência são preservados no projeto do aeródromo.",
    criterio: "Rotas de emergência devem permitir acesso rápido às áreas críticas.",
    evidencias: "Mapa de emergência, inspeção, simulado, layout.",
    risco: "Atraso na resposta a emergência.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.931",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se alterações de infraestrutura passam por avaliação técnica antes da execução.",
    criterio: "Alterações devem considerar impacto em segurança operacional, superfícies, sinalização e operação.",
    evidencias: "Projeto, análise de risco, AISO, aprovação técnica, NOTAM quando aplicável.",
    risco: "Obra ou alteração introduzir condição insegura.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.933",
    subparte: "Planejamento e Compatibilidade Operacional",
    itemVerificavel: "Verificar se há controle documental dos projetos de infraestrutura.",
    criterio: "Projetos devem estar atualizados, aprovados e compatíveis com a configuração real do aeródromo.",
    evidencias: "As built, projetos aprovados, revisões, plantas, memorial técnico.",
    risco: "Decisão técnica baseada em projeto desatualizado.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  }
);
export default RBAC154;