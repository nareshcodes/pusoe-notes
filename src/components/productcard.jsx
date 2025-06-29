function ProductCard({subject,image,productlink}){
return  <div className="lg:w-1/5 md:w-1/5  w-45 justify-items-center mx-auto">
        <a href={productlink} className="block relative h-55 w-35 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block " src={image}/>
        </a>
          
          <h2 className="text-gray-900 title-font text-lg font-medium mt-2 text-center w-35">{subject}</h2>
          
      </div>
}
export default ProductCard;