import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user1 from './assets/screenshots/user1.png';
import user2 from './assets/screenshots/user2.png';
import user3 from './assets/screenshots/user3.png';
import driver1 from './assets/screenshots/driver1.png';
import driver2 from './assets/screenshots/drivwr2.png';
import driver3 from './assets/screenshots/driver3.png';

const ScreenshotSection = () => {
  const [activeCategory, setActiveCategory] = useState('user');

  const userScreenshots = [user1, user2, user3];
  const driverScreenshots = [driver1, driver2, driver3];
  const imagesToShow = activeCategory === 'user' ? userScreenshots : driverScreenshots;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section
      id="screenshot"
      style={{
        padding: '100px 0',
        backgroundColor: '#f9f9f9',
        direction: 'rtl',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="container text-center">
        <h2
          className="mb-4"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1c8c56',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            transform: 'translateY(-20px)',
            opacity: 0,
            animation: 'fadeInUp 0.8s forwards 0.3s'
          }}
        >
          لقطات من التطبيق
        </h2>
        <p
          className="mb-5"
          style={{
            fontSize: '1.1rem',
            color: '#555',
            transform: 'translateY(20px)',
            opacity: 0,
            animation: 'fadeInUp 0.8s forwards 0.5s'
          }}
        >
          تطبيق مشواري يساعدك على حجز سيارة بسهولة وسرعة، مع واجهة مستخدم احترافية لكل من الراكب والسائق.
        </p>

        {/* أزرار الفلترة */}
        <div
          className="mb-5 d-flex justify-content-center gap-4 flex-wrap"
          style={{
            transform: 'scale(0.9)',
            opacity: 0,
            animation: 'fadeIn 0.6s forwards 0.7s, scaleIn 0.6s forwards 0.7s'
          }}
        >
          <button
            className={`btn rounded-pill px-4 py-2 ${activeCategory === 'user' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => setActiveCategory('user')}
            style={{
              transition: 'all 0.3s',
              boxShadow: activeCategory === 'user' ? '0 4px 8px rgba(28, 140, 86, 0.3)' : 'none'
            }}
          >
            المستخدم
          </button>
          <button
            className={`btn rounded-pill px-4 py-2 ${activeCategory === 'driver' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => setActiveCategory('driver')}
            style={{
              transition: 'all 0.3s',
              boxShadow: activeCategory === 'driver' ? '0 4px 8px rgba(28, 140, 86, 0.3)' : 'none'
            }}
          >
            السائق
          </button>
        </div>

        <div style={{
          padding: '20px 0',
          transform: 'translateY(30px)',
          opacity: 0,
          animation: 'fadeInUp 0.8s forwards 0.9s'
        }}>
          <Slider {...settings}>
            {imagesToShow.map((img, index) => (
              <div key={index} style={{ padding: '0 15px' }}>
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: 'perspective(1000px) rotateY(0deg)',
                  cursor: 'pointer',
                  height: '400px', // ارتفاع ثابت للصور
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  padding: '10px'
                }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  }}
                >
                  <img
                    src={img}
                    alt={`screenshot-${index}`}
                    style={{
                      width: 'auto',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* إضافة أنيميشن CSS في المكون */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.9); }
            to { transform: scale(1); }
          }
          .slick-slide {
            transition: all 0.5s ease;
          }
          .slick-active {
            transform: scale(0.95);
          }
          .slick-center {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ScreenshotSection;