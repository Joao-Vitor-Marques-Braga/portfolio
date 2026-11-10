import React from "react";
import { 
  Layout, 
  Gauge, 
  ShoppingBag, 
  Smartphone, 
  Palette, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { solutionsCategories } from "../data/projectsData";

export const Solutions: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-5 h-5" />,
    Gauge: <Gauge className="w-5 h-5" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
  };

  return (
    <section id="solucoes" className="relative py-20 sm:py-28 bg-[#f5e3cc]/50 dark:bg-[#120e0a]/60 border-y border-[#ebd3b9] dark:border-[#33261c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3dcbf] dark:bg-[#251d16] border border-[#dec09d] dark:border-[#3d2d21] text-xs font-semibold text-[#964213] dark:text-[#f8ae74]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Serviços & Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22150b] dark:text-[#fef6ed]">
            Soluções Digitais sob Medida <br className="hidden sm:inline" />
            <span className="text-[#a54c15] dark:text-[#f5a76e]">para o seu Negócio</span>
          </h2>

          <p className="text-base sm:text-lg text-[#664e3b] dark:text-[#d0bcab] max-w-2xl mx-auto leading-relaxed">
            Estruturo e programo aplicações de ponta a ponta com foco em conversão, fluidez de uso e arquitetura sustentável.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsCategories.map((cat, idx) => (
            <div
              key={cat.id}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
              className="p-7 rounded-3xl bg-[#fffdfa] dark:bg-[#1c1510] border border-[#ebd5ba] dark:border-[#382b20] hover:border-[#cf9e6e] dark:hover:border-[#674b37] transition-all duration-200 hover:-translate-y-1 shadow-warm-sm hover:shadow-warm-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#f5e2cb] text-[#964213] dark:bg-[#2e2017] dark:text-[#f8ae74] border border-[#e5cdb2] dark:border-[#423124]">
                  {iconMap[cat.iconName] || <Layout className="w-5 h-5" />}
                </div>

                <h3 className="text-xl font-bold text-[#22150b] dark:text-[#fef6ed]">
                  {cat.title}
                </h3>

                <p className="text-sm text-[#614936] dark:text-[#d3beac] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Feature Points */}
              <div className="pt-6 mt-6 border-t border-[#f0ded0] dark:border-[#33261c] space-y-2.5">
                {cat.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-[#523d2d] dark:text-[#dec9b8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#964213] dark:text-[#f8ae74] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-8 rounded-3xl bg-[#fffdfa] dark:bg-[#1c1510] border border-[#ebd5ba] dark:border-[#382b20] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-md" data-aos="fade-up">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#22150b] dark:text-white">Tem uma demanda ou projeto em mente?</h4>
            <p className="text-sm text-[#664e3b] dark:text-[#d0bcab]">Analiso seu caso e sugiro a melhor arquitetura técnica, cronograma e proposta comercial.</p>
          </div>

          <a
            href="https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20o%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#964213] hover:bg-[#7b330a] text-white shadow-warm-md transition-colors"
          >
            <span>Fazer Orçamento no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
