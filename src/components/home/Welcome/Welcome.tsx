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
                    I Code with <span className={styles.Welcome__Highlight}>Passion</span>
                </h1>

                <p className={styles.Welcome__Description}>
                    Hi, I'm Alejandro! I'm a developer who cares deeply about the user experience. I build modern, responsive, and accessible websites using React and Next.js. My goal is to make the web a friendlier place, one line of code at a time.
                </p>

                <div className={styles.Welcome__Actions}>
                    <AnimButton title="See My Work" href="/portfolio" />
                    <AnimButton title="Let's Chat" href="mailto:contact@kalixer.com" />
                </div>
            </div>
        </section>
    )
}