import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

import NR13Image1 from "../assets/Imagem do WhatsApp de 2025-08-19 à(s) 20.20.07_7939eac4.jpg"
import NR13Image2 from "../assets/Imagem do WhatsApp de 2025-08-19 à(s) 20.20.14_04829415.jpg"
import NR13Image3 from "../assets/Imagem do WhatsApp de 2025-08-19 à(s) 20.20.26_7bc1d0ad.jpg"
import EmbalagensPopular from "../assets/Embalagens-popular.png"
import Aquagestor from "../assets/Aquagestor.png"

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
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-colors ${
          activeFilter === 'all' 
            ? 'border-purple-500 bg-purple-600/30 text-white' 
            : 'border-slate-700 hover:border-purple-500 hover:bg-purple-600/10 text-slate-300'
        }`}
      >
        <span>Todos</span>
      </button>
      
      <button 
        onClick={() => setActiveFilter('react')}
        className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-colors ${
          activeFilter === 'react' 
            ? 'border-purple-500 bg-purple-600/30 text-white' 
            : 'border-slate-700 hover:border-purple-500 hover:bg-purple-600/10 text-slate-300'
        }`}
      >
        <TbBrandReactNative className="text-purple-400" />
        <span>React.JS</span>
      </button>
      
      <button 
        onClick={() => setActiveFilter('react-native')}
        className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-colors ${
          activeFilter === 'react-native' 
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

type CarouselModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
};

function CarouselModal({ isOpen, onClose, images, title }: CarouselModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">{title} - Screenshots</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-colors"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-colors"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex
                    ? 'bg-purple-500'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Counter */}
        <div className="p-4 text-center text-slate-400">
          {currentImageIndex + 1} de {images.length}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isNR13CarouselOpen, setIsNR13CarouselOpen] = useState(false);
    
    const projects: Array<{
      id: number;
      title: string;
      description: string;
      image: string;
      tags: string[];
      liveUrl?: string;
      repoUrl?: string;
      category: string;
      carouselImages?: string[];
    }> = [
      {
        id: 1,
        title: "NR-13",
        description: "Este foi um projeto desenvolvido para a C&T Serviços Engenharia, se trata de um sistema de inspção de equipamentos de acordo com a NR-13 e geração de relatórios. O sistema foi desenvolvido em React Native, utilizando Expo e Firebase como banco de dados.",
        image: NR13Image3,
        tags: ["React Native", "Expo", "Firebase"],
        category: "react-native",
        carouselImages: [NR13Image1, NR13Image2, NR13Image3]
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
                        onShowCarousel={() => setIsNR13CarouselOpen(true)}
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

                         <CarouselModal
               isOpen={isNR13CarouselOpen}
               onClose={() => setIsNR13CarouselOpen(false)}
               images={[NR13Image1, NR13Image2, NR13Image3]}
               title="NR-13"
             />
        </div>
    );
}