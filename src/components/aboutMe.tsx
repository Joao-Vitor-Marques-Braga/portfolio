import React from "react";
import { 
  UserCheck, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  FileDown, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import MyPhoto from "../assets/myphoto.jpg";

export const AboutMe: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Perfil & Formação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engenharia de Software & <br className="hidden sm:inline" />
            <span className="text-sky-600 dark:text-sky-400">Excelência em UI/UX</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Combinando rigor técnico de engenharia com sensibilidade de design para construir produtos web que encantam usuários e geram resultados.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo & Credibility Card (Solid clean frame, no glow) */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1424] shadow-lg p-3">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 relative group">
                  <img
                    src={MyPhoto}
                    alt="João Vitor Marques Braga"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating badge over photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-md">
                    <div>
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">João Vitor Marques Braga</p>
                      <p className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">Desenvolvedor Frontend & UI/UX</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Pillars */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Olá! Sou o <strong className="text-slate-900 dark:text-white">João Vitor</strong>, desenvolvedor web especializado no ecossistema <span className="text-sky-700 dark:text-sky-400 font-medium">React, TypeScript, Tailwind CSS e React Native</span>.
              </p>
              <p>
                Minha abordagem une a solidez técnica de engenharia com boas práticas de usabilidade (UI/UX). Meu objetivo em cada projeto é eliminar gargalos operacionais e construir landing pages e sistemas intuitivos, com tempos de resposta instantâneos e altas taxas de conversão.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Graduação</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Cursando <strong>Engenharia de Software</strong> pela Universidade de Rio Verde (UniRV).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Formação Técnica</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Técnico em <strong>Desenvolvimento de Sistemas</strong> pelo SESI SENAI Rio Verde.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Padrão de Código</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Código componentizado, tipagem estrita com TypeScript e acessibilidade semântica.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>Foco em Negócio</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Comunicação clara, cumprimento rigoroso de prazos e alinhamento contínuo.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors"
              >
                <span>Fale Comigo Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://drive.google.com/file/d/1dhyoluq98-zufZKey1Wzowc43OwRvPZB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
              >
                <FileDown className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Baixar Currículo (PDF)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};