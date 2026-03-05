import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 bg-card rounded-2xl border border-border p-8 shadow-sm"
        >
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl text-card-foreground mb-2">
              7 dias de garantia incondicional
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Se por qualquer motivo você não gostar do curso, basta solicitar o
              reembolso em até 7 dias e devolvemos 100% do seu dinheiro. Sem
              perguntas, sem burocracia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
