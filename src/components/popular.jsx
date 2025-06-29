import Pbutton from "./button";
import ProductCard from "./productcard";

function Popular(){
  let products = [
    {name:"Engineering Mathematics-I",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"Applied Mechanics",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"Basic Electrical Engineering",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"Digital Logic",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"Data Structure and Algorithms",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"C programming",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"Python Programming",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },{name:"Numerical Methods",
    image: "../src/assets/image/Engineering-Mathematics-I.jpg",
    productlink: "#"
  },];
return <section className="text-gray-600 px-10">
   <div className="md:px-30 md:py-10 mx-auto">
    <div className="flex flex-col text-center w-full py-10">
      <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">Popular Subjects</h1>
    </div>
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4">
      {products.map((item)=><ProductCard key={item.name} subject={item.name} image={item.image} productlink={item.productlink}/>)}
  
</div>
  </div>
  
    <div className="flex flex-col mx-auto w-45">
     <Pbutton label={"See All Notes"}/>
    </div>
</section>
}
export default Popular;