import StatsCard from "../utilities/statscard";

function Card() {
  let images = [
    "/image/journal.gif",
    "/image/open-book.gif",
    "/image/webinar.gif",
  ];

  return (
    <div className="flex md:gap-x-42 gap-x-4  gap-y-10 flex-wrap justify-center bg-gray-300 md:h-80 py-15">
      <StatsCard image={images[0]} label={"50+ Notes"} />
      <StatsCard image={images[1]} label={"50+ Books"} />
      <StatsCard image={images[2]} label={"150+ Students"} />
    </div>
  );
}
export default Card;
