import { useRef } from "react";
import HeroAnimation from "../gsap/heroAnimation";

function Hero() {
   const gsapContent =useRef();
   const gsapImg =useRef();
   HeroAnimation(gsapImg,gsapContent);
  return (
    <>
      <section className="container flex justify-center mx-auto">
        <div className="md:mx-30 max-w-screen-xl px-5 py-8 sm:px-6 lg:px-28">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 hero">
            <div className="content-img" ref={gsapImg}>
              <img
                src="/image/pusoe.jpg"
                className="rounded w-full h-full"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none mx-auto" ref={gsapContent}>
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-center">
                  Purbanchal University School
                  <br />
                  of
                  <br />
                  Engineering
                </h2>

                <p className="mt-4 text-gray-700">
                  Recognized as only one constituent Engineering school of PU.
                  This school particularly focuses on accumulating the technical
                  aspirants from Eastern Region as well as from the different
                  regions of the nation and has been rendering its services
                  benevolently ever since the establishment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
