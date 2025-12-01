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
            <div className={styles.Welcome__Container}>
                <div className={styles.Welcome__Container__message}>
                    <h3>FrontEnd Dev</h3>
                    <h1>I'm Alejandro Cáceres</h1>
                    {/* <p className={styles.Welcome__Container__message_p}>
                        {`I am a FrontEnd developer with skills in technologies like HTML, CSS, JS and frameworks like React.js and Next.js.
                        Although most of my focus has been on studying, I have experience on real world projects for real companies like Solve ltda. and TopScan.
                        {Also this website was built in React and migrated to Next.js as one of my portfolio projects.`}
                    </p> */}

                    <p>I am a FrontEnd developer with skills in techologies like HTML, CSS, JS and frameworks like React.js and Next.js <br /> 
                    Although most of my focus has been on studying, I have experience on real world projects for real companies like Solve ltda. and TopScan. <br /> 
                    Also this website was built in React and migrated to Nexts.js as one of my portfolio projects
                    </p>
                </div>
            </div>
        </div>
    )
}