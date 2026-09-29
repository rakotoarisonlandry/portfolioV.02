import {
  BarChart3,
  Globe,
  Sparkles,
  Smartphone,
  ArrowUpRight,
  Check,
} from "lucide-react";
export function RobiaVisual() {
  return (
    <div
      className="robia-visual"
      role="img"
      aria-label="Illustration conceptuelle de l’écosystème RobIA : dashboard SEO et application mobile. Ce visuel n’est pas une capture du produit."
    >
      <div className="robia-orbit orbit-one" />
      <div className="robia-orbit orbit-two" />
      <div className="mock-window">
        <div className="mock-top">
          <span />
          <span />
          <span />
          <b>
            RobIA <Sparkles size={12} />
          </b>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <b>
              R<span>•</span>
            </b>
            <BarChart3 size={16} />
            <Globe size={16} />
            <Sparkles size={16} />
          </div>
          <div className="mock-content">
            <div className="mock-heading">
              <div>
                <small>VOTRE ESPACE</small>
                <strong>Une vision plus claire.</strong>
              </div>
              <span className="mock-icon">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="mock-metrics">
              <div>
                <small>Analyser</small>
                <strong>SEO local</strong>
                <span>Comprendre sa visibilité</span>
              </div>
              <div>
                <small>Améliorer</small>
                <strong>Plan d’action</strong>
                <span>Prioriser les opportunités</span>
              </div>
            </div>
            <div className="mock-chart">
              <div>
                <b>Votre prochaine progression</b>
                <small>De l’analyse à l’action</small>
              </div>
              <div className="chart-bars">
                {[28, 42, 36, 58, 48, 70, 65, 86, 78, 100].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mock-phone">
        <span className="phone-notch" />
        <div className="phone-brand">
          RobIA <Sparkles size={12} />
        </div>
        <small>Votre copilote SEO</small>
        <div className="phone-ring">
          <Globe size={27} />
        </div>
        <b>Passons à l’action.</b>
        <div className="phone-task">
          <Check size={12} /> Audits & rapports
        </div>
        <div className="phone-task">
          <Check size={12} /> Opportunités
        </div>
        <div className="phone-nav">
          <Globe size={14} />
          <BarChart3 size={14} />
          <Smartphone size={14} />
        </div>
      </div>
      <span className="visual-caption">
        WEB + MOBILE · ILLUSTRATION CONCEPTUELLE
      </span>
    </div>
  );
}
