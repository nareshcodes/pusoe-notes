import { useEffect, useState } from "react";
import Pbutton from "../utilities/button";
import ProductCard from "../utilities/productcard";
import http from "../service/http";
import Loading from "../utilities/loading";
function Popular() {
  const [Featured, setFeatured] = useState([]);
      // State to handle loading state
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState([]);
  
    useEffect(() => {
      fetchAllFeatured();
    }, []);
    
    const fetchAllFeatured = async () => {
      try {
        // Make the API call
        const response = await http.get("featured");
  
        // Update state with the received data
        setFeatured(response.data.data);
        // Set loading to false
          setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  return (
    <section className="container mx-auto text-gray-600 px-10 ">
      <div className="md:px-30 md:py-10 mx-auto">
        <div className="flex flex-col text-center w-full py-10">
          <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
            Popular Subjects
          </h1>
        </div>
        {loading&&<div className="flex justify-center z-0"><Loading type={'bars'} color={'#00ff0a'}/></div>}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 md:mx-12">
             
            {Featured.map((item) => (
              console.log(item),
            <ProductCard
              key={item.id}
              subject={item.title}
              image={item.featured_image}
              productlink={item.document}
            />
            
          ))}
          </div>
      </div>

      <div className="flex justify-center w-45">
        <Pbutton label={"See All Notes"} />
      </div>
    </section>
  );
}
export default Popular;
