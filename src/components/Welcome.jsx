import { useEffect } from "react";

function Welcome() {

  useEffect(() => {

    const timer = setTimeout(() => {
      const box = document.querySelector(".welcome");
      if (box) {
        box.style.opacity = "0";
        box.style.visibility = "hidden";
      }
    }, 3000);

    return () => clearTimeout(timer);

  }, []);


  return (
    <div className="welcome">

      <h1>
        خوش آمدید
      </h1>

      <h2>
        CoalMarket Iran
      </h2>

      <p>
        تأمین‌کننده و صادرکننده انواع زغال‌سنگ
      </p>

    </div>
  );
}

export default Welcome;