import styles from './HomeAbout.module.sass'
import Image from 'next/image'

export const HomeAbout = () => {

    const content = [
        {
            index: 0,
            paragraphN: 1,
            contentEng: `I'm a self-taught FrontEnd developer who started in the world of development simply because I've always loved computers, when I discoverd programming I thought "that's what I want to do". Now I enjoy turning imagination into the real world. For me, every project brings a new challeng and a way to answer two questions: "What can I learn today?" and "How can I improve mi creativity and my problem-solving skills?" Every time I choose to answer those questions and seeing the results of my work, that keeps me motivated to improve every day.`,
        },
        {
            index: 1,
            paragraphN: 2,
            contentEng: `I approach development with intention: understand the problem, look beyond the code, and deliver solutions that feel clean, intuitive, and meaningful. Working on real projects for companies like Solve Ltda. and TopScan has taught me the value of adaptation, collaboration, and pushing past my current knowledge to build software that works in real-world environments.`,
        },
        {
            index: 2,
            paragraphN: 3,
            contentEng: `Outside of work, I am still a lifelong learner. It's part of who I am to explore, learn and developing skills that resonate with me and my personality - whether it's learning to play instruments like piano and the guitar or reading books that deepen my understanding of the things that catch my interest. For me, continuous learning is not part of the job; it's part of my life.`,
        },
        {
            index: 3,
            paragraphN: 4,
            contentEng: `Currently, my goal is to grow as a more capable and versatile developer and expand my knowledge and skills until I can condifently become a Full-Stack Developer and build projects based on wat I am capable of today while still being curious about new things.`,
        },
    ]

    const imageSrc = 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=1'
    // const imageSrc = 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <div className={styles.HomeAbout}>

            <figure className={styles.HomeAbout__ImageCont}>
                <Image 
                    src={imageSrc}
                    width={500}
                    height={500}
                    alt="Image of a computer representing my conection to them"
                    className={styles.HomeAbout__ImageCont_Image}
                />
            </figure>


            <div className={styles.HomeAbout__content}>

                <div className={styles.HomeAbout__content__legend}>
                    <p>Curiosity <br />Growth <br />Creation</p>
                </div>


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

                </div>
                
            </div>
        </div>
    )
}