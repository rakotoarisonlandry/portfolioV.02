"use client";

import { ContactForm } from "@/components/ui/contact-form";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
export default function ContactPage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)] max-[799px]:w-[calc(100%-40px)] max-[799px]:py-[58px]">
      <header className="mb-[55px] max-w-[850px]">
        <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "CONTACT / LET’S CONNECT" : "CONTACT / FAISONS CONNAISSANCE"}</p>
        <h1 className="mb-6 text-[clamp(42px,5.4vw,70px)] font-medium leading-[1.15] tracking-[-3px]">
          {en ? "It all starts with" : "Tout commence par"}
          <br />
          {en ? <>a <em>conversation.</em></> : <>une <em>conversation.</em></>}
        </h1>
        <p className="max-w-[660px] text-[15px] leading-[1.9] text-[var(--portfolio-muted)] max-[799px]:text-[13px]">
          {en ? "A web project, mobile application or collaboration? Tell me what you have in mind." : "Un projet web, une application mobile ou une collaboration ? Racontez-moi ce que vous avez en tête."}
        </p>
      </header>
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 max-[799px]:grid-cols-1">
        <aside>
          <h2 className="text-[25px] font-medium tracking-[-1px]">{en ? "Let’s stay in touch." : "Restons en contact."}</h2>
          <p className="my-[20px] mb-[35px] text-[13px] leading-[1.9] text-[var(--portfolio-muted)]">
            {en ? "A few words about your idea, expectations and timeline are a good starting point." : "Quelques mots sur votre idée, vos attentes et votre calendrier sont un bon point de départ."}
          </p>
          <a className="flex items-center gap-[15px] border-b border-[var(--portfolio-line)] py-[22px] text-[12px]" href="mailto:landrybrigea@gmail.com">
            <Mail size={20} />
            <span className="flex-1 leading-[1.8]">
              <small className="mb-[5px] block text-[8px] tracking-[1.5px] text-[var(--portfolio-muted)]">EMAIL</small>landrybrigea@gmail.com
            </span>
            <ArrowUpRight size={17} />
          </a>
          <a className="flex items-center gap-[15px] border-b border-[var(--portfolio-line)] py-[22px] text-[12px]" href="tel:+261340508180">
            <Phone size={20} />
            <span className="flex-1 leading-[1.8]">
              <small className="mb-[5px] block text-[8px] tracking-[1.5px] text-[var(--portfolio-muted)]">{en ? "PHONE" : "TÉLÉPHONE"}</small>+261 34 05 081 80
            </span>
            <ArrowUpRight size={17} />
          </a>
          <div className="flex items-center gap-[15px] border-b border-[var(--portfolio-line)] py-[22px] text-[12px]">
            <MapPin size={20} />
            <span className="flex-1 leading-[1.8]">
              <small className="mb-[5px] block text-[8px] tracking-[1.5px] text-[var(--portfolio-muted)]">{en ? "LOCATION" : "LOCALISATION"}</small>Antananarivo, Madagascar
              <br />
              {en ? "Remote collaboration" : "Collaboration à distance"}
            </span>
          </div>
          <a
            href="https://github.com/rakotoarisonlandry"
            target="_blank"
            rel="noreferrer"
            className="mt-[25px] inline-flex min-h-11 items-center gap-2.5 text-[12px] font-medium text-[var(--portfolio-muted)] hover:text-[var(--portfolio-purple)]"
          >
            {en ? "Find my code on GitHub" : "Retrouvez mon code sur GitHub"} <ArrowUpRight size={16} />
          </a>
        </aside>
        <div className="rounded-[12px] border border-[var(--portfolio-line)] bg-white p-[35px] dark:bg-[#1c1d23] max-[1050px]:p-6 max-[799px]:p-[23px_18px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
