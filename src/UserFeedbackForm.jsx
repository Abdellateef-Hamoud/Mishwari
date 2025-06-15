import React, { useState } from 'react';

const UserFeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    easeOfBooking: '',
    waitingTime: '',
    driverPoliteness: '',
    appDesign: '',
    overallSatisfaction: '',
    suggestions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">شاركنا رأيك</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="mb-3">
              <label className="form-label">ما مدى سهولة الحجز؟</label>
              <select className="form-select" name="easeOfBooking" value={formData.easeOfBooking} onChange={handleChange} required>
                <option value="">اختر تقييمًا</option>
                <option value="1">1 - صعب جدًا</option>
                <option value="2">2</option>
                <option value="3">3 - متوسط</option>
                <option value="4">4</option>
                <option value="5">5 - سهل جدًا</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">ما تقييمك لمدة الانتظار قبل وصول السيارة؟</label>
              <select className="form-select" name="waitingTime" value={formData.waitingTime} onChange={handleChange} required>
                <option value="">اختر تقييمًا</option>
                <option value="1">1 - طويل جدًا</option>
                <option value="2">2</option>
                <option value="3">3 - مقبول</option>
                <option value="4">4</option>
                <option value="5">5 - سريع جدًا</option>
              </select>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary" onClick={nextStep}>التالي</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-3">
              <label className="form-label">هل كان السائق مهذبًا؟</label>
              <select className="form-select" name="driverPoliteness" value={formData.driverPoliteness} onChange={handleChange} required>
                <option value="">اختر تقييمًا</option>
                <option value="1">1 - لا إطلاقًا</option>
                <option value="2">2</option>
                <option value="3">3 - متوسط</option>
                <option value="4">4</option>
                <option value="5">5 - نعم جدًا</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">ما رأيك في تصميم التطبيق؟</label>
              <select className="form-select" name="appDesign" value={formData.appDesign} onChange={handleChange} required>
                <option value="">اختر تقييمًا</option>
                <option value="1">1 - غير مريح</option>
                <option value="2">2</option>
                <option value="3">3 - مقبول</option>
                <option value="4">4</option>
                <option value="5">5 - رائع جدًا</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>السابق</button>
              <button type="button" className="btn btn-primary" onClick={nextStep}>التالي</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-3">
              <label className="form-label">تقييمك العام للتطبيق؟</label>
              <select className="form-select" name="overallSatisfaction" value={formData.overallSatisfaction} onChange={handleChange} required>
                <option value="">اختر تقييمًا</option>
                <option value="1">1 - سيء جدًا</option>
                <option value="2">2</option>
                <option value="3">3 - مقبول</option>
                <option value="4">4</option>
                <option value="5">5 - ممتاز</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">هل لديك أي اقتراحات؟</label>
              <textarea className="form-control" name="suggestions" rows="4" value={formData.suggestions} onChange={handleChange}></textarea>
            </div>

            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>السابق</button>
              <button type="submit" className="btn btn-success">إرسال</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default UserFeedbackForm;
