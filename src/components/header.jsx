import Pbutton from "../utilities/button";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
function Header() {
  return (
    <div className="w-full overflow-hidden bg-kprimary md:rounded-br-full relative z-0 md:px-24 md:py-5">
      <Navbar></Navbar>
     <Jumbotron />
    </div>
  );
}
export default Header;
