const RBAC154 = [

  // =====================================================
  // RBAC 154 — EMENDA 08
  // CHECKLIST INTELIGENTE DE INSPEÇÃO / PROJETO DE AERÓDROMOS
  // ETAPA 1/2 — SUBPARTES A, B e C
  // =====================================================

  // =====================================================
  // SUBPARTE A — GERAL
  // =====================================================

  {
    ref: "154.1(a)",
    subparte: "A - Geral",
    grupo: "Aplicabilidade",
    itemVerificavel: "Verificar se o aeródromo é de uso público em terra e se está sujeito ao RBAC 154.",
    descricaoRequisito: "O RBAC 154 estabelece regras para projeto de aeródromos de uso público.",
    criterio: "O checklist deve ser aplicado a aeródromos públicos em terra, considerando instalações existentes, novas, alteradas ou em processo de alteração cadastral.",
    evidencias: "Ficha cadastral do aeródromo, Portaria de cadastro/homologação, dados ANAC, AIP, projeto aprovado.",
    risco: "Aplicação incorreta da norma ou exclusão indevida de requisitos obrigatórios.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { usoPublico: true }
  },

  {
    ref: "154.1(b)",
    subparte: "A - Geral",
    grupo: "Responsabilidade regulatória",
    itemVerificavel: "Verificar se o operador, projetista, mantenedor ou responsável técnico está enquadrado como agente sujeito ao RBAC 154.",
    descricaoRequisito: "A norma se aplica a pessoa natural ou jurídica, pública ou privada, envolvida com operação, construção, exploração, manutenção ou projeto de aeródromos.",
    criterio: "Devem existir responsáveis identificados para projeto, operação, manutenção e atualização cadastral.",
    evidencias: "Contratos, ART/RRT, MOPS, cadastro ANAC, organograma, documentos do operador.",
    risco: "Ausência de responsabilidade técnica e administrativa sobre requisitos de infraestrutura.",
    criticidade: "ALTO",
    regraAplicabilidade: { usoPublico: true }
  },

  {
    ref: "154.1(c)",
    subparte: "A - Geral",
    grupo: "Base normativa",
    itemVerificavel: "Verificar se o projeto do aeródromo adota os requisitos do RBAC 154 com base no Anexo 14 da OACI.",
    descricaoRequisito: "As especificações do RBAC 154 têm base no Anexo 14, Volume I, da Convenção de Aviação Civil Internacional.",
    criterio: "Projetos, memoriais e estudos devem demonstrar aderência aos requisitos nacionais aplicáveis.",
    evidencias: "Memorial descritivo, estudo aeronáutico, projeto geométrico, parecer técnico, referências normativas.",
    risco: "Projeto incompatível com padrões internacionais incorporados pela ANAC.",
    criticidade: "ALTO",
    regraAplicabilidade: { usoPublico: true }
  },

  {
    ref: "154.1(d)",
    subparte: "A - Geral",
    grupo: "Cores aeronáuticas",
    itemVerificavel: "Verificar se cores de luzes, sinalizações horizontais, verticais e painéis seguem o Apêndice A.",
    descricaoRequisito: "Sempre que uma cor for mencionada no regulamento, devem ser aplicadas as especificações do Apêndice A.",
    criterio: "Cores utilizadas em pintura, placas, painéis e luzes devem ser compatíveis com o padrão aeronáutico aplicável.",
    evidencias: "Plano de sinalização, especificação de tintas, laudo luminotécnico, inspeção visual, fotos.",
    risco: "Interpretação incorreta pelo piloto ou motorista no lado ar.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.1(e)",
    subparte: "A - Geral",
    grupo: "Operação de asa rotativa",
    itemVerificavel: "Verificar se áreas destinadas exclusivamente a helicópteros seguem regulamentação específica de helipontos.",
    descricaoRequisito: "Componentes exclusivamente destinados a aeronaves de asa rotativa devem cumprir regulamentação específica de helipontos.",
    criterio: "Áreas exclusivas para helicópteros devem ser avaliadas pela norma específica aplicável; áreas compartilhadas devem atender ao RBAC 154 e à regra mais restritiva quando aplicável.",
    evidencias: "Layout operacional, projeto do heliponto/área de helicópteros, procedimentos, sinalização.",
    risco: "Uso de critério inadequado para operação de helicópteros.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiHelicoptero: true }
  },

  {
    ref: "154.5(a)",
    subparte: "A - Geral",
    grupo: "Caráter obrigatório",
    itemVerificavel: "Verificar se todos os requisitos obrigatórios do RBAC 154 foram tratados como itens de conformidade.",
    descricaoRequisito: "Requisitos relativos a características físicas, configuração, material, equipamento, desempenho, pessoal ou procedimento têm caráter obrigatório.",
    criterio: "O checklist não deve tratar requisito obrigatório como recomendação.",
    evidencias: "Matriz de conformidade, relatório de inspeção, estudo aeronáutico, plano de ação.",
    risco: "Não conformidade regulatória por interpretação indevida.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.5(b)",
    subparte: "A - Geral",
    grupo: "Notas regulatórias",
    itemVerificavel: "Verificar se notas do regulamento foram usadas apenas como orientação complementar.",
    descricaoRequisito: "As notas fornecem informações adicionais e não constituem requisitos obrigatórios.",
    criterio: "Relatório deve diferenciar requisito obrigatório de nota explicativa.",
    evidencias: "Matriz normativa, parecer técnico, relatório de inspeção.",
    risco: "Cobrança indevida ou omissão de requisito real.",
    criticidade: "MÉDIO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.5(c)",
    subparte: "A - Geral",
    grupo: "Isenção de requisito",
    itemVerificavel: "Verificar se eventual não atendimento possui isenção ou estudo aeronáutico aceito pela ANAC.",
    descricaoRequisito: "O operador pode solicitar isenção nos moldes do RBAC 11 mediante estudo aeronáutico que demonstre nível aceitável de segurança.",
    criterio: "Toda divergência relevante deve possuir tratamento formal: conformidade, plano corretivo, isenção ou estudo aeronáutico.",
    evidencias: "Processo ANAC, estudo aeronáutico, decisão de isenção, análise de risco, medidas mitigadoras.",
    risco: "Operação com infraestrutura não conforme sem aceitação regulatória.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiNaoConformidade: true }
  },

  {
    ref: "154.5(d)",
    subparte: "A - Geral",
    grupo: "Instalações existentes e novas",
    itemVerificavel: "Verificar se cada instalação foi classificada como existente, nova, alterada ou em transição.",
    descricaoRequisito: "Requisitos aplicam-se integralmente às instalações implantadas após entrada em vigor e, nos casos de transição, às instalações existentes.",
    criterio: "A inspeção deve registrar data de implantação, alteração cadastral e versão normativa aplicável.",
    evidencias: "Ficha cadastral, processo de alteração, projetos anteriores, registros de implantação, fotos históricas.",
    risco: "Aplicação incorreta de regra transitória ou exigência fora do marco regulatório.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.9(a)",
    subparte: "A - Geral",
    grupo: "Sistema de referência horizontal",
    itemVerificavel: "Verificar se coordenadas aeronáuticas estão no datum WGS-84.",
    descricaoRequisito: "O Sistema Geodésico Mundial WGS-84 deve ser utilizado como referência horizontal.",
    criterio: "Latitude e longitude publicadas ou usadas em projeto devem estar expressas em WGS-84.",
    evidencias: "Levantamento topográfico/geodésico, AIP, ficha cadastral, relatório GNSS.",
    risco: "Erro de posicionamento de pista, cabeceira, auxílios ou obstáculos.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.9(b)",
    subparte: "A - Geral",
    grupo: "Sistema de referência vertical",
    itemVerificavel: "Verificar se elevações estão referenciadas ao nível médio do mar.",
    descricaoRequisito: "O datum do nível médio do mar deve ser utilizado como referência vertical.",
    criterio: "Elevações de aeródromo, cabeceiras e pontos críticos devem estar em MSL/altura ortométrica.",
    evidencias: "Levantamento altimétrico, relatório topográfico, ficha cadastral, AIP.",
    risco: "Erro em dados aeronáuticos, cálculo de obstáculos ou publicação operacional.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.9(c)",
    subparte: "A - Geral",
    grupo: "Sistema de referência temporal",
    itemVerificavel: "Verificar se dados temporais oficiais usam Calendário Gregoriano e UTC.",
    descricaoRequisito: "Calendário Gregoriano e UTC devem ser usados como sistema de referência temporal.",
    criterio: "Publicações e registros técnicos devem usar referência temporal clara e padronizada.",
    evidencias: "AIP, NOTAM, relatórios, registros de inspeção, metadados de levantamento.",
    risco: "Erro de validade, rastreabilidade ou sincronização de informações aeronáuticas.",
    criticidade: "MÉDIO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.13(c)",
    subparte: "A - Geral",
    grupo: "Código de referência",
    itemVerificavel: "Verificar se o código de referência do aeródromo foi determinado para fins de planejamento.",
    descricaoRequisito: "O código de referência, número e letra, deve ser determinado conforme características das aeronaves que o aeródromo deverá atender.",
    criterio: "Deve haver definição formal de aeronave crítica e código de referência.",
    evidencias: "Estudo de aeronave crítica, mix de frota, projeto geométrico, memória de cálculo.",
    risco: "Dimensionamento incorreto de pista, taxiway, faixa, pátio e auxílios visuais.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.13(e)",
    subparte: "A - Geral",
    grupo: "Número do código",
    itemVerificavel: "Verificar se o número do código foi definido pelo comprimento básico de pista da aeronave crítica.",
    descricaoRequisito: "O número do código é selecionado conforme maior comprimento básico de pista requerido pela aeronave.",
    criterio: "Código 1: menor que 800 m; 2: 800 m a menor que 1200 m; 3: 1200 m a menor que 1800 m; 4: maior ou igual a 1800 m.",
    evidencias: "Manual da aeronave, estudo de frota, tabela ANAC, memória de cálculo.",
    risco: "Aplicação de dimensões mínimas inferiores às exigidas.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.13(f)",
    subparte: "A - Geral",
    grupo: "Letra do código",
    itemVerificavel: "Verificar se a letra do código foi definida pela maior envergadura da aeronave crítica.",
    descricaoRequisito: "A letra do código corresponde à maior envergadura dentre as aeronaves atendidas.",
    criterio: "A: <15 m; B: 15 m a <24 m; C: 24 m a <36 m; D: 36 m a <52 m; E: 52 m a <65 m; F: 65 m a <80 m.",
    evidencias: "Dados da aeronave crítica, manual do fabricante, estudo de compatibilidade.",
    risco: "Subdimensionamento de separações laterais, taxiway, pátio e acostamentos.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  // =====================================================
  // SUBPARTE B — DADOS DO AERÓDROMO
  // =====================================================

  {
    ref: "154.101",
    subparte: "B - Dados do Aeródromo",
    grupo: "Dados aeronáuticos",
    itemVerificavel: "Verificar se os dados aeronáuticos do aeródromo estão completos, atualizados e coerentes.",
    descricaoRequisito: "Dados aeronáuticos devem ser determinados e disponibilizados com qualidade adequada.",
    criterio: "Dados devem estar consistentes entre projeto, cadastro ANAC, AIP, publicações e levantamentos técnicos.",
    evidencias: "AIP, ROTAER, ficha cadastral, levantamento topográfico, relatório AIS, projeto as built.",
    risco: "Publicação de informação incorreta ao usuário do espaço aéreo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.103",
    subparte: "B - Dados do Aeródromo",
    grupo: "Ponto de referência do aeródromo",
    itemVerificavel: "Verificar se o ARP está definido, georreferenciado e publicado corretamente.",
    descricaoRequisito: "O aeródromo deve possuir ponto de referência designado.",
    criterio: "ARP deve representar localização geográfica oficial do aeródromo em WGS-84.",
    evidencias: "Ficha cadastral, AIP, relatório geodésico, planta geral.",
    risco: "Erro de identificação e localização oficial do aeródromo.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.105",
    subparte: "B - Dados do Aeródromo",
    grupo: "Elevações",
    itemVerificavel: "Verificar elevação do aeródromo e elevações das cabeceiras.",
    descricaoRequisito: "Devem ser determinadas elevações do aeródromo e da pista.",
    criterio: "Elevação do aeródromo deve corresponder ao ponto mais elevado da área de pouso; cabeceiras devem possuir elevações confiáveis.",
    evidencias: "Levantamento topográfico, AIP, ficha cadastral, relatório altimétrico.",
    risco: "Erro em performance, procedimentos, obstáculos e publicações aeronáuticas.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.107",
    subparte: "B - Dados do Aeródromo",
    grupo: "Temperatura de referência",
    itemVerificavel: "Verificar se a temperatura de referência do aeródromo foi determinada.",
    descricaoRequisito: "O aeródromo deve possuir temperatura de referência definida.",
    criterio: "Temperatura deve estar documentada e compatível com dados climatológicos utilizados em projeto e performance.",
    evidencias: "Estudo climatológico, AIP, memorial de projeto, dados meteorológicos.",
    risco: "Erro no dimensionamento de pista e análise de desempenho das aeronaves.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.109",
    subparte: "B - Dados do Aeródromo",
    grupo: "Dimensões e informações correlatas",
    itemVerificavel: "Verificar se dimensões do aeródromo e informações correlatas estão medidas e publicadas.",
    descricaoRequisito: "Devem ser disponibilizadas dimensões de pistas, taxiways, pátios e demais informações correlatas.",
    criterio: "Comprimento, largura, declividades, coordenadas, tipo de superfície, resistência e demais dados devem estar coerentes com campo e publicações.",
    evidencias: "AIP, ficha cadastral, planta geral, levantamento topográfico, inspeção de campo.",
    risco: "Divergência entre infraestrutura real e dados utilizados pelos operadores.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.111",
    subparte: "B - Dados do Aeródromo",
    grupo: "Resistência de pavimentos",
    itemVerificavel: "Verificar se a resistência dos pavimentos foi determinada e publicada pelo método aplicável.",
    descricaoRequisito: "A resistência de pavimentos deve ser informada para permitir avaliação de compatibilidade com aeronaves.",
    criterio: "Pavimentos destinados a aeronaves devem possuir informação de resistência atualizada, incluindo PCR/ACR quando aplicável.",
    evidencias: "Laudo de pavimento, relatório estrutural, ensaios, AIP, ficha cadastral.",
    risco: "Operação de aeronave acima da capacidade estrutural do pavimento.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPavimentado: true }
  },

  {
    ref: "154.113",
    subparte: "B - Dados do Aeródromo",
    grupo: "Ponto de teste de altímetro",
    itemVerificavel: "Verificar se existe ponto de teste de altímetro antes do voo, quando aplicável.",
    descricaoRequisito: "O aeródromo deve disponibilizar ponto de teste de altímetro antes do voo quando previsto.",
    criterio: "Local deve estar identificado, com elevação publicada e compatível com uso operacional.",
    evidencias: "AIP, sinalização local, ficha cadastral, inspeção em campo.",
    risco: "Ajuste incorreto de altímetro antes da operação.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiPontoTesteAltimetro: true }
  },

  {
    ref: "154.115",
    subparte: "B - Dados do Aeródromo",
    grupo: "Distâncias declaradas",
    itemVerificavel: "Verificar se TORA, TODA, ASDA e LDA estão calculadas, publicadas e coerentes com a infraestrutura.",
    descricaoRequisito: "Devem ser declaradas distâncias utilizadas para cálculo de pouso e decolagem.",
    criterio: "TORA, TODA, ASDA e LDA devem refletir pista, cabeceiras deslocadas, stopway e clearway existentes.",
    evidencias: "AIP, ficha cadastral, planta da pista, levantamento topográfico, memória de cálculo.",
    risco: "Erro de performance de decolagem ou pouso.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  // =====================================================
  // SUBPARTE C — CARACTERÍSTICAS FÍSICAS
  // =====================================================

  {
    ref: "154.201",
    subparte: "C - Características Físicas",
    grupo: "Pistas de pouso e decolagem",
    itemVerificavel: "Verificar número, orientação e implantação das pistas de pouso e decolagem.",
    descricaoRequisito: "O projeto deve contemplar pistas adequadas às operações previstas.",
    criterio: "Pista deve atender aeronave crítica, tipo de operação, vento, obstáculos, distâncias declaradas e código de referência.",
    evidencias: "Projeto geométrico, estudo de vento, estudo de aeronave crítica, AIP, inspeção em campo.",
    risco: "Implantação incompatível com operação segura do aeródromo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.201",
    subparte: "C - Características Físicas",
    grupo: "Pistas de pouso e decolagem",
    itemVerificavel: "Verificar largura da pista conforme código de referência e tipo de operação.",
    descricaoRequisito: "A largura da pista deve ser compatível com o código de referência da aeronave crítica.",
    criterio: "Largura medida em campo deve atender ao mínimo normativo aplicável ao número/letra de código.",
    evidencias: "Medição em campo, projeto geométrico, levantamento topográfico, ficha cadastral.",
    risco: "Excursão lateral, operação restrita ou incompatibilidade com aeronave crítica.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.201",
    subparte: "C - Características Físicas",
    grupo: "Pistas de pouso e decolagem",
    itemVerificavel: "Verificar comprimento real da pista e compatibilidade com as distâncias declaradas.",
    descricaoRequisito: "Comprimento da pista deve ser compatível com as operações pretendidas e dados declarados.",
    criterio: "Comprimento físico, TORA, TODA, ASDA e LDA devem estar coerentes com cabeceiras, stopway, clearway e restrições.",
    evidencias: "Planta da pista, AIP, medições, memorial de cálculo, levantamento topográfico.",
    risco: "Erro de performance e operação fora dos limites seguros.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.201",
    subparte: "C - Características Físicas",
    grupo: "Pistas de pouso e decolagem",
    itemVerificavel: "Verificar declividades longitudinal e transversal da pista.",
    descricaoRequisito: "Declividades devem atender aos limites aplicáveis ao código de referência e permitir drenagem.",
    criterio: "Perfis longitudinais e transversais devem estar dentro dos limites normativos e sem depressões críticas.",
    evidencias: "Levantamento topográfico, perfil longitudinal, seções transversais, inspeção após chuva.",
    risco: "Acúmulo de água, perda de controle, degradação do pavimento e impacto na performance.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.201",
    subparte: "C - Características Físicas",
    grupo: "Pistas de pouso e decolagem",
    itemVerificavel: "Verificar superfície da pista quanto a regularidade, textura, atrito e drenagem.",
    descricaoRequisito: "A superfície da pista deve ser adequada à operação segura das aeronaves.",
    criterio: "Não deve haver buracos, deformações, contaminação, FOD, acúmulo de água ou condição que comprometa frenagem e controle direcional.",
    evidencias: "Inspeção visual, ensaio de atrito, relatório de manutenção, fotos, registros de chuva.",
    risco: "Aquaplanagem, estouro de pneu, excursão de pista ou dano à aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.203",
    subparte: "C - Características Físicas",
    grupo: "Acostamentos de pista",
    itemVerificavel: "Verificar existência e dimensões dos acostamentos de pista quando exigidos.",
    descricaoRequisito: "Acostamentos devem ser previstos quando requeridos para proteção de aeronaves e motores.",
    criterio: "Acostamentos devem possuir largura, superfície, resistência e transição adequadas ao código de referência e aeronave crítica.",
    evidencias: "Projeto geométrico, inspeção visual, medição, relatório de pavimento.",
    risco: "Ingestão de FOD, erosão de borda, dano a motor ou trem de pouso.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true, codigoLetraMin: "D" }
  },

  {
    ref: "154.203",
    subparte: "C - Características Físicas",
    grupo: "Acostamentos de pista",
    itemVerificavel: "Verificar condição de conservação e nivelamento dos acostamentos.",
    descricaoRequisito: "Acostamentos devem oferecer transição segura entre pista e área adjacente.",
    criterio: "Não deve haver degrau perigoso, erosão, material solto, vegetação invasiva ou desagregação.",
    evidencias: "Inspeção em campo, fotos, relatório de manutenção, medição de desnível.",
    risco: "Dano à aeronave em excursão lateral ou ingestão de detritos.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true, possuiAcostamentoPista: true }
  },

  {
    ref: "154.205",
    subparte: "C - Características Físicas",
    grupo: "Área de giro de pista",
    itemVerificavel: "Verificar existência de área de giro quando a pista não possuir taxiway adequada para retorno.",
    descricaoRequisito: "Área de giro deve permitir que a aeronave complete curva de 180 graus sobre a pista.",
    criterio: "Geometria, resistência, afastamentos e sinalização devem atender à aeronave crítica.",
    evidencias: "Projeto geométrico, simulação de giro, inspeção em campo, marcas de pneu.",
    risco: "Saída de pista durante manobra de retorno ou dano ao trem de pouso.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true, possuiAreaGiro: true }
  },

  {
    ref: "154.205",
    subparte: "C - Características Físicas",
    grupo: "Área de giro de pista",
    itemVerificavel: "Verificar sinalização, declividade e drenagem da área de giro.",
    descricaoRequisito: "Área de giro deve possuir características físicas compatíveis com a operação segura.",
    criterio: "Área deve ser visível, drenada, livre de FOD e compatível com trajetórias da aeronave crítica.",
    evidencias: "Inspeção visual, topografia, fotos, projeto de sinalização.",
    risco: "Erro de manobra, acúmulo de água, FOD ou excursão.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiAreaGiro: true }
  },

  {
    ref: "154.207",
    subparte: "C - Características Físicas",
    grupo: "Faixa de pista",
    itemVerificavel: "Verificar dimensões da faixa de pista de pouso e decolagem.",
    descricaoRequisito: "A faixa de pista deve incluir a pista e zonas de parada, se existentes, para reduzir risco em excursões.",
    criterio: "Comprimento e largura da faixa devem atender ao código de referência e tipo de operação.",
    evidencias: "Projeto geométrico, levantamento topográfico, inspeção em campo, planta cadastral.",
    risco: "Aeronave em excursão encontrar obstáculo, desnível ou terreno inadequado.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.207",
    subparte: "C - Características Físicas",
    grupo: "Faixa de pista",
    itemVerificavel: "Verificar se a faixa de pista está livre de obstáculos não permitidos.",
    descricaoRequisito: "Faixa de pista deve proteger aeronaves que saiam da pista e aeronaves sobrevoando a pista.",
    criterio: "Objetos indispensáveis devem ser frangíveis e posicionados conforme permitido; demais objetos devem ser removidos.",
    evidencias: "Inspeção em campo, cadastro de obstáculos, fotos georreferenciadas, plano de remoção.",
    risco: "Colisão durante excursão ou aproximação/decolagem.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.207",
    subparte: "C - Características Físicas",
    grupo: "Faixa preparada",
    itemVerificavel: "Verificar nivelamento, compactação e capacidade de suporte da porção preparada da faixa.",
    descricaoRequisito: "A porção preparada da faixa deve minimizar danos em caso de saída acidental da pista.",
    criterio: "Área deve estar nivelada, drenada, sem valas, buracos, elevações perigosas ou vegetação incompatível.",
    evidencias: "Inspeção visual, topografia, relatório de manutenção, fotos, ensaios quando aplicável.",
    risco: "Capotamento, colapso do trem de pouso ou danos severos à aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.209",
    subparte: "C - Características Físicas",
    grupo: "RESA",
    itemVerificavel: "Verificar existência da Área de Segurança de Fim de Pista quando aplicável.",
    descricaoRequisito: "RESA deve reduzir risco de danos a aeronaves em undershoot ou overrun.",
    criterio: "RESA deve existir nas cabeceiras aplicáveis, com dimensões e características compatíveis com o código da pista.",
    evidencias: "Projeto geométrico, inspeção de campo, medições, estudo de segurança.",
    risco: "Aumento da severidade em ultrapassagem de pista ou toque antes da cabeceira.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true, codigoNumeroMin: 3 }
  },

  {
    ref: "154.209",
    subparte: "C - Características Físicas",
    grupo: "RESA",
    itemVerificavel: "Verificar condição física, nivelamento, drenagem e ausência de obstáculos na RESA.",
    descricaoRequisito: "RESA deve estar preparada para reduzir danos às aeronaves.",
    criterio: "Área deve estar livre de obstáculos, erosões, valas, desníveis acentuados, vegetação alta e materiais soltos.",
    evidencias: "Inspeção visual, levantamento topográfico, relatório fotográfico, plano de manutenção.",
    risco: "Danos graves à aeronave e ocupantes em evento de excursão longitudinal.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiRESA: true }
  },

  {
    ref: "154.211",
    subparte: "C - Características Físicas",
    grupo: "Clearway",
    itemVerificavel: "Verificar existência, dimensões e controle da zona desimpedida quando declarada.",
    descricaoRequisito: "Clearway é área adequada sobre a qual a aeronave pode realizar parte da decolagem.",
    criterio: "Quando declarada, deve estar sob controle da autoridade competente, livre de obstáculos incompatíveis e considerada na TODA.",
    evidencias: "AIP, ficha cadastral, planta da pista, contrato/controle da área, levantamento de obstáculos.",
    risco: "Cálculo incorreto de TODA e risco de colisão com obstáculos na decolagem.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiClearway: true }
  },

  {
    ref: "154.213",
    subparte: "C - Características Físicas",
    grupo: "Stopway",
    itemVerificavel: "Verificar existência, dimensões e resistência da zona de parada quando declarada.",
    descricaoRequisito: "Stopway é área preparada no prolongamento da pista para parada de aeronaves.",
    criterio: "Quando declarada, deve estar alinhada, dimensionada, preparada e considerada na ASDA.",
    evidencias: "AIP, projeto geométrico, laudo de pavimento, inspeção de campo, memória de cálculo.",
    risco: "Cálculo incorreto de ASDA e incapacidade de parada em decolagem abortada.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiStopway: true }
  },

  {
    ref: "154.215",
    subparte: "C - Características Físicas",
    grupo: "Área de operação de rádio-altímetro",
    itemVerificavel: "Verificar área de operação de rádio-altímetro quando aplicável a operações de precisão/autoland.",
    descricaoRequisito: "A área deve proteger a integridade de operação de rádio-altímetro em aproximações aplicáveis.",
    criterio: "Superfície deve estar adequada, sem irregularidades ou interferências incompatíveis com operações previstas.",
    evidencias: "Projeto, estudo operacional, procedimento IFR, relatório técnico, inspeção em campo.",
    risco: "Indicação incorreta de altura e degradação da segurança em aproximação de precisão.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { pistaInstrumento: true, operacaoPrecisao: true }
  },

  {
    ref: "154.217",
    subparte: "C - Características Físicas",
    grupo: "Pistas de táxi",
    itemVerificavel: "Verificar largura das pistas de táxi conforme código de referência e aeronave crítica.",
    descricaoRequisito: "Pistas de táxi devem permitir movimento seguro das aeronaves previstas.",
    criterio: "Largura, raios de curva, fillets e separações devem atender à aeronave crítica e ao código de referência.",
    evidencias: "Projeto geométrico, análise de wheel tracking, levantamento topográfico, inspeção em campo.",
    risco: "Saída da taxiway, colisão lateral ou dano ao trem de pouso.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.217",
    subparte: "C - Características Físicas",
    grupo: "Pistas de táxi",
    itemVerificavel: "Verificar raios de curva, sobrelarguras e fillets das pistas de táxi.",
    descricaoRequisito: "Curvas e interseções devem permitir deslocamento seguro da aeronave crítica.",
    criterio: "A roda externa do trem principal deve permanecer dentro do pavimento com afastamentos mínimos adequados.",
    evidencias: "Projeto geométrico, simulação da aeronave crítica, inspeção de marcas de pneus, fotos.",
    risco: "Saída do pavimento, ingestão de FOD ou dano ao trem de pouso.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.217",
    subparte: "C - Características Físicas",
    grupo: "Pistas de táxi",
    itemVerificavel: "Verificar declividades, drenagem e condição superficial das pistas de táxi.",
    descricaoRequisito: "Pistas de táxi devem possuir superfície regular e drenagem adequada.",
    criterio: "Não deve haver empoçamento, FOD, deformações, buracos, trincas críticas ou desníveis perigosos.",
    evidencias: "Inspeção visual, topografia, relatório de manutenção, inspeção após chuva.",
    risco: "Perda de controle direcional, FOD ou degradação acelerada do pavimento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.217",
    subparte: "C - Características Físicas",
    grupo: "Pistas de táxi",
    itemVerificavel: "Verificar separação entre eixo de taxiway, pista, objetos e outras taxiways.",
    descricaoRequisito: "Separações devem proteger aeronaves em movimento contra colisões.",
    criterio: "Afastamentos devem ser compatíveis com código de referência, tipo de operação e aeronave crítica.",
    evidencias: "Planta aeroportuária, medição, cadastro de obstáculos, inspeção em campo.",
    risco: "Colisão entre aeronaves, veículos, obstáculos ou incursão em área protegida.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.219",
    subparte: "C - Características Físicas",
    grupo: "Acostamentos de taxiway",
    itemVerificavel: "Verificar acostamentos de pista de táxi quando requeridos.",
    descricaoRequisito: "Acostamentos de taxiway devem proteger motores e aeronaves contra FOD e erosão de borda.",
    criterio: "Acostamentos devem possuir largura, superfície e transição compatíveis com a aeronave crítica.",
    evidencias: "Projeto geométrico, inspeção visual, medições, relatório de manutenção.",
    risco: "Ingestão de detritos, dano a motor ou saída lateral do pavimento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true, codigoLetraMin: "C" }
  },

  {
    ref: "154.221",
    subparte: "C - Características Físicas",
    grupo: "Faixas de taxiway",
    itemVerificavel: "Verificar dimensões e limpeza das faixas de pista de táxi.",
    descricaoRequisito: "Faixa de taxiway protege aeronaves em operação na taxiway e reduz risco de danos em saída acidental.",
    criterio: "Faixa deve estar livre de obstáculos incompatíveis, nivelada e mantida conforme código da aeronave.",
    evidencias: "Projeto, inspeção em campo, levantamento topográfico, fotos.",
    risco: "Colisão lateral ou agravamento de saída acidental da taxiway.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.223",
    subparte: "C - Características Físicas",
    grupo: "Posições de espera",
    itemVerificavel: "Verificar baias de espera, posições de espera de pista, posições intermediárias e vias de serviço.",
    descricaoRequisito: "Devem existir posições de espera para proteger pista, áreas críticas/sensíveis e circulação no lado ar.",
    criterio: "Posições devem estar corretamente localizadas, sinalizadas horizontal e verticalmente, e compatíveis com operação ATS/local.",
    evidencias: "Projeto de sinalização, inspeção em campo, fotos, carta de aeródromo, procedimentos locais.",
    risco: "Incursão em pista, conflito com aeronave em pouso/decolagem ou violação de área sensível.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true, requerPista: true }
  },

  {
    ref: "154.223",
    subparte: "C - Características Físicas",
    grupo: "Posições de espera",
    itemVerificavel: "Verificar posições de espera em vias de serviço.",
    descricaoRequisito: "Vias de serviço devem possuir posições de espera quando cruzarem ou se aproximarem de áreas operacionais protegidas.",
    criterio: "Motoristas devem receber indicação clara de parada antes de ingressar em pista, taxiway ou área protegida.",
    evidencias: "Inspeção visual, planta de vias de serviço, sinalização horizontal/vertical, procedimentos de tráfego interno.",
    risco: "Incursão de veículo em pista ou conflito com aeronave.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiViaServico: true }
  },

  {
    ref: "154.225",
    subparte: "C - Características Físicas",
    grupo: "Pátios de aeronaves",
    itemVerificavel: "Verificar dimensionamento do pátio de aeronaves conforme aeronave crítica e demanda operacional.",
    descricaoRequisito: "Pátios devem permitir acomodação de aeronaves para embarque, desembarque, carga, abastecimento, estacionamento e manutenção.",
    criterio: "Pátio deve comportar aeronaves, equipamentos, veículos e passageiros com separações seguras.",
    evidencias: "Layout do pátio, planta de posições, estudo de demanda, inspeção em campo.",
    risco: "Conflito entre aeronaves, veículos, equipamentos e pessoas.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.225",
    subparte: "C - Características Físicas",
    grupo: "Pátios de aeronaves",
    itemVerificavel: "Verificar afastamentos entre aeronaves estacionadas, objetos, edificações e veículos.",
    descricaoRequisito: "Pátio deve garantir separações adequadas para manobra e estacionamento.",
    criterio: "Afastamentos devem considerar envergadura, comprimento, operação de pushback/taxi-in/taxi-out e obstáculos fixos.",
    evidencias: "Planta do pátio, simulação operacional, medição em campo, fotos.",
    risco: "Colisão em solo ou restrição operacional não publicada.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.225",
    subparte: "C - Características Físicas",
    grupo: "Pátios de aeronaves",
    itemVerificavel: "Verificar resistência, condição superficial, declividade e drenagem do pátio.",
    descricaoRequisito: "Pátio deve suportar aeronaves e equipamentos previstos com superfície segura.",
    criterio: "Pavimento deve possuir capacidade compatível, sem deformações críticas, contaminação, FOD ou acúmulo de água.",
    evidencias: "Laudo de pavimento, inspeção visual, relatório de manutenção, projeto de drenagem.",
    risco: "Dano à aeronave, falha estrutural, derrapagem ou contaminação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.225",
    subparte: "C - Características Físicas",
    grupo: "Pátios de aeronaves",
    itemVerificavel: "Verificar marcações de posições de estacionamento e linhas de segurança no pátio.",
    descricaoRequisito: "Pátio deve possuir orientação visual adequada para estacionamento, circulação e segurança.",
    criterio: "Marcas devem estar visíveis, coerentes com layout aprovado e compatíveis com aeronaves atendidas.",
    evidencias: "Projeto de sinalização horizontal, inspeção visual, fotos, plano de pintura.",
    risco: "Estacionamento incorreto, colisão, invasão de área de segurança.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.225",
    subparte: "C - Características Físicas",
    grupo: "Pátios de aeronaves",
    itemVerificavel: "Verificar rotas de veículos, áreas de equipamentos de apoio e circulação de passageiros no pátio.",
    descricaoRequisito: "A configuração do pátio deve permitir circulação segura de aeronaves, veículos, equipamentos e pessoas.",
    criterio: "Rotas devem estar segregadas, sinalizadas e controladas quando houver interação com aeronaves.",
    evidencias: "Layout operacional, inspeção em campo, fotos, procedimentos, sinalização.",
    risco: "Atropelamento, colisão com aeronave ou acesso indevido ao lado ar.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  }

];
// =====================================================
// RBAC 154 — ETAPA 2/2
// SUBPARTES D, E, F E APÊNDICES
// Cole abaixo da Etapa 1
// =====================================================

RBAC154.push(

  // =====================================================
  // SUBPARTE D — AUXÍLIOS VISUAIS PARA NAVEGAÇÃO
  // =====================================================

  {
    ref: "154.301",
    subparte: "D - Auxílios Visuais",
    grupo: "Indicadores e dispositivos de sinalização",
    itemVerificavel: "Verificar existência e condição dos indicadores e dispositivos de sinalização exigidos.",
    descricaoRequisito: "Indicadores e dispositivos de sinalização devem orientar visualmente as operações no aeródromo.",
    criterio: "Devem estar instalados quando aplicáveis, visíveis, conservados, corretamente posicionados e compatíveis com a operação.",
    evidencias: "Inspeção visual, fotos, projeto de sinalização, registros de manutenção.",
    risco: "Erro de identificação, alinhamento ou decisão operacional pelo piloto.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.301",
    subparte: "D - Auxílios Visuais",
    grupo: "Indicador de direção de vento",
    itemVerificavel: "Verificar indicador de direção de vento.",
    descricaoRequisito: "O aeródromo deve possuir meio visual adequado para indicação da direção do vento quando aplicável.",
    criterio: "Biruta deve estar visível, iluminada quando houver operação noturna, livre de obstáculos visuais e em bom estado.",
    evidencias: "Inspeção em campo, teste noturno, fotos, plano de manutenção.",
    risco: "Pouso ou decolagem com percepção incorreta de vento.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.301",
    subparte: "D - Auxílios Visuais",
    grupo: "Indicador de direção de pouso",
    itemVerificavel: "Verificar indicador de direção de pouso quando existente ou requerido.",
    descricaoRequisito: "Dispositivo deve indicar visualmente a direção designada para pouso e decolagem.",
    criterio: "Deve estar corretamente posicionado, visível e coerente com a operação local.",
    evidencias: "Inspeção visual, fotos, procedimento operacional, planta do aeródromo.",
    risco: "Uso incorreto de direção de operação.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiIndicadorDirecaoPouso: true }
  },

  {
    ref: "154.303",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização horizontal",
    itemVerificavel: "Verificar sinalização horizontal da pista de pouso e decolagem.",
    descricaoRequisito: "Sinalizações horizontais devem fornecer orientação aeronáutica na superfície da pista.",
    criterio: "Marcas de designação, eixo, cabeceira, zona de toque, ponto de visada, bordas e demais marcas aplicáveis devem estar corretas e visíveis.",
    evidencias: "Inspeção visual, fotos, projeto de pintura, medições em campo.",
    risco: "Erro de alinhamento, identificação de pista ou ponto de toque.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerPista: true }
  },

  {
    ref: "154.303",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização horizontal",
    itemVerificavel: "Verificar sinalização horizontal de taxiway.",
    descricaoRequisito: "Taxiways devem possuir marcações adequadas de eixo, borda, posição de espera e demais informações aplicáveis.",
    criterio: "Marcas devem estar contínuas, legíveis, bem posicionadas e compatíveis com o layout aprovado.",
    evidencias: "Inspeção visual, fotos, planta de sinalização, plano de pintura.",
    risco: "Erro de taxiamento, incursão em pista ou conflito em solo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.303",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização horizontal",
    itemVerificavel: "Verificar sinalização horizontal de pátio.",
    descricaoRequisito: "Pátios devem possuir marcações adequadas para estacionamento, circulação e segurança.",
    criterio: "Linhas de posição, áreas de segurança, vias de serviço e rotas de pedestres devem estar demarcadas quando aplicáveis.",
    evidencias: "Inspeção visual, fotos, layout do pátio, projeto de sinalização.",
    risco: "Colisão, posicionamento incorreto ou circulação insegura.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerPatio: true }
  },

  {
    ref: "154.303",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização horizontal",
    itemVerificavel: "Verificar cores e padrões da sinalização horizontal.",
    descricaoRequisito: "Cores e padrões devem seguir o RBAC 154 e o Apêndice A.",
    criterio: "Pinturas devem possuir cor, contraste, refletância e geometria compatíveis com o requisito aplicável.",
    evidencias: "Especificação de tinta, inspeção visual, fotos, projeto de sinalização.",
    risco: "Interpretação incorreta das informações visuais.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "154.305",
    subparte: "D - Auxílios Visuais",
    grupo: "Luzes",
    itemVerificavel: "Verificar sistema de luzes de pista quando houver operação noturna ou por instrumento.",
    descricaoRequisito: "Luzes aeronáuticas de superfície devem orientar operações em condições de baixa visibilidade ou noturnas.",
    criterio: "Luzes de borda, cabeceira, fim de pista, eixo, zona de toque e demais sistemas aplicáveis devem estar instalados e operacionais.",
    evidencias: "Teste noturno, inspeção funcional, registros de manutenção, projeto elétrico, fotos.",
    risco: "Operação insegura em baixa visibilidade ou à noite.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.305",
    subparte: "D - Auxílios Visuais",
    grupo: "Luzes",
    itemVerificavel: "Verificar sistema de luzes de aproximação quando aplicável.",
    descricaoRequisito: "Sistemas de luzes de aproximação devem apoiar aproximações por instrumento ou operações específicas.",
    criterio: "Sistema deve ser compatível com o tipo de aproximação, categoria operacional e pista atendida.",
    evidencias: "Projeto, carta de aproximação, inspeção funcional, homologação, registros de manutenção.",
    risco: "Redução da segurança em aproximação, especialmente IFR ou baixa visibilidade.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { pistaInstrumento: true, possuiALS: true }
  },

  {
    ref: "154.305",
    subparte: "D - Auxílios Visuais",
    grupo: "Luzes",
    itemVerificavel: "Verificar PAPI/APAPI ou sistema visual indicador de rampa quando existente ou requerido.",
    descricaoRequisito: "Auxílios visuais de rampa devem fornecer indicação adequada da trajetória de aproximação.",
    criterio: "Unidades devem estar alinhadas, calibradas, visíveis, com ângulo correto e manutenção registrada.",
    evidencias: "Relatório de calibração, teste operacional, inspeção visual, registros de manutenção.",
    risco: "Aproximação em rampa inadequada, toque curto ou longo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiPAPI: true }
  },

  {
    ref: "154.305",
    subparte: "D - Auxílios Visuais",
    grupo: "Luzes",
    itemVerificavel: "Verificar luzes de taxiway.",
    descricaoRequisito: "Luzes de taxiway devem orientar o taxiamento quando aplicáveis.",
    criterio: "Luzes de eixo, borda, barras de parada, luzes de proteção de pista e demais sistemas devem funcionar conforme configuração do aeródromo.",
    evidencias: "Teste noturno, inspeção funcional, projeto elétrico, registros de manutenção.",
    risco: "Erro de rota, incursão em pista ou colisão no solo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true, requerOperacaoNoturna: true }
  },

  {
    ref: "154.305",
    subparte: "D - Auxílios Visuais",
    grupo: "Luzes",
    itemVerificavel: "Verificar luzes de proteção de pista quando aplicáveis.",
    descricaoRequisito: "Luzes de proteção de pista alertam pilotos e motoristas antes do ingresso em pista em uso.",
    criterio: "Devem estar posicionadas e operacionais em pontos de espera definidos.",
    evidencias: "Teste funcional, inspeção em campo, projeto de sinalização luminosa, fotos.",
    risco: "Incursão em pista.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true, requerOperacaoNoturna: true, possuiLuzesProtecaoPista: true }
  },

  {
    ref: "154.305",
    subparte: "D - Auxílios Visuais",
    grupo: "Luzes",
    itemVerificavel: "Verificar intensidade, cor, fotometria e frangibilidade das luzes aeronáuticas.",
    descricaoRequisito: "Luzes aeronáuticas devem atender características técnicas de cor, intensidade, posicionamento e segurança.",
    criterio: "Equipamentos devem seguir especificações dos apêndices aplicáveis e não constituir obstáculo perigoso.",
    evidencias: "Certificado do fabricante, ensaio fotométrico, projeto, inspeção em campo, registros de manutenção.",
    risco: "Sinalização visual inadequada ou risco de impacto com equipamento rígido.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "154.307",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização vertical",
    itemVerificavel: "Verificar placas de instrução obrigatória.",
    descricaoRequisito: "Sinalizações verticais devem fornecer instruções obrigatórias em pontos críticos.",
    criterio: "Placas devem estar posicionadas, iluminadas quando aplicável, legíveis e coerentes com a sinalização horizontal.",
    evidencias: "Inspeção visual, fotos, planta de sinalização, teste noturno.",
    risco: "Incursão em pista ou descumprimento de posição de espera.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.307",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização vertical",
    itemVerificavel: "Verificar placas de informação, localização e direção.",
    descricaoRequisito: "Placas devem orientar taxiamento e navegação em solo.",
    criterio: "Devem estar legíveis, padronizadas, corretamente posicionadas e coerentes com o layout do aeródromo.",
    evidencias: "Inspeção visual, fotos, planta de sinalização, carta de aeródromo.",
    risco: "Taxiamento incorreto, conflito de tráfego ou ingresso indevido em área protegida.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "154.307",
    subparte: "D - Auxílios Visuais",
    grupo: "Sinalização vertical",
    itemVerificavel: "Verificar iluminação interna ou externa das placas quando houver operação noturna ou baixa visibilidade.",
    descricaoRequisito: "Sinalização vertical deve permanecer visível nas condições operacionais previstas.",
    criterio: "Placas devem ser iluminadas ou refletivas conforme exigência aplicável.",
    evidencias: "Teste noturno, fotos, especificação do fabricante, registros de manutenção.",
    risco: "Perda de orientação no solo durante operação noturna.",
    criticidade: "ALTO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.309",
    subparte: "D - Auxílios Visuais",
    grupo: "Balizas",
    itemVerificavel: "Verificar balizas utilizadas para delimitação, orientação ou indicação de obstáculos.",
    descricaoRequisito: "Balizas devem indicar limites, obstáculos ou áreas específicas quando aplicáveis.",
    criterio: "Devem estar visíveis, conservadas, frangíveis quando necessário e corretamente posicionadas.",
    evidencias: "Inspeção visual, fotos, planta de implantação, registros de manutenção.",
    risco: "Não percepção de limite, obstáculo ou área operacional.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiBalizas: true }
  },

  // =====================================================
  // SUBPARTE E — AUXÍLIOS VISUAIS PARA ÁREAS DE USO RESTRITO
  // =====================================================

  {
    ref: "154.401",
    subparte: "E - Áreas de Uso Restrito",
    grupo: "Áreas interditadas",
    itemVerificavel: "Verificar sinalização de pista ou taxiway interditada.",
    descricaoRequisito: "Pistas, taxiways ou partes delas interditadas devem possuir indicação visual adequada.",
    criterio: "Marcas de interdição, luzes desligadas/adequadamente tratadas e sinalização temporária devem impedir uso inadvertido.",
    evidencias: "Inspeção em campo, NOTAM, fotos, plano de interdição, registros operacionais.",
    risco: "Uso inadvertido de área interditada.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiAreaInterditada: true }
  },

  {
    ref: "154.401",
    subparte: "E - Áreas de Uso Restrito",
    grupo: "Áreas interditadas",
    itemVerificavel: "Verificar coerência entre interdição física, sinalização e publicação aeronáutica.",
    descricaoRequisito: "A condição de área interditada deve ser claramente indicada ao usuário.",
    criterio: "Campo, NOTAM, AIP temporário, procedimentos e sinalização devem apresentar a mesma condição operacional.",
    evidencias: "NOTAM, AIP, inspeção visual, relatório do operador, fotos.",
    risco: "Piloto ou motorista utilizar área indisponível por informação conflitante.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiAreaInterditada: true }
  },

  {
    ref: "154.403",
    subparte: "E - Áreas de Uso Restrito",
    grupo: "Superfícies sem capacidade de suporte",
    itemVerificavel: "Verificar indicação de superfícies sem capacidade de suporte.",
    descricaoRequisito: "Áreas sem capacidade de suporte devem ser indicadas para evitar uso por aeronaves ou veículos.",
    criterio: "Áreas frágeis devem estar delimitadas, sinalizadas e segregadas conforme risco operacional.",
    evidencias: "Inspeção visual, fotos, projeto de sinalização, laudo de pavimento/solo.",
    risco: "Atolamento, colapso de superfície ou dano à aeronave.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiAreaSemSuporte: true }
  },

  {
    ref: "154.405",
    subparte: "E - Áreas de Uso Restrito",
    grupo: "Área anterior à cabeceira",
    itemVerificavel: "Verificar sinalização da área anterior à cabeceira quando aplicável.",
    descricaoRequisito: "Área anterior à cabeceira deve ser indicada quando sua aparência puder gerar confusão operacional.",
    criterio: "Área deve possuir sinalização adequada para evitar uso indevido como pista disponível.",
    evidencias: "Inspeção visual, fotos, planta de sinalização, AIP.",
    risco: "Toque antes da cabeceira ou uso indevido de área não destinada a pouso.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiAreaAntesCabeceira: true }
  },

  {
    ref: "154.407",
    subparte: "E - Áreas de Uso Restrito",
    grupo: "Áreas fora de serviço",
    itemVerificavel: "Verificar sinalização de áreas fora de serviço.",
    descricaoRequisito: "Áreas fora de serviço devem ser visualmente identificadas para impedir utilização inadvertida.",
    criterio: "Sinalização deve estar adequada à duração da indisponibilidade, período diurno/noturno e localização.",
    evidencias: "Inspeção visual, fotos, NOTAM, plano de obras, registros operacionais.",
    risco: "Ingresso de aeronave, veículo ou pessoa em área insegura.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiAreaForaServico: true }
  },

  {
    ref: "154.407",
    subparte: "E - Áreas de Uso Restrito",
    grupo: "Áreas fora de serviço",
    itemVerificavel: "Verificar balizamento e iluminação de áreas fora de serviço em operação noturna.",
    descricaoRequisito: "Áreas fora de serviço devem permanecer perceptíveis em condições noturnas quando próximas à área operacional.",
    criterio: "Barreiras, luzes, cones, balizas ou dispositivos devem impedir confusão com área operacional.",
    evidencias: "Teste noturno, fotos, plano de isolamento, inspeção em campo.",
    risco: "Ingresso acidental em obra, escavação ou área insegura.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiAreaForaServico: true, requerOperacaoNoturna: true }
  },

  // =====================================================
  // SUBPARTE F — SISTEMAS ELÉTRICOS
  // =====================================================

  {
    ref: "154.501",
    subparte: "F - Sistemas Elétricos",
    grupo: "Suprimento de energia",
    itemVerificavel: "Verificar suprimento de energia elétrica para facilidades de navegação aérea.",
    descricaoRequisito: "Sistemas elétricos devem garantir alimentação adequada às facilidades essenciais.",
    criterio: "Devem existir fontes, circuitos, proteções e redundâncias compatíveis com a operação prevista.",
    evidencias: "Projeto elétrico, diagrama unifilar, inspeção da subestação, registros de manutenção.",
    risco: "Perda de auxílios visuais ou navegação em condição crítica.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "154.501",
    subparte: "F - Sistemas Elétricos",
    grupo: "Energia secundária",
    itemVerificavel: "Verificar fonte secundária ou alternativa de energia quando aplicável.",
    descricaoRequisito: "Facilidades críticas devem possuir alimentação compatível com requisitos de continuidade.",
    criterio: "Grupo gerador, UPS, QTA ou sistema equivalente deve atender cargas críticas dentro do tempo requerido.",
    evidencias: "Teste de transferência, relatório de carga, plano de manutenção, registros de acionamento.",
    risco: "Apagamento de pista, perda de auxílios e interrupção insegura da operação.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerOperacaoNoturna: true }
  },

  {
    ref: "154.501",
    subparte: "F - Sistemas Elétricos",
    grupo: "Tempo de comutação",
    itemVerificavel: "Verificar tempo de comutação dos sistemas elétricos críticos.",
    descricaoRequisito: "O tempo de comutação deve ser compatível com a categoria da operação e auxílios atendidos.",
    criterio: "Transferência para fonte alternativa deve ocorrer dentro do limite aplicável ao sistema atendido.",
    evidencias: "Teste cronometrado, relatório técnico, registros de manutenção, laudo elétrico.",
    risco: "Perda temporária de referências visuais em momento crítico.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiFonteSecundaria: true }
  },

  {
    ref: "154.503",
    subparte: "F - Sistemas Elétricos",
    grupo: "Projeto de sistemas elétricos",
    itemVerificavel: "Verificar projeto dos circuitos elétricos das luzes aeronáuticas.",
    descricaoRequisito: "Sistemas elétricos devem ser projetados para confiabilidade, manutenção e segurança.",
    criterio: "Circuitos devem possuir proteção, setorização, aterramento, isolamento, identificação e capacidade adequada.",
    evidencias: "Projeto elétrico, ART/RRT, diagrama unifilar, memorial descritivo, inspeção física.",
    risco: "Falha elétrica, indisponibilidade de luzes ou risco de choque/incêndio.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "154.503",
    subparte: "F - Sistemas Elétricos",
    grupo: "Infraestrutura elétrica",
    itemVerificavel: "Verificar cabos, caixas, reguladores, painéis e infraestrutura elétrica no lado ar.",
    descricaoRequisito: "Componentes elétricos devem estar protegidos, identificados e adequados ao ambiente aeroportuário.",
    criterio: "Não deve haver caixas abertas, cabos expostos, infiltração, corrosão, ausência de identificação ou risco à operação.",
    evidencias: "Inspeção visual, fotos, teste elétrico, registros de manutenção.",
    risco: "Falha de sistema, FOD, curto-circuito ou risco operacional no lado ar.",
    criticidade: "ALTO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "154.505",
    subparte: "F - Sistemas Elétricos",
    grupo: "Monitoramento",
    itemVerificavel: "Verificar monitoramento de sistemas luminosos e elétricos críticos.",
    descricaoRequisito: "Sistemas devem permitir identificação de falhas que afetem a segurança operacional.",
    criterio: "Falhas em luzes, circuitos ou alimentação devem ser detectáveis, registradas e tratadas.",
    evidencias: "Sistema supervisório, painel de alarmes, registros de falhas, ordens de serviço.",
    risco: "Operação com auxílio visual degradado sem conhecimento do operador.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "154.505",
    subparte: "F - Sistemas Elétricos",
    grupo: "Monitoramento",
    itemVerificavel: "Verificar procedimentos de resposta a falhas elétricas ou luminosas.",
    descricaoRequisito: "Falhas devem ser tratadas por manutenção, restrição operacional ou publicação aeronáutica.",
    criterio: "Devem existir critérios para acionamento de manutenção, NOTAM, suspensão ou restrição da operação.",
    evidencias: "MOPS, procedimento de manutenção, registros de NOTAM, ordens de serviço.",
    risco: "Continuidade de operação em condição degradada não controlada.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "154.601",
    subparte: "F - Disposições Transitórias",
    grupo: "Regras de transição",
    itemVerificavel: "Verificar aplicabilidade das disposições transitórias às instalações existentes.",
    descricaoRequisito: "Instalações existentes podem estar sujeitas a regras de transição conforme condições do RBAC 154.",
    criterio: "Deve haver análise documentada indicando quais requisitos se aplicam imediatamente e quais seguem regra transitória.",
    evidencias: "Matriz de transição, ficha cadastral, data de implantação, processos ANAC, parecer técnico.",
    risco: "Cobrança ou dispensa indevida de requisito regulatório.",
    criticidade: "ALTO",
    regraAplicabilidade: { instalacaoExistente: true }
  },

  {
    ref: "154.603",
    subparte: "F - Disposições Finais",
    grupo: "Disposições finais",
    itemVerificavel: "Verificar atendimento às disposições finais e vigência da emenda aplicável.",
    descricaoRequisito: "Devem ser observadas as disposições finais do regulamento e a emenda vigente.",
    criterio: "Checklist, projetos e relatórios devem indicar que a referência usada é o RBAC 154 Emenda 08.",
    evidencias: "Relatório técnico, matriz normativa, projeto, controle documental.",
    risco: "Uso de versão normativa desatualizada.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  // =====================================================
  // APÊNDICES DO RBAC 154
  // =====================================================

  {
    ref: "Apêndice A",
    subparte: "Apêndices",
    grupo: "Cores aeronáuticas",
    itemVerificavel: "Verificar conformidade das cores utilizadas em luzes, pinturas, placas e painéis.",
    descricaoRequisito: "O Apêndice A define cores para luzes aeronáuticas, sinalizações horizontais, verticais e painéis.",
    criterio: "Cores devem seguir especificação cromática aplicável, sem degradação visual relevante.",
    evidencias: "Especificação técnica, inspeção visual, laudo de tinta/luz, fotos.",
    risco: "Confusão visual e interpretação incorreta da sinalização.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "Apêndice B",
    subparte: "Apêndices",
    grupo: "Luzes aeronáuticas",
    itemVerificavel: "Verificar características técnicas das luzes aeronáuticas de superfície.",
    descricaoRequisito: "O Apêndice B estabelece características das luzes aeronáuticas de superfície.",
    criterio: "Luzes devem atender requisitos de cor, intensidade, feixe, posicionamento, manutenção e funcionamento.",
    evidencias: "Manual do fabricante, certificado do equipamento, teste fotométrico, inspeção funcional.",
    risco: "Perda de referência visual ou auxílio luminoso inadequado.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiSinalizacaoLuminosa: true }
  },

  {
    ref: "Apêndice C",
    subparte: "Apêndices",
    grupo: "Sinalização horizontal especial",
    itemVerificavel: "Verificar sinalizações horizontais de instrução obrigatória e de informação.",
    descricaoRequisito: "O Apêndice C trata de sinalizações horizontais de instrução obrigatória e informação.",
    criterio: "Marcas devem possuir conteúdo, localização, cor, dimensões e contraste adequados.",
    evidencias: "Projeto de sinalização, inspeção visual, fotos, plano de pintura.",
    risco: "Erro de taxiamento ou descumprimento de instrução obrigatória.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "Apêndice D",
    subparte: "Apêndices",
    grupo: "Sinalização vertical de táxi",
    itemVerificavel: "Verificar projeto das sinalizações verticais de orientação para táxi.",
    descricaoRequisito: "O Apêndice D define requisitos de projeto para sinalizações verticais de orientação para táxi.",
    criterio: "Placas devem atender dimensões, cores, mensagens, iluminação, localização e legibilidade aplicáveis.",
    evidencias: "Projeto de placas, inspeção visual, teste noturno, especificação do fabricante.",
    risco: "Erro de rota, incursão em pista ou conflito em solo.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { requerTaxiway: true }
  },

  {
    ref: "Apêndice F",
    subparte: "Apêndices",
    grupo: "Luzes em obstáculos",
    itemVerificavel: "Verificar localização de luzes em obstáculos quando aplicável.",
    descricaoRequisito: "O Apêndice F trata da localização de luzes em obstáculos.",
    criterio: "Obstáculos devem estar sinalizados e iluminados conforme avaliação técnica e requisitos aplicáveis.",
    evidencias: "Cadastro de obstáculos, inspeção noturna, fotos, projeto de balizamento, estudo aeronáutico.",
    risco: "Colisão com obstáculo não identificado.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: { possuiObstaculos: true }
  },

  {
    ref: "Apêndice G",
    subparte: "Apêndices",
    grupo: "Material de orientação",
    itemVerificavel: "Verificar se o material de orientação complementar foi considerado em análises técnicas.",
    descricaoRequisito: "O Apêndice G contém material de orientação complementar ao RBAC 154.",
    criterio: "Orientações devem ser usadas para apoiar interpretação técnica, sem substituir requisitos obrigatórios.",
    evidencias: "Memorial técnico, estudo aeronáutico, justificativas de projeto, matriz de conformidade.",
    risco: "Interpretação incompleta de requisito técnico ou ausência de justificativa robusta.",
    criticidade: "MÉDIO",
    regraAplicabilidade: {}
  },

  // =====================================================
  // CONTROLES PROFISSIONAIS COMPLEMENTARES PARA O APP
  // =====================================================

  {
    ref: "Controle Técnico RBAC154-01",
    subparte: "Controle Técnico",
    grupo: "Matriz de aplicabilidade",
    itemVerificavel: "Verificar se a aplicabilidade foi calculada por código de referência, tipo de operação e infraestrutura existente.",
    descricaoRequisito: "O checklist deve separar itens aplicáveis e não aplicáveis conforme características do aeródromo.",
    criterio: "Aplicabilidade deve considerar pista, taxiway, pátio, operação noturna, IFR/VFR, CAT, pavimento, RESA, stopway, clearway e auxílios instalados.",
    evidencias: "Configuração do app, ficha do aeródromo, relatório de aplicabilidade.",
    risco: "Checklist gerar falso conforme ou deixar requisito obrigatório fora da inspeção.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "Controle Técnico RBAC154-02",
    subparte: "Controle Técnico",
    grupo: "Rastreabilidade",
    itemVerificavel: "Verificar se cada resposta do checklist possui evidência, foto, observação e status.",
    descricaoRequisito: "Inspeção profissional deve manter rastreabilidade de conformidade.",
    criterio: "Cada item deve permitir marcar Conforme, Não Conforme, Não Aplicável, Parcial ou Requer Estudo.",
    evidencias: "Relatório gerado pelo app, fotos, anexos, observações, assinatura do inspetor.",
    risco: "Relatório frágil, sem validade técnica para tomada de decisão.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  },

  {
    ref: "Controle Técnico RBAC154-03",
    subparte: "Controle Técnico",
    grupo: "Não conformidades",
    itemVerificavel: "Verificar se o app gera plano de ação para não conformidades.",
    descricaoRequisito: "Não conformidades devem ser tratadas por ação corretiva, mitigação, estudo aeronáutico ou restrição operacional.",
    criterio: "Cada não conformidade deve ter risco, prioridade, responsável, prazo e evidência de fechamento.",
    evidencias: "Plano de ação, relatório de inspeção, registros de correção.",
    risco: "Manutenção de condição insegura sem tratamento formal.",
    criticidade: "CRÍTICO",
    regraAplicabilidade: {}
  },

  {
    ref: "Controle Técnico RBAC154-04",
    subparte: "Controle Técnico",
    grupo: "Integração RBAC 153",
    itemVerificavel: "Verificar se itens de operação e manutenção foram separados dos requisitos de projeto do RBAC 154.",
    descricaoRequisito: "RBAC 154 trata projeto de aeródromos; operação, manutenção e resposta à emergência pertencem principalmente ao RBAC 153.",
    criterio: "O app deve evitar misturar exigência de projeto com rotina operacional sem indicar a norma de origem.",
    evidencias: "Base de dados normativa do app, matriz RBAC 153/RBAC 154, relatório de inspeção.",
    risco: "Cobrança incorreta ou lacuna entre infraestrutura e operação.",
    criticidade: "ALTO",
    regraAplicabilidade: {}
  }

);
export default RBAC154;