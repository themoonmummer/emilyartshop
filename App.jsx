import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <div
      className="
      min-h-screen
      bg-[#F9E7E3]
      selection:bg-[#E3BAB6]
      selection:text-[#4b3535]
      "
    >

      <Header />

      <main>

        <Hero />

        <Gallery />

        <About />

        {/* Reviews section (inside Pricing.jsx) */}
        <Pricing />

        <Contact />

      </main>


      <Footer />


    </div>

  );

}


export default App;