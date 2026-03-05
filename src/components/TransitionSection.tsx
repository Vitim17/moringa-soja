import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TransitionSection = () => {
  return (
    <section className="section-padding section-container relative overflow-hidden">
      {/* Glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-foreground mb-6"
        >
          Gostou da aula? Então veja o{" "}
          <span className="text-gradient">método completo.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Essa foi apenas a primeira etapa. No curso completo você aprende do
          plantio até o lucro com a moringa, evitando erros e acelerando
          resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg btn-glow animate-pulse-glow hover:opacity-90 transition-opacity"
          >
            Quero Acessar o Curso Completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;
