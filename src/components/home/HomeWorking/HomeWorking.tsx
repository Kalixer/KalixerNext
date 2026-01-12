"use client"
import styles from './HomeWorking.module.sass'
import { PiChatCircleText, PiRocketLaunch, PiScan, PiHandshake } from "react-icons/pi";

export const HomeWorking = () => {
    const points = [
        {
            icon: <PiChatCircleText />,
            title: "Clear Communication",
            description: "I believe in effective collaboration. I keep everyone in the loop, listen actively, and value honest feedback."
        },
        {
            icon: <PiRocketLaunch />,
            title: "Continuous Learning",
            description: "Technology moves fast, and so do I. I'm constantly upskilling to bring modern, efficient solutions to the table."
        },
        {
            icon: <PiScan />,
            title: "Attention to Detail",
            description: "Great design lies in the details. I strive for pixel-perfect implementation and smooth interactions in every project."
        },
        {
            icon: <PiHandshake />,
            title: "Reliability",
            description: "I take ownership of my tasks. You can count on me to be consistent, transparent, and dedicated to the end goal."
        }
    ];

    return (
        <section className={styles.HomeWorking}>
            <div className={styles.HomeWorking__Container}>
                <h2 className={styles.HomeWorking__Title}>
                    My Way of <span className={styles.HomeWorking__Highlight}>Working</span>
                </h2>
                <p className={styles.HomeWorking__Subtitle}>
                    More than just code, I bring a proactive mindset and a commitment to quality in everything I do.
                </p>

                <div className={styles.HomeWorking__Grid}>
                    {points.map((item, index) => (
                        <div key={index} className={styles.HomeWorking__Card}>
                            <div className={styles.HomeWorking__Icon}>
                                {item.icon}
                            </div>
                            <h3 className={styles.HomeWorking__CardTitle}>{item.title}</h3>
                            <p className={styles.HomeWorking__Description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
