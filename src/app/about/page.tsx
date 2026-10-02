"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
export default function AboutPage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)] max-[799px]:w-[calc(100%-40px)] max-[799px]:py-[58px]">
      <header className="mb-[55px] max-w-[850px]">
        <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "ABOUT / LANDRY RAKOTOARISON" : "À PROPOS / LANDRY RAKOTOARISON"}</p>
        <h1 className="mb-6 text-[clamp(42px,5.4vw,70px)] font-medium leading-[1.15] tracking-[-3px] max-[799px]:text-[42px]">
          {en ? "A curious mind." : "Un esprit curieux."}
          <br />
          {en ? <>Concrete <em>solutions.</em></> : <>Des solutions <em>concrètes.</em></>}
        </h1>
      </header>
      <section className="grid grid-cols-[0.85fr_1.15fr] items-center gap-[70px] max-[1050px]:gap-[35px] max-[799px]:grid-cols-1">
        <div className="relative h-[430px] overflow-hidden rounded-[100px_100px_12px_12px] bg-[#e8dff2] max-[799px]:h-[400px] max-[799px]:w-full max-[799px]:max-w-[420px]">
          <Image
            src="/assets/profil.png"
            alt="Portrait de Landry"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 40vw"
            className="object-contain object-bottom"
          />
        </div>
        <div>
          <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "FULLSTACK DEVELOPER · MADAGASCAR" : "DÉVELOPPEUR FULLSTACK · MADAGASCAR"}</p>
          <h2>{en ? "Hello, I’m Landry." : "Bonjour, moi c’est Landry."}</h2>
          <p className="mt-5 text-[14px] leading-[1.9] text-[var(--portfolio-muted)]">
            {en ? "I build web and mobile applications by connecting interface design, business logic and data. What drives me: understanding a need, simplifying journeys and building a meaningful solution." : <>Je développe des applications web et mobiles en reliant conception
            d’interface, logique métier et données. Ce qui m’intéresse :
            comprendre un besoin, simplifier les parcours et construire une
            solution qui a du sens.</>}
          </p>
          <p className="mt-5 text-[14px] leading-[1.9] text-[var(--portfolio-muted)]">
            {en ? "With Plastikôo, I worked on an ecosystem dedicated to collecting and recovering plastic waste. With our RobIA project, this approach extends to local SEO, artificial intelligence and complementary web and mobile interfaces." : <>Avec Plastikôo, j’ai travaillé sur un écosystème dédié à la collecte
            et à la valorisation des déchets plastiques. Avec notre projet
            RobIA, cette approche se prolonge autour du SEO local, de
            l’intelligence artificielle et d’interfaces web et mobiles
            complémentaires.</>}
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-[23px]">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3.5 rounded-[7px] bg-[var(--portfolio-purple)] px-[23px] py-3.5 text-[12px] font-medium text-white no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#5933b5]">
              {en ? "Let’s connect" : "Faisons connaissance"} <ArrowUpRight size={16} />
            </Link>
            <a
              href="/assets/files/RAKOTOARISON_LANDRY.pdf"
              className="inline-flex min-h-11 items-center gap-2.5 text-[12px] font-medium hover:text-[var(--portfolio-purple)]"
              download
            >
              {en ? "My resume" : "Mon CV"} <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="py-[88px] max-[799px]:py-[58px]">
        <div className="mb-10 flex items-end justify-between gap-[30px] max-[799px]:flex-col max-[799px]:items-start max-[799px]:gap-[15px]">
          <div>
            <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "MY TECHNICAL FOUNDATION" : "MON SOCLE TECHNIQUE"}</p>
            <h2>
              {en ? <>A <em>cross-functional</em> vision.</> : <>Une vision <em>transversale.</em></>}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 max-[799px]:grid-cols-2 max-[799px]:gap-x-[15px] max-[799px]:gap-y-[25px]">
          {[
            {
              title: "Frontend",
              items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            { title: "Mobile", items: ["React Native", "Expo", "Flutter"] },
            {
              title: en ? "Backend & data" : "Backend & données",
              items: [
                "Node.js",
                "Express",
                "Spring Boot",
                "MySQL",
                "PostgreSQL",
              ],
            },
            {
              title: en ? "Tools & methods" : "Outils & méthode",
              items: ["Git", "Docker", "Figma", "Postman", "CI/CD"],
            },
          ].map((group) => (
            <div className="border-t border-[var(--portfolio-line)] pt-5" key={group.title}>
              <h3 className="text-base font-medium">{group.title}</h3>
              <div className="mt-[15px] flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <span className="rounded-[4px] bg-[#efedf0] px-[9px] py-[5px] text-[9px] text-[#625b6c]" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "A FEW STEPS ALONG THE WAY" : "QUELQUES ÉTAPES DU PARCOURS"}</p>
        <h2>
          {en ? <>Learn. Build. <em>Grow.</em></> : <>Apprendre. Construire. <em>Évoluer.</em></>}
        </h2>
        {[
          {
            date: "2024 – 2026",
            title: "Développement fullstack · Plastikôo",
            text: "Un écosystème web et mobile au service de l’économie circulaire : Next.js, React Native et API Express.",
          },
          {
            date: "2024",
            title: "Orange Digital Center",
            text: "Stage et participation à l’Orange Summer Challenge avec le projet Plastikôo.",
          },
          {
            date: "2024",
            title: "Licence en informatique · ENI",
            text: "Mémoire consacré à une plateforme web et mobile de collecte et de transformation des déchets plastiques.",
          },
          {
            date: "2023",
            title: "Stage de développement · NY HAVANA",
            text: "Applications de gestion avec React, Express et MySQL.",
          },
        ].map((item) => (
          <div className="grid grid-cols-[160px_1fr] gap-[25px] border-b border-[var(--portfolio-line)] py-7 max-[799px]:grid-cols-1 max-[799px]:gap-2" key={item.title}>
            <span className="text-[12px] text-[var(--portfolio-purple)]">{item.date}</span>
            <div>
              <h3 className="mb-2.5 text-[17px] font-medium">{item.title}</h3>
              <p className="mb-0 text-[13px] leading-[1.8] text-[var(--portfolio-muted)]">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
