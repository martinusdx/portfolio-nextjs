import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import FeaturedProject from "@/components/home/FeaturedProject";
import OtherProjects from "@/components/home/OtherProjects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <OtherProjects />
      <Contact />
      <Footer />
    </main>
  );
}