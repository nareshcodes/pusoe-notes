function Pbutton({ label }) {
  return (
    <button className="px-8 w-45 py-4 mb-10 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
      {label}
    </button>
  );
}
export default Pbutton;
