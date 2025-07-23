import MyPhoto from "../assets/myphoto.jpg"

export function AboutMe() {
    return (
        <div className="relative">
            <div className="pb-8">
                <div className="bg-purple-600/30 w-auto inline-block px-5 py-2 rounded-full mb-6">
                    <p className="text-purple-400 font-medium">🧐 Sobre mim</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Conheça um pouco mais sobre mim</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2" data-aos="fade-right">
                    <div className="relative mx-auto w-fit">
                        <div className="overflow-hidden rounded-2xl border-4 border-purple-500/20 shadow-xl shadow-purple-500/10">
                            <img 
                                src={MyPhoto} 
                                alt="João Vitor Marques Braga" 
                                className="w-full max-w-sm rounded-2xl transition-transform duration-500 hover:scale-105" 
                            />
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50"></div>
                        <div className="absolute -z-10 -top-6 -left-6 w-20 h-20 bg-purple-600 rounded-full blur-xl opacity-30"></div>
                    </div>
                </div>

                <div className="md:col-span-3 space-y-6" data-aos="fade-left">
                    <div className="space-y-4 text-lg text-slate-300">
                        <p className="text-xl font-medium text-white">👋 Me chamo João Vitor</p>
                        <p className="leading-relaxed">👨🏻‍💻 Há 3 anos venho estudando desenvolvimento font-end com React.JS, React Native, JavaScript e TypeScript.</p>
                        <p className="leading-relaxed">🎓 Cursando Engenharia de Software pela UNIRV e técnico em desenvolvimento de sistemas pelo SESI SENAI Rio Verde.</p>
                        <p className="leading-relaxed">💡 Interesse em desenvolvimento de interfaces e aplicações com React JS e React Native.</p>
                        <p className="leading-relaxed">🚀 O melhor dia sempre será o próximo.</p>
                    </div>

                    <div className="pt-4">
                        <a 
                            href="#contato" 
                            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-purple-600/20"
                        >
                            Entre em contato
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}