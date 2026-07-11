function Analysis() {
  const data = [
    {
      product: "زغال‌سنگ حرارتی",
      ash: "12%",
      sulfur: "0.7%",
      moisture: "5%",
      carbon: "68%",
      calorie: "6800 kcal",
    },
    {
      product: "زغال‌سنگ کک‌شو",
      ash: "9%",
      sulfur: "0.5%",
      moisture: "4%",
      carbon: "82%",
      calorie: "7600 kcal",
    },
    {
      product: "آنتراسیت",
      ash: "6%",
      sulfur: "0.3%",
      moisture: "3%",
      carbon: "90%",
      calorie: "8200 kcal",
    },
  ];
const analysisImages = [
  "/images/analysis1.png",
  "/images/analysis2.png",
  "/images/analysis3.png",
  "/images/analysis4.png",
];

  return (
    <section className="analysis">

      <h1>آنالیز آزمایشگاهی زغال‌سنگ</h1>

      <p className="analysis-text">
تمامی محصولات CoalMarket Iran قبل از عرضه در آزمایشگاه‌های معتبر
مورد آزمایش قرار می‌گیرند و همراه با برگه آنالیز رسمی، جهت
اطمینان از کیفیت محصول، در اختیار مشتریان قرار می‌گیرند.
</p>

      <table>

        <thead>
          <tr>
            <th>محصول</th>
            <th>خاکستر</th>
            <th>گوگرد</th>
            <th>رطوبت</th>
            <th>کربن ثابت</th>
            <th>ارزش حرارتی</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.ash}</td>
              <td>{item.sulfur}</td>
              <td>{item.moisture}</td>
              <td>{item.carbon}</td>
              <td>{item.calorie}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <div className="analysis-box">

        <h3>ویژگی‌های آنالیز</h3>

        <ul>
          <li>✅ درصد خاکستر (Ash)</li>
          <li>✅ درصد گوگرد (Sulfur)</li>
          <li>✅ درصد رطوبت (Moisture)</li>
          <li>✅ کربن ثابت (Fixed Carbon)</li>
          <li>✅ مواد فرار (Volatile Matter)</li>
          <li>✅ ارزش حرارتی (Calorific Value)</li>
          <li>✅ خاکستر (Ash)</li>
<li>✅ شاخص تورم (CSN) در صورت نیاز</li>
        </ul>

      </div>

      <div className="analysis-buttons">

        <button>
📄 دانلود نمونه آنالیز PDF
</button>

<button>
📊 درخواست آنالیز اختصاصی
</button>

      </div><div className="analysis-gallery">

  <h2>نمونه برگه‌های آنالیز</h2>

  <div className="gallery-grid">
    {analysisImages.map((image, index) => (
      <div className="analysis-card" key={index}>
        <img src={image} alt={`Analysis ${index + 1}`} />
      </div>
    ))}
  </div>

</div>


    </section>
  );
}

export default Analysis;
