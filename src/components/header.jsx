import Pbutton from "../utilities/button";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
function Header({ page, setpage }) {
  return (
    <div className="w-full overflow-hidden bg-kprimary md:rounded-br-full relative z-0 md:px-24 md:py-5">
      <Navbar page={page} setpage={setpage}></Navbar>
      {page == "home" && <Jumbotron />}
    </div>
  );
}
export default Header;
