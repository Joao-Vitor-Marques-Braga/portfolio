import React from "react";
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Wrench, 
  Sparkles 
} from "lucide-react";
import { 
  BiLogoTypescript, 
  BiLogoReact 
} from "react-icons/bi";
import { 
  RiJavascriptFill 
} from "react-icons/ri";
import { 
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase, 
  SiSqlite, 
  SiPython, 
  SiElectron, 
  SiFigma, 
  SiGit 
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
      title: "Frontend Core",
      description: "Interfaces reativas, dinâmicas e acessíveis com as melhores ferramentas da atualidade.",
      categoryIcon: <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      skills: [
        { name: "React 18", level: "Avançado", icon: <BiLogoReact className="text-2xl text-sky-600 dark:text-sky-400" /> },
        { name: "TypeScript", level: "Avançado", icon: <BiLogoTypescript className="text-2xl text-blue-600 dark:text-blue-400" /> },
        { name: "JavaScript (ES6+)", level: "Avançado", icon: <RiJavascriptFill className="text-2xl text-amber-500" /> },
        { name: "Tailwind CSS", level: "Avançado", icon: <SiTailwindcss className="text-2xl text-cyan-600 dark:text-cyan-400" /> },
      ],
    },
    {
      title: "Backend & Dados",
      description: "APIs RESTful, persistência em tempo real e orquestração de microsserviços.",
      categoryIcon: <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      skills: [
        { name: "Node.js & Express", level: "Intermediário/Avançado", icon: <SiNodedotjs className="text-2xl text-emerald-600 dark:text-emerald-400" /> },
        { name: "Firebase (Firestore)", level: "Avançado", icon: <SiFirebase className="text-2xl text-amber-500" /> },
        { name: "SQLite & SQL", level: "Intermediário", icon: <SiSqlite className="text-2xl text-sky-600 dark:text-sky-300" /> },
        { name: "Python", level: "Intermediário", icon: <SiPython className="text-2xl text-yellow-500" /> },
      ],
    },
    {
      title: "Mobile & Desktop",
      description: "Experiências multiplataforma com base unificada e performance nativa.",
      categoryIcon: <Smartphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: "React Native", level: "Intermediário/Avançado", icon: <TbBrandReactNative className="text-2xl text-cyan-600 dark:text-cyan-400" /> },
        { name: "Electron", level: "Intermediário", icon: <SiElectron className="text-2xl text-teal-600 dark:text-teal-300" /> },
      ],
    },
    {
      title: "Design & Ferramentas",
      description: "Prototipagem ágil, controle de versão e fluxo contínuo de deploy.",
      categoryIcon: <Wrench className="w-5 h-5 text-slate-600 dark:text-slate-400" />,
      skills: [
        { name: "Figma (UI/UX)", level: "Avançado", icon: <SiFigma className="text-2xl text-pink-500" /> },
        { name: "Git & GitHub", level: "Avançado", icon: <SiGit className="text-2xl text-orange-500" /> },
      ],
    },
  ];

  return (
    <section id="habilidades" className="relative py-20 sm:py-28 bg-slate-50 dark:bg-[#080d18]/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecossistema Técnico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Stack Tecnológica & <br className="hidden sm:inline" />
            <span className="text-sky-600 dark:text-sky-400">Habilidades Práticas</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ferramentas modernas selecionadas para entregar sistemas confiáveis, código legível e facilidade de manutenção a longo prazo.
          </p>
        </div>

        {/* Groups Grid (Clean solid cards, no gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111a2e] border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {group.categoryIcon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center gap-3"
                  >
                    <div className="shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </p>
                      <p className="text-[10px] text-sky-600 dark:text-sky-400 font-medium">{skill.level}</p>
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