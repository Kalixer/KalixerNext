import styles from './HomeEducation.module.sass'
import { PiBriefcase, PiGraduationCap, PiTrendUp } from "react-icons/pi";

interface ExperienceItem {
    role: string;
    institution: string;
    date: string;
    description: string;
}

export const HomeEducation = () => {

    const experienceData: ExperienceItem[] = [
        {
            role: "Freelance Web Developer",
            institution: "Self-Employed",
            date: "2023 - Present",
            description: "Developing custom landing pages and websites for small business clients. Focusing on responsive design, modern UI patterns, and delivering polished, user-friendly interfaces."
        },
        {
            role: "Business Manager",
            institution: "Small Business Venture",
            date: "2021 - 2023",
            description: "Managed daily operations including sales, customer service, and logistics. Improved process efficiency and maintained high customer satisfaction standards."
        },
        {
            role: "Logistics Assistant",
            institution: "Engineering Company",
            date: "2019 - 2021",
            description: "Supported the logistics department with inventory tracking, shipment coordination, and administrative organization."
        }
    ];

    const educationData: ExperienceItem[] = [
        {
            role: "Front-End Development",
            institution: "Platzi Academy",
            date: "2022 - Present",
            description: "Comprehensive coursework in HTML, CSS, JavaScript, React, and Next.js. Emphasis on modern web standards, component-based architecture, and best practices."
        },
        {
            role: "English Language",
            institution: "Platzi Academy",
            date: "Ongoing",
            description: "Continuous improvement of written and spoken English skills to effectively communicate in professional international environments."
        }
    ];

    const growthData: ExperienceItem[] = [
        {
            role: "Technical Mastery",
            institution: "Ongoing Learning",
            date: "Current",
            description: "Deepening knowledge in TypeScript, Server Side Rendering, and scalable architecture to write robust, maintainable code."
        },
        {
            role: "Building Projects",
            institution: "Practical Application",
            date: "Current",
            description: "Applying new concepts immediately by building real-world applications and experimenting with new technologies."
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
                        A path defined by continuous learning, professional adaptability, and a focused drive to grow as a developer.
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

                    <div className={styles.HomeEducation__Column}>
                        <h3 className={styles.HomeEducation__ColumnTitle}>
                            <PiTrendUp /> <span>Growth</span>
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
