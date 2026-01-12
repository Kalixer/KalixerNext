"use client"
import { FaLinux, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from 'react-icons/ri';
import { SiNextdotjs } from "react-icons/si";
import { useLanguage } from "app/context/LanguageContext";
import styles from './SpecialistContent.module.sass'

export function SpecialistContent() {
    const { t } = useLanguage();

    const technologies = [
        {
            icon: <FaReact />,
            ...t.specialist.items.react
        },
        {
            icon: <SiNextdotjs />,
            ...t.specialist.items.next
        },
        {
            icon: <RiJavascriptFill />,
            ...t.specialist.items.js
        },
        {
            icon: <FaLinux />,
            ...t.specialist.items.linux
        }
    ]

    return (
        <div className={styles.SpecialistContent}>
            <h2 className={styles.Title}>{t.specialist.title}</h2>
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