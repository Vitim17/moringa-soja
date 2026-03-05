import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TransitionSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-section-green relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-primary-foreground/5" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-6"
        >
          Gostou da aula? Então veja o{" "}
          <span className="text-gradient-gold">método completo.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-primary-foreground/80 text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto"
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold text-lg rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
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
