"use client";

import { FaFacebookF, FaPhone, FaEnvelope, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Murecho } from "next/font/google";
import Image from "next/image";
import logo from "../../public/logo2.webp";
import { useLanguage } from "../context/LanguageContext";

const murecho = Murecho({ subsets: ["latin"], weight: "100" });

export default function Footer() {
  const { lang } = useLanguage();

  const texts = {
    EN: {
      navigation: "Navigation",
      services: "Services",
      reviews: "Reviews",
      contact: "Contact",
      about: "About Us",
      followUs: "Follow Us",
      description:
        "Professional asphalt paving & road maintenance with precision, durability, and reliable craftsmanship.",
      copyright: "All Rights Reserved",
    },
    NO: {
      navigation: "Navigasjon",
      services: "Tjenester",
      reviews: "Anmeldelser",
      contact: "Kontakt",
      about: "Om Oss",
      followUs: "Følg Oss",
      description:
        "Profesjonell asfaltering og vedlikehold av veier med presisjon, holdbarhet og pålitelig håndverk.",
      copyright: "Alle rettigheter reservert",
    },
  };

  const t = texts[lang];

  return (
    <footer
      className={`bg-linear-to-tl from-[#2b0607] via-[#240001] to-[#130001] text-gray-300 pt-16 pb-10 relative ${murecho.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-lg font-bold text-white mb-3 flex items-end gap-2">
            <Image
              src={logo}
              alt="Logo"
              className="h-5 md:h-10 lg:h-20 w-auto hover:opacity-90 transition-all"
            />
            Asfaltspesialisten AS
          </h2>
          <p className="text-gray-400 leading-relaxed text-xs">
            {t.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            {t.navigation}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#asphalting" className="hover:text-[#d6262a] transition">
                {t.services}
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[#d6262a] transition">
                {t.reviews}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#d6262a] transition">
                {t.contact}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#d6262a] transition">
                {t.about}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">{t.contact}</h3>
          <ul className="space-y-3 w-max text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#d6262a]" />
              <span>+47 979 44 444</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#d6262a]" />
              <span>post@asfaltspesialisten.no</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot size={14} className="text-[#d6262a]" />
              Espenesveien 89, 9311 Brøstadbotn
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            {t.followUs}
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/asfaltspesialisten/"
              className="bg-white/10 p-3 rounded-full hover:bg-[#d6262a] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/channel/UCq1TkBnTq5fbB2nGg5GWuRw"
              className="bg-white/10 p-3 rounded-full hover:bg-[#d6262a] transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-6 text-xs">
        © {new Date().getFullYear()} Asfaltspesialisten AS — {t.copyright}
      </div>
    </footer>
  );
}
