import CreationSection from "./components/CreationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <div className="h-screen w-full">
      <HeroSection />
      <ImageSection />
      <CreationSection />
      <Footer />
    </div>
  );
}

export default App;
