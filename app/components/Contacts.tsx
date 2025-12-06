"use client";

import { useState } from "react";
import { accordionData } from "../data/accordrions";
import { Murecho } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";
const murecho = Murecho({ subsets: ["latin"], weight: "100" });
export default function Contact() {
  const [active, setActive] = useState<number | null>(null);
  const { lang } = useLanguage();
  return (
    <section id="contact" className={`py-24 bg-gray-100 ${murecho.className}`}>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* <div>
          <h2 className="text-3xl font-bold mb-6 text-[#d6262a]">
            {lang === "EN" ? "Important Considerations" : "Viktige hensyn"}
          </h2>

          <div className="space-y-4">
            {accordionData.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-red-50 font-semibold text-left text-gray-800"
                  onClick={() => setActive(active === item.id ? null : item.id)}
                >
                  {lang === "EN" ? item.titleEN : item.titleNO}
                  <span className="text-[#d6262a] font-bold">
                    {active === item.id ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden bg-gray-50 px-4 ${
                    active === item.id ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    {" "}
                    {lang === "EN" ? item.contentEN : item.contentNO}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className=" bg-white/70 backdrop-blur-lg h-max shadow-xl rounded-2xl p-8 relative border border-white/40 before:absolute before:inset-0 before:rounded-2xl before:p-0.5 before:-z-10 transition-all">
          <h3 className="text-2xl font-bold text-[#d6262a] mb-4">
            {lang === "EN" ? "Price Request" : "Pristilbud"}
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            {lang === "EN"
              ? "Do you need a reliable company for asphalt paving or road work? Contact us for a no-obligation inspection."
              : "Trenger du et pålitelig selskap for asfaltering eller veiarbeid? Kontakt oss for en uforpliktende befaring."}
          </p>

          <div className="space-y-3 text-gray-800">
            <h4 className="font-semibold text-lg">Asfaltspesialisten AS</h4>

            <p>Espenesveien 89, 9311 Brøstadbotn</p>

            <p>
              {lang === "EN"
                ? "Corporate Registration Number: 923 662 308"
                : "Organisasjonsnummer: 923 662 308"}
            </p>

            <div className="flex items-center gap-3 text-[#d6262a] text-lg font-semibold mt-4">
              <span className="text-2xl">📞</span>
              <a
                href="tel:97944444"
                className="text-gray-900 hover:text-[#d6262a]"
              >
                979 44 444
              </a>
            </div>

            <div className="flex items-center gap-3 text-[#d6262a] text-lg font-semibold">
              <span className="text-2xl">✉️</span>
              <a
                href="mailto:post@asfaltspesialisten.no"
                className="text-gray-900 hover:text-[#d6262a]"
              >
                post@asfaltspesialisten.no
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-8 shadow-lg bg-[#d6262915]">
          <h2 className="text-3xl font-bold mb-6 text-[#d6262a]">
            {lang === "EN" ? "Get a Free Quote" : "Få et gratis tilbud"}
          </h2>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder={
                lang === "EN" ? "Name / Company Name *" : "Navn / Firmanavn *"
              }
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950 focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />

            <select className="border border-[#d6262a]  p-3 rounded text-gray-950 focus:ring-2 focus:ring-red-600 focus:outline-none">
              <option>
                {lang === "EN" ? "Private Person" : "Privatperson"}
              </option>
              <option>{lang === "EN" ? "Company" : "Firma"}</option>
              <option>
                {lang === "EN" ? "Public Agency" : "Offentlig etat"}
              </option>
            </select>

            <input
              type="tel"
              placeholder={lang === "EN" ? "Telephone *" : "Telefon *"}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />

            <input
              type="email"
              placeholder={lang === "EN" ? "Email *" : "E-post *"}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
              required
            />

            <input
              type="text"
              placeholder={lang === "EN" ? "Address" : "Adresse"}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder={lang === "EN" ? "Postal Code" : "Postnummer"}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder={lang === "EN" ? "Place" : "Sted"}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
            />

            <select className="border p-3 rounded text-gray-950 border-[#d6262a] focus:ring-2 focus:ring-red-600 focus:outline-none">
              <option>
                {lang === "EN" ? "Choose an option" : "Velg en tjeneste"}
              </option>
              <option>{lang === "EN" ? "Asphalting" : "Asfaltering"}</option>
              <option>
                {lang === "EN" ? "Road Maintenance" : "Veivedlikehold"}
              </option>
              <option>{lang === "EN" ? "Transport" : "Transport"}</option>
              <option>
                {lang === "EN" ? "Winter Services" : "Vintertjenester"}
              </option>
            </select>

            <input
              type="text"
              placeholder={lang === "EN" ? "Area" : "Areal"}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder={
                lang === "EN"
                  ? "Desired Time of Execution"
                  : "Ønsket utførelsestid"
              }
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
            />

            <textarea
              placeholder={lang === "EN" ? "Your Message" : "Din melding"}
              rows={5}
              className="border p-3 rounded placeholder-gray-950 border-[#d6262a] text-gray-950  focus:ring-2 focus:ring-red-600 focus:outline-none"
            />
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" required />
              <span className="text-gray-700 text-sm">
                {lang === "EN"
                  ? "I agree that the information is used for contact *"
                  : "Jeg godtar at informasjonen brukes til kontakt *"}
              </span>
            </label>
            <button className="bg-[#d6262a] text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition">
              {lang === "EN" ? "Send Message" : "Send melding"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
