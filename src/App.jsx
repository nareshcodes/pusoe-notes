import Header from "./components/header";
import Card from "./components/card";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Popular from "./components/popular";
import Team from "./components/team";
import Footer from "./components/footer";
import { useState } from "react";
import Notes from "./components/notes";
import Syllabus from "./components/syllabus";
function App() {
  const [page, setpage] = useState("notes");
  return (
    <>
      <Header page={page} setpage={setpage} />
      <div className="container-fluid min-h-screen">
        {page == "home" && <Card />}
        {page == "home" && <Hero />}
        {page == "home" && <Featured />}
        {page == "home" && <Popular />}
        {page == "home" && <Team />}
        {/* =============Notes============= */}
        {page == "notes" && <Notes />}
        {/* =============syllaubs========== */}
        {page == "syllabus" && <Syllabus />}
      </div>
      <Footer />
    </>
  );
}
export default App;
