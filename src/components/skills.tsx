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


export function Skills() {
    return (
        <div className="w-full max-md:mx-14">
            <div className="bg-purple-600/30 w-28 h-9 rounded-2xl my-6 md:mx-auto">
                <p className="py-1.5 px-5 text-purple-500">👨🏻‍💻 Skills</p>
            </div>
            <div className="max-ms:grid max-md:grid-cols-3 mx-auto">
                <div className="max-md:my-3 max-md:my-2 md:text-center md:my-8">
                    <h1 className="max-md:text-2xl md:text-5xl">Tecnologias e habilidades</h1>
                </div>

                <div className="md:text-center md:my-12">
                    <p className="md:text-2xl">Techs que uso no dia a dia</p>
                    <div className="flex flex-row justify-center md:text-5xl max-md:justify-center max-md:text-4xl max-md:my-3 md:my-2">
                        <TbBrandReactNative className="text-purple-600/60 md:mx-1" />
                        <RiJavascriptFill className="text-purple-600/60 md:mx-1" />
                        <BiLogoTypescript className="text-purple-600/60 md:mx-1" />
                        <IoLogoHtml5 className="text-purple-600/60 md:mx-1" />
                        <IoLogoCss3 className="text-purple-600/60 md:mx-1" />
                        <SiTailwindcss className="text-purple-600/60 md:mx-1" />
                        <IoLogoGithub className="text-purple-600/60 md:mx-1" />
                        <IoLogoFigma className="text-purple-600/60 md:mx-1" />
                    </div>
                </div>

                <div className="md:text-center">
                    <p className="md:text-2xl">Outras Techs que já utilizei em projetos</p>
                    <div className="flex flex-row justify-center md:text-5xl max-md:justify-center max-md:text-4xl max-md:my-3 md:my-2">
                        <FaPython className="text-purple-600/60 md:mx-1" />
                        <FaSass className="text-purple-600/60 md:mx-1" />
                        <FaJava className="text-purple-600/60 md:mx-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}