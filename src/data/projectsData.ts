import PedidosConectadosImg from "../assets/PedidosConectados.png";
import AquagestorImg from "../assets/Aquagestor.png";
import EmbalagensPopularImg from "../assets/Embalagens-popular.png";
import ExpertNotesImg from "../assets/Expert-Notes.png";
import ReceitaFacilImg from "../assets/receitaFacil.png";

export interface TechStackItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps / Tools" | "Mobile";
  reason: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "saas" | "ecommerce" | "web" | "mobile";
  categoryLabel: string;
  status: "Em Produção" | "Concluído" | "Disponível Online";
  year: string;
  client?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
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
    id: "pedidos-conectados",
    title: "Pedidos Conectados",
    subtitle: "Sistema Inteligente de Gestão de Pedidos e Monitoramento em Tempo Real",
    category: "saas",
    categoryLabel: "SaaS & Web App",
    status: "Disponível Online",
    year: "2024",
    client: "Comércio e Distribuição",
    liveUrl: "https://pedidosconectados.com/",
    featured: true,
    coverImage: PedidosConectadosImg,
    galleryImages: [PedidosConectadosImg],
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Realtime Sync"],
    oneLiner: "Solução completa para centralizar, rastrear e acelerar o ciclo de vendas e entrega de pedidos.",
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
    categoryLabel: "MicroSaaS & Gestão",
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
    id: "embalagens-popular",
    title: "Embalagens Popular",
    subtitle: "Catálogo Institucional de Produtos com Canal Direto de Orçamento e SEO Otimizado",
    category: "ecommerce",
    categoryLabel: "Catálogo & Conversão",
    status: "Disponível Online",
    year: "2024",
    client: "Indústria de Embalagens",
    liveUrl: "https://embalagenspopular.com",
    repoUrl: "https://embalagenspopular.com",
    featured: true,
    coverImage: EmbalagensPopularImg,
    galleryImages: [EmbalagensPopularImg],
    tags: ["React", "JavaScript", "Tailwind CSS", "WhatsApp API", "SEO Avançado"],
    oneLiner: "Plataforma de exposição de produtos corporativos com canal de orçamento direto para o WhatsApp de vendas.",
    desafio: {
      contexto: "Uma distribuidora de embalagens necessitava expandir sua captação de clientes B2B via internet, mas os custos e a fricção de um e-commerce tradicional com checkout de cartão não se adequavam a compras corporativas por atacado.",
      dores: [
        "Inexistência de um catálogo digital organizado para consulta ágil de medidas e capacidades.",
        "Perda de potenciais clientes que abandonavam processos complexos de cadastro em e-commerces convencionais.",
        "Baixa indexação orgânica em termos de busca de embalagens para a região."
      ],
      objetivoPrincipal: "Criar um canal digital ultra-rápido, visualmente atraente e com conversão direta de orçamento para o time comercial no WhatsApp."
    },
    solucao: {
      visaoGeral: "Desenvolveu-se um catálogo moderno focado em conversão sem atrito. O cliente navega pelas categorias, adiciona itens ao orçamento com quantidades desejadas e, com um único clique, uma mensagem formatada com todos os códigos e especificações é enviada ao atendente.",
      principaisRecursos: [
        "Catálogo categorizado por tipo de material, tamanho e finalidade comercial.",
        "Carrinho de orçamento inteligente que calcula volumes aproximados.",
        "Geração automática de link de WhatsApp com mensagem estruturada (produtos, medidas e quantidade).",
        "Meta tags OpenGraph e Schema.org JSON-LD para máximo rankeamento no Google."
      ],
      fluxosChave: [
        "Navegação pelo catálogo -> Adição de itens na lista de orçamento -> Geração instantânea do payload WhatsApp -> Atendimento B2B humanizado."
      ],
      resultadosEsperados: "Taxa de conversão de visitantes para contatos comerciais qualificados acima de 12%."
    },
    arquitetura: {
      resumo: "Estratégia voltada à máxima velocidade de carregamento (Core Web Vitals) e alta acessibilidade para usuários em redes móveis 4G/3G.",
      stack: [
        {
          name: "React",
          category: "Frontend",
          reason: "Construção de catálogo interativo com busca instantânea sem recarregamento de página."
        },
        {
          name: "Tailwind CSS",
          category: "Frontend",
          reason: "Estilização modular e leve com zero CSS excedente no bundle final."
        },
        {
          name: "SEO / Schema.org",
          category: "DevOps / Tools",
          reason: "Estruturação semântica de dados (Product, Organization, BreadcrumbList) para destaque em buscas locais."
        }
      ],
      destaquesTecnicos: [
        "Pontuação de 98+ no Google Lighthouse para Performance, Acessibilidade e Melhores Práticas.",
        "Lazy loading com placeholders para imagens de alta resolução do catálogo.",
        "Armazenamento local da lista de orçamentos para manter a seleção mesmo se o usuário fechar a aba."
      ]
    }
  },
  {
    id: "expert-notes",
    title: "Expert Notes",
    subtitle: "Aplicação Web de Anotações Ágeis com Gravação de Áudio e Speech-to-Text",
    category: "web",
    categoryLabel: "Produtividade & AI",
    status: "Concluído",
    year: "2024",
    client: "Projeto Especializado",
    featured: false,
    coverImage: ExpertNotesImg,
    galleryImages: [ExpertNotesImg],
    tags: ["React", "TypeScript", "Tailwind CSS", "Web Speech API", "LocalStorage"],
    oneLiner: "Ferramenta de captura rápida de pensamentos por texto ou voz com transcrição automática no navegador.",
    desafio: {
      contexto: "Profissionais dinâmicos perdem ideias e reuniões de alinhamento por não terem ferramentas leves e sem fricção de login para capturar notas em voz alta.",
      dores: [
        "Aplicativos pesados com telas de login e sincronizações demoradas.",
        "Dificuldade de digitar enquanto caminha ou atende outras tarefas.",
        "Desorganização de anotações temporárias."
      ],
      objetivoPrincipal: "Disponibilizar uma ferramenta de anotações que transcreve áudio em texto em tempo real diretamente no navegador."
    },
    solucao: {
      visaoGeral: "Uma interface minimalista e focada em tipografia onde o usuário pode simplesmente pressionar um botão de gravação e falar. O navegador transcreve o áudio continuamente em texto editável, com persistência automática.",
      principaisRecursos: [
        "Integração com Web Speech Recognition API nativa.",
        "Busca instantânea que filtra notas em tempo real por palavras-chave.",
        "Cards com tempo relativo de criação ('há 5 minutos', 'ontem').",
        "Exportação e compartilhamento de notas de forma direta."
      ],
      fluxosChave: [
        "Pressionar 'Gravar Nota' -> Falar livremente -> Transcrição instantânea na tela -> Salvamento automático no armazenamento local."
      ],
      resultadosEsperados: "Economia de tempo substancial em reuniões de briefing e captura imediata de insights."
    },
    arquitetura: {
      resumo: "Arquitetura enxuta baseada em APIs nativas do navegador sem dependência de servidores de transcrição externos caros.",
      stack: [
        {
          name: "React & TypeScript",
          category: "Frontend",
          reason: "Controle seguro do fluxo de estados da Speech API e ciclo de gravação de áudio."
        },
        {
          name: "Tailwind CSS",
          category: "Frontend",
          reason: "Visual escuro de alto contraste focado em conforto ocular e estética moderna."
        },
        {
          name: "Web Speech API",
          category: "Frontend",
          reason: "Reconhecimento de fala integrado sem custo de API por requisição."
        }
      ],
      destaquesTecnicos: [
        "Fallback gracioso para digitação manual em navegadores sem suporte nativo a Web Speech.",
        "Mecanismo anti-debounce na persistência contínua de LocalStorage.",
        "Acessibilidade completa por navegação via teclado."
      ]
    }
  },
  {
    id: "receita-facil",
    title: "Receita Fácil",
    subtitle: "Plataforma de Descoberta Gastronômica com Filtros por Ingredientes Disponíveis",
    category: "web",
    categoryLabel: "Aplicação Web",
    status: "Concluído",
    year: "2024",
    client: "Projeto de Portfólio",
    featured: false,
    coverImage: ReceitaFacilImg,
    galleryImages: [ReceitaFacilImg],
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "UX Interativo"],
    oneLiner: "Encontre receitas perfeitas combinando os ingredientes que você já tem na sua despensa.",
    desafio: {
      contexto: "Desperdício de alimentos doméstico frequente porque as pessoas não sabem o que cozinhar com ingredientes restantes na geladeira.",
      dores: [
        "Pesquisas genéricas em motores de busca trazem receitas que exigem ingredientes exóticos inexistentes em casa.",
        "Sites de culinária abarrotados de anúncios intrusivos e lentos de navegar."
      ],
      objetivoPrincipal: "Criar uma experiência fluida, sem distrações e com mecanismo de busca reversa por ingredientes."
    },
    solucao: {
      visaoGeral: "Uma interface limpa com tags interativas de ingredientes. O usuário seleciona o que possui em casa e o algoritmo retorna receitas ranqueadas por compatibilidade de itens.",
      principaisRecursos: [
        "Filtros multi-critério (tempo de preparo, dificuldade, restrições alimentares).",
        "Modo de preparo passo a passo com checklist para não se perder na receita.",
        "Design visual apetitoso com cards ilustrados e informações nutricionais estimadas."
      ],
      fluxosChave: [
        "Digitar/selecionar ingredientes -> Ver receitas compatíveis ordenadas -> Abrir modo 'Passo a Passo' interativo na cozinha."
      ],
      resultadosEsperados: "Experiência de usuário prazerosa com tempo de resposta inferior a 200ms em cada filtro."
    },
    arquitetura: {
      resumo: "Componentização limpa com estado desacoplado de filtros e caching de consultas para navegação instantânea.",
      stack: [
        {
          name: "React & TypeScript",
          category: "Frontend",
          reason: "Gerenciamento de filtros combinatórios com alto desempenho."
        },
        {
          name: "Tailwind CSS",
          category: "Frontend",
          reason: "Layout em grid adaptável perfeitamente a smartphones na bancada da cozinha."
        }
      ],
      destaquesTecnicos: [
        "Cálculo de interseção de arrays em tempo real no cliente sem sobrecarregar a thread principal.",
        "Estruturação de dados para fácil conversão em PWA offline."
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
    id: "web-apps",
    title: "Web Apps & SPAs de Alta Performance",
    description: "Aplicações web modernas, reativas e responsivas desenvolvidas com React e TypeScript para automação de processos e negócios digitais.",
    iconName: "Layout",
    accentColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    features: ["Renderização ultrarrápida", "Arquitetura orientada a componentes", "Integração com APIs RESTful"]
  },
  {
    id: "microsaas",
    title: "MicroSaaS & Dashboards Administrativos",
    description: "Painéis de controle completos com relatórios, gráficos analíticos, controle de permissões e gestão de dados em tempo real.",
    iconName: "Gauge",
    accentColor: "text-teal-600 dark:text-teal-400",
    badgeBg: "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    features: ["Tempo real (WebSockets/Firebase)", "Métricas e KPIs visuais", "Design focado em produtividade"]
  },
  {
    id: "ecommerce-catalog",
    title: "E-commerce & Catálogos de Alta Conversão",
    description: "Lojas virtuais e catálogos B2B/B2C estruturados para maximizar vendas com canais de orçamento direto e checkout sem atrito.",
    iconName: "ShoppingBag",
    accentColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    features: ["Integração direta com WhatsApp", "SEO avançado para Google", "Carregamento instantâneo"]
  },
  {
    id: "mobile-apps",
    title: "Aplicações Mobile com React Native",
    description: "Aplicativos móveis com experiência nativa para iOS e Android compartilhando lógica de negócio para rápida validação no mercado.",
    iconName: "Smartphone",
    accentColor: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    features: ["Código compartilhado eficiente", "UX adaptada a iOS e Android", "Notificações push e offline-first"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Design Systems",
    description: "Projetos de interfaces intuitivas no Figma e conversão pixel-perfect em código limpo, consistente e documentado.",
    iconName: "Palette",
    accentColor: "text-slate-700 dark:text-slate-300",
    badgeBg: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    features: ["Figma to Code sem distorções", "Acessibilidade (WCAG)", "Design Systems escaláveis"]
  },
  {
    id: "performance-seo",
    title: "Otimização de Performance & SEO",
    description: "Auditoria e reformulação de sites para atingir notas 95+ no Core Web Vitals, melhorando rankeamento orgânico e conversão.",
    iconName: "Zap",
    accentColor: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    features: ["Core Web Vitals verdes", "Redução de bundle size", "Schema.org estruturado"]
  }
];
