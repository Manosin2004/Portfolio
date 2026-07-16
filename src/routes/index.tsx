import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Preloader } from "@/components/portfolio/Preloader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SocialRail } from "@/components/portfolio/SocialRail";
import { BackToTop } from "@/components/portfolio/BackToTop";
import portrait from "@/assets/portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manosin Balaji — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Award-worthy portfolio of Manosin Balaji — a Full Stack Developer crafting modern React, Node.js and Firebase products.",
      },
      { property: "og:title", content: "Manosin Balaji — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Explore projects, skills, experience and résumé of Manosin Balaji, Full Stack Developer.",
      },
      { property: "og:image", content: portrait.url },
      { name: "twitter:image", content: portrait.url },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Preloader />
      <Background />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <SocialRail />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
