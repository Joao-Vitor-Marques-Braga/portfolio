import { NavBar } from "./components/navbar"
import Linkedin from './assets/linkedin-icon.svg'
import GitHub from './assets/github-icon.svg'
import Avatar from './assets/Avatar.svg'
import { AboutMe } from "./components/aboutMe"
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contacts } from "./components/contacts";

function App() {
  return (
    <div className="mx-auto w-9/12 my-12 space-y-6 max-md:mx-0">
      <div className="max-md:justify-centr max-md:text-center">
        <div className="max-md:w-screen max-md:flex-none max-md:grid grid-flow-row flex justify-between md:my-20">
          <div className="my-6 md:w-72">
            <div className="bg-purple-600/30 w-36 h-9 rounded-2xl my-6 max-md:mx-8">
              <p className="py-1.5 px-5 text-purple-500">👋 Sudações</p>
            </div>
            <h1 className="text-4xl">João Vitor Marques Braga</h1>
            <p className="my-6">Front-end developer</p>
            <div className="max-md:flex flex-row max-md:justify-center my-6 flex flex-row">
              <div className="bg-slate-600 w-8 h-8 rounded-full mr-4">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/" target="_blank"><img src={Linkedin} className="w-4 mx-auto py-2" /></a>
              </div>
              <div className="bg-slate-600 w-8 h-8 rounded-full">
                <a href="https://github.com/Joao-Vitor-Marques-Braga" target="_blank"><img src={GitHub} className="mx-auto" /></a>
              </div>
            </div>
          </div>

          <div className="bg-purple-900 rounded-full md:w-96 md:h-96 max-md:w-72 max-md:h-72 max-md:mx-auto">
            <img src={Avatar} className="mx-auto pt-14 max-md:w-60 h-60 md:w-72 md:h-80 " />
          </div>
          <div className="max-md:py-6 mx-5 my-auto">
            <a href="https://drive.google.com/file/d/1dhyoluq98-zufZKey1Wzowc43OwRvPZB/view?usp=sharing" target="_blank" className="text-purple-600 text-lg">Baixar CV</a>
          </div>
        </div>
      </div>


     
      <AboutMe />

      <Projects />

      <Skills />

      <Contacts/>
      
    </div>
  )
}

export default App
