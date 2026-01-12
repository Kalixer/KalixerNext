"use client"
import styles from './ExperienceContent.module.sass'
import { PiBuildingApartmentLight, PiEngineBold, PiHammer } from "react-icons/pi";
import { AnimButton } from "app/shared/AnimButton";
import { useLanguage } from "app/context/LanguageContext";

export function ExperienceContent() {
    const { t } = useLanguage();

    const icons = [
        <PiBuildingApartmentLight key="solve" />,
        <PiEngineBold key="topscan" />,
        <PiHammer key="kalixer" />
    ];

    return (
        <div className={styles.ExperienceContent}>
            <h2 className={styles.ExperienceContent__Title}>{t.experience.title}</h2>

            <ul className={styles.ExperienceContent__List}>
                {t.experience.items.map((item, index) => (
                    <li key={index} className={styles.ExperienceContent__Item}>
                        <div className={styles.ExperienceContent__Item_Icon}>
                            {icons[index] || <PiHammer />}
                        </div>
                        <div className={styles.ExperienceContent__Item_Text}>
                            <h3>{item.technology}</h3>
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className={styles.ExperienceContent__Actions}>
                <AnimButton title={t.experience.cta_view_all} href="/portfolio" />
            </div>
        </div>
    )
}