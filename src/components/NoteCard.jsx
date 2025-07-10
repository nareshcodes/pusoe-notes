import { Link } from "react-router-dom";

function NoteCard({ subject, image }) {
  
  return (
    <div className="w-45 justify-items-center mx-auto">
      <Link to ={{pathname:"/notes/"+subject}}
        className="block  h-55 w-35 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block "
          src={image}
        />
      </Link>

      <h2 className="text-gray-900 title-font text-lg font-medium mt-2 text-center w-35">
        {subject}
      </h2>
    </div>
  );
}
export default NoteCard;
