import { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-moringa.jpg";

const HeroSection = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/3726174e-6009-479b-8521-47fffd3c0c75/players/69a985d26e1bd68075a7f2fa/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Plantação de moringa ao pôr do sol"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground text-sm font-heading font-semibold tracking-wide uppercase">
            Aula Gratuita Disponível
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground mb-6"
        >
          Como ganhar mais dinheiro com a{" "}
          <span className="text-gradient-gold">Moringa</span> do que com a soja em 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary-foreground/80 text-lg sm:text-xl max-w-3xl mx-auto mb-10 font-body leading-relaxed"
        >
          Assista ao vídeo e descubra por que a moringa está superando a soja
          em rentabilidade para produtores em 2026.
        </motion.p>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden mb-10 shadow-2xl border border-primary-foreground/10"
        >
          <vturb-smartplayer
            id="vid-69a985d26e1bd68075a7f2fa"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 animate-float"
        >
          <svg className="w-8 h-8 mx-auto text-primary-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
