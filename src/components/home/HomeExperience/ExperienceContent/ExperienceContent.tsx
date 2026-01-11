import styles from './ExperienceContent.module.sass'

import { PiBuildingApartmentLight, PiEngineBold, PiHammer } from "react-icons/pi";
import { FaLinux, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from 'react-icons/ri';
import { SiNextdotjs } from "react-icons/si";


export function ExperienceContent() {

    const technologies = [
        {
            key: 0,
            icon: <PiBuildingApartmentLight/>,
            technology: `Solve`,
            description: `Desarrollé de forma completamente autónoma el sitio web de la empresa Solve.ltda con tecnologías como React.js, Next.js y Sass`
        },
        {
            key: 0,
            icon: <PiEngineBold/>,
            technology: `TopScan`,
            description: `Desarrollé el sitio web de la empresa TopScan para ayudar en la captación de clientes y darle seriedad a la empresa`
        },
        {
            key: 0,
            icon: <PiHammer/>,
            technology: `KalixerWeb`,
            description: `Este mismo sitio web es parte de mis proyectos personales. Como experiencia primero lo desarrollé en React y luego lo migré a Next`
        },
        // {
        //     key: 0,
        //     icon: <FaLinux/>,
        //     technology: `Linux`,
        //     description: `Linux es mi entorno de trabajo habitual, donde me siento cómodo explorando, configurando y optimizando mi flujo de desarrollo`
        // },
        // {
        //     key: 0,
        //     icon: <FaReact/>,
        //     technology: `Satisfactory`,
        //     description: `En mis ratos libres, gestiono una fábrica en Satisfactory: actualmente avanzando con orgullo en la fase 2 del ascensor espacial 🚀`
        // },
        // {
        //     key: 0,
        //     icon: <FaReact/>,
        //     technology: `Python`,
        //     description: `Está en mi lista de siguientes pasos, con la idea de usarlo para automatizar tareas, crear herramientas útiles y ampliar mi forma de resolver problemas`
        // },
        // {
        //     key: 0,
        //     icon: <FaReact/>,
        //     technology: `Node.Js`,
        //     description: `Planeo profundizar en Node.js para entender mejor el backend, construir APIs y completar mi visión del desarrollo web de punta a punta`
        // },
        // {
        //     key: 0,
        //     icon: <FaReact/>,
        //     technology: `Guitarra`,
        //     description: `En mis ratos libres, la guitarra es una de mis formas favoritas de explorar la música, experimentar con ideas y seguir puliendo técnica y expresión.`
        // },
        // {
        //     key: 0,
        //     icon: <FaReact/>,
        //     technology: `Piano`,
        //     description: `El piano es un proyecto personal a largo plazo, donde disfruto aprender, cometer errores y entender la música desde otra perspectiva`
        // },
    ]

    const technologiesRender = technologies.map((element) => {
        return (
            <li>
                {element.icon}
                <div>
                    <h3>{element.technology}</h3>
                    <p>{element.description}</p>
                </div>
            </li> 
        )
    })

    return(
        <div className={styles.ExperienceContent}>
            <h1>Experiencia y Proyectos</h1>

            <ul>
                {technologiesRender}
            </ul>
        </div>
    )
}