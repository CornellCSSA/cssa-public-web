import './Home.css'; // Importing from the styles folder
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { isLinkAvailable, resolveMedia } from '../../content/media';

export default function Home () {
  const navigate = useNavigate();
  const { home, guide } = useSiteContent();
  const heroImages = home.hero.slides;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="home-hero-background">
          {heroImages.map((image, index) => (
            <ImageWithLoader
              key={index}
              src={resolveMedia(image)}
              alt={`Cover ${index + 1}`}
              containerClassName={`hero-image-container ${index === currentImageIndex ? 'active' : ''}`}
              className="cover-img"
            />
          ))}
        </div>
        <div className="home-hero-content">
          <h1 className="hero-title-chinese">{home.hero.titleZh}</h1>
          <h2 className="hero-title-english">{home.hero.titleEn}</h2>
          <p className="hero-subtitle">{home.hero.subtitle}</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-title">
          <h1 className='about-title-text'>{home.about.heading}</h1>
        </div>
        <div className="about-content">
          <p className='about-content-text'>{home.about.text}</p>
        </div>
      </div>

      <div className="events-section">
        <div className="events-header">
          <h1 className='events-title-text'>{home.events.heading}</h1>
        </div>
        <div className="events-description">
          <p className='events-content-text'>{home.events.text}</p>
        </div>

        {/* Events Image Grid Section */}
        <div className="events-grid-section">
          <div className="events-grid">
            {home.events.highlights.map((event, index) => (
              <div key={index} className="event-card-container">
                <div className="event-card-inner">
                  {/* Front of the card */}
                  <div className="event-card-front">
                    <ImageWithLoader src={resolveMedia(event.image)} alt={event.title} className="event-image" />
                  </div>
                  {/* Back of the card */}
                  <div className="event-card-back">
                    <h3 className="event-card-title">{event.title}</h3>
                    {isLinkAvailable(event.link) ? (
                      <a href={event.link} className="event-card-button" target="_blank" rel="noopener noreferrer">
                        往期回顾
                      </a>
                    ) : (
                      <button className="event-card-button disabled" disabled>
                        敬请期待
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="events-button" onClick={() => navigate('/events')}>
          了解更多
        </button>
      </div>
      <div className="guide-section">
        <div className="guide-text">
          <h1 className='guide-text-title'>{home.guide.heading}</h1>
          <p className='guide-text-description'>{home.guide.text}</p>
          <a 
            href={resolveMedia(guide.file.url)}
            download={guide.file.fileName}
            className='guide-button'
          >
            点击下载
          </a>
        </div>
        <div className="guide-cover-wrapper">
          <ImageWithLoader 
            src={resolveMedia(guide.cover)} 
            alt="Guide Cover" 
            className="guide-cover" 
            containerClassName="guide-cover-container"
          />
        </div>
      </div>
    </div>
  );
};
