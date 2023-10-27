import { BracketsBlue, Js, Dts, Tailwind, Java, Reactjs, Angular, Git, PHP, Laravel } from "@react-symbols/icons";
import { BiLogoPostgresql } from "react-icons/bi";
export const navbar = [
    {
        id: 1,
        link: 'Inicio'
    },
    {
        id: 2,
        link: 'Sobre mí'
    },
    {
        id: 3,
        link: 'Experiencia'
    },
    {
        id: 4,
        link: 'Contacto'
    },
];

export const skills = [
    {
        id: 1,
        child: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-html5 flex items-center justify-center h-20 w-20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                    <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                </svg>
            </>
        ),
        color: "shadow-red-500",
        title: "html"
    },
    {
        id: 2,
        child: (
            <>
                <BracketsBlue width={70} />
            </>
        ),
        color: "shadow-blue-500",
        title: "css"
    },
    {
        id: 3,
        child: (
            <>
                <Js width={70} />
            </>
        ),
        color: "shadow-yellow-500",
        title: "js"
    },
    {
        id: 4,
        child: (
            <>
                <Dts width={70} />
            </>
        ),
        color: "shadow-sky-500",
        title: "TypeScript"
    },
    {
        id: 5,
        child: (
            <>
                <Tailwind width={70} />
            </>
        ),
        color: "shadow-green-500",
        title: "Tailwind"
    },
    {
        id: 6,
        child: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bootstrap flex items-center justify-center h-20 w-20"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />
                    <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />
                    <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />
                </svg>
            </>
        ),
        color: "shadow-purple-500",
        title: "BootStrap"
    },
    {
        id: 7,
        child: (
            <>
                <Reactjs width={70} />
            </>
        ),
        color: "shadow-blue-500",
        title: "React"
    },
    {
        id: 8,
        child: (
            <>
                <Angular width={70} />
            </>
        ),
        color: "shadow-red-500",
        title: "Angular"
    },
    {
        id: 9,
        child: (
            <>
                <Git width={70} />
            </>
        ),
        color: "shadow-gray-500",
        title: "Git"
    },
    
    {
        id: 11,
        child: (
            <>
                <PHP width={70} />
            </>
        ),
        color: "shadow-blue-500",
        title: "Php"
    },
    {
        id: 12,
        child: (
            <>
                <Laravel width={70} />
            </>
        ),
        color: "shadow-red-500",
        title: "Laravel"
    },
    
    {
        id: 13,
        child: (
            <>
                <Java />
            </>
        ),
        color: "shadow-red-500",
        title: "Java"
    },
    {
        id: 14,
        child: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-flutter flex items-center justify-center h-20 w-20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 14l-3 -3l8 -8h6z" />
                    <path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />
                </svg>
            </>
        ),
        color: "shadow-sky-500",
        title: "Flutter"
    },
    {
        id: 15,
        child: (
            <>
                <BiLogoPostgresql width="100px" height="100px" className="h-20 w-20 text-sky-600" />
            </>
        ),
        color: "shadow-blue-500",
        title: "PostGreSQL"
    },
];