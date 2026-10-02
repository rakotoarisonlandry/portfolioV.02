"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Smartphone,
  Layers,
  MapPin,
} from "lucide-react";
import { projects } from "@/data/projects";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { useLanguage } from "@/components/layout/language-provider";
export default function HomePage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <>
      <section className="mx-auto grid w-[min(1200px,calc(100%-96px))] grid-cols-[1.08fr_1fr] items-center gap-16 py-20 max-[1050px]:w-[calc(100%-64px)] max-[1050px]:gap-8 max-[799px]:grid-cols-1 max-[799px]:gap-10 max-[799px]:py-12">
        <div className="max-w-[600px]">
          <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold tracking-[1.4px] text-[#696773]">
            <span className="h-2 w-2 rounded-full bg-[#527d5c] shadow-[0_0_0_4px_#527d5c12]" /> {en ? "FULLSTACK DEVELOPER · WEB & MOBILE" : "DÉVELOPPEUR FULLSTACK · WEB & MOBILE"}
          </p>
          <h1 className="my-7 text-[clamp(52px,6.25vw,85px)] font-medium leading-[1.05] tracking-[-5px] max-[1050px]:tracking-[-3.5px] max-[799px]:text-[clamp(60px,12vw,85px)]">
            {en ? "Ideas." : "Des idées."}
            <br />
            {en ? "Code." : "Du code."}
            <br />
            <span>{en ? "Impact." : "De l’impact."}</span>
          </h1>
          <p className="max-w-[395px] text-sm leading-[1.9] text-[#696773] max-[799px]:max-w-[490px]">
            {en ? <>I’m <strong>Landry.</strong> I turn ideas into useful, intuitive and carefully crafted digital experiences.</> : <>Moi, c’est <strong>Landry.</strong> Je transforme des idées en expériences numériques utiles, intuitives et soignées.</>}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 max-[560px]:gap-4">
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center gap-3.5 rounded-md bg-[#7046d5] px-6 py-3.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#5933b5]">
              {en ? "Explore my projects" : "Explorer mes projets"} <ArrowUpRight size={18} />
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 text-xs font-medium text-[#696773] transition hover:text-[#7046d5]">
              {en ? "Get to know me" : "Faire connaissance"} <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-1.5 text-[9px] text-[#696773] max-[799px]:text-[10px]">
            <MapPin size={14} /> {en ? "Based in Madagascar" : "Basé à Madagascar"} <span>·</span> {en ? "Open to remote collaborations" : "Ouvert aux collaborations à distance"}
          </div>
        </div>
          
          <div className="relative h-[clamp(440px,46vw,620px)] max-[1050px]:h-[clamp(400px,48vw,500px)] max-[799px]:h-[clamp(390px,82vw,540px)] max-[560px]:h-[min(125vw,470px)]">
            <Image
              src="/assets/profil.png"
              alt="Portrait de Landry Rakotoarison"
              fill
              priority
              sizes="(max-width: 799px) 90vw, 42vw"
              className="object-contain object-center p-0"
            />
          </div>
      </section>
      <div className="border-y border-[#e6e3e9] py-5">
        <div className="mx-auto flex w-[min(1200px,calc(100%-96px))] flex-wrap items-center justify-between gap-5 max-[1050px]:w-[calc(100%-64px)] max-[799px]:justify-center">
          <span>{en ? "TOOLS I USE DAILY" : "MES OUTILS AU QUOTIDIEN"}</span>
          {["React", "Next.js", "TypeScript", "React Native", "Node.js"].map(
            (item) => (
              <strong key={item}>{item}</strong>
            ),
          )}
        </div>
      </div>
      <section className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)]" id="projects">
        <div className="mb-10 flex items-end justify-between gap-8 max-[799px]:items-start max-[799px]:flex-col">
          <div>
            <p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[#696773]">01 / {en ? "SELECTED PROJECTS" : "PROJETS SÉLECTIONNÉS"}</p>
            <h2 className="text-[clamp(28px,3.2vw,43px)] font-medium leading-tight tracking-[-1.8px]">
              {en ? <>Code comes <em>to life.</em></> : <>Le code prend <em>vie.</em></>}
            </h2>
          </div>
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-medium text-[#696773] transition hover:text-[#7046d5]">
            {en ? "All projects" : "Tous les projets"} <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 max-[799px]:grid-cols-1">
          {[projects[0], projects[1], projects[3], projects[4]].map(
            (project) => (
              <PortfolioCard key={project.slug} project={project} />
            ),
          )}
        </div>
      </section>
      <section className="bg-[#f2eff8] dark:bg-[#17181d]">
        <div className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)]">
          <div className="mb-10 flex items-end justify-between gap-8 max-[799px]:items-start max-[799px]:flex-col">
            <div>
              <p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[#696773]">02 / {en ? "WHAT I CAN BRING" : "CE QUE JE PEUX APPORTER"}</p>
              <h2 className="text-[clamp(28px,3.2vw,43px)] font-medium leading-tight tracking-[-1.8px]">
                {en ? "Think about the experience." : "Penser l’expérience."}
                <br />
                <em>{en ? "Build the solution." : "Construire la solution."}</em>
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-7 text-[#696773]">
              {en ? "From interface to data, I connect technical details to users’ needs." : "De l’interface aux données, je relie les détails techniques aux besoins des utilisateurs."}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 max-[799px]:grid-cols-1">
            {[
              {
                icon: Code2,
                title: en ? "Web development" : "Développement web",
                text: en ? "Clear, responsive interfaces designed for every screen." : "Des interfaces claires, réactives et adaptées à chaque écran.",
                tags: "React / Next.js / TypeScript",
              },
              {
                icon: Smartphone,
                title: en ? "Mobile applications" : "Applications mobiles",
                text: en ? "Fluid journeys designed for everyday use." : "Des parcours fluides, pensés pour les usages du quotidien.",
                tags: "React Native / Expo",
              },
              {
                icon: Layers,
                title: en ? "Fullstack solutions" : "Solutions fullstack",
                text: en ? "Connect a polished experience to a solid technical foundation." : "Connecter une expérience soignée à une base technique solide.",
                tags: "Node.js / API REST / Bases de données",
              },
            ].map(({ icon: Icon, title, text, tags }, i) => (
              <Link href="/services" className="group rounded-xl border border-[#e6e3e9] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-[#39323f] dark:bg-[#1c1d23]" key={title}>
                <div className="flex items-center justify-between text-[#7046d5]">
                  <Icon size={25} />
                  <span>0{i + 1}</span>
                </div>
                <h3 className="mt-7 text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#696773]">{text}</p>
                <small className="mt-5 block text-[10px] font-medium tracking-wide text-[#696773]">{tags}</small>
                <ArrowUpRight className="mt-6 transition group-hover:translate-x-1" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-[min(1200px,calc(100%-96px))] grid-cols-2 gap-16 py-[88px] max-[1050px]:w-[calc(100%-64px)] max-[799px]:grid-cols-1 max-[799px]:gap-8">
        <div>
          <p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[#696773]">03 / {en ? "BEHIND THE CODE" : "DERRIÈRE LE CODE"}</p>
          <h2 className="text-[clamp(28px,3.2vw,43px)] font-medium leading-tight tracking-[-1.8px]">
            {en ? "Curious by nature." : "Curieux par nature."}
            <br />
            <em>{en ? "Developer by passion." : "Développeur par passion."}</em>
          </h2>
        </div>
        <div>
          <p className="text-sm leading-8 text-[#696773]">
            {en ? "I’m Landry Rakotoarison, a fullstack developer based in Madagascar. I create products where technology serves a concrete purpose, from recycling with Plastikôo to local SEO with our RobIA project." : "Je suis Landry Rakotoarison, développeur fullstack basé à Madagascar. J’aime créer des produits où la technique sert un usage concret, du recyclage avec Plastikôo au SEO local avec notre projet RobIA."}
          </p>
          <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#696773] transition hover:text-[#7046d5]">
            {en ? "Discover my journey" : "Découvrir mon parcours"} <ArrowUpRight size={17} />
          </Link>
          <a
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#696773] transition hover:text-[#7046d5]"
            href="/assets/files/RAKOTOARISON_LANDRY.pdf"
            download
          >
            {en ? "Download my resume" : "Télécharger mon CV"} <ArrowDown size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
