import Image from 'next/image'
import styles from './HomeExperience.module.sass'
import { ExperienceContent } from './ExperienceContent'

export function HomeExperience() {

    const imagen = 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <div className={styles.HomeExperience}>
            <div className={styles.HomeExperience__ContentContainer}>

                <div className={styles.HomeExperience__ContentContainer_ContentSec}>
                    <ExperienceContent/>
                </div>


                <div className={styles.HomeExperience__ContentContainer_ImageSec}>
                    <figure className={styles.HomeExperience__ContentContainer_ImageSec_fig}>
                        <Image
                            className={styles.HomeExperience__ContentContainer_ImageSec_fig_img}
                            height={100}
                            width={100}
                            src={imagen}
                            alt=''
                            unoptimized
                        />
                    </figure>
                </div>

            </div>
        </div>
    )
}


