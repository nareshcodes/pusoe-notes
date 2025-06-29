function Hero() {
  return (
    <>
      <section>
        <div className="md:mx-30 max-w-screen-xl px-10 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <img
                src="/image/pusoe.jpg"
                className="rounded w-full h-full"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none mx-auto">
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
