import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

function App() {

  const ref=useRef()
  const random=gsap.utils.random(-500,500, 100)

  useGSAP(()=>{
    gsap.to(ref.current,{
      rotate:360,
      scale:0,
      duration:1,
      delay:0.5,
      opacity:0
    })
  }, {scope:'#container'})

  const [button, setButton]=useState(0)

  return (
    <main className='main'>
       <section id='container'>
          <div id='first'></div>
          <div id='second'></div>
       </section>

       <section ref={ref} id='container1'>
          <div  id='first'></div>
          <div id='second'></div>
       </section>

       <button className="move" onClick={()=>{
        gsap.to(".move", {
          x: random,
          y: random,
          duration: 1,
          ease: "power2.inOut"
        });
        console.log(random)
       }}>
         Submit
       </button>
    </main>
  )
}

export default App