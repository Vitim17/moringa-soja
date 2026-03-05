import HeroSection from "@/components/HeroSection";
import TransitionSection from "@/components/TransitionSection";
import ModulesSection from "@/components/ModulesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TransitionSection />
      <ModulesSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />

      {/* Footer */}
      <footer className="py-8 bg-accent text-center">
        <p className="text-accent-foreground/60 font-body text-sm">
          © {new Date().getFullYear()} Guia Técnico da Moringa. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
