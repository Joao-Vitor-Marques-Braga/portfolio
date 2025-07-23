import { useEffect } from "react";
import { NavBar } from "./components/navbar"
import Linkedin from './assets/linkedin-icon.svg'
import GitHub from './assets/github-icon.svg'
import Avatar from './assets/Avatar.svg'
import { AboutMe } from "./components/aboutMe"
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contacts } from "./components/contacts";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <NavBar />
        
        <main className="space-y-24">
          {/* Hero Section */}
          <section className="pt-10 md:pt-16 lg:pt-24" id="home">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right" className="space-y-6">
                <div className="bg-purple-600/30 w-auto inline-block px-5 py-2 rounded-full">
                  <p className="text-purple-400 font-medium">👋 Saudações</p>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  João Vitor Marques Braga
                </h1>
                
                <p className="text-xl text-slate-300">Front-end Developer</p>
                
                <div className="flex space-x-4 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/" 
                    target="_blank"
                    className="bg-slate-800 hover:bg-purple-600 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="LinkedIn"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <img src={Linkedin} className="w-5 h-5" alt="LinkedIn" />
                  </a>
                  <a 
                    href="https://github.com/Joao-Vitor-Marques-Braga" 
                    target="_blank"
                    className="bg-slate-800 hover:bg-purple-600 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="GitHub"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img src={GitHub} className="w-5 h-5" alt="GitHub" />
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1dhyoluq98-zufZKey1Wzowc43OwRvPZB/view?usp=sharing" 
                    target="_blank"
                    className="bg-purple-600 hover:bg-purple-700 transition-colors ml-2 px-6 py-2 rounded-full font-medium shadow-lg shadow-purple-600/20"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Baixar CV
                  </a>
                </div>
              </div>
              
              <div data-aos="fade-left" className="flex justify-center">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center glow-effect">
                    <img src={Avatar} className="h-[340px] w-auto -mt-10" alt="Avatar" />
                  </div>
                  <div className="absolute -z-10 bg-purple-600/20 rounded-full w-[280px] h-[280px] md:w-[350px] md:h-[350px] blur-3xl opacity-30 -top-10 -left-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="sobre" data-aos="fade-up">
            <AboutMe />
          </section>

          {/* Projects Section */}
          <section id="projetos" data-aos="fade-up">
            <Projects />
          </section>

          {/* Skills Section */}
          <section id="habilidades" data-aos="fade-up">
            <Skills />
          </section>

          {/* Contact Section */}
          <section id="contato" data-aos="fade-up">
            <Contacts />
          </section>
        </main>

        <footer className="mt-24 py-6 text-center text-slate-400 border-t border-slate-800">
          <p data-aos="fade-up">© {new Date().getFullYear()} João Vitor Marques Braga. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
