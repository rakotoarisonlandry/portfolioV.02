"use client";

import { ProjectGallery } from "@/components/sections/project-gallery";
import { useLanguage } from "@/components/layout/language-provider";
export default function WorkPage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)] max-[799px]:w-[calc(100%-40px)] max-[799px]:py-[58px]">
      <header className="mb-[55px] max-w-[850px]">
        <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "THE PORTFOLIO / MY WORK" : "LE PORTFOLIO / MES RÉALISATIONS"}</p>
        <h1 className="mb-6 text-[clamp(42px,5.4vw,70px)] font-medium leading-[1.15] tracking-[-3px]">
          {en ? "Every project," : "Chaque projet,"}
          <br />
          {en ? <>a new <em>perspective</em></> : <>une nouvelle <em>perspective</em></>}
        </h1>
        <p className="max-w-[660px] text-[15px] leading-[1.9] text-[var(--portfolio-muted)] max-[799px]:text-[13px]">
          {en ? "Useful products, technical challenges and the desire to improve with every iteration. Explore the projects and what happens behind the scenes." : "Des produits utiles, des défis techniques et l’envie de faire mieux à chaque itération. Explorez les projets et leurs coulisses."}
        </p>
      </header>
      <ProjectGallery />
    </div>
  );
}
