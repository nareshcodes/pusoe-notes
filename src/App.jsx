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
import Books from "./components/books";
import Questions from "./components/question";
import Contact from "./components/contact";
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
        {/* =============Books============= */}
        {page == "books" && <Books />}
        {/* =============Questions============= */}
        {page == "questions" && <Questions />}
        {/* =============contact============= */}
        {page == "contact" && <Contact />}
      </div>
      <Footer />
    </>
  );
}
export default App;
