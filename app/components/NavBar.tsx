"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Murecho } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data-translation/navbar-translate";
const murecho = Murecho({ subsets: ["latin"], weight: "100" });
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full  transition-all duration-500  ${
        scrolled ? "text-black" : "text-white  "
      } 
     relative z-50 ${murecho.className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between md:py-4 px-4">
        <Link href="#home">
          <Image
            src={logo}
            alt="Logo"
            className="h-5 md:h-10 lg:h-14 w-auto hover:opacity-90 transition-all"
          />
        </Link>

        <div className="hidden md:flex gap-8 items-center relative">
          <div className="relative group">
            <div className="cursor-pointer flex items-center gap-1 relative  hover:text-[#f3a5a6] transition-colors duration-300 group">
              {translations[lang].services}
              <IoIosArrowDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#d6262a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </div>
            <div className="absolute left-0 top-full mt-2 w-max bg-white text-black rounded-md shadow-3xl  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out ">
              <Link
                href="#asphalting"
                className="block px-4 py-2 hover:bg-[#e253584f] transition duration-400 "
              >
                {translations[lang].asphalting}
              </Link>
              <Link
                href="#roadmaintenance"
                className="block px-4 py-2 hover:bg-[#e253584f] transition duration-400"
              >
                {translations[lang].roadMaintenance}
              </Link>
              <Link
                href="#transport"
                className="block px-4 py-2 hover:bg-[#e253584f] transition duration-400"
              >
                {translations[lang].transport}
              </Link>
              <Link
                href="#machine"
                className="block px-4 py-2 hover:bg-[#e253584f] transition duration-400"
              >
                {translations[lang].machineRental}
              </Link>
              <Link
                href="#consulting"
                className="block px-4 py-2 hover:bg-[#e253584f] transition duration-400"
              >
                {translations[lang].consulting}
              </Link>
              <Link
                href="#winter"
                className="block px-4 py-2 hover:bg-[#e253584f] transition duration-400"
              >
                {translations[lang].winter}
              </Link>
            </div>
          </div>
          <Link
            href="#about"
            className="relative  hover:text-[#f3a5a6] transition-colors duration-50 group"
          >
            {translations[lang].about}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#d6262a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
          <Link
            href="https://utdanning.no/bedrift/923662308/"
            target="_blank"
            className="relative  hover:text-[#f3a5a6] transition-colors duration-100 group"
          >
            {translations[lang].careers}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#d6262a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
          <Link
            href="#projects"
            className="relative  hover:text-[#f3a5a6] transition-colors duration-150 group"
          >
            {translations[lang].projects}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#d6262a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
          <Link
            href="#reviews"
            className="relative  hover:text-[#f3a5a6] transition-colors duration-200 group"
          >
            {translations[lang].reviews}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#d6262a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      <div
        className={`
    md:hidden flex flex-col gap-4 px-4  h-max pt-3 top-full
    overflow-hidden
    transition-all duration-300 ease-out

    ${
      open
        ? "max-h-max opacity-100 translate-y-0 pb-5"
        : "max-h-0 opacity-0 -translate-y-3"
    }

    ${scrolled ? "bg-white" : "backdrop-blur-lg bg-white/20 shadow-lg"}
  `}
      >
        <div>
          <button
            onClick={() => setServiceOpen(!serviceOpen)}
            className="flex justify-between w-full"
          >
            {translations[lang].services}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 
                ${serviceOpen ? "max-h-40" : "max-h-0"}`}
          >
            <Link href="#asphalting" className="block pl-4 py-2">
              {translations[lang].asphalting}
            </Link>
            <Link href="#roadmaintenance" className="block pl-4 py-2">
              {translations[lang].roadMaintenance}
            </Link>
            <Link href="#transport" className="block pl-4 py-2">
              {translations[lang].transport}
            </Link>
            <Link href="#machine" className="block px-4 py-2 hover:bg-gray-100">
              {translations[lang].machineRental}
            </Link>
            <Link
              href="#consulting"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {translations[lang].consulting}
            </Link>
            <Link href="#winter" className="block pl-4 py-2">
              {translations[lang].winter}
            </Link>
          </div>
        </div>

        <Link href="#about"> {translations[lang].about}</Link>
        <Link href="https://utdanning.no/bedrift/923662308/" target="_blank">
          {translations[lang].careers}
        </Link>
        <Link href="#projects"> {translations[lang].projects}</Link>
        <Link href="#reviews"> {translations[lang].reviews}</Link>
      </div>
    </nav>
  );
}
