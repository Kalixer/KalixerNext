import { Welcome } from 'app/components/home/Welcome'
import { HomeAbout } from "app/components/home/HomeAbout";

import styles from './page.module.sass'
import { AboutPageImages } from 'app/components/home/AboutPageImages';
import { WhatDoIDo } from 'app/components/home/WhatDoIDo';

export default function Home() {
  return (
    <div className={styles.AboutPage}>
        <Welcome/>
        <section>
            <HomeAbout/>
            <AboutPageImages/>
            <WhatDoIDo/>
            {/* <AboutEnd/> */}
        </section>
    </div>
  );
}
