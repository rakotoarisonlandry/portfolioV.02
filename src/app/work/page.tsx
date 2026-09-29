import type { Metadata } from "next";
import { ProjectGallery } from "@/components/sections/project-gallery";
export const metadata: Metadata = {
  title: "Projets web & mobile",
  description:
    "Découvrez RobIA, Plastikôo, Tech Paradise et mes projets web et mobile, avec leur contexte et leurs technologies.",
};
export default function WorkPage() {
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">LE PORTFOLIO / MES RÉALISATIONS</p>
        <h1>
          Chaque projet,
          <br />
          une nouvelle <em>perspective.</em>
        </h1>
        <p>
          Des produits utiles, des défis techniques et l’envie de faire mieux à
          chaque itération. Explorez les projets et leurs coulisses.
        </p>
      </header>
      <ProjectGallery />
    </div>
  );
}
