"use client";

import ServiceCard from "./ServiceCard";
import {
  servicesEN,
  servicesNO,
  serviceDetailsEN,
  serviceDetailsNO,
} from "../data/services";
import { Murecho } from "next/font/google";
import ServiceDetailCard from "./ServicesDetailCard";
const murecho = Murecho({ subsets: ["latin"], weight: "100" });

import { useLanguage } from "../context/LanguageContext";
import { servicesTranslations } from "../data-translation/service-translate";
export default function Services() {
  const { lang } = useLanguage();
  const services = lang === "EN" ? servicesEN : servicesNO;
  const serviceDetails = lang === "EN" ? serviceDetailsEN : serviceDetailsNO;
  return (
    <div className={`bg-gray-100 ${murecho.className}`}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="md:text-3xl font-bold text-[#d6262a] text-center">
          {servicesTranslations[lang].heading}
        </h2>
      </div>

      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          reverse={index % 2 === 1}
        />
      ))}
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-20 space-y-8">
        <h3 className="text-2xl font-bold text-center text-[#d6262a] mb-10">
          {servicesTranslations[lang].whyHeading}
        </h3>

        {serviceDetails.map((detail, index) => (
          <ServiceDetailCard
            key={detail.id}
            title={detail.title}
            description={detail.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
