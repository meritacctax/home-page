import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { websiteJsonLd, businessJsonLd } from "@/lib/seo/structured-data";

export default function Home() {
  return (
    <>
      {[websiteJsonLd, businessJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Industries />
        <Process />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
