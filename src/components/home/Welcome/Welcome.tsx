// import Image from 'next/image'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from './Welcome.module.sass'
import Image from "next/image";
import { AnimButton } from "app/shared/AnimButton";

export const Welcome = () => {
    const background = 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
    return(
        <div className={styles.Welcome}>
            <Image
                src={background} 
                height={100}
                width={100}
                alt="" 
            />
            <div className={styles.Welcome__Container}>
                <div className={styles.Welcome__Container__message}>
                    <h3>Front-End Developer</h3>
                    <h1>Hi, I'm Alejandro Cáceres</h1>
                    {/* <p className={styles.Welcome__Container__message_p}>
                        {`I am a FrontEnd developer with skills in technologies like HTML, CSS, JS and frameworks like React.js and Next.js.
                        Although most of my focus has been on studying, I have experience on real world projects for real companies like Solve ltda. and TopScan.
                        {Also this website was built in React and migrated to Next.js as one of my portfolio projects.`}
                    </p> */}

                    <p>
                        I build modern, responsive web interfaces using HTML, CSS, JavaScript, React, and Next.js. <br />
                        While most of my journey has been focused on continuous learning, I’ve also worked on real-world projects for companies like Solve Ltda. and TopScan.
                    </p>
                    <p>
                        This website itself is part of my portfolio: originally built with React and later migrated to Next.js as a practical learning project.
                    </p>
                </div>
                <div className={styles.Welcome__Container__Inputs}>
                    <AnimButton title="CV" />
                    <AnimButton title="About me" />
                </div>
            </div>
        </div>
    )
}