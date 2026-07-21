import AnimatedCounter from '../../components/ui/AnimatedCounter';
import { company } from '../../data/content';
import './StatsBar.css';

export default function StatsBar() {
  return (
    <section className="stats-bar">
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
              {i < company.stats.length - 1 && <div className="stats-bar-sep" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
