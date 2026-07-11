function Map() {
  return (
    <section className="map" data-aos="fade-up">

      <h2>موقعیت شرکت</h2>

      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Damghan,Iran&output=embed"
        width="100%"
        height="450"
        style={{
          border: 0,
          borderRadius: "15px"
        }}
        loading="lazy"
      ></iframe>

    </section>
  );
}

export default Map;