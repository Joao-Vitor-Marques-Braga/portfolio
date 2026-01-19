import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

import EmbalagensPopular from "../assets/Embalagens-popular.png"
import Aquagestor from "../assets/Aquagestor.png"
import PedidosConectados from "../assets/PedidosConectados.png"

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  delay?: number;
  carouselImages?: string[];
  onShowCarousel?: () => void;
};

function ProjectCard({ title, description, image, tags, liveUrl, repoUrl, delay = 0, carouselImages, onShowCarousel }: ProjectCardProps) {
  return (
    <div
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4`}>
          <div className="flex space-x-4 mb-2">
            {carouselImages && onShowCarousel && (
              <button
                onClick={onShowCarousel}
                className="bg-slate-800 hover:bg-purple-600 transition-colors p-2 rounded-full text-white"
                aria-label="Ver Screenshots"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </button>
            )}

            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-purple-600 transition-colors p-2 rounded-full text-white"
                aria-label="Ver Repositório"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}

            {liveUrl && !carouselImages && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-purple-600 transition-colors p-2 rounded-full text-white"
                aria-label="Ver Site"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type ProjectFilterProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

function ProjectFilter({ activeFilter, setActiveFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-end">
      <button
        onClick={() => setActiveFilter('all')}
        className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-colors ${activeFilter === 'all'
          ? 'border-purple-500 bg-purple-600/30 text-white'
          : 'border-slate-700 hover:border-purple-500 hover:bg-purple-600/10 text-slate-300'
          }`}
      >
        <span>Todos</span>
      </button>

      <button
        onClick={() => setActiveFilter('react')}
        className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-colors ${activeFilter === 'react'
          ? 'border-purple-500 bg-purple-600/30 text-white'
          : 'border-slate-700 hover:border-purple-500 hover:bg-purple-600/10 text-slate-300'
          }`}
      >
        <TbBrandReactNative className="text-purple-400" />
        <span>React.JS</span>
      </button>

      <button
        onClick={() => setActiveFilter('react-native')}
        className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-colors ${activeFilter === 'react-native'
          ? 'border-purple-500 bg-purple-600/30 text-white'
          : 'border-slate-700 hover:border-purple-500 hover:bg-purple-600/10 text-slate-300'
          }`}
      >
        <TbBrandReactNative className="text-purple-400" />
        <span>React Native</span>
      </button>
    </div>
  );
}

type Project = ProjectCardProps & {
  id: number;
  category: string;
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Pedidos Conectados",
      description: "Um sistema para gerenciamento de pedidos. A solução completa para organizar, monitorar e escalar suas vendas.",
      image: PedidosConectados,
      tags: ["React", "Firebase", "Tailwind"],
      category: "react",
      liveUrl: "https://pedidos-conectados.vercel.app/"
    },
    {
      id: 2,
      title: "Embalagens Popular",
      description: "Este é um site para a embalagens popular que funciona como um catálogo de produtos que podem ser orçados via whatsapp por um link direto, além de ser um sistema institucional que aumenta a visibilidade da empresa por boas práticas de SEO.",
      image: EmbalagensPopular,
      tags: ["React", "JavaScript", "Tailwind"],
      repoUrl: "https://embalagenspopular.com",
      category: "react"
    },
    {
      id: 3,
      title: "Aquagestor",
      description: "Este é um microsaas desenvolvido para lava jatos e estéticas automotivas conseguirem gerenciar seus clientes e serviços de forma eficiente visando um melhor atendimento ao cliente e maior controle sobre seu próprio negócio.",
      image: Aquagestor,
      tags: ["React", "Electron", "Node.JS", "SQLite", "Firebase"],
      repoUrl: "https://aquagestor-rho.vercel.app/",
      category: "react"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <div className="bg-purple-600/30 w-auto inline-block px-5 py-2 rounded-full mb-6">
          <p className="text-purple-400 font-medium">🔗 Projetos</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Trabalhos e Projetos
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvi utilizando diversas tecnologias.
        </p>
      </div>

      <div className="mb-10" data-aos="fade-up">
        <ProjectFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
            delay={index * 100}
            carouselImages={project.carouselImages}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-slate-400" data-aos="fade-up">
          Nenhum projeto encontrado na categoria selecionada.
        </div>
      )}

      <div className="text-center mt-12" data-aos="fade-up">
        <a
          href="https://github.com/Joao-Vitor-Marques-Braga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 border border-slate-700"
        >
          <FaGithub className="w-5 h-5" />
          Ver mais projetos no GitHub
        </a>
      </div>
    </div>
  );
}