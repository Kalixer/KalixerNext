import Link from 'next/link'
import styles from './AnimButton.module.sass'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

interface AnimButtonProps {
    title: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const AnimButton = ({ title, href, onClick, className = '' }: AnimButtonProps) => {
    const content = (
        <span className={styles.AnimButton__Content}>
            <span className={styles.AnimButton__Text}>{title}</span>
            <HiOutlineArrowNarrowRight className={styles.AnimButton__Icon} />
        </span>
    )

    const combinedClass = `${styles.AnimButton} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={combinedClass}>
                {content}
            </Link>
        )
    }

    return (
        <button type='button' className={combinedClass} onClick={onClick}>
            {content}
        </button>
    )
}
