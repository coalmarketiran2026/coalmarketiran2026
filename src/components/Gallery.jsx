import { useState } from "react";

function Gallery() {
  // در Vite، فایل‌های داخل پوشه public مستقیماً از ریشه (/) در دسترس هستند
  // پس نیازی به اضافه کردن baseUrl به ابتدای مسیر نیست، اگر فایل‌ها در public/images باشند.
  
  const images = [
    `images/gallery1.jpg`,
    `images/gallery2.jpg`,
    `images/gallery3.jpg`,
    `images/gallery4.jpg`,
    `images/gallery5.jpg`,
    `images/gallery6.jpg`,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">گالری تصاویر معدن</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              // اضافه کردن یک "/" در ابتدای مسیر برای اطمینان از شروع از ریشه پروژه
              src={`/${import.meta.env.BASE_URL}images/${image.split('/')[1]}`} 
              // روش ساده‌تر و تست شده زیر را امتحان کن اگر بالا کار نکرد:
              // src={`/${import.meta.env.BASE_URL}images/${image.split('/')[1]}`}
              // اما بیا از این نسخه بسیار تمیز استفاده کنیم:
              src={`${import.meta.env.BASE_URL}images/${image.split('/')[1]}`}
              
              // --- نسخه اصلاح شده و نهایی ---
              src={`${import.meta.env.BASE_URL}images/${image.split('/')[1]}`}
              // صبر کن! بیا ساده‌ترین حالت ممکن را بنویسیم:
              alt={`Gallery ${index + 1}`} 
              onError={(e) => {
                console.error("خطا در بارگذاری:", image);
                e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found";
              }}
            />
          </div>
        ))}
      </div>

      {/* بخش نمایش عکس بزرگ (Lightbox) */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <span className="close">&times;</span>
          <img
            src={selectedImage}
            alt="Large View"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
