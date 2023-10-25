import { RiCalendar2Fill } from 'react-icons/ri';
const Experience = () => {
    return ( 
        <div className="items-center gap-8 max-w-6xl container mx-auto pb-16" id="Experiencia">
            <div className="flex flex-col items-start p-6">
                <h2 className="text-3xl lg:text-5xl pb-8 text-white after:w-full after:h-[4px] after:mt-2 after:block after:bg-gradient-to-r after:from-white after:to-secondary-100 ">
                    Experiencia
                </h2>
                <div className="flex gap-4">
                    <div className="my-1.5 mr-1.5 flex flex-col items-center">
                        <span className="rounded-full bg-secondary-900 p-1"></span>
                        <span className="mt-2 h-full w-0 border border-white"></span>
                    </div>
                    <div className="border border-secondary-100 p-4 rounded-lg shadow-md shadow-secondary-900">
                        <div>
                            <h3 className="text-white font-bold text-xl">Jucumari</h3>
                            <p className="text-gray-400 text-md flex items-center gap-2">
                                <RiCalendar2Fill />
                                <span>
                                    Octubre 2022 - Enero 2023
                                </span>
                            </p>
                            <p className="text-gray-300 text-lg">
                                Durante esta pasantía laboral, tuve la oportunidad de utilizar tecnologías como React, Redux Context y TailwindCSS. Participé activamente en el desarrollo de diversos módulos, con enfoque específico en un módulo de Econmerce.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Experience;