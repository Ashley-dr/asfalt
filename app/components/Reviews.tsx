"use client";

import { reviews } from "../data/reviews";
import { FaStar } from "react-icons/fa";
import { Murecho } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";
const murecho = Murecho({ subsets: ["latin"], weight: "100" });
export default function Reviews() {
  const { lang } = useLanguage();
  return (
    <section
      id="reviews"
      className={`py-24 bg-gray-100 overflow-hidden ${murecho.className}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-md text-[#d6262a] mb-12">
          {lang === "EN" ? "REVIEWS" : "ANMELDELSER"}
        </p>
        <h2 className="text-4xl font-bold text-center text-[#d6262a] mb-12">
          {lang === "EN"
            ? "What clients highlight after each project"
            : "Hva kunder fremhever etter hvert prosjekt"}
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-white rounded-2xl shadow-lg p-6 mb-6 relative transition-transform duration-300 hover:scale-[1.03] group cursor-pointer"
            >
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`mr-1 ${
                      idx < r.star ? "text-[#d6262a]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-800 mb-4 whitespace-pre-line line-clamp-5 group-hover:line-clamp-none transition-all duration-300">
                {lang === "EN"
                  ? r.textEN || "No comment provided."
                  : r.textNO || "Ingen kommentar gitt."}
              </p>

              <div className="text-gray-500 text-sm mb-4 opacity-80">
                <p>
                  <span className="font-semibold text-[#d6262a]">
                    {lang === "EN" ? "Project Type:" : "Prosjekttype:"}
                  </span>{" "}
                  Asphalt & Road Maintenance
                </p>
                <p>
                  <span className="font-semibold text-[#d6262a]">
                    {lang === "EN" ? "Location:" : "Lokasjon:"}
                  </span>{" "}
                  Brøstadbotn, Troms
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-2">
                <span className="font-semibold text-[#d6262a]">
                  {r.reviewer}
                </span>
                <span className="text-gray-500 text-sm">{r.date}</span>
              </div>

              <div className="absolute inset-0 bg-[#d626293a] bg-opacity-10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
