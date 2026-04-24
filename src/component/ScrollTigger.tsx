/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

export default function ScrollTriggerAnimation() {
  const mainRef=useRef<any>(null)
 
  useGSAP(() => {
    const boxes=gsap.utils.toArray(mainRef.current.children)
    console.log(boxes)
   
  }, []);
  return (
    <div ref={mainRef}   id="main">
     <div className="box w-40 h-44 bg-green-400"></div>
       <div className="box w-40 h-44 bg-yellow-400 my-3"></div>
         <div className="box w-40 h-44 bg-green-400"></div>
     
     

     
      
    </div>
  );
}
