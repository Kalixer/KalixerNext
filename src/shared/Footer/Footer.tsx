import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.sass';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__Container}>
                <div className={styles.Footer__Brand}>
                    <Link href="/" className={styles.Footer__Logo}>Kalixer</Link>
                    <p>Building digital experiences with passion and precision.</p>
                </div>

                <div className={styles.Footer__Links}>
                    <div className={styles.Footer__Column}>
                        <h3>Navigation</h3>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/hobbies">Hobbies</Link>
                    </div>

                    <div className={styles.Footer__Column}>
                        <h3>Connect</h3>
                        <div className={styles.Footer__Socials}>
                            <a href="https://github.com/kalixer" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://linkedin.com/in/kalixer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://twitter.com/kalixer" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                            <a href="mailto:contact@kalixer.com" aria-label="Email"><FaEnvelope /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.Footer__Bottom}>
                <p>&copy; {currentYear} Alejandro Cáceres. All rights reserved.</p>
            </div>
        </footer>
    )
}
