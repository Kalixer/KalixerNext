import { Welcome } from 'app/components/home/Welcome'
import { HomeAbout } from "app/components/home/HomeAbout";

import styles from './page.module.sass'

export default function Home() {
  return (
    <div className={styles.AboutPage}>
        <Welcome/>
        <section>
            <HomeAbout/>
            {/* <AboutPageImages/>
            <WhatDoIDo/>
            <AboutEnd/> */}
        </section>
    </div>
  );
}
