function Process() {
  return (

    <section className="process">

      <h2>فرآیند تولید و صادرات</h2>

      <p className="process-text">
        از استخراج زغال‌سنگ تا تحویل در مقصد، تمامی مراحل با کنترل کیفیت انجام می‌شود.
      </p>

      <div className="process-grid">

        <div className="process-card">
          <div className="icon">⛏️</div>
          <h3>استخراج</h3>
          <p>استخراج مستقیم از معادن معتبر</p>
        </div>

        <div className="arrow">➜</div>

        <div className="process-card">
          <div className="icon">⚙️</div>
          <h3>دانه‌بندی</h3>
          <p>تفکیک و آماده‌سازی محصول</p>
        </div>

        <div className="arrow">➜</div>

        <div className="process-card">
          <div className="icon">🧪</div>
          <h3>آنالیز</h3>
          <p>تست کامل در آزمایشگاه</p>
        </div>

        <div className="arrow">➜</div>

        <div className="process-card">
          <div className="icon">🚛</div>
          <h3>بارگیری</h3>
          <p>حمل زمینی یا دریایی</p>
        </div>

        <div className="arrow">➜</div>

        <div className="process-card">
          <div className="icon">🌍</div>
          <h3>صادرات</h3>
          <p>ارسال به مشتریان داخلی و خارجی</p>
        </div>

      </div>

    </section>

  );
}

export default Process;