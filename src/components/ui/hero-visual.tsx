import GlowHorizonFM from "@/components/ui/glow-horizon";

export default function HeroVisual() {
  return (
    <div className="hero-horizon" aria-hidden="true">
      <GlowHorizonFM variant="top" className="hero-horizon-glow" />
      <div className="hero-horizon-shade" />
      <div className="hero-horizon-grid" />
    </div>
  );
}
