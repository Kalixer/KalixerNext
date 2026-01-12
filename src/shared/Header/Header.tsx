"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { scrollToTop } from 'app/utils/scrollToTop'
import { useTheme } from 'app/context/ThemeContext'
import styles from './Header.module.sass'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={`${styles.Header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.open : ''}`}>
            <div className={styles.Header__Container}>
                <div className={styles.Header__Logo}>
                    <Link href='/' onClick={() => { closeMenu(); scrollToTop(); }}>
                        Kalixer
                    </Link>
                </div>

                <div className={styles.Header__ConfigWrapper}>
                    <nav className={`${styles.Header__Nav} ${menuOpen ? styles.active : ''}`}>
                        <ul className={styles.Header__NavList}>
                            {['About', 'Blog', 'Hobbies', 'Portfolio'].map((item) => (
                                <li key={item} className={styles.Header__NavItem}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        onClick={() => { closeMenu(); scrollToTop(); }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li className={styles.Header__NavItem}>
                                <a href="mailto:contact@kalixer.com">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className={styles.Header__ThemeToggle}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </button>

                    <button
                        className={styles.Header__MenuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>
        </header>
    )
}