import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyZokix from "@/components/WhyZokix";
import PortfolioPreview from "@/components/PortfolioPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyZokix />
      <PortfolioPreview />
      <Contact />
    </>
  );
}
