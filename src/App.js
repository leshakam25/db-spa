import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/pages/about/about";
import Home from "./components/pages/home/home";
import Services from "./components/pages/services/services";
import Contact from "./components/pages/contact/contact";
import Careers from "./components/pages/careers/careers";
import Gallery from "./components/pages/gallery/gallery";
import News from "./components/pages/news/news";
import Story from "./components/pages/story/story";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/News" element={<News />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
