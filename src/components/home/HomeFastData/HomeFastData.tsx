import styles from './HomeFastData.module.sass'

import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";



import { PiMusicNotesMinusBold } from "react-icons/pi";


export const HomeFastData = () => {

    const info = [
        {
            icon: <FaLaptopCode/>,
            title: 'Years of study',
            desc: `Since 2020 I've been studying on my own programming and how to make websites`,
        },
        {
            icon: <FaCode/>,
            title: 'Technologies',
            desc: `I'm competent with techologies like React.js, Next.js, JavaScript and Git while I still expand my knowledge`,
        },
        {
            icon: <FaCogs/>,
            title: 'Projects',
            desc: `"Better done that perfect" says the quote. I've made some projects on my own for myself and for established companies.`,
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