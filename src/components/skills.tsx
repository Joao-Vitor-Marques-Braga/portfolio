import React from "react";
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Wrench, 
  Sparkles,
  Cpu
} from "lucide-react";
import { 
  BiLogoTypescript, 
  BiLogoReact 
} from "react-icons/bi";
import { 
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase, 
  SiSqlite, 
  SiKotlin,
  SiFigma, 
  SiGit,
  SiPostgresql
} from "react-icons/si";
import { 
  TbBrandReactNative 
} from "react-icons/tb";

interface SkillItem {
  name: string;
  level: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  title: string;
  description: string;
  categoryIcon: React.ReactNode;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: "Mobile & IA",
      description: "Aplicações móveis nativas e inteligência artificial aplicada em produção.",
      categoryIcon: <Smartphone className="w-5 h-5 text-[#964213] dark:text-[#f8ae74]" />,
      skills: [
        { name: "Kotlin & Compose", level: "Avançado", icon: <SiKotlin className="text-2xl text-purple-600" /> },
        { name: "Google Gemini IA", level: "Avançado", icon: <Cpu className="w-6 h-6 text-amber-600" /> },
        { name: "ML Kit OCR", level: "Avançado", icon: <Sparkles className="w-6 h-6 text-blue-600" /> },
        { name: "React Native", level: "Intermediário/Avançado", icon: <TbBrandReactNative className="text-2xl text-cyan-600" /> },
      ],
    },
    {
      title: "Frontend Core",
      description: "Interfaces reativas, dinâmicas e acessíveis com as melhores ferramentas.",
      categoryIcon: <Code2 className="w-5 h-5 text-[#964213] dark:text-[#f8ae74]" />,
      skills: [
        { name: "React 18", level: "Avançado", icon: <BiLogoReact className="text-2xl text-sky-600" /> },
        { name: "TypeScript", level: "Avançado", icon: <BiLogoTypescript className="text-2xl text-blue-600" /> },
        { name: "Tailwind CSS", level: "Avançado", icon: <SiTailwindcss className="text-2xl text-cyan-600" /> },
        { name: "Figma (UI/UX)", level: "Avançado", icon: <SiFigma className="text-2xl text-pink-500" /> },
      ],
    },
    {
      title: "Backend & Dados",
      description: "APIs RESTful, persistência em tempo real e orquestração de bancos relacionais.",
      categoryIcon: <Terminal className="w-5 h-5 text-[#964213] dark:text-[#f8ae74]" />,
      skills: [
        { name: "Node.js & Express", level: "Avançado", icon: <SiNodedotjs className="text-2xl text-emerald-600" /> },
        { name: "Firebase (Firestore)", level: "Avançado", icon: <SiFirebase className="text-2xl text-amber-500" /> },
        { name: "PostgreSQL", level: "Intermediário", icon: <SiPostgresql className="text-2xl text-blue-500" /> },
        { name: "SQLite & Room", level: "Avançado", icon: <SiSqlite className="text-2xl text-sky-600" /> },
      ],
    },
    {
      title: "Engenharia & Ferramentas",
      description: "Arquitetura limpa, controle de versão e fluxos contínuos de desenvolvimento.",
      categoryIcon: <Wrench className="w-5 h-5 text-[#964213] dark:text-[#f8ae74]" />,
      skills: [
        { name: "Clean Architecture", level: "Avançado", icon: <Code2 className="w-6 h-6 text-[#964213]" /> },
        { name: "Git & GitHub", level: "Avançado", icon: <SiGit className="text-2xl text-orange-500" /> },
        { name: "MVVM / State Mgmt", level: "Avançado", icon: <Terminal className="w-6 h-6 text-teal-600" /> },
        { name: "WhatsApp API", level: "Avançado", icon: <Sparkles className="w-6 h-6 text-emerald-600" /> },
      ],
    },
  ];

  return (
    <section id="habilidades" className="relative py-20 sm:py-28 bg-[#f5e3cc]/40 dark:bg-[#120e0a]/50 border-t border-[#ebd3b9] dark:border-[#33261c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3dcbf] dark:bg-[#251d16] border border-[#dec09d] dark:border-[#3d2d21] text-xs font-semibold text-[#964213] dark:text-[#f8ae74] shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecossistema Técnico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22150b] dark:text-[#fef6ed]">
            Stack Tecnológica & <br className="hidden sm:inline" />
            <span className="text-[#a54c15] dark:text-[#f5a76e]">Domínio de Ferramentas</span>
          </h2>

          <p className="text-base sm:text-lg text-[#664e3b] dark:text-[#d0bcab] max-w-2xl mx-auto leading-relaxed">
            Conjunto de tecnologias consolidadas para entregar software performático, código limpo e arquitetura sustentável.
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="p-6 sm:p-8 rounded-3xl bg-[#fffdfa] dark:bg-[#1c1510] border border-[#ebd5ba] dark:border-[#382b20] space-y-6 shadow-warm-sm"
            >
              <div className="flex items-center gap-3 border-b border-[#f0ded0] dark:border-[#33261c] pb-4">
                <div className="p-2.5 rounded-2xl bg-[#f5e2cb] dark:bg-[#281e17] border border-[#e5cdb2] dark:border-[#3f2f23]">
                  {group.categoryIcon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#22150b] dark:text-white">{group.title}</h3>
                  <p className="text-xs text-[#735844] dark:text-[#bda490]">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-[#faf2e6] dark:bg-[#231b15] border border-[#ebd5ba] dark:border-[#3a2c20] hover:border-[#cf9e6e] dark:hover:border-[#523d2e] transition-colors flex items-center gap-3"
                  >
                    <div className="shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#301f13] dark:text-[#ded0c4]">
                        {skill.name}
                      </p>
                      <p className="text-[10px] text-[#964213] dark:text-[#f8ae74] font-medium">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
