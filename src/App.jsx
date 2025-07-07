import Header from "./components/header";
import Card from "./components/card";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Popular from "./components/popular";
import Team from "./components/team";
import Footer from "./components/footer";
import Notes from "./components/notes";
import Syllabus from "./components/syllabus";
import Books from "./components/books";
import Questions from "./components/question";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Header/>
      <div className="container-fluid min-h-screen">
       <Card />
      <Hero />
      <Featured />
      <Popular />
      <Team />
        {/* =============Notes============= */}
      <Notes />
        {/* =============syllaubs================= */}
        <Syllabus />
        {/* ===============Books================== */}
        <Books />
        {/* =============Questions================ */}
       <Questions />
        {/* ==============contact================= */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}
export default App;
