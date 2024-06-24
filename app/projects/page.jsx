'use client';
import { useRef, useEffect } from 'react'

export default function Home() {

  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 600;
  let start;

  useEffect(() => {
    setPath(initialCurve)
    setTimeout( () => {
      requestAnimationFrame(animate)
    }, 500)
  }, [])

  const animate = (timestamp) => {
    if(start === undefined){
      start = timestamp
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
    setPath(newCurve);

    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if(elapsed < duration){
      requestAnimationFrame(animate)
    }
  }

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  }

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  }

  const setPath = (curve) => {
    const width = window.innerWidth
    const height = loaderHeight();
    path.current.setAttributeNS(null, "d",
    `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
    )
  }

  return (
    <main className={'h-screen flex items-center justify-center'}>

      <div className={'w-[80%] text-[2vw] font-space-grotesk text-center'}>
        <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
      </div>

      <div ref={loader} className={'w-full fixed'} style={{ height: 'calc(100vh + 200px)' }}>
        <svg className='w-full h-full'>
          <path stroke='black' strokeWidth='1px' ref={path}></path>
        </svg>
      </div>

    </main>
  )
}