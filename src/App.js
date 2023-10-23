import "./App.css";
import About from "./components/About/About";
import Category from "./components/Category/Category";
import Feature from "./components/Features/Feature";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sire from "./components/Sire/Sire";
import SireCards from "./components/SireCard/SireCards";
import Card from "./components/TeamCards/Card";
import Process from "./components/Process/Process";
import Tiles from "./components/Tiles/Tiles";
import TopHeader from "./components/TopHeader/TopHeader";
import Faq from "./components/Faq/Faq.js";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <Home />
      {/* <About /> */}
      <Card />
      <Sire />
      <Feature />
      <Category />
      <Tiles />
      <SireCards />
      <Process />
      <Faq />
    </div>
  );
}

export default App;
