import Card from "./card";

function Team() {
  return (
    <div className="flex container-fluid mx-auto  flex-wrap justify-center bg-gray-300 md:h-full py-10">
      <div className="flex justify-center w-full">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 font-menu mb-10">
          Team Members
        </h1>
      </div>
      <div className="container grid justify-center lg:px-28 grid-cols-2 mx-5 md:grid-cols-4 md:gap-x-15 gap-x-10  gap-y-10">
        <a href="#" className="relative group block  bg-black">
          <img
            alt=""
            src="/image/bimal.png"
            className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
          />

          <div className="relative  p-4 sm:p-6 lg:p-8">
            <div className="">
              <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">
                Graphics Designer
              </p>
              <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">
                Bimal Subedi
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="relative group block  bg-black">
          <img
            alt=""
            src="/image/rakesh.jpg"
            className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
          />

          <div className="relative  p-4 sm:p-6 lg:p-8">
            <div className="">
              <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">
                Frontend Designer
              </p>
              <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">
                Rakesh Ray
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="relative group block  bg-black">
          <img
            alt=""
            src="/image/puskar.png"
            className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
          />

          <div className="relative   p-4 sm:p-6 lg:p-8">
            <div className="">
              <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">
                Frontend Developer
              </p>
              <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">
                Puskar Khawas
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="relative group block  bg-black">
          <img
            alt=""
            src="/image/naresh.png"
            className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="">
              <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">
                Fullstack Developer
              </p>
              <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">
                Naresh Chaudhary
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Team;
