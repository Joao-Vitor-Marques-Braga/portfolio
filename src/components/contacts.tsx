import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export function Contacts() {
    return (
        <div className="max-md:mx-6">
            <div className="bg-purple-600/30 w-36 h-9 rounded-2xl my-6">
                <p className="py-1.5 px-5 text-purple-500">📬 Contatos</p>
            </div>
            <div>
                <h1 className="md:text-4xl">Vamos conversar!</h1>
            </div>

            <div className="max-md:grid max-md:grid-flow-row md:flex md:justify-between ">
                <div className="text-purple-800 text-center w-auto h-16 max-md:w-60 max-md:h-14 md:flex md:flex-row">
                    <a className="flex flex-row w-auto">
                    <MdOutlineEmail className="text-purple-800 size-8 md:mx-8 md:my-auto" />
                    <h1 className="mx-auto my-auto">joaovitorkge@gmail.com</h1>
                    </a>
                    
                </div>
                <div className="text-purple-800 text-center w-auto h-16 max-md:w-60 max-md:h-14 md:flex md:flex-row">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-marques-braga/" target="_blank" className="flex flex-row w-auto">
                        <FaLinkedin className="text-purple-800 size-8 md:mx-8 md:my-auto" />
                        <h1 className="my-auto">João Vitor Marques Braga</h1>
                    </a>
                </div>
                <div className="text-purple-800 text-center w-auto h-16 max-md:w-60 max-md:h-14 md:flex md:flex-row">
                    <a href="https://wa.me/5564993048083" target="_blank" className="flex flex-row w-auto">
                        <FaWhatsapp className="text-purple-800 size-8 md:mx-8 md:my-auto" />
                        <h1 className="mx-auto my-auto">Entre em contato</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}