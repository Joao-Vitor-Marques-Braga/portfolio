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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3dcbf] dark:bg-[#251d16] border border-[#dec09d] dark:border-[#3d2d21] text-xs font-semibold text-[#964213] dark:text-[#f8ae74]">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Perfil & Formação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22150b] dark:text-[#fef6ed]">
            Engenheiro de Software & <br className="hidden sm:inline" />
            <span className="text-[#a54c15] dark:text-[#f5a76e]">Excelência em Produtos Digitais</span>
          </h2>

          <p className="text-base sm:text-lg text-[#664e3b] dark:text-[#d0bcab] max-w-2xl mx-auto leading-relaxed">
            Combinando rigor técnico de engenharia com sensibilidade de design para construir aplicações mobile, web e IA que resolvem problemas reais.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Photo & Credibility Card */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-[#ebd5ba] dark:border-[#382b20] bg-[#fffdfa] dark:bg-[#1a140f] shadow-warm-xl p-3">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#faf1e5] dark:bg-[#140f0c] relative group">
                  <img
                    src={MyPhoto}
                    alt="João Vitor Marques Braga"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating badge over photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#fffdfa]/95 dark:bg-[#201812]/95 backdrop-blur-md border border-[#ebd5ba] dark:border-[#382b20] flex items-center justify-between shadow-warm-md">
                    <div>
                      <p className="text-xs font-semibold text-[#24150b] dark:text-white">João Vitor Marques Braga</p>
                      <p className="text-[11px] text-[#964213] dark:text-[#f8ae74] font-medium">Software Engineer & UI/UX</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Pillars */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            <div className="space-y-4 text-[#57402f] dark:text-[#d2bea9] leading-relaxed text-base sm:text-lg">
              <p>
                Olá! Sou o <strong className="text-[#24150b] dark:text-white">João Vitor</strong>, desenvolvedor de software especializado no ecossistema <span className="text-[#964213] dark:text-[#f8ae74] font-semibold">Kotlin & Android, React, TypeScript, Tailwind CSS e Inteligência Artificial</span>.
              </p>
              <p>
                Criei produtos como o <strong className="text-[#24150b] dark:text-white">RememberFlash</strong> (aplicativo nativo de repetição espaçada com IA pedagógica e OCR de manuscritos na Google Play Store), o <strong className="text-[#24150b] dark:text-white">Pedidos Conectados</strong>, o <strong className="text-[#24150b] dark:text-white">Aquagestor</strong> e sistemas sob medida para gestão de negócios.
              </p>
              <p>
                Minha abordagem une a solidez técnica da Engenharia de Software com princípios ergonômicos de UI/UX, entregando soluções ágeis, escaláveis e com foco obsessivo em valor de negócio.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-[#fffdfa] dark:bg-[#1f1712] border border-[#ebd5ba] dark:border-[#382b20] space-y-1 shadow-warm-sm">
                <div className="flex items-center gap-2 text-[#964213] dark:text-[#f8ae74] font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Graduação</span>
                </div>
                <p className="text-xs text-[#634c3a] dark:text-[#cfbaa7]">
                  Cursando <strong>Engenharia de Software</strong> pela Universidade de Rio Verde (UniRV).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fffdfa] dark:bg-[#1f1712] border border-[#ebd5ba] dark:border-[#382b20] space-y-1 shadow-warm-sm">
                <div className="flex items-center gap-2 text-[#964213] dark:text-[#f8ae74] font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Formação Técnica</span>
                </div>
                <p className="text-xs text-[#634c3a] dark:text-[#cfbaa7]">
                  Técnico em <strong>Desenvolvimento de Sistemas</strong> pelo SESI SENAI Rio Verde.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fffdfa] dark:bg-[#1f1712] border border-[#ebd5ba] dark:border-[#382b20] space-y-1 shadow-warm-sm">
                <div className="flex items-center gap-2 text-[#964213] dark:text-[#f8ae74] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Padrão de Código</span>
                </div>
                <p className="text-xs text-[#634c3a] dark:text-[#cfbaa7]">
                  Clean Architecture, MVVM, tipagem estrita com TypeScript e Kotlin, testes e acessibilidade.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fffdfa] dark:bg-[#1f1712] border border-[#ebd5ba] dark:border-[#382b20] space-y-1 shadow-warm-sm">
                <div className="flex items-center gap-2 text-[#964213] dark:text-[#f8ae74] font-semibold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>Foco em Negócio</span>
                </div>
                <p className="text-xs text-[#634c3a] dark:text-[#cfbaa7]">
                  Comunicação clara, cumprimento de cronogramas e entregas incrementais funcionais.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#964213] hover:bg-[#7b330a] text-white shadow-warm-md transition-colors"
              >
                <span>Fale Comigo Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://drive.google.com/file/d/1dhyoluq98-zufZKey1Wzowc43OwRvPZB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#221a14] dark:hover:bg-[#2e221a] text-[#422d1d] dark:text-[#dfc8b7] border border-[#dec09d] dark:border-[#3d2d21] transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#964213] dark:text-[#f8ae74]" />
                <span>Baixar Currículo (PDF)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
