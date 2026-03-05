import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 sm:py-28 bg-section-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-6"
        >
          Comece hoje a produzir mais{" "}
          <span className="text-gradient-gold">gastando menos.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-primary-foreground/80 text-lg font-body mb-10 max-w-xl mx-auto"
        >
          Milhares de produtores já estão transformando suas propriedades com a
          moringa. Não fique de fora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-heading font-bold text-lg rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
          >
            Quero Aprender Sobre Moringa Agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
