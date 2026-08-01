import { useEffect, useState } from "react";

function Hero() {

  // در اینجا اسلش اول حذف شد تا با GitHub Pages سازگار شود
  // بخش مربوط به تصاویر هیرو را به این شکل اصلاح کن:
const heroImages = [
  `${import.meta.env.BASE_URL}images/hero1.jpg`,
  `${import.meta.env.BASE_URL}images/hero2.jpg`,
  `${import.meta.env.BASE_URL}images/hero3.jpg`,
];


  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="hero"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={currentImage === index ? "dot active" : "dot"}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>

      <div className="hero-content">
        <h1>خرید، فروش و صادرات زغال‌سنگ</h1>
        <p>
          تأمین مستقیم انواع زغال‌سنگ حرارتی، کک‌شو، آنتراسیت و زغال صنعتی
        </p>

        <a
          className="hero-btn"
          href="https://wa.me/989109684300?text=سلام، درخواست استعلام قیمت زغال‌سنگ دارم."
          target="_blank"
          rel="noreferrer"
        >
          📞 استعلام قیمت
        </a>

        <a
          className="whatsapp"
          href="https://wa.me/989109684300"
          target="_blank"
          rel="noreferrer"
        >
          💬 ارتباط مستقیم در واتساپ
        </a>
      </div>
    </header>
  );
}

export default Hero;
