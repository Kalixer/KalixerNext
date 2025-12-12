import styles from './HomeFastData.module.sass'

import { PiMusicNotesMinusBold } from "react-icons/pi";


export const HomeFastData = () => {

    const info = [
        {
            icon: <PiMusicNotesMinusBold/>,
            title: 'Título',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quis voluptas ducimus quod aspernatur nesciunt',
        },
        {
            icon: <PiMusicNotesMinusBold/>,
            title: 'Título',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quis voluptas ducimus quod aspernatur nesciunt',
        },
        {
            icon: <PiMusicNotesMinusBold/>,
            title: 'Título',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quis voluptas ducimus quod aspernatur nesciunt',
        },
    ]

    const componentsItem = info.map((item) => {
        return(
            <div className={styles.HomeFastData__Container__Item}>
                {item.icon}
                <h2>{item.title}</h2>
                <h3>{item.desc}</h3>
            </div>
        )
    })


    return (
        <div className={styles.HomeFastData}>
            <div className={styles.HomeFastData__Container}>
                {componentsItem}
            </div>

        </div>
    )
}