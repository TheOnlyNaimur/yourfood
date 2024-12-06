import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carosal from "../components/Carosal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carosal />
      </div>
      <div className="mt-3">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
