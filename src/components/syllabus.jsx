import Pbutton from "../utilities/button";
import ProductCard from "../utilities/productcard";
import Navbar from "./navbar";
function Syllabus() {
  let products = [
    {
      name: "First Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
    {
      name: "Second Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
    {
      name: "Third Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
    {
      name: "Fourth Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
    {
      name: "Fifth Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
    {
      name: "Sixth Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
    {
      name: "Seventh Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },

    {
      name: "Eight Semester",
      image: "/image/pdfdownload.png",
      productlink: "#",
    },
  ];
  return <>
    <div className="w-full overflow-hidden bg-kprimary md:rounded-br-full relative z-0 md:px-24 md:py-5">
      <Navbar/>
    </div>

    <section className="container mx-auto min-h-102 text-gray-600 px-10 ">
      <div className="md:px-30 md:py-4 mb-4 mx-auto">
        <div className="flex flex-col text-center w-full py-10">
          <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
            Select Syllabus
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
          {products.map((item) => (
            <ProductCard
              key={item.name}
              subject={item.name}
              image={item.image}
              productlink={item.productlink}
            />
          ))}
        </div>
      </div>
    </section>
  </>
}
export default Syllabus;
