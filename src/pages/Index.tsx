import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TransitionSection from "@/components/TransitionSection";
import ModulesSection from "@/components/ModulesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  const [pageUnlocked, setPageUnlocked] = useState(false);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection onUnlock={() => setPageUnlocked(true)} />
      {pageUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <TransitionSection />
          <ModulesSection />
          <TestimonialsSection />
          <OfferSection />
          <GuaranteeSection />
          <FinalCTASection />

          <footer className="py-8 bg-card border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Guia Técnico da Moringa. Todos os direitos reservados.
            </p>
          </footer>
        </motion.div>
      )}
    </main>
  );
};

export default Index;
