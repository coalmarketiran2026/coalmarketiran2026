import {
  FaFire,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

import { useRef } from "react";

function ProductCard({ product }) {

  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;
    const rotateX = -(y - rect.height / 2) / 18;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const handleLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="image-box">

        <div className="badge">
          ویژه
        </div>

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="card-body">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-info">

          <div>
            <strong>Ash</strong>
            <span>{product.ash}</span>
          </div>

          <div>
            <strong>Sulfur</strong>
            <span>{product.sulfur}</span>
          </div>

          <div>
            <strong>GCV</strong>
            <span>{product.calorie}</span>
          </div>

        </div>

        <div className="product-tags">

          <span>
            <FaIndustry />
            صادرات
          </span>

          <span>
            <FaFire />
            کیفیت ممتاز
          </span>

        </div>

        <button className="quote-btn">
          استعلام قیمت
          <FaArrowRight />
        </button>

      </div>
    </div>
  );
}

export default ProductCard;