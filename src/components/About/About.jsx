const About = () => {
    return ( 
        <div className="py-16 max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-6 lg:items-center" id="Sobre mí">
            <div className="lg:col-start-1 lg:col-end-3">
                <img 
                    src="./foto.jpg" 
                    alt="Image" 
                    className="w-full h-full mx-auto lg:mx-auto rounded-tl-lg rounded-bl-lg object-cover md:w-96 lg:w-full" 
                />
            </div>
            <div className="lg:col-start-3 col-end-7 h-full flex flex-col items-center justify-center bg-secondary-900/25 rounded-tr-lg rounded-br-lg p-8 mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-5xl pb-8 text-center text-white after:w-full after:content-normal after:h-[4px] after:mt-2 after:block after:bg-gradient-to-r after:from-white after:to-secondary-100 ">Sobre Mí</h2>
                <div className="flex flex-col gap-6">
                    <p className="text-gray-300 text-lg">
                    Soy una persona extrovertida que realiza su mayor esfuerzo y se desempeña con responsabilidad, que contribuye con soluciones a los problemas a través de la tecnología, con disponibilidad de adaptarme a las nuevas tecnologías para el desarrollo.
                    </p>
                    <p className="text-gray-300 text-lg">
                    He realizado proyectos tanto individuales como en equipo, siempre obteniendo los mejores resultados. Además de mis habilidades técnicas, también me destaco por tener una comunicación efectiva, ser una persona atenta al detalle, capaz de trabajar en equipo y de adaptarme a los cambios.
                    </p>
                </div>
            </div>
        </div>
    );
}
 export default About;