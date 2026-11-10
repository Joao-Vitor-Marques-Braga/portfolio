import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  FileDown,
  MessageSquareCode,
  CheckCircle2
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { ThemeProvider } from "./context/ThemeContext";
import { NavBar } from "./components/navbar";
import { Projects } from "./components/projects";
import { ProjectDrawer } from "./components/ProjectDrawer";
import { Solutions } from "./components/solutions";
import { AboutMe } from "./components/aboutMe";
import { Skills } from "./components/skills";
import { Contacts } from "./components/contacts";
import { Project } from "./data/projectsData";
import DeveloperIllustration from './assets/developer-illustration.png';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fbecd6] dark:bg-[#15110d] text-[#2c1d12] dark:text-[#f8ede0] relative transition-colors duration-200">

      {/* Background Subtle Warm Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60" />

      {/* Main Navigation Bar */}
      <NavBar />

      {/* Main Content Sections */}
      <main className="relative z-10">

        {/* 1. Hero Section */}
        <section id="home" className="pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Value Proposition */}
              <div className="lg:col-span-7 space-y-7" data-aos="fade-right">

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f3dcbf] dark:bg-[#221a14] border border-[#dec09d] dark:border-[#3d2c20] shadow-warm-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  <span className="text-xs font-semibold text-[#5a3b22] dark:text-[#ecd0b3]">
                    Disponível para Novos Projetos & Contratos
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-extrabold tracking-tight text-[#22150c] dark:text-[#fdf6ee] leading-[1.12]">
                  Engenheiro de Software, <br />
                  <span className="text-[#a54c15] dark:text-[#f5a76e]">Apps Mobile & IA</span> <br />
                  com Foco em Resultados.
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#614936] dark:text-[#d3beab] max-w-2xl leading-relaxed">
                  Sou <strong className="text-[#24160c] dark:text-[#fff6ed] font-semibold">João Vitor Marques Braga</strong>, desenvolvedor de software e designer UI/UX. Criador do <strong className="text-[#964213] dark:text-[#f7a86f]">RememberFlash</strong> (Concursos & IA), plataformas SaaS de alto volume e sistemas de gestão operacional.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projetos"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#964213] hover:bg-[#7b330a] text-white shadow-warm-md transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Explorar Cases & Projetos</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#352012] dark:text-[#ecd4bc] hover:text-[#180e07] dark:hover:text-white bg-[#f3dcbf] hover:bg-[#ebd0af] dark:bg-[#241b14] dark:hover:bg-[#30241b] border border-[#ddbe99] dark:border-[#423124] transition-all duration-200"
                  >
                    <MessageSquareCode className="w-4 h-4 text-[#a54c15] dark:text-[#f3a66d]" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1dhyoluq98-zufZKey1Wzowc43OwRvPZB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-[#735946] hover:text-[#2c1d12] dark:text-[#bda490] dark:hover:text-white hover:bg-[#f2dbbe] dark:hover:bg-[#281e17] transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Currículo PDF</span>
                  </a>
                </div>

                {/* Social Proof Mini Bar */}
                <div className="pt-3 flex items-center gap-5 text-xs text-[#755c48] dark:text-[#bda591]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#964213] dark:text-[#f3a66d]" />
                    <span className="font-medium">Kotlin & Mobile IA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#964213] dark:text-[#f3a66d]" />
                    <span className="font-medium">React, TS & SaaS</span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <CheckCircle2 className="w-4 h-4 text-[#964213] dark:text-[#f3a66d]" />
                    <span className="font-medium">UI/UX & Código Limpo</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Mockup / Avatar with Warm Card */}
              <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
                <div className="relative w-full max-w-sm sm:max-w-md">

                  {/* Container Card in Warm Ivory */}
                  <div className="relative rounded-3xl bg-[#fffdf9] dark:bg-[#1c1510] border border-[#ebd3b9] dark:border-[#382a20] shadow-warm-xl p-6 sm:p-8 space-y-6">

                    {/* Visual Illustration Element */}
                    <div className="relative flex justify-center items-center py-2">
                      <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-[#faf2e7] dark:bg-[#261d16] border border-[#e8d2ba] dark:border-[#3d2d22] overflow-hidden shadow-warm-sm flex items-center justify-center p-1">
                        <img
                          src={DeveloperIllustration}
                          alt="João Vitor Ilustração"
                          className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Quick Profile Summary Box */}
                    <div className="p-4 rounded-2xl bg-[#f8ebda] dark:bg-[#251c15] border border-[#ebd4bb] dark:border-[#3c2c20] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#27170c] dark:text-[#fcf4eb]">João Vitor Marques Braga</span>
                        <span className="text-[10px] font-mono text-[#964213] dark:text-[#f8ae74] bg-[#f2ddc2] dark:bg-[#36251a] px-2 py-0.5 rounded border border-[#dfc3a2] dark:border-[#4d3424]">
                          Rio Verde - GO
                        </span>
                      </div>
                      <p className="text-xs text-[#634b39] dark:text-[#cfb9a6] leading-relaxed">
                        Graduando em Engenharia de Software (UniRV) & Técnico SESI SENAI. Desenvolvedor focado em produtos reais, arquitetura sustentável e UX ergonômica.
                      </p>
                    </div>

                    {/* Social Icons Strip */}
                    <div className="flex items-center justify-between pt-1 border-t border-[#f0deca] dark:border-[#33261c]">
                      <span className="text-xs text-[#7b614d] dark:text-[#bfa793]">Redes profissionais:</span>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#f5e3cb] dark:bg-[#2a1f17] hover:bg-[#eed0b1] dark:hover:bg-[#36271e] text-[#4b3321] dark:text-[#e4cfbc] hover:text-[#180e07] dark:hover:text-white transition-colors border border-[#e2c7a7] dark:border-[#423124]"
                          aria-label="LinkedIn de João Vitor"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="https://github.com/Joao-Vitor-Marques-Braga"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#f5e3cb] dark:bg-[#2a1f17] hover:bg-[#eed0b1] dark:hover:bg-[#36271e] text-[#4b3321] dark:text-[#e4cfbc] hover:text-[#180e07] dark:hover:text-white transition-colors border border-[#e2c7a7] dark:border-[#423124]"
                          aria-label="GitHub de João Vitor"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

            {/* Impact Metrics Bar */}
            <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#ebd3b9] dark:border-[#33261d]" data-aos="fade-up">
              <div className="p-5 rounded-2xl bg-[#fffdfa] dark:bg-[#1d1611] border border-[#edd7bf] dark:border-[#382b20] text-center space-y-1 shadow-warm-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#27180e] dark:text-white flex items-center justify-center gap-1">
                  <span>RememberFlash</span>
                </div>
                <div className="text-xs sm:text-sm text-[#7e624c] dark:text-[#cbb39e] font-medium">
                  App Flagship na Google Play
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#fffdfa] dark:bg-[#1d1611] border border-[#edd7bf] dark:border-[#382b20] text-center space-y-1 shadow-warm-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#27180e] dark:text-white">
                  4 Cases
                </div>
                <div className="text-xs sm:text-sm text-[#7e624c] dark:text-[#cbb39e] font-medium">
                  SaaS, Mobile & Gestão
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#fffdfa] dark:bg-[#1d1611] border border-[#edd7bf] dark:border-[#382b20] text-center space-y-1 shadow-warm-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#27180e] dark:text-white">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#7e624c] dark:text-[#cbb39e] font-medium">
                  TypeScript & Kotlin Clean Code
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#fffdfa] dark:bg-[#1d1611] border border-[#edd7bf] dark:border-[#382b20] text-center space-y-1 shadow-warm-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#27180e] dark:text-white">
                  &lt; 2h
                </div>
                <div className="text-xs sm:text-sm text-[#7e624c] dark:text-[#cbb39e] font-medium">
                  Resposta Rápida no WhatsApp
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Projects Section with Interactive Cards & Drawer trigger */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 3. Solutions & Specializations */}
        <Solutions />

        {/* 4. About & Credibility */}
        <AboutMe />

        {/* 5. Skills & Ecosystem */}
        <Skills />

        {/* 6. High-Conversion Contact */}
        <Contacts />

      </main>

      {/* Full-Screen Side Drawer Modal */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-[#ebd3b9] dark:border-[#33261d] bg-[#f6e4cc] dark:bg-[#100d0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-[#29190e] dark:text-white">
              João Vitor Marques Braga
            </p>
            <p className="text-xs text-[#7e644f] dark:text-[#c6ad97]">
              Engenharia de Software, Mobile & UI/UX • Rio Verde, Goiás
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#6e533e] dark:text-[#d3bc9f]">
            <a href="#home" className="hover:text-[#20130a] dark:hover:text-white transition-colors">Início</a>
            <a href="#projetos" className="hover:text-[#20130a] dark:hover:text-white transition-colors">Projetos</a>
            <a href="#solucoes" className="hover:text-[#20130a] dark:hover:text-white transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-[#20130a] dark:hover:text-white transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-[#20130a] dark:hover:text-white transition-colors">Contato</a>
          </div>

          <p className="text-xs text-[#7e644f] dark:text-[#c6ad97] text-center sm:text-right">
            © {new Date().getFullYear()} João Vitor. Remodelado com elegância & precisão técnica.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
