import Hero from "@/components/HomeLandingPageCore/Hero";
import Features from "@/components/HomeLandingPageCore/Features";
import Pricing from "@/components/HomeLandingPageCore/Pricing";
import RevalText from "@/components/HomeLandingPageCore/RevalText";
import Header from "@/components/HomeLandingPageCore/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <RevalText />
    </>
  );
}
