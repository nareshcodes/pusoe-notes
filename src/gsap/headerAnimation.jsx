import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const HeaderAnimation = (refcontent,refImg) => {
    
  useGSAP(()=>{
    gsap.from(refcontent.current,{
      duration:1,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      x:-500,
      scrollTrigger:{
        trigger:refcontent.current,
        markers:false,
        end:"25px 40px",
      }
    })
  })
    //============   Animating Img=====================
   useGSAP(()=>{
    gsap.from(refImg.current,{
      duration:1,
      opacity:0,
      delay:0,
      scale:0,
      ease:"power3.inOut",
      scrollTrigger:{
        trigger:refcontent.current,
        markers:false,
        end:"200px top",
      }
    })
  })
}

export default HeaderAnimation
