import {
  FaBookOpen,
  FaFire,
  FaIndustry,
  FaGlobeAsia,
  FaFlask,
  FaQuestionCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Encyclopedia() {

  const articles = [

    {
      icon: <FaBookOpen />,
      title: "زغال‌سنگ چیست؟",
      text: "زغال‌سنگ یکی از مهم‌ترین منابع انرژی فسیلی جهان است که طی میلیون‌ها سال از بقایای گیاهان تشکیل شده و امروزه در صنایع فولاد، تولید برق، سیمان، ریخته‌گری و بسیاری از صنایع سنگین به عنوان یک ماده اولیه استراتژیک مورد استفاده قرار می‌گیرد.",
    },

    {
      icon: <FaFire />,
      title: "زغال‌سنگ حرارتی",
      text: "زغال‌سنگ حرارتی به دلیل ارزش حرارتی بالا، قیمت اقتصادی و قابلیت احتراق مناسب، یکی از پرکاربردترین سوخت‌های صنعتی جهان بوده و در نیروگاه‌های برق، صنایع سیمان، کارخانه‌های آهک، آجر و سایر واحدهای تولیدی مورد استفاده قرار می‌گیرد.",
    },

    {
      icon: <FaIndustry />,
      title: "زغال‌سنگ کک‌شو",
      text: "زغال‌سنگ کک‌شو ماده اولیه تولید کک متالورژی بوده و نقش اساسی در صنعت فولاد، ریخته‌گری و تولید چدن ایفا می‌کند. کیفیت این محصول بر اساس ویژگی‌های متالورژیکی و نتایج آنالیز آزمایشگاهی ارزیابی می‌شود.",
    },

    {
      icon: <FaGlobeAsia />,
      title: "آنتراسیت",
      text: "آنتراسیت با بالاترین درصد کربن ثابت، کمترین میزان رطوبت و خاکستر و ارزش حرارتی بسیار بالا، باکیفیت‌ترین نوع زغال‌سنگ محسوب می‌شود و در صنایع فولاد، تصفیه آب، تولید کربن و بازارهای صادراتی کاربرد گسترده دارد.",
    },

    {
      icon: <FaFlask />,
      title: "آنالیز زغال‌سنگ",
      text: "آنالیز زغال‌سنگ شامل بررسی شاخص‌هایی نظیر درصد خاکستر (Ash)، گوگرد (Sulfur)، رطوبت (Moisture)، کربن ثابت (Fixed Carbon)، مواد فرار (Volatile Matter) و ارزش حرارتی (GCV) است که کیفیت و کارایی محصول را در کاربردهای صنعتی تعیین می‌کنند.",
    },

    {
      icon: <FaQuestionCircle />,
      title: "سؤالات متداول",
      text: "در این بخش به رایج‌ترین پرسش‌های مشتریان درباره انتخاب نوع زغال‌سنگ، مشخصات فنی، آنالیز آزمایشگاهی، شرایط فروش، حمل‌ونقل، صادرات و نحوه همکاری با CoalMarket Iran پاسخ داده می‌شود.",
    },

  ];

  return (

    <section className="encyclopedia">

      <div className="section-title">

        <h1>دانشنامه تخصصی زغال‌سنگ</h1>

        <p>
          دانشنامه CoalMarket Iran با هدف ارائه اطلاعات تخصصی، فنی و کاربردی
          درباره زغال‌سنگ تهیه شده است تا مدیران صنایع، بازرگانان،
          سرمایه‌گذاران و فعالان حوزه معدن بتوانند با شناخت دقیق‌تر
          محصولات، تصمیم‌گیری مطمئن‌تری در فرآیند خرید، فروش و صادرات
          داشته باشند.
        </p>

      </div>

      <div className="ency-search">

        <input
          type="text"
          placeholder="جستجو در مقالات دانشنامه..."
        />

      </div>

      <div className="ency-categories">

        <button>همه مقالات</button>

        <button>انواع زغال‌سنگ</button>

        <button>آنالیز و آزمایشگاه</button>

        <button>کاربردهای صنعتی</button>

        <button>صادرات</button>

      </div>

      <div className="ency-grid">

        {articles.map((item, index) => (

          <div className="ency-card" key={index}>

            <div className="ency-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            {index === 0 ? (
              <Link to="/coal-article">
                <button>مطالعه مقاله</button>
              </Link>
            ) : (
              <button>به‌زودی...</button>
            )}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Encyclopedia;