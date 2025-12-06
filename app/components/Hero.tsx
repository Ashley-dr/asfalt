"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../public/logo2.webp";
const images = [
  "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/497494685_1255857249873504_238305631543177093_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbhHcgMn8JHOE5eN5M_UbilgJHQV2Z_duWAkdBXZn921dNZKKGEe2aBuK8jFOa6G8B3BIgy1GEWzypE2PAxK8N&_nc_ohc=PZpkeoaUUt0Q7kNvwGlYUnH&_nc_oc=Adnf_SuWeQJybuwxjaUocnw-kuzE0EPdfBO67-nNc9etEzgNARHxaVRiwgePmhQlfYQ&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=nHk83efyC4bxgn78xRW4zA&oh=00_Afm7cs5r3K9HhoNS4tDhBnWFtA6IAyNU2Sl1VTlQiwHVjQ&oe=6938E751",
  "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/516285246_1305046858287876_366123594739327261_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4hZumf6hHYUQdi9H60j1HPOJcc-5dnE084lxz7l2cTfsIcWeAPm30AMeVXhcaP_OId9nwxPc-N6VVzA5AwOHj&_nc_ohc=VTAQIRZSlWcQ7kNvwHLpQx0&_nc_oc=Admu6w3IUqpbPhMBHjM-ZpxXxgosiHBJJuE8EUty3rLjOqZ2m2K93AE6HzEFWIpqsmk&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=pFc_iDMbS94Ftp7Rsy2H5w&oh=00_Afndf3wRo_KctB0wAqpMM6tLJ68zTbx4QmaWn1Qdl6LpOw&oe=6938E948",
  "https://i.pinimg.com/1200x/cc/b6/56/ccb656e0f42d2c93eadae26fd204322d.jpg",

  "https://i.pinimg.com/1200x/dc/31/28/dc31286bc2bd79a5801d1f8ba4849f5a.jpg",
];
import { Murecho } from "next/font/google";
import { heroTranslations } from "../data-translation/hero-translate";
import { useLanguage } from "../context/LanguageContext";
const murecho = Murecho({ subsets: ["latin"], weight: "300" });

export default function Hero() {
  const [bgImage, setBgImage] = useState(images[0]);
  const [offsetY, setOffsetY] = useState(0);
  const { lang } = useLanguage();
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`h-[110vh] ${murecho.className} bg-cover bg-center flex items-center relative overflow-hidden`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPositionY: `${offsetY}px`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-white z-10">
        <figure className="flex items-end">
          <Image
            src={logo}
            alt="Logo"
            className="h-20 md:h-25 lg:h-30 w-auto hover:opacity-90 transition-all"
          />
          <h1 className="text-xl md:text-3xl font-bold mb-4">
            {heroTranslations[lang].title}
          </h1>
        </figure>
        <p className="text-xl md:text-4xl max-w-xl">
          {heroTranslations[lang].subtitle}
        </p>
        <figure className="flex gap-3">
          <a
            href="#contact"
            className="relative inline-block mt-6 overflow-hidden text-white border border-red-300 px-6 py-3 font-semibold rounded shadow group"
          >
            <span className="relative z-10">
              {" "}
              {heroTranslations[lang].quoteButton}
            </span>
            <span className="absolute inset-0 bg-[#d6262a] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>

          <a
            href="https://www.headly.com/bedrifter/asfaltspesialisten/"
            target="_blank"
            className="relative inline-block mt-6 overflow-hidden text-white border border-red-300 px-6 py-3 font-semibold rounded shadow group"
          >
            <span className="relative z-10">
              {heroTranslations[lang].workButton}
            </span>
            <span className="absolute inset-0 bg-[#d6262a] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
        </figure>
      </div>
    </section>
  );
}
