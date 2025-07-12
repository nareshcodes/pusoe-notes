import Universitylogo from "../utilities/universitylogo";

function Featured() {
  let logos = [
    "/image/puse.png",
    "/image/eascol.png",
    "/image/acme.jpeg",
    "/image/khec.png",
  ];
  return (
    <section className="text-gray-600 bg-pbgcolor px-10 py-4">
      <div className="md:px-32 md:py-4 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
            Featured Universities
          </h1>
        </div>
        <div className="flex justify-center mt-4 featured">
          {logos.map((logo) => (
            <Universitylogo key={logo} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Featured;
