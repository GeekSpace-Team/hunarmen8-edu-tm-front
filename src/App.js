import "./App.css";
import BaseSlider from "./components/baseSlider/BaseSlider";
import ComeToLearn from "./components/comeToLearn/ComeToLearn";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Professia from "./components/professia/Professia";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <BaseSlider />
      <ComeToLearn />
      <Professia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
