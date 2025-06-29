function Hero(){
return <>
    <section>
  <div className="md:mx-30 max-w-screen-xl px-10 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        

      <div>
        <img
          src="../src/assets/image/pusoe.jpg" 
          className="rounded w-full h-full"
          alt=""
        />
      </div>
      <div>
        <div className="max-w-lg md:max-w-none  text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Purbanchal University School<br/>of<br/>Engineering
          </h2> 

          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
}
export default Hero;