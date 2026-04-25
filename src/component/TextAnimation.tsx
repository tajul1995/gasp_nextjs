import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const TextAnimation = () => {
    useGSAP(() => {
        gsap.to(".header",{
            opacity:1,
            y:-20,
            duration:1,
            ease:"power1.inOut",

        })
        gsap.fromTo(".desc",{
            opacity:0,
            y:20,
            duration:1,
            ease:"power1.inOut",
        },{
            opacity:1,
            y:0,
            duration:1,
            ease:"power1.inOut",
            stagger:0.3,
             delay:0.5,
        }
    
    
    )
    },[])
  return (
    <div className="main p-4 mt-9">
        <h1 className="my-3 text-2xl text-amber-700 header opacity-0">header</h1>
        <p className="text-amber-200 desc ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum veritatis voluptatum quos fugit. Molestias quo quia saepe architecto assumenda.</p>
      
    </div>
  )
}

export default TextAnimation
