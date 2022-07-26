
import logo from '../assets/mcje-light-circle.svg'

export default () => {
    return (
        <header className=' flex  justify-between items-center bg-white py-1 px-3 w-full '>
            <div className='flex justify-center items-center gap-2'>
                <img className='bg-cover bg-left w-14 p-2 rounded-xl'  src={logo} alt="logo" />
                <h1 className='text-3xl font-space font-bold text-main-dark'><a href="#">mcje</a></h1>
            </div>
            <nav className='flex justify-between items-center gap-9 divide-x-[0px] md:divide-x-[1px] divide-teal-900/50  text-main-dark/80 font-space font-semibold text-lg xs:' >
                <ul className='hidden md:flex lg:flex xl:flex gap-9 '>
                    <li ><a className='nav-link' href="./link-1">Home</a></li>
                    <li ><a className='nav-link' href="./link-2">Works</a></li>
                    <li ><a className='nav-link' href="./link-3">About</a></li>
                </ul>
                <div>
                    <button className='rounded-lg bg-main-dark text-main-light px-6 py-2 ml-9 font-light hover:bg-main-dark/90 hover:text-main-light/90 ease-in-out '>Contact</button>
                </div>
            </nav>
        </header>
    )
}
