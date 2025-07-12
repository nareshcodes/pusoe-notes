import StatsCard from "../utilities/statscard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Card() {     

  let images = [
    "/image/journal.gif",
    "/image/open-book.gif",
    "/image/webinar.gif",
  ];
  useGSAP(()=>{
    gsap.from(".statcard",{
      duration:0.5,
      opacity:0,
      scale:0,
      delay:0,
      ease:"powerin.1",
      y:-50,
      scrollTrigger:{
        trigger:".stats",
        markers:false,
        start:"top 50%",
        end:"120px 60px",
        toggleActions:"restart reverse play reverse"
      }
    })
  })
  return (
    <div  className="flex md:gap-x-32 gap-x-4 gap-y-10 justify-center px-5 bg-gray-300 md:h-70 py-12 stats">
     <span className="statcard  flex items-center"><StatsCard   image={images[0]} label={"50+ Notes"} /></span> 
      <span className="statcard   flex items-center"><StatsCard image={images[1]} label={"50+ Books"} /></span> 
      <span className="statcard   flex items-center" ><StatsCard image={images[2]} label={"150+ Students"} /></span> 
    </div>
  );
}
export default Card;
