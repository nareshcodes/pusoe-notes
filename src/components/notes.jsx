import { useEffect, useState } from "react";
import http from "../service/http";
import Pbutton from "../utilities/button";
import NoteCard from "./NoteCard";
import Navbar from "./navbar";
import Loading from "../utilities/loading";
function Notes() {
  const [Note, setNote] = useState([]);
    // State to handle loading state
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState([]);

  useEffect(() => {
    fetchAllNote();
  }, []);
  
  const fetchAllNote = async () => {
    try {
      // Make the API call
      const response = await http.get("semester");

      // Update state with the received data
      setNote(response.data.data);
      // Set loading to false
        setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <>
       <div className="w-full overflow-hidden bg-kprimary md:rounded-br-full relative md:px-24 md:py-5">
        <Navbar />
      </div>
      <section className="container mx-auto min-h-screen text-gray-600 px-10 ">
        <div className="md:px-30 md:py-4 mb-4 mx-auto">
          <div className="flex flex-col text-center w-full py-10">
            <h1 className="sm:text-3xl text-2xl font-menu font-semibold title-font text-gray-900">
              Which Semester Notes you want to Download?
            </h1>
          </div>
            {loading&&<div className="text-center -z-10 relative flex justify-center"><Loading/></div>}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-x-24 lg:gap-y-10 md:mx-36">
             
            {Note.map((item) => (
            <NoteCard key ={item.id}
                subject={item.title}
              image={item.photo}
            />
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Notes;
