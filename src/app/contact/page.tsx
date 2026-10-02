"use client";

import { ContactForm } from "@/components/ui/contact-form";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
export default function ContactPage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">{en ? "CONTACT / LET’S CONNECT" : "CONTACT / FAISONS CONNAISSANCE"}</p>
        <h1>
          {en ? "It all starts with" : "Tout commence par"}
          <br />
          {en ? <>a <em>conversation.</em></> : <>une <em>conversation.</em></>}
        </h1>
        <p>
          {en ? "A web project, mobile application or collaboration? Tell me what you have in mind." : "Un projet web, une application mobile ou une collaboration ? Racontez-moi ce que vous avez en tête."}
        </p>
      </header>
      <div className="contact-grid">
        <aside className="contact-details">
          <h2>{en ? "Let’s stay in touch." : "Restons en contact."}</h2>
          <p>
            {en ? "A few words about your idea, expectations and timeline are a good starting point." : "Quelques mots sur votre idée, vos attentes et votre calendrier sont un bon point de départ."}
          </p>
          <a href="mailto:landrybrigea@gmail.com">
            <Mail size={20} />
            <span>
              <small>EMAIL</small>landrybrigea@gmail.com
            </span>
            <ArrowUpRight size={17} />
          </a>
          <a href="tel:+261340508180">
            <Phone size={20} />
            <span>
              <small>{en ? "PHONE" : "TÉLÉPHONE"}</small>+261 34 05 081 80
            </span>
            <ArrowUpRight size={17} />
          </a>
          <div className="contact-location">
            <MapPin size={20} />
            <span>
              <small>{en ? "LOCATION" : "LOCALISATION"}</small>Antananarivo, Madagascar
              <br />
              {en ? "Remote collaboration" : "Collaboration à distance"}
            </span>
          </div>
          <a
            href="https://github.com/rakotoarisonlandry"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            {en ? "Find my code on GitHub" : "Retrouvez mon code sur GitHub"} <ArrowUpRight size={16} />
          </a>
        </aside>
        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
