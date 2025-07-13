import { Link } from "react-router-dom";

function NoteCard({ subject, image }) {
  
  return (
    <div className="w-[8rem] h-[12rem]  justify-items-center mx-auto">
      <Link to ={{pathname:"/notes/"+subject}}
        className="w-[8rem] h-[12rem] block rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className=" w-[8rem] h-[12rem] object-contain object-center block "
          src={image}
        />
      </Link>

      <h2 className="text-gray-900 title-font leading-none text-lg font-medium text-center">
        {subject}
      </h2>
    </div>
  );
}
export default NoteCard;
