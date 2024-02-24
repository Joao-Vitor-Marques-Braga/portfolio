import Logo from '../assets/logo 1.svg'

export function NavBar() {
    return (
        <div className='w-full max-md:hidden'>
            <div className="bg-purple-600/20 rounded-md h-16">
                <div className='flex justify-between'>
                    <img src={Logo} alt="Logo" className='mx-3 my-1' />

                    <div className='flex justify-end space-x-8 my-auto px-8'>
                        <h1>Front End Developer</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}