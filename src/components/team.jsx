import Card from "./card";

function Team(){
return <div className="flex md:gap-x-15 gap-x-10  gap-y-10 flex-wrap justify-center bg-gray-300 md:h-full py-15">
    <div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 font-menu">Team Members</h1>
    </div>
    <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src="../src/assets/image/bimal.png"
    className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <div className="">
     <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">Graphics  Designer</p>
        <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">Bimal Subedi</p>
    </div>
  </div>
</a>
<a href="#" className="group relative block bg-black">
  <img
    alt=""
    src="../src/assets/image/rakesh.jpg"
    className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <div className="">
     <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">Frontend Designer</p>
        <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">Rakesh Ray</p>
    </div>
  </div>
</a>
<a href="#" className="group relative block bg-black">
  <img
    alt=""
    src="../src/assets/image/puskar.png"
    className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <div className="">
     <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">Frontend Developer</p>
        <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">Puskar Khawas</p>
    </div>
  </div>
</a>
<a href="#" className="group relative block bg-black">
  <img
    alt=""
    src="../src/assets/image/naresh.png"
    className="absolute inset-0 h-full w-full object-cover   transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    

    <div className="">
     <p className="text-sm font-medium tracking-widest text- text-pink-500 uppercase mt-40 text-center w-35">Fullstack Developer</p>
        <p className="text-xl font-semibold  text-kprimary sm:text-1xl w-35 text-center uppercase">Naresh Chaudhary</p>
    </div>
  </div>
</a>
</div>
}
export default Team;