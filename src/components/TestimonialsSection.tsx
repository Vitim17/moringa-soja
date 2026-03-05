import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    city: "MG",
    text: "Depois que comecei a usar a moringa reduzi quase 30% do gasto com ração. Meus animais estão mais saudáveis e a economia foi imediata.",
    stars: 5,
  },
  {
    name: "Maria Oliveira",
    city: "GO",
    text: "Eu não acreditava que uma planta poderia fazer tanta diferença. Em 3 meses já vi resultados concretos na propriedade.",
    stars: 5,
  },
  {
    name: "Carlos Santos",
    city: "BA",
    text: "O curso é direto ao ponto. Aprendi a plantar, manejar e aplicar na alimentação dos bovinos. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ana Pereira",
    city: "MT",
    text: "Comecei com pouca terra e hoje já tenho uma produção que atende toda a propriedade. Valeu cada centavo investido.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding section-container bg-muted/30">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
            O que dizem os <span className="text-gradient">produtores</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
