"use client"
import styles from './HomeCTA.module.sass'
import { AnimButton } from "app/shared/AnimButton";
import { useLanguage } from "app/context/LanguageContext";

export const HomeCTA = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.HomeCTA}>
            <div className={styles.HomeCTA__Container}>
                <h2 className={styles.HomeCTA__Title}>
                    {t.cta.title_start} <span className={styles.HomeCTA__Highlight}>{t.cta.title_highlight}</span>
                </h2>
                <p className={styles.HomeCTA__Description}>
                    {t.cta.description}
                </p>
                <div className={styles.HomeCTA__Action}>
                    <AnimButton title={t.cta.button} href="mailto:contact@kalixer.com" />
                </div>
            </div>
        </section>
    )
}
