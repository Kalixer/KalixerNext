import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import styles from './HomeAbout.module.sass'
import Image from 'next/image'

export const HomeAbout = () => {

    const content = [
        {
            index: 0,
            paragraphN: 1,
            contentEng: `I'm a self-taught Front-End developer driven by curiosity and a passion for turning ideas into real, functional web experiences.`,
        },
        {
            index: 1,
            paragraphN: 2,
            contentEng: `I enjoy building clean, intuitive interfaces and constantly challenging myself to learn, improve, and solve problems creatively.`,
        },
        {
            index: 2,
            paragraphN: 3,
            contentEng: `Working on real-world projects for companies like Solve Ltda. and TopScan has helped me grow professionally and adapt to real development environments.`
        },
        // {
        //     index: 3,
        //     paragraphN: 4,
        //     contentEng: `Currently, my goal is to grow as a more capable and versatile developer and expand my knowledge and skills until I can condifently become a Full-Stack Developer and build projects based on wat I am capable of today while still being curious about new things.`,
        // },
    ]

    const imageSrc = 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1'
    // const imageSrc = 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <div className={styles.HomeAbout}>



            <div className={styles.HomeAbout__content}>

                <div className={styles.HomeAbout__content__legend}>
                    <p>Curiosity <br />Growth <br />Creation</p>
                </div>

                <figure className={styles.HomeAbout__content__ImageCont}>
                    <Image 
                        src={imageSrc}
                        width={500}
                        height={500}
                        alt="Image of a computer representing my conection to them"
                        className={styles.HomeAbout__content__ImageCont_Image}
                    />
                </figure>

                <div className={styles.HomeAbout__content_description}>

                    <div className={styles.HomeAbout__content_description_titleSection}>
                        <h1>About</h1>
                        <h3>al.caceres.ag72@gmail.com</h3>
                    </div>

                    <div className={styles.HomeAbout__content_description_message}>
                        {
                            content.map((element) => {
                                const paragraph = <p className={styles.HomeAbout__content_description_message_p}>{element.contentEng}</p>

                                return paragraph
                            })
                        }
                    </div>
                    <button type='button' className={styles.HomeAbout__content_description_button}>
                        <p>About me</p>
                        <HiOutlineArrowNarrowRight className={styles.Welcome__Container__Inputs__button_icon}/>
                    </button>

                </div>
                
            </div>
        </div>
    )
}