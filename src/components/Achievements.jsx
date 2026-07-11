import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [startAnimation, end]);

  return (
    <h1 ref={counterRef}>
      {count}
      {suffix}
    </h1>
  );
}

function Achievements() {
  const data = [
    {
      number: 20,
      suffix: "+",
      title: "سال سابقه",
    },
    {
      number: 500,
      suffix: "K",
      title: "تن فروش",
    },
    {
      number: 12,
      suffix: "",
      title: "کشور مقصد صادرات",
    },
    {
      number: 300,
      suffix: "+",
      title: "مشتری فعال",
    },
  ];

  return (
    <section className="achievements">
      <h2>افتخارات شرکت</h2>

      <div className="achievement-grid">
        {data.map((item, index) => (
          <div className="achievement-card" key={index}>
            <Counter
              end={item.number}
              suffix={item.suffix}
            />

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;