import { FaFire, FaIndustry, FaFlask } from "react-icons/fa";

function CoalArticle() {
  return (
    <section className="article-page">

      <div className="article-hero">

        <img
          src="/images/coal-banner.jpg"
          alt="Coal"
        />

        <div className="article-overlay">

          <span>دانشنامه تخصصی</span>

          <h1>زغال‌سنگ چیست؟</h1>

          <p>
            مرجع تخصصی آشنایی با زغال‌سنگ، انواع، کاربردها و مشخصات فنی
          </p>

        </div>

      </div>

      <div className="article-container">

        <div className="article-content">

          <h2>زغال‌سنگ چیست؟</h2>

          <p>

            زغال‌سنگ یکی از مهم‌ترین منابع انرژی فسیلی جهان است که طی میلیون‌ها
            سال از بقایای گیاهان تشکیل شده و امروزه نقش بسیار مهمی در صنایع
            فولاد، نیروگاه‌ها، سیمان و صنایع معدنی ایفا می‌کند.

          </p>

          <h2>ویژگی‌های اصلی</h2>

          <div className="feature-grid">

            <div className="feature-box">

              <FaFire />

              <h3>ارزش حرارتی بالا</h3>

              <p>
                مناسب برای نیروگاه‌ها و صنایع انرژی‌بر
              </p>

            </div>

            <div className="feature-box">

              <FaIndustry />

              <h3>کاربرد صنعتی</h3>

              <p>
                فولاد، سیمان، آهک، ریخته‌گری و صنایع شیمیایی
              </p>

            </div>

            <div className="feature-box">

              <FaFlask />

              <h3>آنالیز آزمایشگاهی</h3>

              <p>
                بررسی Ash، Sulfur، Moisture، GCV و FC
              </p>

            </div>

          </div>

          <h2>فرآیند تشکیل</h2>

          <p>

            تشکیل زغال‌سنگ حاصل دفن بقایای گیاهان در محیط‌های باتلاقی و تبدیل
            تدریجی آن‌ها تحت فشار و دمای بالا طی میلیون‌ها سال است.

          </p>

        </div>

      </div>

    </section>
  );
}

export default CoalArticle;