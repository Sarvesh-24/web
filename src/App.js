import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import HeroSection from "./components/HeroSection";
import HeroContent from "./components/HeroContent";
import About from "./components/About";
import Facilities from "./components/Facilities";
import GoogleReviews from "./components/GoogleReviews";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA"
import Map from "./components/Map";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Facilities />
      <GoogleReviews />
      <Gallery />
      <CTA />
      <Map/>
      <Footer/>
    </>
  );
}

export default App;
