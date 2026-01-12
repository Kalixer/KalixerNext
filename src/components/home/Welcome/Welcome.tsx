"use client"
import { AnimButton } from "app/shared/AnimButton";
import { useLanguage } from "app/context/LanguageContext";
import styles from './Welcome.module.sass';

export const Welcome = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.Welcome}>
            <div className={styles.Welcome__Background}>
                <div className={styles.Welcome__Overlay} />
            </div>

            <div className={styles.Welcome__Content}>
                <span className={styles.Welcome__Subtitle}>{t.welcome.subtitle}</span>
                <h1 className={styles.Welcome__Title}>
                    {t.welcome.title_start} <span className={styles.Welcome__Highlight}>{t.welcome.title_highlight}</span>
                </h1>

                <p className={styles.Welcome__Description}>
                    {t.welcome.description}
                </p>

                <div className={styles.Welcome__Actions}>
                    <AnimButton title={t.welcome.cta_work} href="/portfolio" />
                    <AnimButton title={t.welcome.cta_contact} href="mailto:contact@kalixer.com" />
                </div>
            </div>
        </section>
    )
}