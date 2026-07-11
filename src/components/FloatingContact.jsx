import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";


import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
} from "react-icons/fa";

function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const whatsappLink = useMemo(() => {
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
    navigator.userAgent
  );

  return isMobile
    ? "https://wa.me/989109684300"
    : "https://web.whatsapp.com/send?phone=989109684300";
}, []);

useEffect(() => {
  const timer1 = setTimeout(() => {
    setShowHint(true);
  }, 3000);

  const timer2 = setTimeout(() => {
    setShowHint(false);
  }, 8000);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, []);

  return (
    <div className="floating-contact">

      {open && (
        <div className="floating-menu">

          <a
            href="https://wa.me/989109684300"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            <span>واتساپ</span>
          </a>

          <a href="tel:+989109684300">
            <FaPhoneAlt />
            <span>تماس با فروش</span>
          </a>

          <a href="mailto:info@coalmarketiran.com">
            <FaEnvelope />
            <span>ایمیل شرکت</span>
          </a>

        </div>
      )}
      {showHint && (

  <div className="floating-hint">

    👋 برای استعلام قیمت و مشاوره رایگان اینجا کلیک کنید

  </div>

)}

      <button
        className="floating-btn"
        onClick={() => setOpen(!open)}
      >
        <FaComments />
      </button>

    </div>
  );
}

export default FloatingContact;