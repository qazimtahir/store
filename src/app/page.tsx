import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <NavBar/> */}

      <div className="text-center text-4xl pt-4">
        <HeroSection />
        <Products />
      </div>
    </main>
  );
}
