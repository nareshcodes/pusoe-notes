import { Link } from "react-router-dom";

function Pbutton({ label }) {
  return (
   <Link to={'/notes'}><button className="px-8 py-4 mb-10 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg">
      {label}
    </button>
    </Link> 
  );
}
export default Pbutton;
