import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const HeroAnimation = (refImg,refcontent) => {
    
  useGSAP(()=>{
    gsap.from(refImg.current,{
      duration:1,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      x:-500,
      scrollTrigger:{
        trigger:".hero",
        markers:false,
        start:"20px 60%",  
        end:"70px 30px",
        toggleActions:"restart reverse restart reverse"
      }
    })
  })
    //============   Animating Img=====================
   useGSAP(()=>{
    gsap.from(refcontent.current,{
      duration:1,
      opacity:0,
      delay:0,
      scale:0,
      x:500,
      ease:"power3.inOut",
      scrollTrigger:{
        trigger:".hero",
        markers:false,
        start:"20px 60%",
        end:"25px 70px",
        
        toggleActions:"restart reverse restart reverse"
      }
    })
  })
}

export default HeroAnimation
