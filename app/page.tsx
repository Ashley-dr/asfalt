"use client";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { useEffect, useState } from "react";
import Map from "./components/Map";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={` 
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="absolute flex justify-center -left-[700px] inset-0">
          <div
            className={`  w-[700px] rounded-tl-[50px] h-full   [@media(max-width:1020px)]:hidden md:flex justift-self-center    transform transition-all duration-200 ${
              scrolled
                ? " h-0 "
                : " bg-[#f77070bd]  -skew-y-2  rounded-br-[200px]"
            }   origin-top-left `}
          ></div>
        </div>
        <div className="relative z-10">
          <TopBar />
          <Navbar />
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Reviews />
        <Contact />
        <Map />
        <Footer />
      </main>
    </div>
  );
}
