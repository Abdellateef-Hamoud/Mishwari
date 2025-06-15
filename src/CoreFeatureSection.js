import React from 'react';
import './CoreFeatureSection.css';

function CoreFeatureSection() {
  return (
    <section className="core-feature-section" id="core-feature">
      <div className="container text-center">
        <h2 className="core-feature-title">مميزات أساسية في تطبيق مشواري</h2>
        <p className="core-feature-subtitle">
          احصل على أفضل تجربة تنقل بسهولة وسرعة وراحة.
        </p>

        <div className="row core-feature-cards">
          <div className="col-md-4 feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3203/3203071.png" alt="سهولة الاستخدام" />
            <h4>سهولة الاستخدام</h4>
            <p>واجهة بسيطة وسلسة تتيح لك حجز رحلتك في ثواني.</p>
          </div>

          <div className="col-md-4 feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png" alt="تتبع الرحلة" />
            <h4>تتبع الرحلة</h4>
            <p>تابع رحلتك لحظة بلحظة من لحظة الانطلاق حتى الوصول.</p>
          </div>

          <div className="col-md-4 feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="وسائل دفع متنوعة" />
            <h4>وسائل دفع متعددة</h4>
            <p>ادفع بالطريقة اللي تريحك: كاش أو أونلاين بسهولة وأمان.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreFeatureSection;
