function Contact() {
  return (
    <section id="contact" className="contact" data-aos="zoom-in">

      <h2>تماس با ما</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="نام و نام خانوادگی"
        />

        <input
          type="tel"
          placeholder="شماره تماس"
        />

        <input
          type="email"
          placeholder="ایمیل (اختیاری)"
        />

        <textarea
          rows="6"
          placeholder="پیام خود را بنویسید..."
        ></textarea>

        <button type="submit">
          ارسال پیام
        </button>

      </form>

    </section>
  );
}

export default Contact;