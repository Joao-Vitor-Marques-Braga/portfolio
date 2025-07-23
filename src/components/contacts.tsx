import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  delay?: number;
};

function ContactCard({ icon, title, value, href, delay = 0 }: ContactCardProps) {
  const content = (
    <div className="flex flex-col items-center text-center p-6 h-full">
      <div className="bg-purple-600/20 rounded-full p-4 mb-4">
        <div className="text-2xl text-purple-500">{icon}</div>
      </div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-slate-300">{value}</p>
    </div>
  );

  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export function Contacts() {
    return (
        <div className="w-full">
            <div className="text-center mb-14">
                <div className="bg-purple-600/30 w-auto inline-block px-5 py-2 rounded-full mb-6">
                    <p className="text-purple-400 font-medium">📬 Contatos</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    Vamos conversar!
                </h2>
                <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
                    Estou sempre aberto a novas oportunidades e colaborações. 
                    Entre em contato comigo através de um dos canais abaixo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <ContactCard
                    icon={<MdOutlineEmail />}
                    title="Email"
                    value="joaovitorkge@gmail.com"
                    href="mailto:joaovitorkge@gmail.com"
                    delay={0}
                />
                
                <ContactCard
                    icon={<FaLinkedin />}
                    title="LinkedIn"
                    value="João Vitor Marques Braga"
                    href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/"
                    delay={100}
                />
                
                <ContactCard
                    icon={<FaWhatsapp />}
                    title="WhatsApp"
                    value="Entre em contato"
                    href="https://wa.me/5564993048083"
                    delay={200}
                />
            </div>

            <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
                <p className="text-slate-400">
                    Prefere um contato mais formal? Envie-me um email diretamente.
                </p>
                <a 
                    href="mailto:joaovitorkge@gmail.com" 
                    className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-purple-600/20"
                >
                    Enviar email
                </a>
            </div>
        </div>
    );
}