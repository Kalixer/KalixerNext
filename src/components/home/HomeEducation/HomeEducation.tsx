"use client"
import styles from './HomeEducation.module.sass'
import { PiBriefcase, PiGraduationCap, PiTrendUp } from "react-icons/pi";
import { useLanguage } from "app/context/LanguageContext";

interface ExperienceItem {
    role: string;
    institution: string;
    date: string;
    description: string;
}

export const HomeEducation = () => {
    const { t } = useLanguage();

    const experienceData: ExperienceItem[] = [
        t.education.items.freelance,
        t.education.items.business,
        t.education.items.logistics
    ];

    const educationData: ExperienceItem[] = [
        t.education.items.platzi_dev,
        t.education.items.platzi_eng
    ];

    const growthData: ExperienceItem[] = [
        t.education.items.growth_tech,
        t.education.items.growth_projects
    ];

    const renderCard = (item: ExperienceItem, index: number) => (
        <div key={index} className={styles.HomeEducation__Card}>
            <div className={styles.HomeEducation__CardHeader}>
                <h4 className={styles.HomeEducation__Role}>{item.role}</h4>
                <span className={styles.HomeEducation__Date}>{item.date}</span>
            </div>
            <h5 className={styles.HomeEducation__Institution}>{item.institution}</h5>
            <p className={styles.HomeEducation__Description}>{item.description}</p>
        </div>
    );

    return (
        <section className={styles.HomeEducation}>
            <div className={styles.HomeEducation__Container}>

                <div className={styles.HomeEducation__Header}>
                    <h2 className={styles.HomeEducation__Title}>
                        {t.education.title_start} <span className={styles.HomeEducation__Highlight}>{t.education.title_highlight}</span>
                    </h2>
                    <p className={styles.HomeEducation__Subtitle}>
                        {t.education.subtitle}
                    </p>
                </div>

                <div className={styles.HomeEducation__Grid}>
                    <div className={styles.HomeEducation__Column}>
                        <h3 className={styles.HomeEducation__ColumnTitle}>
                            <PiBriefcase /> <span>{t.education.cols.experience}</span>
                        </h3>
                        <div className={styles.HomeEducation__List}>
                            {experienceData.map(renderCard)}
                        </div>
                    </div>

                    <div className={styles.HomeEducation__Column}>
                        <h3 className={styles.HomeEducation__ColumnTitle}>
                            <PiGraduationCap /> <span>{t.education.cols.education}</span>
                        </h3>
                        <div className={styles.HomeEducation__List}>
                            {educationData.map(renderCard)}
                        </div>
                    </div>

                    <div className={styles.HomeEducation__Column}>
                        <h3 className={styles.HomeEducation__ColumnTitle}>
                            <PiTrendUp /> <span>{t.education.cols.growth}</span>
                        </h3>
                        <div className={styles.HomeEducation__List}>
                            {growthData.map(renderCard)}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
