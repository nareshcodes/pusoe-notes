import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const HeaderAnimation = (refcontent,refImg) => {
    
  useGSAP(()=>{
    gsap.from(refcontent.current,{
      duration:2,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      x:-500,
      scrollTrigger:{
        trigger:refcontent.current,
        markers:false,
        end:"30px 40px",
        toggleActions:"play reverse play pause"
      }
    })
  })
    //============   Animating Img=====================
   useGSAP(()=>{
    gsap.from(refImg.current,{
      duration:2,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      scrollTrigger:{
        trigger:refcontent.current,
        markers:false,
        end:"200px top",
        toggleActions:"restart reverse play pause"
      }
    })
  })
}

export default HeaderAnimation
