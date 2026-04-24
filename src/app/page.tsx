"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
   const tl= gsap.timeline({ repeat: -1, yoyo: true });
  useGSAP(() => {
    // gsap.to(".box", {
    //   x: 800,
    //   rotation: 360,
    //   duration: 2,
    //   ease: "power1.inOut",
    //   repeat: -1,
    //   yoyo: true,
    // });
    //  gsap.fromTo(".box", { x: 0, rotation: 0 }, { x: 800, rotation: 360, duration: 2, ease: "power1.inOut", repeat: -1, yoyo: true ,borderRadius: "50%",delay: 1}); 
   
    tl.to(".box", { x: 800, rotation: 360, duration: 2, ease: "power1.inOut" })
      .to(".box", { borderRadius: "50%", duration: 2, ease: "power1.inOut" ,scale:2,y:400,delay:1},"-=1" )
      // .to(".box", { backgroundColor: "red", duration: 1, ease: "power1.inOut" }, "-=1");
    
    
    
    }, []);
    const handleAnimate = () => {
      if(tl.paused()){tl.play()}else{tl.pause()
      }
    }
  return (
    <div >
     <div className="box w-40 h-44 bg-green-400">
     

     </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleAnimate}>Animate</button>
    </div>
  );
}
