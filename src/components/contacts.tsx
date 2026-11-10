import { useState } from "react";
import { 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock,
  Send
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const Contacts: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joaovitorkge@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contato" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3dcbf] dark:bg-[#251d16] border border-[#dec09d] dark:border-[#3d2d21] text-xs font-semibold text-[#964213] dark:text-[#f8ae74]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contato & Novos Negócios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22150b] dark:text-[#fef6ed]">
            Vamos Criar Algo de Alto Impacto <br className="hidden sm:inline" />
            <span className="text-[#a54c15] dark:text-[#f5a76e]">para a sua Empresa?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#664e3b] dark:text-[#d0bcab] max-w-2xl mx-auto leading-relaxed">
            Seja para criar um aplicativo mobile com IA, desenvolver uma plataforma SaaS escalável ou remodelar uma interface crítica, estou pronto para colaborar.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <Clock className="w-4 h-4" />
            <span>Tempo médio de resposta: menos de 2 horas</span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* 1. WhatsApp Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="0"
            className="p-7 rounded-3xl bg-[#22150b] text-white dark:bg-[#1f1610] border border-[#3b2718] dark:border-[#382b20] shadow-warm-xl hover:-translate-y-1 transition-transform flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#322013] text-emerald-400 flex items-center justify-center border border-[#482f1e]">
                <Send className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">Canal Mais Rápido</span>
                <h3 className="text-xl font-bold text-white mt-1">WhatsApp Direto</h3>
                <p className="text-xs text-[#d3beac] mt-2 leading-relaxed">
                  Converse diretamente comigo sobre escopo, prazos, orçamentos e viabilidade técnica.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/5564993048083?text=Ol%C3%A1%20Jo%C3%A3o!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-warm-sm transition-colors"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Email Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="80"
            className="p-7 rounded-3xl bg-[#fffdfa] dark:bg-[#1c1510] border border-[#ebd5ba] dark:border-[#382b20] shadow-warm-sm hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f5e2cb] text-[#964213] dark:bg-[#281e17] dark:text-[#f8ae74] border border-[#e5cdb2] dark:border-[#3f2f23] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[#836a56] dark:text-[#baa28e] uppercase tracking-wider">Contato Formal</span>
                <h3 className="text-xl font-bold text-[#22150b] dark:text-white mt-1">E-mail</h3>
                <p className="text-xs text-[#634c3a] dark:text-[#cfbaa7] mt-2 leading-relaxed font-mono">
                  joaovitorkge@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <a
                href="mailto:joaovitorkge@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-[#352012] dark:text-white bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#261d16] dark:hover:bg-[#34271e] border border-[#e5cdb2] dark:border-[#3d2e23] transition-colors"
              >
                <span>Abrir cliente de e-mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-xs text-[#6e5441] dark:text-[#cfbca9] hover:text-[#201207] dark:hover:text-white bg-[#faf2e6] hover:bg-[#f3dcbf] dark:bg-[#201812] dark:hover:bg-[#291e17] border border-[#ebd5ba] dark:border-[#382b20] transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">E-mail copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar endereço</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 3. LinkedIn Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="160"
            className="p-7 rounded-3xl bg-[#fffdfa] dark:bg-[#1c1510] border border-[#ebd5ba] dark:border-[#382b20] shadow-warm-sm hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f5e2cb] text-[#964213] dark:bg-[#281e17] dark:text-[#f8ae74] border border-[#e5cdb2] dark:border-[#3f2f23] flex items-center justify-center">
                <FaLinkedin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[#836a56] dark:text-[#baa28e] uppercase tracking-wider">Rede Profissional</span>
                <h3 className="text-xl font-bold text-[#22150b] dark:text-white mt-1">LinkedIn</h3>
                <p className="text-xs text-[#634c3a] dark:text-[#cfbaa7] mt-2 leading-relaxed">
                  Conecte-se para networking, recomendações e validação de cases.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#352012] dark:text-[#ecd4bc] hover:text-[#180e07] dark:hover:text-white bg-[#f5e3cc] hover:bg-[#ebd0b0] dark:bg-[#261d16] dark:hover:bg-[#34271e] border border-[#e5cdb2] dark:border-[#3d2e23] transition-colors"
              >
                <span>Ver Perfil no LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Freelancer Guarantee Badge */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-3xl bg-[#fffdfa] dark:bg-[#1c1510] border border-[#ebd5ba] dark:border-[#382b20] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-warm-sm" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-sm font-medium text-[#523c2a] dark:text-[#dec9b8]">
              Aceitando novos projetos e contratos técnicos com dedicação exclusiva.
            </span>
          </div>

          <a
            href="https://wa.me/5564993048083"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-[#964213] dark:text-[#f8ae74] hover:underline inline-flex items-center gap-1"
          >
            Reservar vaga na agenda
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
