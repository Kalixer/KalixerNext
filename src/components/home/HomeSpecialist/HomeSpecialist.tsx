import styles from './HomeSpecialist.module.sass'
import { SpecialistContent } from './SpecialistContent/SpecialistContent'

export function HomeSpecialist() {
    return (
        <section className={styles.HomeSpecialist}>
            <SpecialistContent />
        </section>
    )
}
