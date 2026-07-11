import React, { useState } from "react";

function Export() {

  const [success, setSuccess] = useState(false);

  const sendWhatsApp = (e) => {

    e.preventDefault();

    const form = e.target;

    const company = form.company.value;
    const country = form.country.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const coal = form.coal.value;
    const amount = form.amount.value;
    const description = form.description.value;

    const message =
`🏢 شرکت: ${company}

🌍 کشور: ${country}

📧 ایمیل: ${email}

📞 شماره تماس: ${phone}

⛏️ نوع زغال: ${coal}

📦 مقدار موردنیاز: ${amount}

📝 توضیحات:
${description}`;

    window.open(
      `https://wa.me/989109684300?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    form.reset();

  };

  return (

    <section className="export">

      <div className="export-hero">

        <h1>صادرات زغال‌سنگ به بازارهای جهانی</h1>

        <p>
          شرکت CoalMarket Iran با تجربه در تأمین و صادرات انواع
          زغال‌سنگ حرارتی، کک‌شو و آنتراسیت آماده همکاری با
          مشتریان داخلی و بین‌المللی است.
        </p>

        <button
  onClick={() =>
    document
      .querySelector(".export-form")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  درخواست همکاری
</button>

      </div>

      <div className="export-services">

        <div className="service-card">
          <div>🌍</div>
          <h3>صادرات بین‌المللی</h3>
          <p>ارسال به کشورهای مختلف با استانداردهای جهانی</p>
        </div>

        <div className="service-card">
          <div>🚢</div>
          <h3>حمل دریایی</h3>
          <p>ارسال از طریق بنادر معتبر کشور</p>
        </div>

        <div className="service-card">
          <div>🚛</div>
          <h3>حمل زمینی</h3>
          <p>ارسال سریع به کشورهای همسایه</p>
        </div>

        <div className="service-card">
          <div>📦</div>
          <h3>بسته‌بندی استاندارد</h3>
          <p>بسته‌بندی مطابق استانداردهای صادراتی</p>
        </div>

      </div>

      <div className="export-steps">

        <h2>مراحل همکاری صادرات</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h3>ثبت درخواست</h3>
            <p>ارسال درخواست خرید توسط مشتری</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>ارسال نمونه</h3>
            <p>ارسال نمونه و برگه آنالیز</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>انعقاد قرارداد</h3>
            <p>توافق نهایی و عقد قرارداد</p>
          </div>

          <div className="step">
            <span>4</span>
            <h3>بارگیری و ارسال</h3>
            <p>حمل زمینی یا دریایی تا مقصد</p>
          </div>

        </div>

      </div>

      <div className="export-map">

        <h2>کشورهای مقصد صادرات</h2>

        <p>
          محصولات CoalMarket Iran به کشورهای مختلف منطقه و بازارهای بین‌المللی صادر می‌شود.
        </p>

        <div className="countries">

          <div className="country-card">🇮🇶 عراق</div>
          <div className="country-card">🇹🇷 ترکیه</div>
          <div className="country-card">🇦🇪 امارات</div>
          <div className="country-card">🇮🇳 هند</div>
          <div className="country-card">🇨🇳 چین</div>
          <div className="country-card">🇵🇰 پاکستان</div>
          <div className="country-card">🇴🇲 عمان</div>
          <div className="country-card">🇦🇫 افغانستان</div>

        </div>

      </div>
       <div className="export-form">

        <h2>فرم درخواست همکاری</h2>

        <form onSubmit={sendWhatsApp}>

          <input
            name="company"
            type="text"
            placeholder="نام شرکت"
            required
          />

          <input
            name="country"
            type="text"
            placeholder="کشور"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="ایمیل"
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="شماره تماس"
            required
          />

          <select
  name="coal"
  required
>

  <option value="">
    انتخاب نوع زغال
  </option>

  <option>
    زغال حرارتی
  </option>

  <option>
    زغال کک شو
  </option>

  <option>
    آنتراسیت
  </option>

  <option>
    کنسانتره
  </option>

</select>

          <input
            name="amount"
            type="text"
            placeholder="مقدار موردنیاز (تن)"
            required
          />

          <textarea
            name="description"
            rows="6"
            placeholder="توضیحات یا درخواست خود را بنویسید..."
          ></textarea>

          <button type="submit">
            ارسال درخواست
          </button>

        </form>

        {success && (
          <div className="success-message">
            ✅ درخواست شما با موفقیت آماده ارسال در واتساپ شد.
          </div>
        )}

      </div>

    </section>
  );
}

export default Export;