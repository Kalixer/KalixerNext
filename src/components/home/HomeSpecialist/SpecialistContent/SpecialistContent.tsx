import styles from './SpecialistContent.module.sass'

import { FaLinux, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from 'react-icons/ri';
import { SiNextdotjs } from "react-icons/si";


export function SpecialistContent() {

    const technologies = [
        {
            key: 0,
            icon: <FaReact/>,
            technology: `React`,
            description: `Me gusta trabajar con React para construir interfaces limpias y dinámicas, apoyándome en componentes reutilizables y una lógica clara`
        },
        {
            key: 0,
            icon: <SiNextdotjs/>,
            technology: `Next.js`,
            description: `Uso Next.js para dar estructura y rendimiento a mis proyectos, combinando buenas prácticas, SEO y distintas formas de renderizado.`
        },
        {
            key: 0,
            icon: <RiJavascriptFill/>,
            technology: `JavaScript`,
            description: `JavaScript es el lenguaje con el que conecto ideas y funcionalidad, desde pequeños detalles hasta la lógica central de una app`
        },
        {
            key: 0,
            icon: <FaLinux/>,
            technology: `Linux`,
            description: `Linux es mi entorno de trabajo habitual, donde me siento cómodo explorando, configurando y optimizando mi flujo de desarrollo`
        },
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
        <div className={styles.SpecialistContent}>
            <h1>Tencologías que manejo</h1>

            <ul>
                {technologiesRender}
            </ul>
        </div>
    )
}