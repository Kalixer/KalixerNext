import styles from './HomeEducation.module.sass'
import { PiBriefcase, PiGraduationCap } from "react-icons/pi";

interface ExperienceItem {
    role: string;
    institution: string;
    date: string;
    description: string;
}

export const HomeEducation = () => {

    const experienceData: ExperienceItem[] = [
        {
            role: "Senior Front-End Developer",
            institution: "Tech Solutions Inc.",
            date: "2023 - Present",
            description: "Leading the frontend team in building scalable web applications using Next.js and React. Focusing on performance optimization and design system implementation."
        },
        {
            role: "Web Developer",
            institution: "Creative Agency",
            date: "2021 - 2023",
            description: "Developed responsive websites and landing pages for diverse clients. Collaborated closely with designers to ensure pixel-perfect implementation."
        }
    ];

    const educationData: ExperienceItem[] = [
        {
            role: "BS Computer Science",
            institution: "University of Technology",
            date: "2017 - 2021",
            description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with Honors."
        },
        {
            role: "Full Stack Certification",
            institution: "Online Academy",
            date: "2020",
            description: "Intensive bootcamp focused on MERN stack development, API design, and modern deployment strategies."
        }
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
                        Journey & <span className={styles.HomeEducation__Highlight}>Growth</span>
                    </h2>
                    <p className={styles.HomeEducation__Subtitle}>
                        A path defined by continuous learning, professional challenges, and a passion for creating exceptional digital experiences.
                    </p>
                </div>

                <div className={styles.HomeEducation__Grid}>
                    <div className={styles.HomeEducation__Column}>
                        <h3 className={styles.HomeEducation__ColumnTitle}>
                            <PiBriefcase /> <span>Experience</span>
                        </h3>
                        <div className={styles.HomeEducation__List}>
                            {experienceData.map(renderCard)}
                        </div>
                    </div>

                    <div className={styles.HomeEducation__Column}>
                        <h3 className={styles.HomeEducation__ColumnTitle}>
                            <PiGraduationCap /> <span>Education</span>
                        </h3>
                        <div className={styles.HomeEducation__List}>
                            {educationData.map(renderCard)}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
