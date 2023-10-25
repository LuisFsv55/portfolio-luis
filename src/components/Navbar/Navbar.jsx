import { useState } from "react";
import { navbar } from "../../data";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [nav, setNav] = useState( false );
    return ( 
        <header className="h-20 bg-secondary-100/60 fixed top-0 left-0 w-full text-gray-200 z-50 backdrop-blur-sm" id="Inicio">
            <div className="max-w-7xl flex justify-between items-center h-full px-4 md:p-8 lg:p-0 lg:mx-auto">
                <div>
                    <a href="Inicio" className="text-2xl">
                        {"<luis"} <span className="text-white">.</span>
                            <span className="text-gray-400">dev</span>
                        {"/>"}
                    </a>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-lg">
                    {
                        navbar.map( ({ id, link }) => (
                            <a 
                                key={ id }
                                href={`#${ link }` }
                                className="hover:text-white hover:outline hover:outline-primary p-2 duration-500 transition-colors outline-3"
                            >
                                { link }
                            </a>
                        ))
                    }
                </nav>
                <div 
                    className='cursor-pointer p-4 z-10 text-gray-500 md:hidden'
                    onClick={ () => setNav( !nav ) }
                >
                    {
                        nav ? ( <FaTimes size={ 30 } /> ) : ( <FaBars size={ 30 } /> )
                    }
                </div>
                
            </div>
            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-secondary-100 text-white'>
                        {
                            navbar.map( link => (
                                <li 
                                    className='px-4 cursor-pointer capitalize py-6 text-4xl'
                                    key={ link.id }
                                >
                                    { link.link }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </header>
    );
}
 
export default Navbar;