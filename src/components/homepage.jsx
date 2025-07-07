import Header from "../components/header";
import Card from "../components/card";
import Hero from "../components/hero";
import Featured from "../components/featured";
import Popular from "../components/popular";
import Team from "../components/team";
function HomePage(){
return <>
     <Header/>
      <div className="container-fluid min-h-screen">
       <Card />
      <Hero />
      <Featured />
      <Popular />
      <Team />
      </div>
</>
}
export default HomePage;