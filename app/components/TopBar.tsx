"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebookF, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import headly from "../../public/headly.png";
import { Murecho } from "next/font/google";
import Link from "next/link";
import norway from "../../public/norway.png";
import english from "../../public/united-kingdom.png";
import { useLanguage } from "../context/LanguageContext";
const murecho = Murecho({ subsets: ["latin"], weight: "100" });

export default function TopBar() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`max-w-7xl mx-auto grid space-y-5 md:space-y-0  lg:flex justify-between w-full ${
        murecho.className
      } transition-all tracking-tight duration-200 ${
        scrolled ? "text-black py-1" : "text-[#ffffffc5] py-3"
      } text-sm  px-4 pr-10 md:pr-0 flex justify-between items-center`}
    >
      <div className="md:flex gap-6 space-y-1 text-xs ">
        <a href="tel:97944444" className="flex items-center gap-2 ">
          <FaPhone
            size={14}
            className={` ${scrolled ? "text-black " : "text-white"} `}
          />
          +47 979 44 444
        </a>
        <a
          href="mailto:post@asfaltspesialisten.no"
          className="flex items-center gap-2 "
        >
          <FaEnvelope
            size={14}
            className={` ${scrolled ? "text-black " : "text-white"} `}
          />{" "}
          post@asfaltspesialisten.no
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Asfaltspesialisten%20AS%20Espenesveien%2089%209311%20Brøstadbotn"
          target="_blank"
          className="flex items-center gap-2 "
        >
          <FaLocationDot
            size={14}
            className={` ${scrolled ? "text-black " : "text-white"} `}
          />
          Espenesveien 89, 9311 Brøstadbotn
        </a>
      </div>

      <div className="flex gap-3 items-center mr-5">
        <figure className="flex items-center gap-2 border rounded-sm ">
          <button
            onClick={() => setLang("NO")}
            className={`flex items-center gap-2 px-2 md:py-1 transition-colors cursor-pointer duration-300 ${
              lang === "NO"
                ? "bg-[#005744] text-white font-bold"
                : "text-gray-300 hover:text-gray-100"
            }`}
          >
            <Image src={norway} alt="Norway Flag" width={20} height={15} /> NO
          </button>
          <span>|</span>
          <button
            onClick={() => setLang("EN")}
            className={`flex items-center gap-2 px-2 md:py-1  transition-colors cursor-pointer duration-300 ${
              lang === "EN"
                ? "bg-[#005744] text-white font-bold"
                : "text-gray-300 hover:text-gray-100"
            }`}
          >
            <Image src={english} alt="English Flag" width={20} height={15} /> EN
          </button>
        </figure>
        <a
          href="https://www.facebook.com/asfaltspesialisten/"
          target="_blank"
          className=""
        >
          <FaFacebookF
            size={21}
            className={`py-1 hover:opacity-90 hover:w-7 hover:scale-100  transition-all  `}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCq1TkBnTq5fbB2nGg5GWuRw"
          target="_blank"
          className=""
        >
          <FaYoutube
            size={21}
            className={` hover:opacity-90 hover:w-7 hover:scale-100  transition-all  `}
          />
        </a>
        <Link
          href="https://www.vilbli.no/nb/no/adr/2062947/asfaltspesialisten-as"
          target="_blank"
        >
          <Image
            src={"https://www.vilbli.no/assets/img/logo.svg?v=V4.2025.15"}
            alt="Logo"
            width={40}
            height={50}
            className={` hover:opacity-90 hover:w-11 hover:scale-125  transition-all  `}
          />
        </Link>
        <Link
          href="https://www.headly.com/bedrifter/asfaltspesialisten/"
          target="_blank"
          className="py-0.5 hover:opacity-90  hover:scale-150   transition-all"
        >
          <Image src={headly} alt="Logo" width={21} height={20} />
        </Link>
        <Link
          href="https://www.lonna.no/stillinger/cd86861a-2cf7-4618-abc9-2b3617325a00"
          target="_blank"
        >
          <Image
            src={"https://www.lonna.no/images/logo/lonna_logo_white.svg"}
            alt="Logo"
            width={30}
            height={30}
            className={` hover:opacity-90 hover:w-9 hover:scale-150  transition-all ${
              scrolled
                ? "bg-[#0a0000] p-1 w-8.5 md:top-2.5  rounded-sm"
                : "bg-none  p-1 w-10  md:top-3.5"
            } `}
          />
        </Link>
      </div>
    </div>
  );
}
