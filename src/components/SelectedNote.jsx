import { useEffect, useState } from "react";
import http from "../service/http";
import ProductCard from "../utilities/productcard";
import Navbar from "./navbar";
import Loading from "../utilities/loading";
import { useParams } from "react-router-dom";
function SelectedNote() {
    const {semester}= useParams();
    console.log(semester)
  const [SelectedNote, setSelectedNote] = useState([]);
    // State to handle loading state
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState([]);

  useEffect(() => {
    fetchAllSelectedNote();
  }, []);
  
  const fetchAllSelectedNote = async () => {
    try {
      // Make the API call
      const response = await http.get("notes/"+semester);

      // Update state with the received data
      setSelectedNote(response.data.data);
      // Set loading to false
        setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full overflow-hidden bg-kprimary md:rounded-br-full relative z-0 md:px-24 md:py-5">
        <Navbar />
      </div>

      <section className="container mx-auto min-h-screen text-gray-600 px-10 ">
        <div className="md:px-30 md:py-4 mb-4 mx-auto">
          <div className="flex flex-col text-center w-full py-10">
            <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
                {semester} Notes
            </h1>
          </div>
            {loading&&<div className="text-center z-0"><Loading/></div>}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-x-24 lg:gap-y-10 md:mx-36">
             {SelectedNote.map((item) => (
            <ProductCard
              key={item.id}
              subject={item.title}
              image={item.featured_image}
              productlink={item.document}
            />
          ))}   
            
          </div>
        </div>
      </section>
    </>
  );
}
export default SelectedNote;
