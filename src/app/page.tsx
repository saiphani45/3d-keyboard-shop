import Navbar from "../../components/sections/Navbar";
import Hero from "../../components/sections/Hero";
import Products from "../../components/sections/Products";
import Features from "../../components/sections/Features";
import Reviews from "../../components/sections/Reviews";
import Sale from "../../components/sections/Sale";
import Footer from "../../components/sections/Footer";

export default function Home() {
  return (
    <div className="text-slate-100">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Reviews />
      <div className="bg-stone-800">
        <Sale />
        <Footer />
      </div>
    </div>
  );
}
