import { FaLinux, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from 'react-icons/ri';
import { SiNextdotjs } from "react-icons/si";
import styles from './SpecialistContent.module.sass'

export function SpecialistContent() {
    const technologies = [
        {
            icon: <FaReact />,
            title: "React",
            description: "Building dynamic, component-based user interfaces with cleaner logic and state management."
        },
        {
            icon: <SiNextdotjs />,
            title: "Next.js",
            description: "Leveraging server-side rendering and static generation for high-performance web applications."
        },
        {
            icon: <RiJavascriptFill />,
            title: "JavaScript",
            description: "Deep understanding of ES6+ features, async programming, and DOM manipulation."
        },
        {
            icon: <FaLinux />,
            title: "Linux",
            description: "Comfortable with command-line tools, environment configuration, and server management."
        }
    ]

    return (
        <div className={styles.SpecialistContent}>
            <h2 className={styles.Title}>Technologies I Master</h2>
            <div className={styles.Grid}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.Card}>
                        <div className={styles.IconWrapper}>{tech.icon}</div>
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}