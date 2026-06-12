import { LanguageProvider } from "./context/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { WhyUs } from "./components/WhyUs";
import { Portfolio } from "./components/Portfolio";
import { Founder } from "./components/Founder";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <WhyUs />
          <Portfolio />
          <Founder />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}