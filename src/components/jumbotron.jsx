import Pbutton from "../utilities/button";

function Jumbotron() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl sm:px-15 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center md:gap-5">
          <div>
            <div className="max-w-lg md:max-w-none px-4">
              <h2 className="text-2xl font-semibold font-menu text-gray-900 sm:text-3xl">
                Computer Engineering
              </h2>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Computer engineering combines hardware and software design,
                developing systems from microchips to AI applications. It drives
                innovation in robotics, IoT, and computing, powering industries
                like healthcare, automotive, and telecommunications. This field
                is essential for advancing modern technology.
              </p>
              <Pbutton label={"Download Notes"} />
            </div>
          </div>
          <img
            src="/image/computerstudents.png"
            className="rounded md:mt-10 md:h-full w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Jumbotron;
