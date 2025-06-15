import React, { useState } from 'react';
import './FeedbackWizard.css';

const FeedbackWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bookingEase: '',
    waitTime: '',
    driverRating: '',
    appIssues: '',
    recommend: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم إرسال التقييم:', formData);
    alert('شكرًا لمشاركتك!');
  };

  return (
    <div className="wizard-container">
      <form onSubmit={handleSubmit} className="wizard-form">
        {step === 1 && (
          <div>
            <label>تقييم سهولة الحجز (1 إلى 5):</label>
            <input
              type="number"
              name="bookingEase"
              min="1"
              max="5"
              value={formData.bookingEase}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label>تقييم وقت الانتظار (1 إلى 5):</label>
            <input
              type="number"
              name="waitTime"
              min="1"
              max="5"
              value={formData.waitTime}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <label>ما مدى رضاك عن تعامل السائق؟</label>
            <select name="driverRating" value={formData.driverRating} onChange={handleChange} required>
              <option value="">اختر...</option>
              <option value="راضٍ جدًا">راضٍ جدًا</option>
              <option value="راضٍ">راضٍ</option>
              <option value="محايد">محايد</option>
              <option value="غير راضٍ">غير راضٍ</option>
              <option value="غير راضٍ تمامًا">غير راضٍ تمامًا</option>
            </select>
          </div>
        )}

        {step === 4 && (
          <div>
            <label>هل واجهت أي مشاكل أثناء استخدام التطبيق؟</label>
            <textarea
              name="appIssues"
              value={formData.appIssues}
              onChange={handleChange}
              placeholder="اكتب ملاحظاتك..."
            ></textarea>
          </div>
        )}

        {step === 5 && (
          <div>
            <label>هل تنصح الآخرين باستخدام التطبيق؟</label>
            <select name="recommend" value={formData.recommend} onChange={handleChange} required>
              <option value="">اختر...</option>
              <option value="نعم">نعم</option>
              <option value="لا">لا</option>
            </select>
          </div>
        )}

        {step === 6 && (
          <div>
            <label>هل لديك أي تعليقات إضافية؟</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="اكتب تعليقك هنا..."
            ></textarea>
          </div>
        )}

        <div className="wizard-buttons">
          {step > 1 && <button type="button" onClick={handleBack}>السابق</button>}
          {step < 6 && <button type="button" onClick={handleNext}>التالي</button>}
          {step === 6 && <button type="submit">إرسال</button>}
        </div>
      </form>
    </div>
  );
};

export default FeedbackWizard;
