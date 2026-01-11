import styles from './AnimButton.module.sass'

import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const AnimButton = (data) => {
    return (
        <>
            <button type='button' className={styles.AnimButton}>
                <p>{data.title}</p>
                <HiOutlineArrowNarrowRight className={styles.AnimButton_icon}/>
            </button>
        </>
    )
}