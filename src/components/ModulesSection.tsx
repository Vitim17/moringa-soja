import { motion } from "framer-motion";
import {
  BookOpen,
  Leaf,
  Sprout,
  Beef,
  TrendingUp,
  BarChart3,
  CircleDot,
  AlertTriangle,
  MapPin,
  Mountain,
  ChevronDown,
  Trophy,
} from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Bem-vindo à Nova Oportunidade da Moringa", num: 1, free: true },
  { icon: Leaf, title: "Por Que a Moringa Está Gerando Renda no Campo", num: 2 },
  { icon: Sprout, title: "Como Começar do Zero Mesmo Sem Experiência", num: 3 },
  { icon: Beef, title: "Como Reduzir o Custo da Ração em Até 50%", num: 4 },
  { icon: TrendingUp, title: "Como Transformar a Moringa em Uma Nova Fonte de Renda", num: 5 },
  { icon: BarChart3, title: "Os Ajustes que Fazem a Produção Dar Lucro", num: 6 },
  { icon: CircleDot, title: "O Segredo das Sementes e da Produção Produtiva", num: 7 },
  { icon: AlertTriangle, title: "Os Erros que Fazem Produtores Perder Dinheiro", num: 8 },
  { icon: MapPin, title: "Como Aplicar Tudo na Prática e Começar a Ter Resultado", num: 9 },
  { icon: Mountain, title: "Caminho da Escala", num: 10 },
];

const ModulesSection = () => {
  return (
    <section className="section-padding section-container">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            10 módulos em vídeo aulas do plantio ao lucro
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center gap-0">
          <div className="relative flex flex-col items-center w-full">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/30 to-primary"
              aria-hidden
            />
            {modules.map((mod, i) => (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex flex-col items-center w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="relative z-10 w-full max-w-md bg-card rounded-2xl p-6 border border-border shadow-lg hover:border-primary/40 hover:shadow-primary/5 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <mod.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      {mod.free && (
                        <span className="inline-block mb-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase">
                          Grátis
                        </span>
                      )}
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                        Módulo {mod.num}
                      </span>
                      <h3 className="font-bold text-card-foreground mt-1 text-lg leading-snug">
                        {mod.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>

                {i < modules.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex flex-col items-center py-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-0.5 h-4 bg-primary/30 rounded-full" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 mt-4 w-full max-w-md"
          >
            <div className="flex flex-col items-center gap-4 bg-card border border-primary/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-bold text-xl sm:text-2xl text-foreground leading-snug">
                Parabéns! Você agora está pronto para fazer seu plantio da moringa.
              </p>
              <p className="text-muted-foreground text-sm">
                Conclua os 10 módulos e coloque em prática todo o conhecimento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
