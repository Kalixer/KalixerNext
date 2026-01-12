import { AnimButton } from "app/shared/AnimButton";
import styles from './Welcome.module.sass';

export const Welcome = () => {
    return (
        <section className={styles.Welcome}>
            <div className={styles.Welcome__Background}>
                <div className={styles.Welcome__Overlay} />
            </div>

            <div className={styles.Welcome__Content}>
                <span className={styles.Welcome__Subtitle}>Front-End Developer</span>
                <h1 className={styles.Welcome__Title}>
                    Building Digital <span className={styles.Welcome__Highlight}>Experiences</span>
                </h1>

                <p className={styles.Welcome__Description}>
                    I'm Alejandro Cáceres. I build modern, responsive web interfaces using React and Next.js.
                    Focused on performance, accessibility, and premium aesthetics.
                </p>

                <div className={styles.Welcome__Actions}>
                    <AnimButton title="View Work" href="/portfolio" />
                    <AnimButton title="Contact Me" href="mailto:contact@kalixer.com" />
                </div>
            </div>
        </section>
    )
}