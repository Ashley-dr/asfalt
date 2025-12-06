"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import award1 from "../../public/award1.webp";
import award2 from "../../public/award2.webp";
import award3 from "../../public/award3.webp";
import road from "../../public/road.jpg";
import { Murecho } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";
import { aboutEN, aboutNO } from "../data-translation/about-translate";

const murecholight = Murecho({ subsets: ["latin"], weight: "200" });
const murecho = Murecho({ subsets: ["latin"], weight: "500" });
export default function About() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const about = lang === "EN" ? aboutEN : aboutNO;

  useEffect(() => {
    function handleScroll() {
      const section = document.getElementById("about");
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 150) setVisible(true);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`py-24 bg-gray-100 ${murecholight.className} bg-linear-to-tr from-red-500/10 to-yellow-200/10`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 grid md:flex  gap-14 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-red-400/40 to-yellow-300/30 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

          <div className="hidden md:block relative overflow-hidden w-max rounded-xl shadow-xl">
            <Image
              src={road}
              width={300}
              height={300}
              alt="About us"
              className="rounded-xl transform group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>

        <div>
          <h2
            className={`text-4xl font-extrabold mb-6 text-[#d6262a] relative ${murecho.className}`}
          >
            {about.title}
            <span className="absolute left-0 -bottom-2 w-40 h-1 bg-linear-to-tr from-[#d6262a] to-[#ffc0c0]  "></span>
          </h2>

          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-gray-900">
                {lang === "EN"
                  ? "Asfaltspesialisten AS, based in Brøstadbotn in Dyrøy,"
                  : "Asfaltspesialisten AS, basert i Brøstadbotn i Dyrøy,"}
              </strong>{" "}
              {lang === "EN"
                ? "was established in 2019 and has since delivered high-quality asphalt work, road maintenance, and consulting services to private, public, and business customers. We carry out everything from courtyards and parking facilities to larger road projects and operating contracts – always with a focus on high quality, safe implementation and close follow-up. With solid local knowledge in Northern Norway and a base in central Midt-Troms, we are a safe and flexible partner for your next project – regardless of size."
                : "ble etablert i 2019 og har siden levert asfaltarbeid, vedlikehold av veier og konsulenttjenester av høy kvalitet til private, offentlige og bedriftskunder. Vi utfører alt fra gårdsplasser og parkeringsanlegg til større veiprosjekter og driftskontrakter – alltid med fokus på høy kvalitet, sikker gjennomføring og tett oppfølging. Med solid lokal kunnskap i Nord-Norge og base i Midt-Troms, er vi en trygg og fleksibel partner for ditt neste prosjekt – uavhengig av størrelse."}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              {lang === "EN" ? (
                <>
                  With an experienced team and strong partners, we have built a
                  solid reputation. We are proud to have achieved{" "}
                  <strong className="text-red-600">
                    positive operating results every year
                  </strong>{" "}
                  and in 2023 received the <strong>Gazelle Award</strong> for
                  strong growth and financial performance.
                </>
              ) : (
                <>
                  Med et erfarent team og sterke partnere har vi bygget et solid
                  omdømme. Vi er stolte over å ha oppnådd{" "}
                  <strong className="text-red-600">
                    positive driftsresultater hvert år
                  </strong>{" "}
                  og i 2023 mottok vi <strong>Gazelle-prisen</strong> for sterk
                  vekst og økonomiske resultater.
                </>
              )}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              {lang === "EN" ? (
                <>
                  We are also an{" "}
                  <span className="font-semibold text-gray-900">
                    approved training company
                  </span>{" "}
                  in the asphalt profession and professional driver profession —
                  reflecting our commitment to developing skilled workers.
                </>
              ) : (
                <>
                  Vi er også et{" "}
                  <span className="font-semibold text-gray-900">
                    godkjent opplæringsselskap
                  </span>{" "}
                  innen asfaltfaget og yrkessjåførfaget — noe som gjenspeiler
                  vårt engasjement for å utvikle dyktige arbeidere.
                </>
              )}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {lang === "EN" ? (
                <>
                  Our main area of operation is{" "}
                  <strong className="text-gray-900">Midt-Troms</strong>, with
                  services delivered throughout Troms and into Nordland when
                  feasible. Every project emphasizes{" "}
                  <span className="font-semibold text-gray-900">
                    health, safety, the environment (HSE)
                  </span>{" "}
                  and durable, cost-effective solutions.
                </>
              ) : (
                <>
                  Vårt hovedområde er{" "}
                  <strong className="text-gray-900">Midt-Troms</strong>, med
                  tjenester levert i hele Troms og inn i Nordland når det er
                  mulig. Hvert prosjekt legger vekt på{" "}
                  <span className="font-semibold text-gray-900">
                    helse, miljø og sikkerhet (HMS)
                  </span>{" "}
                  og holdbare, kostnadseffektive løsninger.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 flex justify-center gap-10 items-center px-6">
        {[award1, award2, award3].map((img, i) => (
          <div key={i} className="overflow-hidden h-max w-max group">
            <Image
              src={img}
              alt="Gallery"
              width={200}
              height={200}
              className="group-hover:scale-90 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
