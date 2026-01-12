import styles from './HomeCTA.module.sass'
import { AnimButton } from "app/shared/AnimButton";

export const HomeCTA = () => {
    return (
        <section className={styles.HomeCTA}>
            <div className={styles.HomeCTA__Container}>
                <h2 className={styles.HomeCTA__Title}>
                    Ready to bring your <span className={styles.HomeCTA__Highlight}>ideas to life?</span>
                </h2>
                <p className={styles.HomeCTA__Description}>
                    I'm constantly looking for new challenges and opportunities to grow. Whether you have a project in mind or just want to chat about code, I'd love to hear from you.
                </p>
                <div className={styles.HomeCTA__Action}>
                    <AnimButton title="Let's Connect" href="mailto:contact@kalixer.com" />
                </div>
            </div>
        </section>
    )
}
