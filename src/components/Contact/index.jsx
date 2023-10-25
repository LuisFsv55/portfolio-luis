const Contact = () => {
    return ( 
        <div className="max-w-6xl container mx-auto pb-8" id="Contacto">
            <div className="p-6">
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl lg:text-5xl pb-8 text-white after:w-full after:h-[4px] after:mt-2 after:block after:bg-gradient-to-r after:from-white after:to-secondary-100 ">
                        Contacto
                    </h2>
                </div>
                <div className="">
                    <div className="h-auto grid grid-cols-2 justify-center items-center lg:flex gap-8 lg:justify-start">
                        <p className="text-lg text-gray-200 mb-2 max-w-lg">
                            Siéntete libre de contactarme en cualquier momento. ¡Me comunicaré contigo tan pronto como pueda!
                        </p>
                        <div>
                            <h3 className="text-lg font-bold text-white">Correo</h3>
                            <p className="text-lg text-gray-200">luchinfsv10@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Celular</h3>
                            <p className="text-lg text-gray-200">+591 69038820</p>
                        </div>
                        <div className="flex gap-8">
                            <a href="https://www.facebook.com/fernando.sntosvargas?mibextid=9R9pXO" target="_blank" className="hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook text-gray-300 hover:text-gray-400 transition-colors duration-300 w-8 h-8 md:w-11 md:h-11"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                            <a href="https://github.com/LuisFsv55" className="hover:cursor-pointer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github text-gray-300 hover:text-gray-400 transition-colors duration-300 w-8 h-8 md:w-11 md:h-11" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;