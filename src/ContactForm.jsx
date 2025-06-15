// ContactForm.jsx
import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section id="hire-us" className="contact-section">
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: '#1c8c56', fontWeight: 'bold' }}>
  
        </h2>
        <form className="contact-form">
          <div className="mb-3">
            <label className="form-label">الاسم</label>
            <input type="text" className="form-control" placeholder="ادخل اسمك" />
          </div>
          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-control" placeholder="example@email.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">الرسالة</label>
            <textarea className="form-control" rows="5" placeholder="اكتب رسالتك هنا"></textarea>
          </div>
          <button type="submit" className="btn btn-success rounded-pill px-4">إرسال</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
