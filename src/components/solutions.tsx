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
    <section id="solucoes" className="relative py-20 sm:py-28 bg-slate-50 dark:bg-[#080d18]/60 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Serviços & Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Soluções Digitais sob Medida <br className="hidden sm:inline" />
            <span className="text-sky-600 dark:text-sky-400">para o seu Negócio</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estruturo e programo aplicações de ponta a ponta com foco em conversão de leads, facilidade de uso e arquitetura sustentável.
          </p>
        </div>

        {/* Solutions Bento Grid (Clean solid cards, no gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsCategories.map((cat, idx) => (
            <div
              key={cat.id}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
              className="p-7 rounded-2xl bg-white dark:bg-[#111a2e] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${cat.badgeBg}`}>
                  {iconMap[cat.iconName] || <Layout className="w-5 h-5" />}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Feature Points */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {cat.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar (Clean solid background) */}
        <div className="mt-14 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" data-aos="fade-up">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Tem uma ideia ou demanda específica em mente?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Analiso o seu projeto sem compromisso e sugiro a melhor stack técnica e prazo.</p>
          </div>

          <a
            href="https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20o%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors"
          >
            <span>Fazer Orçamento de Projeto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
