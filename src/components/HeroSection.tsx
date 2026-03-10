import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-moringa.jpg";

const UNLOCK_AFTER_MS = 2 * 60 * 1000 + 14 * 1000; // 2 min 14 seg

const fadeSoft = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

type HeroSectionProps = {
  onUnlock?: () => void;
};

const HeroSection = ({ onUnlock }: HeroSectionProps) => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setUnlocked(true);
      onUnlock?.();
    }, UNLOCK_AFTER_MS);
    return () => clearTimeout(t);
  }, [onUnlock]);

  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/3726174e-6009-479b-8521-47fffd3c0c75/players/69a985d26e1bd68075a7f2fa/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex flex-col items-center justify-center section-padding section-container overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Plantação de moringa ao pôr do sol"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {unlocked && (
          <motion.div
            {...fadeSoft}
            className="mb-5 sm:mb-8"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-card border border-border/50 text-foreground text-sm font-semibold tracking-wide uppercase">
              Aula Gratuita Disponível
            </span>
            <h1 className="text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground mb-3 sm:mb-5 md:mb-6">
              Como ganhar mais dinheiro com a{" "}
              <span className="text-primary">Moringa</span> do que com a soja em 2026
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-5 sm:mb-8 md:mb-10 leading-relaxed">
              Assista ao vídeo e descubra por que a moringa está superando a soja
              em rentabilidade para produtores em 2026.
            </p>
          </motion.div>
        )}

        <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden mb-8 shadow-2xl border border-border">
          <vturb-smartplayer
            id="vid-69a985d26e1bd68075a7f2fa"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>

        <div className="min-h-[3.5rem] flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.div
                key="locked"
                {...fadeSoft}
                className="rounded-xl border border-border bg-card/80 px-6 py-4 text-base sm:text-lg font-medium text-foreground"
              >
                👉 A oportunidade será liberada durante a aula
              </motion.div>
            ) : (
              <motion.div
                key="cta"
                {...fadeSoft}
                className="flex justify-center"
              >
                <a
                  href="#oferta"
                  className="inline-flex items-center justify-center gap-2 btn-glow animate-pulse-glow text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3.5 sm:py-4 md:py-5 h-auto font-bold w-full sm:w-auto min-h-12 sm:min-h-14 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  QUERO ACESSAR O CURSO COMPLETO
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {unlocked && (
          <motion.div
            {...fadeSoft}
            transition={{ ...fadeSoft.transition, delay: 0.3 }}
            className="mt-12 opacity-70"
          >
            <svg className="w-8 h-8 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
