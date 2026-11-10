import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink,
  Star
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project, projectsData } from "../data/projectsData";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos os Cases (4)" },
    { id: "mobile", label: "Mobile & IA" },
    { id: "saas", label: "SaaS & Gestão" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3dcbf] dark:bg-[#251d16] border border-[#dec09d] dark:border-[#3d2d21] text-xs font-semibold text-[#964213] dark:text-[#f8ae74]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio de Produtos & Soluções</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22150b] dark:text-[#fef6ed]">
            Projetos Selecionados & <br className="hidden sm:inline" />
            <span className="text-[#a54c15] dark:text-[#f5a76e]">Engenharia de Alto Nível</span>
          </h2>

          <p className="text-base sm:text-lg text-[#664e3b] dark:text-[#d0bcab] max-w-2xl mx-auto leading-relaxed">
            Produtos digitais desenvolvidos com foco em problemas reais de negócio: desde apps móveis com IA multimodal até plataformas SaaS completas de gestão.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#964213] text-white shadow-warm-md"
                  : "bg-[#f3dcbf] dark:bg-[#221a14] text-[#553c29] dark:text-[#d1bbaa] border border-[#dec09d] dark:border-[#3d2d21] hover:bg-[#ebd0ae] dark:hover:bg-[#2c2018] hover:text-[#1e1107] dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => {
            const isRememberFlash = project.id === "rememberflash";

            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-3xl bg-[#fffdfa] dark:bg-[#1a140f] border transition-all duration-200 hover:-translate-y-1.5 shadow-warm-md hover:shadow-warm-xl cursor-pointer flex flex-col overflow-hidden ${
                  isRememberFlash
                    ? "border-[#c98e54] dark:border-[#966336] ring-2 ring-[#c98e54]/30 md:col-span-2 lg:col-span-2"
                    : "border-[#ecd4bb] dark:border-[#382b20] hover:border-[#cf9e6e] dark:hover:border-[#674b37]"
                }`}
              >
                {/* Visual Preview */}
                <div className={`relative overflow-hidden bg-[#faf1e5] dark:bg-[#120e0a] border-b border-[#ebd3b9] dark:border-[#36291f] ${
                  isRememberFlash ? "aspect-[21/9] sm:aspect-[2.4/1]" : "aspect-[16/10]"
                }`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Left Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    {isRememberFlash && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#964213] text-white shadow-warm-md border border-[#c56824]">
                        <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                        <span>Projeto Principal</span>
                      </span>
                    )}

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fffdfa]/95 dark:bg-[#201812]/95 text-[#883d12] dark:text-[#f8ae74] border border-[#ebd3ba] dark:border-[#403023] shadow-warm-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Top Right Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#fffdfa]/95 dark:bg-[#1f1712]/95 border shadow-warm-sm ${
                      project.status === "Em Finalização"
                        ? "text-[#b4651e] border-[#eed1b0] dark:border-[#4a3524]"
                        : "text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40"
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        project.status === "Em Finalização" ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
                      }`}></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Prompt CTA */}
                  <div className="absolute inset-0 bg-[#24150b]/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="px-5 py-2.5 rounded-xl bg-[#fffdfa] dark:bg-[#1f1712] text-[#24150b] dark:text-white text-xs font-semibold shadow-warm-xl flex items-center gap-2 border border-[#edd7bf] dark:border-[#433123]">
                      <span>Ver estudo de caso e arquitetura</span>
                      <ArrowUpRight className="w-4 h-4 text-[#964213] dark:text-[#f8ae74]" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        {project.appIcon && (
                          <img
                            src={project.appIcon}
                            alt={`${project.title} Icon`}
                            className="w-11 h-11 rounded-2xl object-cover shadow-warm-sm border border-[#e8d0b8] dark:border-[#423124] shrink-0"
                          />
                        )}
                        <h3 className="text-xl sm:text-2xl font-bold text-[#24150b] dark:text-[#fef6ed] group-hover:text-[#964213] dark:group-hover:text-[#f8ae74] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[#8a6e59] dark:text-[#bda490] px-2.5 py-1 rounded bg-[#f5e3cc] dark:bg-[#251c15]">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#614936] dark:text-[#d3beab] leading-relaxed">
                      {project.oneLiner}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-4 pt-4 border-t border-[#f0ded0] dark:border-[#33261c]">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-[#f5e4cc] dark:bg-[#261d16] text-[#4d3523] dark:text-[#e4cfbd] border border-[#e5cdb2] dark:border-[#3d2e23]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#964213] dark:text-[#f8ae74] group-hover:underline">
                        <span>Explorar Arquitetura & Fluxos</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>

                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#261d16] dark:hover:bg-[#34271e] text-[#553c28] dark:text-[#d5bfad] hover:text-[#201207] dark:hover:text-white transition-colors border border-[#e5cdb2] dark:border-[#3d2e23]"
                            title="Acessar projeto online"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#261d16] dark:hover:bg-[#34271e] text-[#553c28] dark:text-[#d5bfad] hover:text-[#201207] dark:hover:text-white transition-colors border border-[#e5cdb2] dark:border-[#3d2e23]"
                            title="Ver repositório no GitHub"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub External Callout */}
        <div className="mt-14 text-center" data-aos="fade-up">
          <a
            href="https://github.com/Joao-Vitor-Marques-Braga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-[#46301e] dark:text-[#dfc9b7] hover:text-[#180e07] dark:hover:text-white bg-[#f3dcbf] hover:bg-[#ebd0ae] dark:bg-[#221a14] dark:hover:bg-[#2e221a] border border-[#dec09d] dark:border-[#3d2d21] transition-colors shadow-warm-sm"
          >
            <FaGithub className="w-4 h-4" />
            <span>Ver outros repositórios no GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[#8a6e59]" />
          </a>
        </div>

      </div>
    </section>
  );
};
