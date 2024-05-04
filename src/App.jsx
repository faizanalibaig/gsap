import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

function App() {

  const ref=useRef()

  useGSAP(()=>{
    gsap.from(ref.current,{
      rotate:360,
      scale:0,
      duration:1,
      delay:0.5,
      opacity:0
    })
  })

  return (
    <main className='main'>
       <section id='container'>
          <div ref={ref} id='first'></div>
          <div id='second'></div>
       </section>

       <section ref={ref} id='container'>
          <div  id='first'></div>
          <div id='second'></div>
       </section>
    </main>
  )
}

export default App
