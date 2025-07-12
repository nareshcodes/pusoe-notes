import Universitylogo from "../utilities/universitylogo";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function Featured() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30, // Adjust scroll duration for smoother easing
      startIndex: 1,
      
      align: 'center',
      inViewThreshold: 0.7,
       slidesToScroll:2,
    }, 
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );
  let logos = [
    
    "/image/puse.png",
    "/image/eascol.png",
    "/image/acme.jpeg",
    "/image/khec.png",
    "/image/puse.png",
    "/image/eascol.png",
    "/image/acme.jpeg",
    "/image/khec.png",
    
  ];
  return (
    <section className="text-gray-600 bg-pbgcolor mx-auto py-4 featured">
      <div className="md:mx-60  md:py-4">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
            Featured Universities
          </h1>
        </div>
        <div className="flex justify-center mt-4 embla" ref={emblaRef}>
          <div className="embla__container">
            
          {logos.map((logo,index) => (
            <Universitylogo key={index} logo={logo} />
          ))}
            </div>
        </div>
      </div>
    </section>
  );
}
export default Featured;
