import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portofolio";
import Clients from "../components/Clients";
import Testimony from "../components/Testimony";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Testimony />
      <Contact />
      <Footer />
      
    </main>
  );
}
