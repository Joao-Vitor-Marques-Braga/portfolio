import RememberFlashImg from "../assets/RememberFlash.png";
import RememberFlashIconImg from "../assets/RememberFlash_icon.png";
import RememberFlashScreen1 from "../assets/RememberFlash_screen1.jpg";
import RememberFlashScreen2 from "../assets/RememberFlash_screen2.jpg";
import RememberFlashScreen3 from "../assets/RememberFlash_screen3.jpg";
import PedidosConectadosImg from "../assets/PedidosConectados.png";
import AquagestorImg from "../assets/Aquagestor.png";
import PetGestorImg from "../assets/PetGestor.svg";

export interface TechStackItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps / Tools" | "Mobile" | "AI / ML";
  reason: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "saas" | "ecommerce" | "web";
  categoryLabel: string;
  status: "Em Produção" | "Concluído" | "Disponível Online" | "Disponível na Loja" | "Em Finalização";
  year: string;
  client?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  appIcon?: string;
  coverImage: string;
  galleryImages: string[];
  tags: string[];
  oneLiner: string;
  desafio: {
    contexto: string;
    dores: string[];
    objetivoPrincipal: string;
  };
  solucao: {
    visaoGeral: string;
    principaisRecursos: string[];
    fluxosChave: string[];
    resultadosEsperados: string;
  };
  arquitetura: {
    resumo: string;
    stack: TechStackItem[];
    destaquesTecnicos: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: "rememberflash",
    title: "RememberFlash: Concursos & IA",
    subtitle: "Ecossistema Inteligente de Estudos com Flashcards SRS, Tutor IA e OCR de Redações Manuscritas",
    category: "mobile",
    categoryLabel: "Mobile • EdTech & IA",
    status: "Disponível na Loja",
    year: "2024",
    client: "EdTech & Concursos",
    featured: true,
    appIcon: RememberFlashIconImg,
    coverImage: RememberFlashImg,
    galleryImages: [
      RememberFlashScreen1,
      RememberFlashScreen2,
      RememberFlashScreen3
    ],
    tags: ["Kotlin", "Jetpack Compose", "Gemini IA", "ML Kit OCR", "Algoritmo SM-2", "Clean Arch"],
    oneLiner: "App móvel com repetição espaçada (SRS/SM-2), tutor pedagógico com Google Gemini e avaliação de redações manuscritas por OCR.",
    desafio: {
      contexto: "Candidatos a concursos públicos e exames de alto rendimento enfrentam uma perda de retenção de até 70% na curva do esquecimento, além da ausência de correção ágil e imparcial para redações escritas à mão em folhas de prova.",
      dores: [
        "Revisão desordenada e esquecimento precoce de leis, súmulas e disciplinas densas.",
        "Dificuldade de tirar dúvidas pontuais e contextualizadas durante madrugadas ou fins de semana.",
        "Correções de redações discursivas demoradas, caras e sem critério objetivo alinhado às bancas (FGV, Cebraspe, FCC)."
      ],
      objetivoPrincipal: "Construir um app Android nativo de alto desempenho que combine a ciência cognitiva de repetição espaçada com inteligência artificial multimodal em tempo real."
    },
    solucao: {
      visaoGeral: "O RememberFlash integra repetição espaçada automatizada via algoritmo SuperMemo-2 (SM-2) com uma suíte de inteligência artificial. O estudante fotografa sua redação manuscrita e o app realiza o OCR do texto diretamente na folha, avaliando competências conforme as bancas examinadoras, acompanhado por um tutor pedagógico alimentado pelo Google Gemini.",
      principaisRecursos: [
        "Repetição Espaçada Inteligente (SRS / SM-2) que agenda revisões antes do esquecimento.",
        "Tutor Pedagógico 24/7 integrado com a API do Google Gemini para elucidação de jurisprudências e teoria.",
        "Correção de Redação com OCR de Manuscritos, analisando coesão, gramática e estrutura discursiva.",
        "Leitor e extrator automático de editais em PDF para organização de metas diárias.",
        "Simulados customizados com cronômetro realista e métricas de acertos por disciplina."
      ],
      fluxosChave: [
        "Foto da redação manuscrita -> Processamento OCR -> Análise de competências com Gemini -> Devolutiva detalhada com pontos de melhoria e nota."
      ],
      resultadosEsperados: "Aumento de até 3x na retenção de memória de longo prazo e redução de 80% no tempo de feedback de redações discursivas."
    },
    arquitetura: {
      resumo: "Arquitetura moderna nativa Android em Kotlin com Jetpack Compose, seguindo princípios estritos de Clean Architecture, MVVM e injeção de dependências.",
      stack: [
        {
          name: "Kotlin & Jetpack Compose",
          category: "Mobile",
          reason: "UI declarativa reativa de altíssimo desempenho, fluidez visual de 120Hz e menor consumo de bateria."
        },
        {
          name: "Google Gemini API",
          category: "AI / ML",
          reason: "Raciocínio avançado e compreensão semântica profunda para atuar como tutor pedagógico e corretor de bancas examinadoras."
        },
        {
          name: "Visão Computacional & Full IA (OCR Neural + LLM)",
          category: "AI / ML",
          reason: "Pipeline Full IA de ponta a ponta: modelos neurais de visão computacional para decodificação óptica de manuscritos na folha de resposta combinados com raciocínio multimodal do Google Gemini para avaliação analítica por competências de bancas examinadoras."
        },
        {
          name: "PostgreSQL & Room Database (Offline-First)",
          category: "Database",
          reason: "Arquitetura offline-first resiliente: persistência local de alta velocidade no Room (SQLite) permitindo estudo contínuo sem sinal de internet, sincronizado em segundo plano com banco relacional PostgreSQL na nuvem."
        }
      ],
      destaquesTecnicos: [
        "Implementação matemática do algoritmo SuperMemo-2 com pesos dinâmicos de dificuldade.",
        "Pipeline de compressão e pré-processamento de imagem antes do reconhecimento óptico.",
        "Camada de cache inteligente para respostas de IA minimizando consumo de tokens e latência."
      ]
    }
  },
  {
    id: "pedidos-conectados",
    title: "Pedidos Conectados",
    subtitle: "Sistema Inteligente de Gestão de Pedidos e Monitoramento em Tempo Real",
    category: "saas",
    categoryLabel: "SaaS & Gestão",
    status: "Disponível Online",
    year: "2024",
    client: "Comércio e Distribuição",
    liveUrl: "https://pedidosconectados.com/",
    featured: true,
    coverImage: PedidosConectadosImg,
    galleryImages: [PedidosConectadosImg],
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Realtime Sync"],
    oneLiner: "Solução completa para centralizar, rastrear e acelerar o ciclo de vendas e entrega de pedidos corporativos.",
    desafio: {
      contexto: "Empresas com múltiplos pontos de contato e pedidos descentralizados sofriam com perda de informações, lentidão no status de entrega e falta de visibilidade em tempo real para equipe e clientes.",
      dores: [
        "Pedidos registrados manualmente em planilhas sujeitas a erros de digitação.",
        "Falta de controle imediato sobre o status de preparo, faturamento e entrega.",
        "Dificuldade de sincronização de múltiplos operadores simultaneamente."
      ],
      objetivoPrincipal: "Construir um dashboard de pedidos responsivo, instantâneo e à prova de falhas para operação ágil e escalável."
    },
    solucao: {
      visaoGeral: "Desenvolveu-se uma plataforma web progressiva com interface ergonômica voltada à alta produtividade operacional. A sincronização de dados ocorre de forma reativa, permitindo que alterações de status reflitam instantaneamente na tela de todos os operadores conectados.",
      principaisRecursos: [
        "Painel Kanban interativo para visualização rápida dos estágios de cada pedido.",
        "Filtragem instantânea por cliente, data, valor e status logístico.",
        "Notificações sonoras e visuais para novos pedidos recebidos.",
        "Layout mobile-first para acompanhamento por motoristas e gerentes em movimento."
      ],
      fluxosChave: [
        "Recepção do pedido -> Triagem automática de itens -> Atualização de status em tempo real -> Finalização e métricas diárias."
      ],
      resultadosEsperados: "Redução de mais de 60% no tempo de conferência de pedidos e eliminação de duplicidades na expedição."
    },
    arquitetura: {
      resumo: "Arquitetura orientada a componentes desacoplados com gerenciamento de estado otimizado para renderizações seletivas e alta taxa de atualização.",
      stack: [
        {
          name: "React 18 & TypeScript",
          category: "Frontend",
          reason: "Tipagem estrita para segurança nos modelos de dados de pedidos e renderização eficiente do ciclo de vida dos componentes."
        },
        {
          name: "Tailwind CSS",
          category: "Frontend",
          reason: "Criação ágil de um design system consistente com paleta profissional e excelente suporte a estados responsivos."
        },
        {
          name: "Firebase Realtime / Firestore",
          category: "Backend",
          reason: "Capacidade de ouvir mutações de dados via WebSockets nativos com persistência em nuvem de baixa latência."
        },
        {
          name: "Vite",
          category: "DevOps / Tools",
          reason: "Tempo de carregamento ultrarrápido (HMR instantâneo) e bundle de produção altamente otimizado."
        }
      ],
      destaquesTecnicos: [
        "Otimização de re-renders através de useMemo e useCallback em listagens extensas.",
        "Arquitetura de formulários controlados com validação preventiva de entradas.",
        "Persistência de filtros de busca no estado local para agilizar consultas repetitivas."
      ]
    }
  },
  {
    id: "aquagestor",
    title: "Aquagestor",
    subtitle: "MicroSaaS de Gestão Operacional para Lava Jatos e Estética Automotiva",
    category: "saas",
    categoryLabel: "MicroSaaS & Operações",
    status: "Em Produção",
    year: "2024",
    client: "Setor Automotivo",
    liveUrl: "https://aquagestor-rho.vercel.app/",
    featured: true,
    coverImage: AquagestorImg,
    galleryImages: [AquagestorImg],
    tags: ["React", "Node.js", "Electron", "SQLite", "Firebase"],
    oneLiner: "Plataforma especializada para controle de fluxo de veículos, ordens de serviço e fidelização de clientes.",
    desafio: {
      contexto: "O setor de estética automotiva opera frequentemente com anotações em papel ou sistemas legados complexos, gerando perda de histórico de manutenções de veículos e baixo índice de retorno dos clientes.",
      dores: [
        "Falta de controle sobre quais veículos estão no pátio e qual serviço está sendo executado.",
        "Sem histórico de serviços por placa do veículo para pós-venda preventivo.",
        "Falta de relatórios claros de faturamento diário e desempenho por colaborador."
      ],
      objetivoPrincipal: "Oferecer um software direto ao ponto, rápido para o operador de pista e robusto para o proprietário gerenciar faturamento e fidelidade."
    },
    solucao: {
      visaoGeral: "Desenvolvido como uma aplicação híbrida (Web & Desktop via Electron), o Aquagestor permite registrar a entrada do veículo em menos de 15 segundos através da placa, selecionar o pacote de serviços e notificar o cliente via WhatsApp com link de status.",
      principaisRecursos: [
        "Busca e pré-preenchimento por histórico de placa e modelo do veículo.",
        "Checklist visual de entrada para vistoria de avarias e fotos do veículo.",
        "Emissão de ordem de serviço digital e integração de mensagem direta de WhatsApp.",
        "Módulo financeiro com controle de entradas, custos operacionais e comissões."
      ],
      fluxosChave: [
        "Check-in do veículo -> Checklist com marcação de avarias -> Execução do serviço -> Envio de alerta automático ao cliente -> Check-out com registro de pagamento."
      ],
      resultadosEsperados: "Aumento de 35% na taxa de fidelização através do histórico veicular e redução de conflitos sobre avarias prévias."
    },
    arquitetura: {
      resumo: "Arquitetura multiplataforma pensada para operar com tolerância a instabilidade de rede em locais operacionais com SQLite local e sincronização em nuvem.",
      stack: [
        {
          name: "React & TypeScript",
          category: "Frontend",
          reason: "Interface modular com formulários fluidos e design system adaptado para uso em tablets e telas touch de pista."
        },
        {
          name: "Electron",
          category: "DevOps / Tools",
          reason: "Permite encapsular a aplicação para execução desktop nativa com acesso a impressoras térmicas de cupom fiscal/recibo."
        },
        {
          name: "Node.js & Express",
          category: "Backend",
          reason: "Serviços leves de API para orquestração de regras de negócio e cálculo de comissões."
        },
        {
          name: "SQLite & Firebase",
          category: "Database",
          reason: "SQLite para alta velocidade de escrita local no estabelecimento com redundância assíncrona no Firebase."
        }
      ],
      destaquesTecnicos: [
        "Modo offline-first resiliente para não parar a operação em quedas de internet.",
        "Impressão direta em impressoras térmicas ESC/POS sem necessidade de diálogo de impressão do navegador.",
        "Componentes reutilizáveis de checklist com marcação por coordenadas em SVG."
      ]
    }
  },
  {
    id: "petgestor",
    title: "PetFlow Gestor",
    subtitle: "Sistema Especializado de Gestão Operacional para Pet Shops, Banho & Tosa e Clínicas",
    category: "saas",
    categoryLabel: "SaaS • Gestão Pet",
    status: "Em Finalização",
    year: "2024 / 2025",
    client: "Segmento Pet & Veterinário",
    featured: true,
    coverImage: PetGestorImg,
    galleryImages: [PetGestorImg],
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "WhatsApp API"],
    oneLiner: "Gestão completa de agenda de banho e tosa, prontuário pet, controle de vacinas e comanda eletrônica com avisos no WhatsApp.",
    desafio: {
      contexto: "Pet shops e centros de estética animal lidam diariamente com cancelamentos de última hora, desorganização no controle de banho e tosa e dificuldade no acompanhamento de pacotes mensais e comissões dos profissionais.",
      dores: [
        "Faltas e atrasos recorrentes de tutores por falta de lembretes automatizados.",
        "Perda de histórico de preferências do animal (alergias de pele, tipo de tosa, comportamento).",
        "Controle manual de comandas e divisão confusa de comissões de tosadores e banhistas."
      ],
      objetivoPrincipal: "Desenvolver um sistema intuitivo, rápido e visual que simplifique o balcão do pet shop e fidelize tutores com atendimento transparente."
    },
    solucao: {
      visaoGeral: "O PetFlow Gestor une uma agenda visual interativa com divisão de baias de atendimento, histórico clínico e estético do pet, emissão rápida de comandas e disparo automático de mensagens no WhatsApp avisando quando o animal está pronto.",
      principaisRecursos: [
        "Agenda visual drag-and-drop com status em tempo real (Aguardando, Em Banho, Secagem, Pronto).",
        "Prontuário completo do pet com fotos, registro de vacinas, alergias e histórico de atendimentos.",
        "Disparo automatizado de WhatsApp com confirmação de horário e aviso de retirada do pet.",
        "Comanda eletrônica e controle financeiro com rateio automático de comissões por colaborador."
      ],
      fluxosChave: [
        "Agendamento do tutor -> Check-in com observações de pele/pelagem -> Fila de banho & tosa -> Mensagem automática no WhatsApp -> Check-out com comanda finalizada."
      ],
      resultadosEsperados: "Redução de mais de 45% nas faltas através de confirmações automáticas e economia de até 2 horas diárias no fechamento de caixa."
    },
    arquitetura: {
      resumo: "Arquitetura web escalável com foco em tempo de resposta instantâneo nas telas de recepção e alta segurança nos dados cadastrais dos tutores e animais.",
      stack: [
        {
          name: "React & TypeScript",
          category: "Frontend",
          reason: "Interface fluida com drag-and-drop de alta performance para reorganização ágil da fila de atendimento."
        },
        {
          name: "Tailwind CSS",
          category: "Frontend",
          reason: "Construção de componentes com ergonomia visual pensada para telas de balcão e alta legibilidade sob iluminação de loja."
        },
        {
          name: "Node.js & PostgreSQL",
          category: "Backend",
          reason: "Modelagem relacional sólida para históricos de atendimentos, vínculos de animais a tutores e lançamentos financeiros."
        },
        {
          name: "WhatsApp Business API",
          category: "DevOps / Tools",
          reason: "Comunicação direta com tutores com lembretes automáticos e links de acompanhamento."
        }
      ],
      destaquesTecnicos: [
        "Pipeline reativo de atualização de fila operacional sem necessidade de recarregar a página.",
        "Cálculo automatizado de comissões escalonadas por tipo de serviço e profissional.",
        "Mecanismo de fallback para operação contínua em momentos de conexão intermitente."
      ]
    }
  }
];

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  features: string[];
}

export const solutionsCategories: SolutionCategory[] = [
  {
    id: "mobile-apps",
    title: "Aplicações Mobile com IA & Kotlin",
    description: "Aplicativos móveis nativos e híbridos de alta performance com Jetpack Compose, IA multimodal e arquitetura escalável.",
    iconName: "Smartphone",
    accentColor: "text-amber-800 dark:text-amber-300",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800",
    features: ["UI nativa fluida a 120Hz", "Inteligência Artificial & OCR", "Arquitetura offline-first"]
  },
  {
    id: "microsaas",
    title: "MicroSaaS & Plataformas de Gestão",
    description: "Sistemas completos para automação de negócios: controle de fluxo, ordens de serviço, comandas e sincronização em tempo real.",
    iconName: "Gauge",
    accentColor: "text-amber-800 dark:text-amber-300",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800",
    features: ["Tempo real (WebSockets / Firebase)", "Painéis Kanban ergonômicos", "Notificações WhatsApp integradas"]
  },
  {
    id: "web-apps",
    title: "Web Apps & SPAs de Alta Performance",
    description: "Aplicações web modernas, reativas e responsivas desenvolvidas com React e TypeScript para aceleração de processos operacionais.",
    iconName: "Layout",
    accentColor: "text-amber-800 dark:text-amber-300",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800",
    features: ["Renderização ultrarrápida", "Arquitetura de componentes limpos", "Integração com APIs RESTful"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Design Systems",
    description: "Criação de interfaces elegantes no Figma e implementação pixel-perfect com atenção meticulosa a espaçamentos e usabilidade.",
    iconName: "Palette",
    accentColor: "text-amber-800 dark:text-amber-300",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800",
    features: ["Figma to Code rigoroso", "Acessibilidade & Ergonomia", "Design Systems reutilizáveis"]
  },
  {
    id: "ecommerce-catalog",
    title: "Sistemas de Pedidos & Conversão",
    description: "Fluxos de pedidos, catálogos e canais de checkout pensados para eliminar fricção e acelerar as vendas comerciais.",
    iconName: "ShoppingBag",
    accentColor: "text-amber-800 dark:text-amber-300",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800",
    features: ["Geração instantânea de pedidos", "Métricas em tempo real", "Experiência mobile impecável"]
  },
  {
    id: "performance-seo",
    title: "Engenharia de Performance & Clean Code",
    description: "Código tipado com TypeScript, modularidade estrita e foco em tempos de carregamento instantâneos (Core Web Vitals verdes).",
    iconName: "Zap",
    accentColor: "text-amber-800 dark:text-amber-300",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800",
    features: ["Bundle otimizado", "Boas práticas de acessibilidade", "Zero dependências redundantes"]
  }
];
