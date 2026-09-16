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
  MessageCircle
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

  return (
    <div className="fixed inset-0 z-50 flex justify-end overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm backdrop-enter transition-opacity duration-200"
        aria-hidden="true"
      />

      {/* Drawer Container (Solid background, no gradient) */}
      <div 
        className="relative z-10 w-full md:w-[90vw] lg:w-[80vw] xl:w-[72vw] max-w-6xl h-full bg-white dark:bg-[#0b101c] border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col drawer-enter overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0b101c]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20">
              <Tag className="w-3 h-3" />
              {project.categoryLabel}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <Calendar className="w-3 h-3 text-slate-400" />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400 font-mono">ESC para fechar</span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-4xl">
              {project.subtitle}
            </p>

            {/* Action Buttons (Solid colors) */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Repositório no GitHub</span>
                </a>
              )}

              <a
                href={`https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Vi%20o%20case%20${encodeURIComponent(project.title)}%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Conversar sobre este case</span>
              </a>
            </div>
          </header>

          {/* Featured Visual Mockup (Clean solid frame) */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm">
            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Preview da interface em ambiente real</span>
              <div className="flex gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. O Desafio / Intuito */}
          <section className="space-y-6 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Contexto & Dores</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">O Desafio / Intuito</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-5">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.desafio.contexto}
              </p>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                  Obstáculos Críticos Resolvidos:
                </h4>
                <ul className="space-y-2.5">
                  {project.desafio.dores.map((dor, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✕
                      </span>
                      <span>{dor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-sm sm:text-base flex items-center gap-3">
                <span className="font-semibold text-sky-700 dark:text-sky-400 shrink-0">🎯 Meta Central:</span>
                <span>{project.desafio.objetivoPrincipal}</span>
              </div>
            </div>
          </section>

          {/* 3. A Solução */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-cyan-500/10 border border-sky-200 dark:border-cyan-500/20 flex items-center justify-center text-sky-600 dark:text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-cyan-400">Implementação & Engenharia</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">A Solução</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.solucao.visaoGeral}
              </p>

              {/* Principais Recursos */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">
                  Principais Funcionalidades Entregues:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.solucao.principaisRecursos.map((recurso, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-200 leading-snug">{recurso}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fluxos Chave */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Fluxo Principal de Navegação / Operação:
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-mono bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  {project.solucao.fluxosChave[0]}
                </p>
              </div>

              {/* Resultados */}
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                <div className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Impacto e Resultados de Negócio:</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  {project.solucao.resultadosEsperados}
                </p>
              </div>
            </div>
          </section>

          {/* 4. Stack & Arquitetura */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Engenharia de Software</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Stack & Arquitetura</h2>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {project.arquitetura.resumo}
            </p>

            {/* Stack Grid with Rationale */}
            <div className="grid md:grid-cols-2 gap-4">
              {project.arquitetura.stack.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-900 dark:text-white">{item.name}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-300">Por que foi escolhido:</strong> {item.reason}
                  </p>
                </div>
              ))}
            </div>

            {/* Destaques Técnicos */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0e1728] border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Decisões de Engenharia & Boas Práticas:
              </h4>
              <ul className="space-y-2">
                {project.arquitetura.destaquesTecnicos.map((destaque, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <ArrowRight className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{destaque}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Galeria / Showcase */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Visualização</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Galeria & Showcase</h2>
              </div>
            </div>

            <div className="grid gap-6">
              {project.galleryImages.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Conversion Footer Banner inside Drawer (Clean solid card, no gradient) */}
          <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Precisa de uma solução sob medida com essa qualidade técnica?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Desenvolvo interfaces de alta conversão e sistemas reativos com entrega rápida e comunicação direta.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostei%20do%20seu%20case%20${encodeURIComponent(project.title)}%20e%20gostaria%20de%20um%20or%C3%A7amento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-medium text-sm bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
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
