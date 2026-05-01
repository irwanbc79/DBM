import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Reach from "../components/sections/Reach";
import Services from "../components/sections/Services";
import Advantages from "../components/sections/Advantages";
import Commodities from "../components/sections/Commodities";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Legality from "../components/sections/Legality";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";
import { useReveal } from "../hooks/use-reveal";

export default function Home() {
  useReveal();
  useEffect(() => {
    document.title = "PT. Dira Baraka Mulia — Trusted Trading Company";
  }, []);
  return (
    <main>
      <Hero />
      <Stats />
      <Reach />
      <Services />
      <Advantages />
      <Commodities />
      <Portfolio />
      <Process />
      <Legality />
      <CTA />
      <Contact />
    </main>
  );
}
