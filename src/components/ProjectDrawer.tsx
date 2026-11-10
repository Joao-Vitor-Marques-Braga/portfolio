import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Code2,
  Calendar,
  Tag,
  MessageCircle,
  Star,
  Target
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../data/projectsData";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, isOpen, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isRememberFlash = project.id === "rememberflash";

  return (
    <div className="fixed inset-0 z-50 flex justify-end overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#1c120a]/60 backdrop-blur-sm backdrop-enter transition-opacity duration-200"
        aria-hidden="true"
      />

      {/* Drawer Container in Warm Ivory */}
      <div 
        className="relative z-10 w-full md:w-[90vw] lg:w-[80vw] xl:w-[72vw] max-w-6xl h-full bg-[#fffdfa] dark:bg-[#18130f] border-l border-[#ebd3b9] dark:border-[#382b20] shadow-warm-xl flex flex-col drawer-enter overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#fffdfa]/95 dark:bg-[#18130f]/95 backdrop-blur-md border-b border-[#ebd3b9] dark:border-[#382b20]">
          <div className="flex flex-wrap items-center gap-2.5">
            {isRememberFlash && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#964213] text-white shadow-warm-sm">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>Case Principal</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#f5e3cc] dark:bg-[#251d16] text-[#8e4514] dark:text-[#f8ae74] border border-[#ecd2b7] dark:border-[#3f2f23]">
              <Tag className="w-3 h-3" />
              {project.categoryLabel}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#fcf5ec] dark:bg-[#221a14] text-[#69503d] dark:text-[#cdb6a3] border border-[#ecd6bf] dark:border-[#3a2c20]">
              <Calendar className="w-3 h-3 text-[#947864]" />
              {project.year}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              project.status === "Em Finalização"
                ? "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                : "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                project.status === "Em Finalização" ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
              }`}></span>
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-[#866a55] dark:text-[#bba38f] font-mono">ESC para fechar</span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#261d16] dark:hover:bg-[#34271e] text-[#4d3422] dark:text-[#e4cfbd] transition-colors border border-[#e5cdb2] dark:border-[#3d2e23]"
              aria-label="Fechar painel do projeto"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          
          {/* 1. Header Section */}
          <header className="space-y-4">
            <div className="flex items-center gap-4">
              {project.appIcon && (
                <img
                  src={project.appIcon}
                  alt={`${project.title} Icon`}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover shadow-warm-md border border-[#e8d0b8] dark:border-[#423124] shrink-0"
                />
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22150b] dark:text-[#fef6ed]">
                {project.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-[#5e4735] dark:text-[#d7c3b2] font-normal leading-relaxed max-w-4xl">
              {project.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#964213] hover:bg-[#7b330a] text-white shadow-warm-md transition-all duration-150 transform hover:-translate-y-0.5"
                >
                  <span>Ver Projeto Online</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#261d16] dark:hover:bg-[#34271e] text-[#3d2819] dark:text-white border border-[#e5cdb2] dark:border-[#3d2e23] transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Repositório no GitHub</span>
                </a>
              )}

              <a
                href={`https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Vi%20o%20case%20${encodeURIComponent(project.title)}%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#221a14] dark:hover:bg-[#2e221a] text-[#4d3422] dark:text-[#dfc9b7] border border-[#e5cdb2] dark:border-[#3d2e23] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Conversar sobre este case</span>
              </a>
            </div>
          </header>

          {/* Featured Visual Mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-[#ecd5ba] dark:border-[#382b20] bg-[#faf3e8] dark:bg-[#120e0a] shadow-warm-sm">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#faf3e8] dark:bg-[#120e0a] flex items-center justify-center">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-[#f9ecdb] dark:bg-[#201812] border-t border-[#ebd5ba] dark:border-[#382b20] flex flex-wrap items-center justify-between gap-2 text-xs text-[#7b624f] dark:text-[#bda490]">
              <span>Preview oficial da aplicação</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[#fffdfa] dark:bg-[#2b211a] text-[#4d3422] dark:text-[#dec9b8] border border-[#e8d0b8] dark:border-[#3f3024]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. O Desafio / Intuito */}
          <section className="space-y-6 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-800 dark:text-amber-300">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9e4f1a] dark:text-[#f8ae74]">Contexto & Dores</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#22150b] dark:text-white">O Desafio / Intuito</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#faf2e6] dark:bg-[#201812] border border-[#ebd5ba] dark:border-[#382b20] space-y-5">
              <p className="text-[#553f2f] dark:text-[#d3beac] leading-relaxed text-base sm:text-lg">
                {project.desafio.contexto}
              </p>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#735844] dark:text-[#bda490] mb-3">
                  Obstáculos Críticos Resolvidos:
                </h4>
                <ul className="space-y-2.5">
                  {project.desafio.dores.map((dor, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#463223] dark:text-[#decab8] text-sm sm:text-base">
                      <span className="w-2 h-2 rounded-full bg-[#964213] dark:bg-[#f8ae74] shrink-0 mt-2" />
                      <span>{dor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#f4e0c8] dark:bg-[#2a1f17] border border-[#e5c7a3] dark:border-[#423124] text-[#3d2514] dark:text-[#f2dac2] text-sm sm:text-base flex items-start sm:items-center gap-3">
                <Target className="w-5 h-5 text-[#964213] dark:text-[#f8ae74] shrink-0 mt-0.5 sm:mt-0" />
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="font-bold text-[#8f3f12] dark:text-[#f7a86f] shrink-0">Meta Central:</span>
                  <span>{project.desafio.objetivoPrincipal}</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. A Solução */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f5e3cc] dark:bg-[#261d16] border border-[#e5cdb2] dark:border-[#3d2e23] flex items-center justify-center text-[#964213] dark:text-[#f8ae74]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9e4f1a] dark:text-[#f8ae74]">Implementação & Engenharia</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#22150b] dark:text-white">A Solução</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[#553f2f] dark:text-[#d3beac] leading-relaxed text-base sm:text-lg">
                {project.solucao.visaoGeral}
              </p>

              {/* Principais Recursos */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#735844] dark:text-[#bda490] mb-4">
                  Principais Funcionalidades Entregues:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.solucao.principaisRecursos.map((recurso, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-[#fffdfa] dark:bg-[#221a14] border border-[#ebd5ba] dark:border-[#382b20] flex items-start gap-3 shadow-warm-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#964213] dark:text-[#f8ae74] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#463223] dark:text-[#ded0c4] leading-snug">{recurso}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fluxos Chave */}
              <div className="p-5 rounded-xl bg-[#faf2e6] dark:bg-[#201812] border border-[#ebd5ba] dark:border-[#382b20]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735844] dark:text-[#bda490] mb-2">
                  Fluxo Principal de Navegação / Operação:
                </h4>
                <p className="text-sm sm:text-base text-[#463223] dark:text-[#ded0c4] font-mono bg-[#fffdfa] dark:bg-[#15100c] p-3 rounded-lg border border-[#ebd5ba] dark:border-[#382b20]">
                  {project.solucao.fluxosChave[0]}
                </p>
              </div>

              {/* Resultados */}
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                <div className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-400 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Impacto e Resultados de Negócio:</span>
                </div>
                <p className="text-sm sm:text-base text-[#463223] dark:text-[#ded0c4]">
                  {project.solucao.resultadosEsperados}
                </p>
              </div>
            </div>
          </section>

          {/* 4. Stack & Arquitetura */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f5e3cc] dark:bg-[#261d16] border border-[#e5cdb2] dark:border-[#3d2e23] flex items-center justify-center text-[#964213] dark:text-[#f8ae74]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9e4f1a] dark:text-[#f8ae74]">Engenharia de Software</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#22150b] dark:text-white">Stack & Arquitetura</h2>
              </div>
            </div>

            <p className="text-[#553f2f] dark:text-[#d3beac] leading-relaxed text-base">
              {project.arquitetura.resumo}
            </p>

            {/* Stack Grid with Rationale */}
            <div className="grid md:grid-cols-2 gap-4">
              {project.arquitetura.stack.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#fffdfa] dark:bg-[#221a14] border border-[#ebd5ba] dark:border-[#382b20] space-y-2 shadow-warm-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-[#22150b] dark:text-white">{item.name}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#f5e4cc] dark:bg-[#2c2017] text-[#8e4514] dark:text-[#f8ae74] border border-[#ebd4bb] dark:border-[#423124]">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#664f3d] dark:text-[#c4ae9d] leading-relaxed">
                    <strong className="text-[#3a271a] dark:text-[#f0ded0]">Por que foi escolhido:</strong> {item.reason}
                  </p>
                </div>
              ))}
            </div>

            {/* Destaques Técnicos */}
            <div className="p-6 rounded-2xl bg-[#faf2e6] dark:bg-[#201812] border border-[#ebd5ba] dark:border-[#382b20] space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#964213] dark:text-[#f8ae74] flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Decisões de Engenharia & Boas Práticas:
              </h4>
              <ul className="space-y-2">
                {project.arquitetura.destaquesTecnicos.map((destaque, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#463223] dark:text-[#ded0c4]">
                    <ArrowRight className="w-4 h-4 text-[#964213] dark:text-[#f8ae74] shrink-0 mt-0.5" />
                    <span>{destaque}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Galeria / Showcase */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f5e3cc] dark:bg-[#261d16] border border-[#e5cdb2] dark:border-[#3d2e23] flex items-center justify-center text-[#964213] dark:text-[#f8ae74]">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#735844] dark:text-[#bda490]">Visualização</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#22150b] dark:text-white">Galeria & Showcase</h2>
              </div>
            </div>

            <div className={`grid gap-6 ${
              project.category === "mobile"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : "grid-cols-1"
            }`}>
              {project.galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-3xl overflow-hidden border border-[#ebd5ba] dark:border-[#382b20] bg-[#faf3e8] dark:bg-[#120e0a] shadow-warm-sm hover:shadow-warm-md hover:border-[#cf9e6e] transition-all flex flex-col p-2.5 group`}
                >
                  <div className="w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className={`w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02] ${
                        project.category === "mobile" ? "max-h-[580px]" : ""
                      }`}
                    />
                  </div>
                  <div className="pt-2 px-1 flex items-center justify-between text-xs text-[#7b624f] dark:text-[#bda490]">
                    <span className="font-medium">Captura de Tela #{idx + 1}</span>
                    <span className="font-mono text-[10px] bg-[#f5e4cc] dark:bg-[#261d16] px-2 py-0.5 rounded text-[#8e4514] dark:text-[#f8ae74]">
                      {project.category === "mobile" ? "Android App" : "Web Platform"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conversion Footer Banner inside Drawer */}
          <div className="p-8 rounded-2xl bg-[#f5e2cb] dark:bg-[#201812] border border-[#dec09d] dark:border-[#382b20] text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#22150b] dark:text-white">
              Precisa de uma aplicação móvel ou sistema com essa solidez técnica?
            </h3>
            <p className="text-sm sm:text-base text-[#614936] dark:text-[#d3beac] max-w-xl mx-auto">
              Desenvolvo apps nativos, plataformas web e integrações com IA de alta entrega e alinhamento transparente.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostei%20do%20seu%20case%20${encodeURIComponent(project.title)}%20e%20gostaria%20de%20um%20or%C3%A7amento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#964213] hover:bg-[#7b330a] text-white shadow-warm-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-medium text-sm bg-[#fffdfa] dark:bg-[#2b2119] hover:bg-[#ebd3ba] dark:hover:bg-[#382b21] text-[#4d3422] dark:text-[#ded0c4] transition-colors border border-[#dec09d] dark:border-[#423124]"
              >
                Fechar Painel
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
