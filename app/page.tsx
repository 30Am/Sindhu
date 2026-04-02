import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AnimatedStats from "@/components/AnimatedStats";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ComparisonTable from "@/components/ComparisonTable";
import IntakeForm from "@/components/IntakeForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AnimatedStats />
        <PortfolioCarousel />
        <About />
        <Services />
        <HowItWorks />
        <ComparisonTable />
        <IntakeForm />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
