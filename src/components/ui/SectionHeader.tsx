import type { ReactNode } from 'react';

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({ tag, title, subtitle, center = true, dark = false, children }: Props) {
  return (
    <div className="section-header" style={{ textAlign: center ? 'center' : 'left' }}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {!center && <div className="accent-divider" />}
      {center && subtitle && (
        <p className={`section-subtitle ${dark ? 'text-white-60' : ''}`}>{subtitle}</p>
      )}
      {children}
    </div>
  );
}
