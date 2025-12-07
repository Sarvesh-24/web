import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="flex flex-col">
      <HeroImage />
      <HeroContent />
    </section>
  );
}
