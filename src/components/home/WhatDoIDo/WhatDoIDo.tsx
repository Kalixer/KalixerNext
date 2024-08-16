import styles from './WhatDoIDo.module.sass'

const macro_message = `"A buman being should be able to [do a lot of things]. Specialization is for insects." - Robert A. Heinlein`

const studies_des = `I've been studing by myself Front-End development, Python and English`
const exp_des = 'This website, Dice roller website, Kalixtore.us'
const hobbies_des = 'Drawing, reading, film appreciation, videogames'
const blog_des = 'A few entries to print on "paper" my thoughts'

export function WhatDoIDo() {
    return(
        <>
            <div className={styles.WhatDoIDo}>
                <div className={styles.WhatDoIDo__macroLeft}>
                    <div className={styles.WhatDoIDo__macroLeft_macBox}>
                        {/* <p>WHAT DO I DO</p> */}
                        <p>{macro_message}</p>
                    </div>
                </div>
                <div className={styles.WhatDoIDo__macroRight}>
                    <div className={styles.WhatDoIDo__macroRight_doBox}>
                        <h1>Studies</h1>
                        <p>{studies_des}</p>
                    </div>
                    <div className={styles.WhatDoIDo__macroRight_doBox}>
                        <h1>Experience and skills</h1>
                        <p>{exp_des}</p>
                    </div>
                    <div className={styles.WhatDoIDo__macroRight_doBox}>
                        <h1>Hobbies</h1>
                        <p>{hobbies_des}</p>
                    </div>
                    <div className={styles.WhatDoIDo__macroRight_doBox}>
                        <h1>Blog</h1>
                        <p>{blog_des}</p>
                    </div>

                </div>
            </div>
        </>
    )
}