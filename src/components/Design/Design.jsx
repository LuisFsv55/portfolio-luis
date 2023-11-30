import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Design = () => {
    
    return ( 
        <div className="min-h-screen flex flex-col-reverse pt-32 md:flex-row items-center justify-center">
            <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-400 text-center  md:text-left">
                    Hola 👋, Soy <br />
                    <span className="font-extrabold text-transparent text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-gray-100 to-white tracking-wider">Luis Fernando</span>
                </h1>
                <h3 className="text-gray-100 text-xl md:text-2xl mb-4 text-center md:text-left">
                    Desarrollador
                </h3>
                <p className="text-gray-100 text-base text-center md:text-left md:text-base  mb-8">
                    Apasionado por las tecnologias del desarrollo.
                </p>
                <div className="flex justify-center md:justify-start items-center gap-4 mb-8 ">
                    <a href="https://www.linkedin.com/in/luis-fernando-a84794192/" target='_blank' className="hover:cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin text-gray-300 hover:text-gray-400 transition-colors duration-300 w-8 h-8 md:w-12 md:h-12 object-cover" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                        
                    </a>
                    <a href="https://www.facebook.com/fernando.sntosvargas?mibextid=9R9pXO" target='_blank' className="hover:cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook text-gray-300 hover:text-gray-400 transition-colors duration-300 w-8 h-8 md:w-11 md:h-11"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                    <a href="https://github.com/LuisFsv55" target='_blank' className="hover:cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github text-gray-300 hover:text-gray-400 transition-colors duration-300 w-8 h-8 md:w-11 md:h-11" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                </div>
                <div className="w-full md:w-auto inline-block" >
                    <a
                        href='./cv-Luis-Santos.pdf'
                        className="group bg-gradient-to-r from-secondary-100 to-secondary-900 px-8 py-3 rounded-md text-white text-lg hover:from-sky-800 hover:to-sky-950 hover:cursor-pointer flex items-center transition-all duration-1000 w-full md:w-auto justify-center md:justify-start relative"
                        download
                        rel='noopener noreferrer'
                    >
                        Descargar CV
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={ 25 } className='ml-1' />
                        </span>
                    </a>
                </div>
            </div>
            <div className=''>
                <img 
                    src="./foto.jpg" 
                    alt="Image" 
                    className="w-64 h-64 md:w-72 md:h-72 lg:h-96 lg:w-96 object-cover rounded-full ring-2 overflow-hidden ring-secondary-100 mb-6 lg:mb-0" 
                />
            </div>
            
        </div>
    );
}
 
export default Design;