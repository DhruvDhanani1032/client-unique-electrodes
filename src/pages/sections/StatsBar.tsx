import {
  FaFileInvoiceDollar,
  FaBolt,
  FaAward,
} from "react-icons/fa";
import AnimatedCounter from "../../components/ui/AnimatedCounter";
import { company } from "../../data/content";
import "./StatsBar.css";

export default function StatsBar() {
  return (
    <section className="stats-bar">
      {/* Accreditation Trust Ribbon */}
      <div className="accreditation-ribbon">
        <div className="container">
          <div className="accreditation-ribbon-content">
            <span className="accreditation-item">
              <FaFileInvoiceDollar className="acc-icon" />
              <span>
                <strong>GST</strong> Registered
              </span>
            </span>
            <span className="acc-sep">|</span>
            <span className="accreditation-item">
              <FaBolt className="acc-icon" />
              <span>
                <strong>IS 3043</strong> Compliant
              </span>
            </span>
            <span className="acc-sep">|</span>
            <span className="accreditation-item">
              <FaAward className="acc-icon" />
              <span>
                <strong>MSME</strong> Certified
              </span>
            </span>
            {/* <span className="acc-sep">|</span>
            <span className="accreditation-item">
              <FaCheckCircle className="acc-icon" />
              <span>
                <strong>ISO 9001:2015</strong> Certified
              </span>
            </span> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-bar-grid">
          {company.stats.map((stat, i) => (
            <div key={i} className="stats-bar-item">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="stats-bar-counter"
              />
              {i < company.stats.length - 1 && (
                <div className="stats-bar-sep" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
