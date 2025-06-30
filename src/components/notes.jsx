import Pbutton from "../utilities/button";
import ProductCard from "../utilities/productcard";

function Notes() {
  let products = [
    {
      name: "First Semester",
      image: "/image/Engineering-Mathematics-I.jpg",
      productlink: "#",
    },
    {
      name: "Second Semester",
      image: "/image/appliedmechanics.png",
      productlink: "#",
    },
    {
      name: "Third Semester",
      image: "/image/beee.jpeg",
      productlink: "#",
    },
    {
      name: "Fourth Semester",
      image: "/image/dsa.jpg",
      productlink: "#",
    },
    {
      name: "Fifth Semester",
      image: "/image/cprogramming.jpeg",
      productlink: "#",
    },
    {
      name: "Sixth Semester",
      image: "/image/python.jpg",
      productlink: "#",
    },
    {
      name: "Seventh Semester",
      image: "/image/numericalmethods.jpg",
      productlink: "#",
    },

    {
      name: "Eight Semester",
      image: "/image/digitallogic.jpg",
      productlink: "#",
    },
  ];
  return (
    <section className="container mx-auto text-gray-600 px-10 ">
      <div className="md:px-30 md:py-4 mb-4 mx-auto">
        <div className="flex flex-col text-center w-full py-10">
          <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
            Select Semester
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4">
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
  );
}
export default Notes;
