import { AboutBoxes } from './AboutBoxes/AboutBoxes'
import styles from './AboutEnd.module.sass'

const message = `These are the areas of my life, at least the ones that I don't mind sharing`
export function AboutEnd() {
    return(
        <>
            <div className={styles.AboutEnd}>
                <div className={styles.AboutEnd__TitleDesc}>
                    <h1>Who I am?</h1>
                    <p>{message}</p>
                </div>
                <AboutBoxes/>
            </div>
        </>
    )
}