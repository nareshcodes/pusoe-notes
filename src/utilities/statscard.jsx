const StatsCard = ({ image, label }) => {
  return (
    <div className="rounded-xl sm:h-48 sm:w-48 bg-white shadow-xl transition duration-300 hover:scale-105">
      <img
        src={image}
        className="md:w-30 md:h-30 h-20 w-35 px-5 justify-center mx-auto md:mt-10 mt-4"
      />
      <div className="flex h-full justify-center text-center">
        <p className="font-semibold text-gray-500 items-center max-sm:py-4">
          {label}
        </p>
      </div>
    </div>
  );
};
export default StatsCard;
