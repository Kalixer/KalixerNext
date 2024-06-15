// import Image from 'next/image'
import styles from './Welcome.module.sass'

export const Welcome = () => {
    const background = 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
    return(
        <div className={styles.Welcome}>
            <img
                src={background} 
                alt="" 
            />
            <div className={styles.Welcome__message}>
                <h1>Hello There</h1>
            </div>
        </div>
    )
}