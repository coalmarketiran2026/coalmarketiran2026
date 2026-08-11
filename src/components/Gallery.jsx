import { useState, useEffect } from "react";

function Gallery() {
  // ⚠️ بسیار مهم: نام فایل‌ها را حتماً با آنچه در پوشه public داری چک کن.
  // اگر فایل‌های تو مثلاً gallery1.png هستند، اینجا هم باید .png باشد.
  const images = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
    "gallery5.jpg",
    "gallery6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState("");

  // استفاده از BASE_URL برای اطمینان از کارکرد صحیح در GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="gallery" className="gallery" style={{ padding: "40px 0" }}>
      <h2 className="section-title" style={{ textAlign: "center", marginBottom: "30px" }}>
        گالری تصاویر معدن
      </h2>

      <div className="gallery-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "15px",
        padding: "0 20px"
      }}>
        {images.map((imageName) => {
          // ساخت مسیر نهایی
          const fullPath = `${baseUrl}${imageName}`;

          return (
            <div 
              key={imageName} 
              className="gallery-item"
              style={{
                overflow: "hidden",
                borderRadius: "8px",
                height: "200px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={fullPath}
                alt={`تصویر ${imageName}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.3s ease"
                }}
                // افکت زوم هنگام نگه داشتن موس
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onClick={() => setSelectedImage(fullPath)}
                // مدیریت خطا: اگر عکس پیدا نشد، یک عکس جایگزین نشان بده
                onError={(e) => {
                  console.error(`خطا در یافتن فایل: ${fullPath}`);
                  e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
                  e.target.style.objectFit = "contain";
                }}
              />
            </div>
          );
        })}
      </div>

      {/* لایت‌باکس (Lightbox) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage("")}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setSelectedImage("")}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 10001
            }}
          >
            &times;
          </button>
          
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{
              maxWidth: "90%",
              maxHeight: "85%",
              borderRadius: "4px",
              boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              cursor: "default"
            }}
            onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن با کلیک روی خود عکس
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
