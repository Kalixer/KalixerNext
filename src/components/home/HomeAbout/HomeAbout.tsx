"use client"
import styles from './HomeAbout.module.sass'
import Image from 'next/image'
import { AnimButton } from 'app/shared/AnimButton'
import { useLanguage } from "app/context/LanguageContext";

export const HomeAbout = () => {
    const { t } = useLanguage();
    const imageSrc = 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1280&q=80'

    return (
        <section className={styles.HomeAbout}>
            <div className={styles.HomeAbout__Container}>

                <div className={styles.HomeAbout__ImageWrapper}>
                    <div className={styles.HomeAbout__Legend}>
                        <p>Curiosity &bull; Growth &bull; Creation</p>
                    </div>
                    <figure className={styles.HomeAbout__Figure}>
                        <Image
                            src={imageSrc}
                            width={600}
                            height={800}
                            alt="Workspace setup"
                            className={styles.HomeAbout__Image}
                            priority
                        />
                    </figure>
                </div>

                <div className={styles.HomeAbout__Content}>
                    <div className={styles.HomeAbout__Header}>
                        <h2 className={styles.HomeAbout__Title}>{t.homeAbout.title}</h2>
                        <a href="mailto:al.caceres.ag72@gmail.com" className={styles.HomeAbout__Email}>al.caceres.ag72@gmail.com</a>
                    </div>

                    <div className={styles.HomeAbout__Text}>
                        <p>
                            {t.homeAbout.description}
                        </p>
                        <p>
                            I enjoy building clean, intuitive interfaces and constantly challenging myself to learn, improve, and solve problems creatively.
                        </p>
                        <p>
                            Working on real-world projects for companies like Solve Ltda. and TopScan has helped me grow professionally and adapt to real development environments.
                        </p>
                    </div>

                    <div className={styles.HomeAbout__Actions}>
                        <AnimButton title="More About Me" href="/about" />
                    </div>
                </div>

            </div>
        </section>
    )
}