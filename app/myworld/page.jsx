'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Section from '../components/Section';
import Footer from '../components/Footer/Footer1';
import Section02 from '../components/Section02';

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <div className='h-screen'></div>
      <Section02/>
      
      <Footer />

    </main>
  );
}