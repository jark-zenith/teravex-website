import { motion } from "framer-motion";
import GlowHorizonFM from "@/components/ui/glow-horizon";
const EASE = [0.16, 1, 0.3, 1] as const;
export default function HeroVisual() {
  return <div className="hero-art" aria-hidden="true">
    <GlowHorizonFM variant="top" className="hero-glow" />
    <motion.div className="hero-image-primary" initial={{ opacity: 0, x: "-50%", y: "-43%", scale: 0.9, rotate: -9 }}
      animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1, rotate: -6 }} transition={{ duration: 1.35, delay: 0.35, ease: EASE }}>
      <img src="/assets/hero-visual.webp" alt="" fetchPriority="high" />
    </motion.div>
    <motion.div className="hero-image-secondary" initial={{ opacity: 0, x: 28, y: 24, rotate: 9 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }} transition={{ duration: 1.2, delay: 0.85, ease: EASE }}>
      <img src="/assets/hero-detail.webp" alt="" loading="eager" />
    </motion.div>
    <div className="hero-art-caption"><span>TERAVEX / 001</span><span>INTELLIGENCE IN MOTION</span></div>
  </div>;
}
