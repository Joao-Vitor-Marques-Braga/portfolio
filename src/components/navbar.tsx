import { useState, useEffect } from 'react';
import { Menu, X, MessageSquareCode, Sun, Moon } from 'lucide-react';
import Logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#home" },
    { label: "Projetos", href: "#projetos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#habilidades" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'py-3 bg-[#fbecd6]/95 dark:bg-[#15110d]/95 backdrop-blur-md border-b border-[#ebd3b9] dark:border-[#382b20] shadow-warm-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tag */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#fffdfa] dark:bg-[#251c15] border border-[#ebd3b9] dark:border-[#3d2e22] flex items-center justify-center overflow-hidden transition-colors shadow-warm-sm">
              <img src={Logo} alt="João Vitor Logo" className="h-6 w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#27180e] dark:text-[#fbf4ec] transition-colors">
                João Vitor
              </span>
              <span className="text-[11px] font-medium text-[#7e624c] dark:text-[#c4aba2]">
                Software & UI/UX
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#f3dcbf] dark:bg-[#201812]/90 p-1.5 rounded-full border border-[#dec09d] dark:border-[#3d2c20]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[#5e4533] dark:text-[#dec2aa] hover:text-[#201208] dark:hover:text-white hover:bg-[#fffdf9] dark:hover:bg-[#2e2119] transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-[#5e4533] dark:text-[#dec2aa] bg-[#f3dcbf] dark:bg-[#241b14] hover:bg-[#ebd0af] dark:hover:bg-[#30231a] border border-[#dec09d] dark:border-[#3d2c20] transition-colors shadow-warm-sm"
              aria-label={theme === "light" ? "Mudar para modo escuro" : "Mudar para modo claro"}
              title={theme === "light" ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[#5e4533]" />
              ) : (
                <Sun className="w-4 h-4 text-[#f5a76e]" />
              )}
            </button>

            <a
              href="https://wa.me/5564993048083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#964213] hover:bg-[#7b330a] text-white transition-colors shadow-warm-md"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>Vamos Conversar</span>
            </a>
          </div>

          {/* Mobile Actions (Theme + Menu Toggle) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-[#5e4533] dark:text-[#dec2aa] bg-[#f3dcbf] dark:bg-[#241b14] border border-[#dec09d] dark:border-[#3d2c20] transition-colors"
              aria-label="Alternar tema"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#f5a76e]" />}
            </button>

            <button
              className="p-2 rounded-xl bg-[#f3dcbf] dark:bg-[#241b14] border border-[#dec09d] dark:border-[#3d2c20] text-[#5e4533] dark:text-[#dec2aa] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#fffdfa] dark:bg-[#1a140f] border border-[#ebd3b9] dark:border-[#382b20] shadow-warm-xl space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#4b3524] dark:text-[#e4d0bf] hover:bg-[#f5e2cb] dark:hover:bg-[#281e17] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#ebd3b9] dark:border-[#382b20]">
              <a
                href="https://wa.me/5564993048083"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-[#964213] text-white transition-colors shadow-warm-md"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
