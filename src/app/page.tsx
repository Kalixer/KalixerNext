import { Welcome } from 'app/components/home/Welcome'
import { HomeAbout } from "app/components/home/HomeAbout";

export default function Home() {
  return (
    <div className='AboutPage'>
        <Welcome/>
        <section className='content'>
            <HomeAbout/>
            {/* <AboutPageImages/>
            <WhatDoIDo/>
            <AboutEnd/> */}
        </section>
    </div>
  );
}
