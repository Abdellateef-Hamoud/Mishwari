import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ScreenshotSection from './ScreenshotSection';
import CoreFeatureSection from './CoreFeatureSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const StarRating = ({ rating, setRating }) => {
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '0px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} style={{ position: 'relative' }}>
            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '2.5rem',
                color: rating >= star ? '#ffc107' : '#e4e5e9',
                padding: 0,
                margin: 0,
                lineHeight: 1,
                transition: 'transform 0.2s',
                transform: rating === star ? 'scale(1.3)' : 'scale(1)'
              }}
              onClick={() => handleRating(star)}
            >
              ★
            </button>
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '-25px',
        width: '100%',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        التقييم: {rating} / 5
      </div>
    </div>
  );
};

const FeedbackModal = ({ show, onClose, onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0]);

  const questions = [
    "ما مدى سهولة استخدام التطبيق؟",
    "كيف تقيم واجهة التطبيق؟",
    "هل واجهت أي مشاكل تقنية؟",
    "ما مدى رضاك عن الخدمة؟",
    "هل تنصح الآخرين باستخدام التطبيق؟"
  ];

  const handleRating = (rating) => {
    const newRatings = [...ratings];
    newRatings[currentQuestion] = rating;
    setRatings(newRatings);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setRatings([0, 0, 0, 0, 0]);
    onClose();
  };

  const handleSubmit = () => {
    onSubmit(ratings);
    handleClose();
  };

  const isComplete = currentQuestion === questions.length - 1 && ratings[currentQuestion] > 0;
  const currentRating = ratings[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={`modal ${show ? 'show d-block' : ''}`} style={{
      backgroundColor: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(3px)'
    }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', margin: '20px auto' }}>
        <div className="modal-content" style={{
          borderRadius: '16px',
          border: 'none',
          boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
          backgroundColor: '#fff'
        }}>
          <div className="modal-header" style={{ borderBottom: 'none', padding: '20px', position: 'relative' }}>
            <h5 className="modal-title text-center w-100" style={{
              fontSize: '1.5rem',
              color: '#1c8c56',
              fontWeight: '700'
            }}>
              تقييم التطبيق
            </h5>
            <button
              type="button"
              className="btn-close position-absolute"
              onClick={handleClose}
              style={{ right: '20px', top: '20px', fontSize: '1rem' }}
            />
          </div>

          <div style={{ height: '8px', background: '#e9ecef', borderRadius: '4px', margin: '0 25px 15px' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: '#1c8c56',
              borderRadius: '4px',
              transition: 'width 0.3s ease'
            }} />
          </div>

          <div className="modal-body" style={{ padding: '0 25px 25px', minHeight: '300px' }}>
            <div className="text-center mb-4" style={{
              color: '#555',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              السؤال {currentQuestion + 1} من {questions.length}
            </div>

            <div className="mb-4">
              <h4 className="text-center" style={{
                fontSize: '1.3rem',
                marginBottom: '2rem',
                color: '#333',
                lineHeight: '1.5',
                fontWeight: '600'
              }}>
                {questions[currentQuestion]}
              </h4>

              <StarRating rating={currentRating} setRating={handleRating} />

              <div className="d-flex justify-content-between align-items-center mt-3 px-4">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: currentRating <= 2 ? '1.7rem' : '1.2rem',
                  fontWeight: currentRating <= 2 ? '800' : '400',
                  color: currentRating <= 2 ? '#dc3545' : '#6c757d',
                  transition: 'all 0.3s ease',
                  transform: currentRating <= 2 ? 'scale(1.15)' : 'scale(1)',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = currentRating <= 2 ? 'scale(1.15)' : 'scale(1)'}
                >
                  <span role="img" aria-label="سيء">😞</span> <span>سيء</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: currentRating >= 4 ? '1.7rem' : '1.2rem',
                  fontWeight: currentRating >= 4 ? '800' : '400',
                  color: currentRating >= 4 ? '#198754' : '#6c757d',
                  transition: 'all 0.3s ease',
                  transform: currentRating >= 4 ? 'scale(1.15)' : 'scale(1)',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = currentRating >= 4 ? 'scale(1.15)' : 'scale(1)'}
                >
                  <span>ممتاز</span> <span role="img" aria-label="ممتاز">😍</span>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer" style={{
            borderTop: 'none',
            padding: '15px 25px 25px',
            justifyContent: 'space-between'
          }}>
            {currentQuestion > 0 ? (
              <button
                className="btn btn-outline-secondary"
                onClick={handlePrevious}
                style={{
                  borderRadius: '25px',
                  padding: '8px 25px',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                السابق
              </button>
            ) : <div style={{ width: '120px' }}></div>}

            {currentQuestion < questions.length - 1 ? (
              <button
                className="btn btn-success"
                onClick={handleNext}
                disabled={currentRating === 0}
                style={{
                  borderRadius: '25px',
                  padding: '8px 25px',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                التالي
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={handleSubmit}
                disabled={!isComplete}
                style={{
                  borderRadius: '25px',
                  padding: '8px 25px',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                إرسال
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOpenFeedback = () => {
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  const handleSubmitFeedback = (ratings) => {
    console.log('تم إرسال التقييم:', ratings);
    handleCloseFeedback();
  };

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <Navbar onOpenFeedback={handleOpenFeedback} />
      <HeroSection />
      <ScreenshotSection />
      <CoreFeatureSection />
      <ContactForm />
      <Footer />

      <FeedbackModal
        show={showFeedback}
        onClose={handleCloseFeedback}
        onSubmit={handleSubmitFeedback}
      />
    </div>
  );
}

export default App;
