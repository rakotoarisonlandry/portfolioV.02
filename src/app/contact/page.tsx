import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">CONTACT / FAISONS CONNAISSANCE</p>
        <h1>
          Tout commence par
          <br />
          une <em>conversation.</em>
        </h1>
        <p>
          Un projet web, une application mobile ou une collaboration ?
          Racontez-moi ce que vous avez en tête.
        </p>
      </header>
      <div className="contact-grid">
        <aside className="contact-details">
          <h2>Restons en contact.</h2>
          <p>
            Quelques mots sur votre idée, vos attentes et votre calendrier sont
            un bon point de départ.
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
              <small>TÉLÉPHONE</small>+261 34 05 081 80
            </span>
            <ArrowUpRight size={17} />
          </a>
          <div className="contact-location">
            <MapPin size={20} />
            <span>
              <small>LOCALISATION</small>Antananarivo, Madagascar
              <br />
              Collaboration à distance
            </span>
          </div>
          <a
            href="https://github.com/rakotoarisonlandry"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Retrouvez mon code sur GitHub <ArrowUpRight size={16} />
          </a>
        </aside>
        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
