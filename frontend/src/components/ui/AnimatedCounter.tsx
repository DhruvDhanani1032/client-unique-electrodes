import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

function useCountUp(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [active, end, duration]);

  return count;
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', label, className = '' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp(value, 2, inView);

  return (
    <div ref={ref} className={className}>
      <div className="counter-value">
        {prefix}{count}{suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}
