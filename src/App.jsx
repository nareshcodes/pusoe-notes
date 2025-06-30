import Header from "./components/header";
import Card from "./components/card";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Popular from "./components/popular";
import Team from "./components/team";
import Footer from "./components/footer";
import { useState } from "react";
function App() {
  const [page, setpage] = useState("home");
  return (
    <>
      <Header page={page} setpage={setpage} />
      {page == "home" && <Card />}
      {page == "home" && <Hero />}
      {page == "home" && <Featured />}
      {page == "home" && <Popular />}
      {page == "home" && <Team />}
      <Footer />
    </>
  );
}
export default App;
