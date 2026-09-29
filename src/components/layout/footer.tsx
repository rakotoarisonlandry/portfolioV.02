import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <p className="eyebrow">UNE IDÉE, UN DÉFI, UN PROJET ?</p>
            <h2>
              Créons quelque chose
              <br />
              qui fait la <em>différence.</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-light">
            Discutons ensemble <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="wordmark">
            landry<span>.</span>
          </Link>
          <p>© {new Date().getFullYear()} Landry Rakotoarison</p>
          <div>
            <a href="mailto:landrybrigea@gmail.com">
              Email <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/rakotoarisonlandry"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
