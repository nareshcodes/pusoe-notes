import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const HeaderAnimation = (refContent,refImg) => {
    
  useGSAP(()=>{
    gsap.from(refContent.current,{
      duration:1,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      x:-500,
      scrollTrigger:{
        trigger:refContent.current,
        markers:false,
        end:"25px 40px",
        toggleActions:"restart reverse play pause"
      }
    })
  })
    //============   Animating refImg=====================
   useGSAP(()=>{
    gsap.from(refImg.current,{
      duration:1,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      scrollTrigger:{
        trigger:"header",
        markers:false,
        end:"200px top",
        toggleActions:"restart reverse play pause"
      }
    })
  })
}

export default HeaderAnimation
