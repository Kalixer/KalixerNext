"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { scrollToTop } from 'app/utils/scrollToTop'
import { useTheme } from 'app/context/ThemeContext'
import { useLanguage } from 'app/context/LanguageContext'
import styles from './Header.module.sass'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { language, toggleLanguage, t } = useLanguage()

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
                            <li className={styles.Header__NavItem}>
                                <Link href='/about' onClick={() => { closeMenu(); scrollToTop(); }}>
                                    {t.header.about}
                                </Link>
                            </li>
                            <li className={styles.Header__NavItem}>
                                <Link href='/blog' onClick={() => { closeMenu(); scrollToTop(); }}>
                                    {t.header.blog}
                                </Link>
                            </li>
                            <li className={styles.Header__NavItem}>
                                <Link href='/hobbies' onClick={() => { closeMenu(); scrollToTop(); }}>
                                    {t.header.hobbies}
                                </Link>
                            </li>
                            <li className={styles.Header__NavItem}>
                                <Link href='/portfolio' onClick={() => { closeMenu(); scrollToTop(); }}>
                                    {t.header.portfolio}
                                </Link>
                            </li>
                            <li className={styles.Header__NavItem}>
                                <a href="mailto:contact@kalixer.com">{t.header.contact}</a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className={styles.Header__LangToggle}
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                    >
                        {language === 'es' ? 'ES' : 'EN'}
                    </button>

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