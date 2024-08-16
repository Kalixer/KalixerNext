"use client"
import { useState } from 'react'
import Link from 'next/link'

import { scrollToTop } from 'app/utils/scrollToTop'

import styles from './Header.module.sass'
import { transform } from 'next/dist/build/swc'

const contact_white = <img src="https://img.icons8.com/small/32/FFFFFF/user.png"/>
const contact_taupe = <img src="https://img.icons8.com/small/32/988780/user.png"/>

export function Header() {    
    const [colorIcon, setcolorIcon] = useState(contact_white)
    const setTaupe = () => {
        setcolorIcon(contact_taupe)
    }
    const setWhite = () => {
        setcolorIcon(contact_white)
    }

    // let menuStatus = false;

    const [menuOpen, setMenuOpen] = useState(false)
    const [headerSize, setheaderSize] = useState(`8vh`)
    const [displayStatus, setdisplayStatus] = useState('none')

    const toggleMenu = () => {

        if (displayStatus == 'none') {
            setheaderSize(`100vh`)
            setdisplayStatus('flex')
            setMenuOpen(true)
        } else {
            setheaderSize(`8vh`)
            setdisplayStatus('none')
            setMenuOpen(false)
        }
        // console.log("toggle")
    
    }
    const unToggle = () => {
        if (displayStatus != 'none'){
            setheaderSize(`8vh`)
            setdisplayStatus('none')
        }
        console.log("unToggle")
    }



    return(
        <>
            <div className={styles.Header} id="head"
            style={{
                height: `${headerSize}`,
                backgroundColor: menuOpen ? 'rgba(0, 0, 0, 0.8)' : 'transparent'
            }}
            >
                <div className={styles.Header__TopSection}>
                    <button 
                        className={styles.Header__TopSection__MenuResponsive} 
                        onClick={toggleMenu}
                    >
                        <div
                            style={{
                                transform: menuOpen ? 'rotate(35deg)' : 'none',
                                color: menuOpen ? '$taupe' : '#fff'
                                }
                            }></div>
                        <div
                            style={{
                                    opacity: menuOpen ? '0' : '100',
                                }                                
                            }></div>
                        <div
                            style={{
                                    transform: menuOpen ? 'rotate(-35deg)' : 'none',
                                    color: menuOpen ? '$taupe' : '#fff'
                                }
                            }></div>
                    </button>

                    <div className={styles.Header__TopSection_name}>
                        <Link href='/' onClick={unToggle}><p onClick={() => scrollToTop()}>Kalixer</p></Link>
                    </div>

                    <ul className={styles.Header__TopSection_navBar}>
                        <li><Link href='/about' onClick={() => scrollToTop()}>About</Link></li>
                        <li><Link href='/blog' onClick={() => scrollToTop()}>Blog</Link></li>
                        <li><Link href='/hobbies' onClick={() => scrollToTop()}>Hobbies</Link></li>
                        <li><Link href ='/portfolio' onClick={() => scrollToTop()}>Portfolio</Link></li>
                        <li>Contact</li>
                    </ul>

                    <div 
                        className={styles.Header__TopSection__ContactResponsive} 
                        onMouseOver={setTaupe} 
                        onMouseLeave={setWhite}
                    >
                        {colorIcon}
                    </div>

                </div>
                
                <div 
                    className={styles.Header__BottomSection}
                    style={{display: `${displayStatus}`}}
                >
                    <div className={styles.Header__BottomSection_navBox} onClick={toggleMenu}><Link href='/about' onClick={scrollToTop}>About</Link></div>
                    <div className={styles.Header__BottomSection_navBox} onClick={toggleMenu}><Link href='/blog' onClick={scrollToTop}>Blog</Link></div>
                    <div className={styles.Header__BottomSection_navBox} onClick={toggleMenu}><Link href='/hobbies' onClick={scrollToTop}>Hobbies</Link></div>
                    <div className={styles.Header__BottomSection_navBox} onClick={toggleMenu}><Link href ='/portfolio' onClick={scrollToTop}>Portfolio</Link></div>
                    <div className={styles.Header__BottomSection_navBox} onClick={toggleMenu}>Contact</div>
                </div>
            </div>
        </>
    )
}