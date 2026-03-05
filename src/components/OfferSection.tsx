import { motion } from "framer-motion";
import { Check, Zap, ShieldCheck } from "lucide-react";

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
    <section id="oferta" className="py-20 sm:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl border border-border shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-section-green px-6 sm:px-10 py-8 text-center">
            <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-foreground">
              Acesso Completo ao Guia Técnico da Moringa
            </h2>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-10">
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {includes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-card-foreground font-body">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-8"
            >
              <p className="text-muted-foreground font-body text-sm line-through mb-1">
                De R$ 197,00
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary font-heading font-black text-5xl sm:text-6xl">
                  R$ 37
                </span>
                <span className="text-primary font-heading font-bold text-2xl">,00</span>
              </div>
              <p className="text-muted-foreground font-body text-sm mt-2">
                Pagamento único • Acesso vitalício
              </p>
            </motion.div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://curso-agromoringa.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-heading font-bold text-lg rounded-full shadow-gold animate-pulse-glow hover:scale-105 transition-transform duration-300"
              >
                🔥 Garantir Meu Acesso Agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
