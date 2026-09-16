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
    <div className="min-h-screen bg-white dark:bg-[#090d16] text-slate-800 dark:text-slate-100 relative transition-colors duration-200">
      
      {/* Background Grid Pattern (Clean, No Gradients) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-70" />

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
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Disponível para Novos Projetos & Freelance
                  </span>
                </div>

                {/* Main Headline (Clean solid text, no gradient) */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  Transformando Ideias em <br />
                  <span className="text-sky-600 dark:text-sky-400">Aplicações Web & Interfaces</span> <br />
                  de Alta Conversão.
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  Sou <strong className="text-slate-900 dark:text-white font-semibold">João Vitor Marques Braga</strong>, desenvolvedor frontend e designer UI/UX. Crio produtos digitais escaláveis, sistemas SaaS e landing pages elegantes que encantam clientes e geram receita.
                </p>

                {/* Action Buttons (Solid colors) */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projetos"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Explorar Projetos & Cases</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-all duration-200"
                  >
                    <MessageSquareCode className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Solicitar Orçamento</span>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1dhyoluq98-zufZKey1Wzowc43OwRvPZB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Baixar CV</span>
                  </a>
                </div>

                {/* Social Proof Mini Bar */}
                <div className="pt-3 flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="font-medium">React & TypeScript</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="font-medium">Figma Pixel-Perfect</span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="font-medium">SEO & Performance</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Mockup / Avatar with Clean Card */}
              <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
                <div className="relative w-full max-w-sm sm:max-w-md">
                  
                  {/* Container Card (Clean, no gradient) */}
                  <div className="relative rounded-3xl bg-white dark:bg-[#111a2e] border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8 space-y-6">
                    
                    {/* Visual Illustration Element */}
                    <div className="relative flex justify-center items-center py-2">
                      <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex items-center justify-center p-1">
                        <img 
                          src={DeveloperIllustration} 
                          alt="João Vitor Ilustração" 
                          className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    </div>

                    {/* Quick Profile Summary Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">João Vitor Marques Braga</span>
                        <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800">
                          Rio Verde - GO
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Graduando em Engenharia de Software (UniRV) & Técnico pelo SESI SENAI. Especialista em resolver problemas de negócio através de código limpo.
                      </p>
                    </div>

                    {/* Social Icons Strip */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Conectar nas redes:</span>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
                          aria-label="LinkedIn de João Vitor"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="https://github.com/Joao-Vitor-Marques-Braga"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
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

            {/* Impact Metrics Bar (Clean solid backgrounds) */}
            <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200 dark:border-slate-800" data-aos="fade-up">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Cases & Projetos Entregues
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  TypeScript & Código Limpo
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  95+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Pontuação Core Web Vitals
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  24h
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Resposta Rápida & Alinhamento
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Projects Section with Interactive Cards & Drawer trigger */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 3. Solutions & Specializations (Bento Grid) */}
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
      <footer className="relative z-10 py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#060910]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              João Vitor Marques Braga
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Desenvolvedor Frontend & Designer UI/UX • Rio Verde, Goiás
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-white transition-colors">Início</a>
            <a href="#projetos" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projetos</a>
            <a href="#solucoes" className="hover:text-slate-900 dark:hover:text-white transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contato</a>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
            © {new Date().getFullYear()} João Vitor. Todos os direitos reservados.
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
