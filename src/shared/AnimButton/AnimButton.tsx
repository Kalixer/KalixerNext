import Link from 'next/link'
import styles from './AnimButton.module.sass'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

interface AnimButtonProps {
    title: string;
    href?: string;
    onClick?: () => void;
}

export const AnimButton = ({ title, href, onClick }: AnimButtonProps) => {
    const content = (
        <>
            <p>{title}</p>
            <HiOutlineArrowNarrowRight className={styles.AnimButton_icon} />
        </>
    )

    if (href) {
        return (
            <Link href={href} className={styles.AnimButton}>
                {content}
            </Link>
        )
    }

    return (
        <button type='button' className={styles.AnimButton} onClick={onClick}>
            {content}
        </button>
    )
}
