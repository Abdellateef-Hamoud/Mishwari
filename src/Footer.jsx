import React, { useEffect } from 'react';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaGooglePlay, FaApple, FaArrowUp
} from 'react-icons/fa';

function Footer() {
  useEffect(() => {
    const scrollBtn = document.getElementById('scrollTop');
    const handleScroll = () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        backgroundColor: '#1c8c56',
        color: '#fff',
        padding: '80px 0 30px',
        direction: 'rtl',
        fontFamily: 'Tajawal, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* زخرفة */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: 0,
        width: '100%',
        height: '100px',
        background: 'url("data:image/svg+xml,...")',
        backgroundSize: 'cover',
        transform: 'rotate(180deg)'
      }}></div>

      <div className="container">
        <div className="row text-right justify-content-center">

          {/* عن مشواري */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="hover-effect custom-card">
              <h5 className="footer-heading glow">عن مشواري</h5>
              <p style={{ lineHeight: '1.8' }}>
                مشواري هو الحل الذكي لتنقلاتك اليومية، يقدم تجربة فريدة لحجز وتتبع الرحلات بكل سهولة وأمان.
              </p>

              <div className="social-bar animate">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              </div>
              <a>
               <button className="btn btn-outline-light py-2 download-btn my-3">
                  <span> تسجيل الدخول كمسئول</span>
                </button>
                </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="hover-effect custom-card">
              <h5 className="footer-heading glow">روابط سريعة</h5>
              <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
                <li><a href="#home" className="footer-link">🏠 الرئيسية</a></li>
                <li><a href="#core-feature" className="footer-link">✨ المميزات</a></li>
                <li><a href="#screenshot" className="footer-link">🖼️ معرض الصور</a></li>
                <li><a className="nav-link"
                href="doc.html"
                target="_blank"
                rel="noopener noreferrer">📄 الوثائق</a></li>
                <li><a href="#hire-us" className="footer-link">📞 اتصل بنا</a></li>
              </ul>
            </div>
          </div>

          {/* تحميل التطبيق */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="hover-effect custom-card">
              <h5 className="footer-heading glow">حمل التطبيق الآن</h5>
              <p style={{ lineHeight: '1.8' }}>متاح للتحميل على جميع أجهزتك المفضلة</p>

              <div className="d-flex flex-column mt-4">
                <button className="btn btn-light mb-3 py-2 download-btn">
                  <FaGooglePlay className="mx-2" />
                  <span>نسخة المستخدم - Android</span>
                </button>
                <button className="btn btn-outline-light py-2 download-btn">
                  <FaApple className="mx-2" />
                  <span>نسخة السائق - iOS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مشواري
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            صمم بحب من أجل راحتكم وسهولة تنقلاتكم
          </p>
        </div>
      </div>

      {/* زر الرجوع لأعلى */}
      <button
        id="scrollTop"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          backgroundColor: '#fff',
          color: '#1c8c56',
          border: 'none',
          borderRadius: '50%',
          padding: '12px',
          fontSize: '1.2rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          display: 'none',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        <FaArrowUp />
      </button>

      {/* ستايلات */}
      <style jsx>{`
        .hover-effect {
          background-color: rgba(255,255,255,0.1);
          padding: 25px;
          border-radius: 15px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
        .footer-heading {
          font-weight: 700;
          font-size: 1.4rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          display: inline-block;
        }
        .footer-link:hover {
          color: #ffd700;
          padding-right: 8px;
          text-shadow: 0 0 5px #fff;
        }
        .social-bar {
          margin-top: 25px;
          display: flex;
          justify-content: space-around;
          padding: 12px;
          border-top: 1px solid rgba(255,255,255,0.2);
          background-color: rgba(255,255,255,0.05);
          border-radius: 0 0 15px 15px;
        }
        .social-bar a {
          font-size: 1.6rem;
          color: #fff;
          transition: transform 0.3s, color 0.3s;
        }
        .social-bar a:hover {
          color: #ffd700;
          transform: scale(1.2);
          text-shadow: 0 0 8px rgba(255,255,255,0.6);
        }
        .glow {
          text-shadow: 0 0 10px rgba(255,255,255,0.4);
        }
        .download-btn:hover {
          box-shadow: 0 0 12px rgba(255,255,255,0.3);
        }
        .animate {
          animation: fadeInUp 1s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
