import { motion } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";

const includes = [
  "Acesso vitalício ao curso completo",
  "10 módulos em vídeo aulas",
  "Passo a passo do plantio ao lucro",
  "Atualizações futuras gratuitas",
  "Suporte básico incluso",
  "Materiais em vídeo",
];

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding section-container relative overflow-hidden scroll-mt-4">
      {/* Background gradient no estilo mentoria */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Oferta especial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4">
            Acesso completo ao{" "}
            <span className="text-gradient">Guia Técnico da Moringa</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {includes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 shrink-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-card-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground text-sm line-through mb-1">De R$ 197,00</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary font-black text-5xl sm:text-6xl">R$ 37</span>
              <span className="text-primary font-bold text-2xl">,00</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">Pagamento único • Acesso vitalício</p>
          </motion.div>

          <div className="text-center">
            <a
              href="https://pay.cakto.com.br/fva3wjt_492715"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 btn-glow animate-pulse-glow bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-lg hover:opacity-90 transition-opacity group"
            >
              Garantir Meu Acesso Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
