import MyPhoto from "../assets/myphoto.jpg"

export function AboutMe() {
    return (
        <div className="grid grid-flow-col max-md:grid-flow-row max-md:mx-8">
            <div className="bg-purple-400 rounded-full w-80 h-80 max-md:mx-auto mx-8">
                <img src={MyPhoto} className="rounded-full w-80 h-80" />
            </div>

            <div className="">
                <div className="bg-purple-600/30 w-36 h-9 rounded-2xl my-6 ">
                    <p className="py-1.5 px-5 text-purple-500">🧐 Sobre mim</p>
                </div>

                <div className="md:mb-80">
                    <h1>João Vitor Marques Braga</h1>
                    <p>👋 Me chamo João Vitor</p>
                    <p>👨🏻‍💻 Há 3 anos venho estudando desenvolvimento font-end com React.JS, React Native, JavaScript e TypeScript</p>
                    <p>🎓 Cursando Engenharia de Software pela UNIRV e técnico em desenvolvimento de sistemas pelo SESI SENAI Rio Verde</p>
                    <p>💡 Interesse em desenvolvimento de interfaces e aplicações com React JS e React Native </p>
                    <p>🚀 O melhor dia sempre será o proximo</p>
                </div>
            </div>

        </div>
    )
}