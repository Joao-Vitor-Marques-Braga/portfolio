import { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

export function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-2' 
                : 'bg-transparent py-4'
        }`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className='flex justify-between items-center'>
                    <a href="#home" className="flex items-center">
                        <img src={Logo} alt="Logo" className='h-10 w-auto' />
                    </a>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex space-x-8'>
                        <NavLink href="#home">Início</NavLink>
                        <NavLink href="#sobre">Sobre</NavLink>
                        <NavLink href="#projetos">Projetos</NavLink>
                        <NavLink href="#habilidades">Habilidades</NavLink>
                        <NavLink href="#contato">Contato</NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-slate-800 mt-2 rounded-lg py-4 px-2 shadow-lg">
                        <div className="flex flex-col space-y-3">
                            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Início</MobileNavLink>
                            <MobileNavLink href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</MobileNavLink>
                            <MobileNavLink href="#projetos" onClick={() => setMobileMenuOpen(false)}>Projetos</MobileNavLink>
                            <MobileNavLink href="#habilidades" onClick={() => setMobileMenuOpen(false)}>Habilidades</MobileNavLink>
                            <MobileNavLink href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</MobileNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

// Desktop NavLink Component
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a 
            href={href} 
            className="text-white/80 hover:text-white hover:text-purple-400 font-medium text-sm transition-colors duration-300"
        >
            {children}
        </a>
    );
}

// Mobile NavLink Component
function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
    return (
        <a 
            href={href}
            onClick={onClick}
            className="text-white/80 hover:text-purple-400 font-medium text-base px-4 py-2 rounded-md hover:bg-slate-700 transition-colors duration-200"
        >
            {children}
        </a>
    );
}