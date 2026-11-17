import { createRoot } from "react-dom/client";
import HeroVisual from "@/components/ui/hero-visual";
import "./index.css";
const mount = document.getElementById("hero-visual-root");
if (mount) createRoot(mount).render(<HeroVisual />);
