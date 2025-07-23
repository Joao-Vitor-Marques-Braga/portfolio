import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

type TechCardProps = {
  icon: React.ReactNode;
  name: string;
  delay?: number;
};

function TechCard({ icon, name, delay = 0 }: TechCardProps) {
  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:bg-purple-600/10 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="flex flex-col items-center">
        <div className="text-5xl text-purple-500 mb-3">
          {icon}
        </div>
        <span className="text-slate-300 font-medium">{name}</span>
      </div>
    </div>
  );
}

export function Skills() {
    const mainTechs = [
      { icon: <TbBrandReactNative />, name: "React/React Native" },
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <IoLogoHtml5 />, name: "HTML5" },
      { icon: <IoLogoCss3 />, name: "CSS3" },
      { icon: <IoLogoGithub />, name: "GitHub" },
      { icon: <IoLogoFigma />, name: "Figma" },
    ];

    const otherTechs = [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaSass />, name: "Sass" },
      { icon: <FaJava />, name: "Java" },
    ];

    return (
        <div className="w-full">
            <div className="text-center mb-14">
                <div className="bg-purple-600/30 w-auto inline-block px-5 py-2 rounded-full mb-6">
                    <p className="text-purple-400 font-medium">👨🏻‍💻 Skills</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    Tecnologias e habilidades
                </h2>
            </div>

            <div className="space-y-12">
                <div data-aos="fade-up">
                    <h3 className="text-xl md:text-2xl font-medium text-center mb-8 text-white">
                        Techs que uso no dia a dia
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                        {mainTechs.map((tech, index) => (
                            <TechCard 
                                key={tech.name} 
                                icon={tech.icon} 
                                name={tech.name} 
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-xl md:text-2xl font-medium text-center mb-8 text-white">
                        Outras Techs que já utilizei em projetos
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
                        {otherTechs.map((tech, index) => (
                            <TechCard 
                                key={tech.name} 
                                icon={tech.icon} 
                                name={tech.name} 
                                delay={index * 50}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}