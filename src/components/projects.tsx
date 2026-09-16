import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project, projectsData } from "../data/projectsData";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos os Cases" },
    { id: "saas", label: "SaaS & Web Apps" },
    { id: "ecommerce", label: "E-commerce & Catálogos" },
    { id: "web", label: "Aplicações & Utilitários" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio de Cases Reais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projetos Selecionados & <br className="hidden sm:inline" />
            <span className="text-sky-600 dark:text-sky-400">Soluções em Produção</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Uma curadoria de produtos digitais, sistemas web e plataformas focadas em conversão, ergonomia de interface e escalabilidade.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white dark:bg-sky-600 dark:text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl bg-white dark:bg-[#111a2e] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Visual Preview with Clean Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Status and Category Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 dark:bg-slate-900/90 text-sky-700 dark:text-sky-300 border border-slate-200 dark:border-sky-500/20 shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/95 dark:bg-slate-950/90 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-emerald-500/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {project.status}
                  </span>
                </div>

                {/* Hover CTA prompt over image */}
                <div className="absolute inset-0 bg-slate-950/30 dark:bg-slate-950/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <span className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
                    Ver detalhes completos do Case
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{project.year}</span>
                  </div>

                  {/* One-Liner Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.oneLiner}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Interactive Trigger Row */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:underline">
                      Explorar Arquitetura & Fluxos
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
                          title="Abrir site online em nova aba"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
                          title="Ver repositório no GitHub"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub External Callout */}
        <div className="mt-14 text-center" data-aos="fade-up">
          <a
            href="https://github.com/Joao-Vitor-Marques-Braga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
          >
            <FaGithub className="w-4 h-4" />
            <span>Explorar outros repositórios de código no GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};