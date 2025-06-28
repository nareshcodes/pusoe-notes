function Card(){
return <div class="flex gap-x-42 gap-y-10 flex-wrap justify-center bg-gray-300 md:h-80 py-15">
    <div
        class="transform  rounded-xl h-50 w-50 sm:h-50 sm:w-60 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
            <span class="font-bold text-gray-500">50+ Notes</span>
        </div>
    </div>

   <div
        class="transform  rounded-xl h-50 w-50 sm:h-50 sm:w-60 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
            <span class="font-bold text-gray-500">50+ Books</span>
        </div>
    </div>

<div
        class="transform  rounded-xl h-50 w-50 sm:h-50 sm:w-60 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
            <span class="font-bold text-gray-500">150+ students</span>
        </div>
    </div>

</div>
}
export default Card;