import { Link } from "react-router-dom";

function ProductCard({ subject, image, productlink }) {
  return (
    <div className=" w-[8rem] justify-items-center mx-auto">
      <Link to ={productlink}
        className="w-[8rem] h-[12rem] block rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className="object-cover w-[8rem] h-[12rem]  block "
          src={image}
        />
      </Link>

      <h2 className="text-gray-900 title-font text-lg leading-none font-medium mt-2 text-center w-35">
        {subject}
      </h2>
    </div>
  );
}
export default ProductCard;
