import { useState } from "react";

function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">

      <h2>گالری تصاویر معدن</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <span className="close">&times;</span>

          <img
            src={selectedImage}
            alt="Large"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Gallery;