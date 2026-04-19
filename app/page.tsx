import Features from "./components/home/Features";
import GymTrainers from "./components/home/GymTrainers";
import Hero from "./components/home/Hero";
import OurCoachingServices from "./components/home/OurCoachingServices";
import Transformation from "./components/home/Transformation";
import ServicesAccordion from "./components/ServicesAccordion";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <GymTrainers/>
      <OurCoachingServices/>
      <Transformation />
    </div>
  );
}
