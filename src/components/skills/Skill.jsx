import { skills } from "../../data";

const Skill = () => {
    return ( 
        <div className="container mx-auto max-w-6xl flex pb-16  flex-col-reverse justify-between">
            <div className="flex flex-col items-start p-6">
                <h2 className="text-3xl lg:text-5xl pb-8 text-white after:w-full after:h-[4px] after:mt-2 after:block after:bg-gradient-to-r after:from-white after:to-secondary-100 ">
                    Habilidades y Tecnologías
                </h2>
                <div className="flex w-full gap-8 flex-wrap">
                    {
                        skills.map( skill => (
                            <div
                                key={ skill.id }
                                className=""
                            >
                                <div     
                                    className={`flex border border-secondary-900 rounded-lg items-center justify-between p-2 shadow-md ${ skill.color }  hover:scale-105 hover:cursor-pointer transition-all duration-300 mb-2 w-20 h-20`}
                                >
                                    {
                                        skill.child
                                    }
                                </div>
                                <p className="text-center text-white text-base"> { skill.title } </p>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
}
 
export default Skill;