import Image from 'next/image'
import styles from './HomeSpecialist.module.sass'

export function HomeSpecialist() {

    const imagen = 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <div className={styles.HomeSpecialist}>
            <div className={styles.HomeSpecialist__ContentContainer}>

                <div className={styles.HomeSpecialist__ContentContainer_ContentSec}></div>


                <div className={styles.HomeSpecialist__ContentContainer_ImageSec}>
                    <figure className={styles.HomeSpecialist__ContentContainer_ImageSec_fig}>
                        <Image
                            className={styles.HomeSpecialist__ContentContainer_ImageSec_fig_img}
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