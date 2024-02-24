import { TbBrandReactNative } from "react-icons/tb";

import ExpertNotes from "../assets/Expert-Notes.png"
import ReceitaFacil from "../assets/receitaFacil.png"

export function Projects() {
    return (
        <div className="max-md:mx-8">
            <div className="bg-purple-600/30 w-36 h-9 rounded-2xl my-6 max-md:my-3">
                <p className="py-1.5 px-5 text-purple-500">🔗 Projetos</p>
            </div>
            <div className="max-md:my-6 md:flex md:justify-between">
                <div className="max-md:my-6">
                    <h1 className="text-4xl">Trabalhos e Projetos</h1>
                </div>
                <div className="max-md:grid max-md:grid-flow-col md:grid md:grid-flow-col">
                    <div className="mr-8 border-solid border-2 border-purple-500 rounded-lg w-48 h-16 max-md:w-36 max-md:h-14 max-md:mr-3 hover:bg-purple-600/30 grid grid-cols-2 ">
                        <TbBrandReactNative className="text-purple-400 size-8 mx-auto my-auto" />
                        <h1 className="mx-auto my-auto mr-28">React.JS</h1>
                    </div>
                    <div className="border-solid border-2 border-purple-500 rounded-lg text-center w-48 h-16 max-md:w-36 max-md:h-14 hover:bg-purple-600/30 grid grid-cols-2">
                        <TbBrandReactNative className="text-purple-400 size-8 mx-auto my-auto" />
                        <h1 className="mx-auto my-auto mr-28">React Native</h1>
                    </div>
                </div>
            </div>

            <div className="max-md:grid max-md:grid-row-4 mx-auto md:grid md:grid-cols-3 md:my-16">
                {/* projeto 01 */}
                <div className="w-80 min-h-9 border-solid border-2 border-purple-500 rounded-lg hover:bg-purple-600/30 px-3.5 py-5 max-md:my-6">
                    <div>
                        <h1 className="text-2xl">Expert Notes</h1>
                        <p>
                            Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Notas em texto e áudio.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-purple-600/30 w-20 mx-3 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">React.JS</p>
                        </div>
                        <div className="bg-purple-600/30 w-20 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">TypeScript</p>
                        </div>
                    </div>
                    <div className="w-72 h-52 rounded-lg">
                        <a href="https://expert-notes-vercel.vercel.app/" target="_blank"><img src={ExpertNotes} alt="imagem + link do projeto ou repositório" className="w-72 h-52 rounded-lg border-solid border-2 border-purple-500" /></a>
                    </div>
                </div>
            
                
                <div className="w-80 min-h-9 border-solid border-2 border-purple-500 rounded-lg hover:bg-purple-600/30 px-3.5 md:ml-36 py-5 max-md:my-6">
                    <div>
                        <h1 className="text-2xl">Receita Fácil</h1>
                        <p>
                            Este projeto foi desenvolvido em react native, fazendo a utilização de requisições http e consumo de uma api de receitas.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-purple-600/30 w-auto px-2 mx-3 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">React Native</p>
                        </div>
                    </div>
                    <div className="w-72 h-52 rounded-lg">
                        <a href="https://github.com/Joao-Vitor-Marques-Braga/receita-facil?tab=readme-ov-file" target="_blank"><img src={ReceitaFacil} alt="imagem + link do projeto ou repositório" className="w-72 h-52 rounded-lg border-solid border-2 border-purple-500 bg-cover" /></a>
                    </div>
                </div>
                {/* 
                <div className="w-80 min-h-9 border-solid border-2 border-purple-500 rounded-lg hover:bg-purple-600/30 px-3.5 py-5 max-md:my-6">
                    <div>
                        <h1 className="text-2xl">Expert Notes</h1>
                        <p>
                            Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Notas em texto e áudio.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-purple-600/30 w-20 mx-3 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">React.JS</p>
                        </div>
                        <div className="bg-purple-600/30 w-20 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">TypeScript</p>
                        </div>
                    </div>
                    <div className="w-72 h-52 rounded-lg">
                        <a href="https://expert-notes-vercel.vercel.app/" target="_blank"><img src={ExpertNotes} alt="imagem + link do projeto ou repositório" className="w-72 h-52 rounded-lg border-solid border-2 border-purple-500" /></a>
                    </div>
                </div>
               
                <div className="w-80 min-h-9 border-solid border-2 border-purple-500 rounded-lg hover:bg-purple-600/30 px-3.5 py-5 max-md:my-6">
                    <div>
                        <h1 className="text-2xl">Expert Notes</h1>
                        <p>
                            Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Notas em texto e áudio.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-purple-600/30 w-20 mx-3 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">React.JS</p>
                        </div>
                        <div className="bg-purple-600/30 w-20 h-6 rounded-md my-6">
                            <p className="text-center text-purple-500 text-sm">TypeScript</p>
                        </div>
                    </div>
                    <div className="w-72 h-52 rounded-lg">
                        <a href="https://expert-notes-vercel.vercel.app/" target="_blank"><img src={ExpertNotes} alt="imagem + link do projeto ou repositório" className=" rounded-lg border-solid border-2 border-purple-500" /></a>
                    </div>
                </div>
            */}
            </div>
        </div>
    )
}