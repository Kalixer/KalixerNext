import styles from './HomeAbout.module.sass'

export const HomeAbout = () => {
    const lorem1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, unde ipsa natus ad enim dolore eveniet tempora officia dolor accusamus debitis aliquid nostrum et molestiae nemo recusandae quis similique.
    Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!`
    const lorem2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, unde ipsa natus ad enim dolore eveniet tempora officia dolor accusamus debitis aliquid nostrum et molestiae nemo recusandae quis similique.
    Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!
    Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!`

    return (
        <div className={styles.HomeAbout}>
            <div className={styles.HomeAbout__introduction}>
                <div className={styles.HomeAbout__introduction_titleSection}>
                    <h1>About me</h1>
                </div>
                <div className={styles.HomeAbout__introduction_description}>
                    <div className={styles.HomeAbout__introduction_description_message1}>
                        <p>A man <br />A project <br />A begining</p>
                    </div>
                    <div className={styles.HomeAbout__introduction_description_message2}>
                        <p>{lorem1}</p>
                        <p>{lorem2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}