import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Food from "./components/Food";
import About from "./components/About";
import VideoSection from "./components/VideoSection"; // import the video section
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-lux bg-lux-cream text-lux-midnight dark:bg-lux-black dark:text-lux-cream">
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Food />
      <About />
      <VideoSection /> {/* Video appears above Gallery */}
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}
