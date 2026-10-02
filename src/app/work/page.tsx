"use client";

import { ProjectGallery } from "@/components/sections/project-gallery";
import { useLanguage } from "@/components/layout/language-provider";
export default function WorkPage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">{en ? "THE PORTFOLIO / MY WORK" : "LE PORTFOLIO / MES RÉALISATIONS"}</p>
        <h1>
          {en ? "Every project," : "Chaque projet,"}
          <br />
          {en ? <>a new <em>perspective.</em></> : <>une nouvelle <em>perspective.</em></>}
        </h1>
        <p>
          {en ? "Useful products, technical challenges and the desire to improve with every iteration. Explore the projects and what happens behind the scenes." : "Des produits utiles, des défis techniques et l’envie de faire mieux à chaque itération. Explorez les projets et leurs coulisses."}
        </p>
      </header>
      <ProjectGallery />
    </div>
  );
}
