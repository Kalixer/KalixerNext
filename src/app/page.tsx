import { Welcome } from 'app/components/home/Welcome'
import { HomeAbout } from "app/components/home/HomeAbout";

import styles from './page.module.sass'
import { AboutPageImages } from 'app/components/home/AboutPageImages';
import { WhatDoIDo } from 'app/components/home/WhatDoIDo';
import { AboutEnd } from 'app/components/home/AboutEnd';
import { HomeFastData } from 'app/components/home/HomeFastData';
import { HomeSpecialist } from 'app/components/home/HomeSpecialist/HomeSpecialist';

export default function Home() {
  return (
    <div className={styles.AboutPage}>
        <Welcome/>
        <HomeFastData />
        <section>
            <HomeAbout/>
            {/* <AboutPageImages/> */}
            <HomeSpecialist/>
            <WhatDoIDo/>
            <AboutEnd/>
        </section>
    </div>
  );
}
