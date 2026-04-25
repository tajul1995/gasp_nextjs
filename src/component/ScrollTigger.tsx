/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

export default function ScrollTriggerAnimation() {
  const mainRef=useRef<any>(null)
 
  useGSAP(() => {
    const boxes=gsap.utils.toArray(mainRef.current.children)
    if(boxes.length>0){
      boxes.forEach((box:any)=>{
        gsap.to(box,{
          x: 100*boxes.indexOf(box),
          rotation: 360,
          duration: 0.5,
          borderRadius: "50%",
          ease: "power1.inOut",
          scrollTrigger:{
            trigger:box,
            start:"bottom bottom",
            end:"top 100%",
            
            
             markers:true,
            //  toggleActions:"play none none reverse",
              toggleClass:"active",
            scrub:true
   
        }})
      });
    }
  }, {scope:mainRef});
  return (
    <>
    <div className="h-[100vh] bg-amber-200"></div>
    <div className="h-[100vh] bg-amber-700"></div>
    < div ref={mainRef}   id="main">
      
     <div className="box w-40 h-44 bg-green-400"></div>
      <div className="box w-40 h-44 bg-yellow-400 my-3"></div>
      <div className="box w-40 h-44 bg-green-400"></div>
      </div>
     
    
    </>
    
     

     
      
    
  )};

